import React from 'react';
import './History.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/acai.css'; 

function History({ history, onClick, displayedData }) {
    return (
      <div className="history">
        <h2>API Call History</h2>
        <ul>
          {history.map((entry, index) => (
            <li key={index} onClick={() => onClick(entry)}>
              <span>{entry.method}</span><span>{entry.url}</span>
            </li>
          ))}
        </ul>
        {displayedData && (
          <div>
            <h3>Selected History Data:</h3>
            <JSONPretty id="json-pretty" data={JSON.stringify(displayedData, null, 2)}></JSONPretty>
          </div>
        )}
      </div>
    );
}

  

export default History;
