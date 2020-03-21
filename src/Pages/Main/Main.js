import React from 'react';
import GraphForm from '../../Components/GraphForm/GraphForm';
import InfectionChart from '../../Components/InfectionChart/InfectionChart';
import './Main.scss';

const Main = () => {
  const url = 'https://coronavirus-sir-model-api.herokuapp.com/v1/sir_model';
  let data = {};

  const fetchData = params => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(params)
    })
    .then(res => res.json())
    .then(result => {
      console.log('Success:', result);
      data = result;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="Main">
      <h1>Coronavirus SIR</h1>
      <GraphForm onSubmit={fetchData} />
      <InfectionChart />
    </div>
  )
}

export default Main;
