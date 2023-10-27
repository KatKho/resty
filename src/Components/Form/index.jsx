import { useState } from 'react';
import './Form.scss';

function Form(props) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [jsonData, setJsonData] = useState(''); 
  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url,
      data: jsonData 
      
    };
    props.handleApiCall(formData); 
    setUrl(''); 
    setJsonData(''); 
  };

  return (
    <>
      <form data-testid="form" onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name='url' type='text' value={url} onChange={(e) => setUrl(e.target.value)} />
          <button type="submit">GO!</button>
        </label>
        <div className="methods">
          {['GET', 'POST', 'PUT', 'DELETE'].map((item) => (
            <button type="button" key={item} id={item} className={method === item ? 'active' : ''} onClick={() => setMethod(item)}>{item}</button>
          ))}
        </div>
        <div>
        {(method === 'POST' || method === 'PUT') && (
          <textarea value={jsonData} onChange={(e) => setJsonData(e.target.value)} placeholder="Enter JSON data here"></textarea>
        )}
        </div>
      </form>
    </>
  );
}

export default Form;
