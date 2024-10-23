import React, { useEffect, useState } from 'react';
import docConfig from '../../../public/docs/doc-config.json'; // Direkter Import der JSON-Datei
import './Body.css';

function Body() {
  const [docusInfo, setDocusInfo] = useState([]);

  useEffect(() => {
    // Da wir die JSON-Datei direkt importiert haben, müssen wir sie nicht mehr über fetch abrufen
    const docuFetches = docConfig.docus.map((docu) => {
      return fetch(`/docs/${docu.path}/info.json`)
        .then((response) => {
          if (!response.ok) {
            return response.text().then(text => { throw new Error(text); });
          }
          return response.json();
        })
        .then((info) => ({
          name: docu.name,
          path: docu.path,
          ...info
        }));
    });

    Promise.all(docuFetches)
      .then((allDocusInfo) => {
        setDocusInfo(allDocusInfo);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div className='card-container'>
      <p>hi</p>
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
