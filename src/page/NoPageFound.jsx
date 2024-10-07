import { Box, Typography, Button } from "@mui/material";

export default function NoPageFound() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#f4f6f8', // Slight grey background for contrast
                textAlign: 'center',
                padding: 2
            }}
        >
            <Typography variant="h1" color="primary" gutterBottom>
                404
            </Typography>
            <Typography variant="h5" gutterBottom>
                Seite nicht gefunden
            </Typography>
            <Typography variant="body1" color="textSecondary">
                Die Seite, die Sie suchen, scheint nicht zu existieren.
            </Typography>
            <Button variant="contained" sx={{marginTop: '50px'}} color="primary" href="/">
                Zurück zur Startseite
            </Button>
        </Box>
    );
}
