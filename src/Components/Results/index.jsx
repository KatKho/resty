import React from 'react';
import './Results.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/acai.css'; 
function Results(props) {
    return (
      <section data-testid="results-data" >
        {props.loading ? 'Loading...' : <JSONPretty id="json-pretty" data={props.data}></JSONPretty>}
      </section>
    );
}

export default Results;
