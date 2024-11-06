import React, { useEffect, useState } from 'react';
import './Body.css';
import {
  Box,
  Container,
  TextField,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Typography,
  Chip,
  Avatar,
  Grid2,
  IconButton,
  CircularProgress,
  Alert,
} from '@mui/material';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

const keywordColors = [
  'default',
  'primary',
  'secondary',
  'success',
  'error',
  'warning',
  'info',
];

function Body() {
  const [docs, setDocs] = useState([]);
  const [filteredDocs, setFilteredDocs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedKeyword, setSelectedKeyword] = useState('');

  const keywords = Array.from(new Set(docs.flatMap(doc => doc.keywords)));
  const keywordColorMap = {};
  const docstring = '/docs/'
  const logoString = 'logo.png'
  keywords.forEach((keyword, index) => {
    keywordColorMap[keyword] = keywordColors[index % keywordColors.length];
  });

  const BE_IP = import.meta.env.VITE_BE_IP;
  const BE_PORT = import.meta.env.VITE_BE_PORT;
  const API_URL = `${BE_IP}:${BE_PORT}`;

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const response = await fetch(`${API_URL}/api/languages`);
        if (!response.ok) {
          throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }
        const data = await response.json();

        // Sort the documents alphabetically by name
        const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));

        setDocs(sortedData);
        setFilteredDocs(sortedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDocs();
  }, []);

  useEffect(() => {
    let filtered = docs;

    if (searchTerm) {
      filtered = filtered.filter(doc =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (doc.description && doc.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedKeyword) {
      filtered = filtered.filter(doc => doc.keywords.includes(selectedKeyword));
    }

    setFilteredDocs(filtered);
  }, [searchTerm, selectedKeyword, docs]);

  if (loading) {
    return (
      <Container maxWidth="md">
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md">
        <Box Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <Alert severity="error">Fehler bitte Kontaktieren sie bichlerbastian@gmail.com.</Alert>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ paddingY: { xs: 2, md: 4 } }}>
      <Grid2 container spacing={4} marginBottom={4}>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Suche"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <TextField
            select
            fullWidth
            label="Kategorie"
            variant="outlined"
            value={selectedKeyword}
            onChange={(e) => setSelectedKeyword(e.target.value)}
            sx={{ width: { sm: '80%' } }}
          >
            <MenuItem value="">
              <em>Alle Kategorien</em>
            </MenuItem>
            {keywords.map((keyword, index) => (
              <MenuItem key={index} value={keyword}>
                {keyword}
              </MenuItem>
            ))}
          </TextField>
        </Grid2>
      </Grid2>

      {filteredDocs.length > 0 ? (
        <List>
          {filteredDocs.map((doc) => (
            <ListItem
              key={doc.id}
              alignItems="flex-start"
              sx={{
                borderBottom: '1px solid #ddd',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                position: 'relative',
                paddingY: 2,
              }}
            >
              {doc.picturepath && (
                <Box
                  mb={{ xs: 2, sm: 0 }}
                  mr={{ sm: 2 }}
                  display="flex"
                  justifyContent="center"
                >
                  <Avatar
                    variant="rounded"
                    src={docstring + doc.picturepath + logoString}
                    alt={doc.name}
                    sx={{
                      width: { xs: 80, sm: 100 },
                      height: { xs: 80, sm: 100 },
                    }}
                  />
                </Box>
              )}

              <Box>
                <Typography variant="h6" component="div">
                  {doc.name}
                </Typography>


                <Box>
                  <Typography
                    component="div"
                    variant="body2"
                    color="textPrimary"
                    sx={{ marginBottom: 1 }}
                  >
                    {doc.description}
                  </Typography>
                  <Box mb={1}>
                    {doc.keywords.map((keyword, idx) => (
                      <Chip
                        key={idx}
                        label={keyword}
                        size="small"
                        color={keywordColorMap[keyword]}
                        sx={{
                          marginRight: '5px',
                          marginBottom: '5px',
                          backgroundColor: keywordColorMap[keyword] === 'default' ? '#e0e0e0' : undefined,
                        }}
                      />
                    ))}
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Version:</strong> {doc.version} | <strong>Autor:</strong> {doc.creator} | <strong>Letztes Update:</strong> {new Date(doc.updated_at).toLocaleDateString()}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  position: { sm: 'absolute' },
                  right: { sm: '10px' },
                  bottom: { sm: '10px' },

                }}
              >
                <IconButton href={docstring + doc.filepath} target="_blank" color='primary'
                  rel="noopener noreferrer">
                  <TextSnippetIcon />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="h6">Keine Dokumente gefunden.</Typography>
      )}
    </Container>
  );
}

export default Body;
