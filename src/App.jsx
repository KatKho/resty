import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App() {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  const callApi = async (requestParams) => {
    setLoading(true);
    try {
      let config = {
        url: requestParams.url,
        method: requestParams.method,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      
      if (['POST', 'PUT'].includes(requestParams.method)) {
        config.data = JSON.parse(requestParams.data || '{}');
      }

      const response = await axios(config);

      setData(response.data);
      setRequestParams(requestParams);
    } catch (error) {
      console.error('There was a problem with the Axios request:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (requestParams.url && requestParams.method) {
      callApi(requestParams);
    }
  }, [requestParams]);
  
    return (
      <React.Fragment>
        <Header />
        <div data-testid="request-method">Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={setRequestParams} />
        <Results data={data} loading={loading} />
        <Footer  data-testid="footer"/>
      </React.Fragment>
    );
}

export default App;
