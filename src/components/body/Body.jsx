import React, { useEffect, useState } from 'react';
import './Body.css';

function Body() {
  const [docusInfo, setDocusInfo] = useState([]);

  useEffect(() => {
    // Erster Fetch: Lade die doc-config.json
    fetch('/docs/doc-config.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const docuFetches = data.docus.map((docu) => {
          // Zweiter Fetch: Lade die info.json für jedes Docu
          return fetch(`/docs/${docu.path}/info.json`)
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then((info) => ({
              name: docu.name,
              path: docu.path,
              ...info
            }));
        });

        // Warte auf alle Fetches und speichere die Ergebnisse
        return Promise.all(docuFetches);
      })
      .then((allDocusInfo) => {
        setDocusInfo(allDocusInfo);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
  <div className='card-container'>
    {docusInfo.map((docu, index) => (
      <div key={index} className="card">
        <div className="card-content">
          <h2>{docu.title}</h2>
          <p>{docu.description}</p>
          <p><strong>Version:</strong> {docu.version}</p>
          <p><strong>Author:</strong> {docu.author}</p>
          <p><strong>Last Update:</strong> {docu.lastUpdate}</p>
        </div>
        <a className='read_docu' href={docu.file} target="_blank" rel="noopener noreferrer">Read Documentation</a>
      </div>
    ))}
  </div>
);

}

export default Body;
