import React from 'react';
import GraphForm from '../../Components/GraphForm/GraphForm';
import './Main.scss';

const Main = () => {
  const url = 'https://coronavirus-sir-model-api.herokuapp.com/v1/sir_model';

  const fetchData = params => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(params)
    })
    .then(res => res.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="Main">
      <h1>Coronavirus SIR</h1>
      <GraphForm onSubmit={fetchData} />
    </div>
  )
}

export default Main;
