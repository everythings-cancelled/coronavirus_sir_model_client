import React, { useState, useEffect } from 'react';
import GraphForm from '../../Components/GraphForm/GraphForm';
import InfectionChart from '../../Components/InfectionChart/InfectionChart';
import './Main.scss';

const Main = () => {
  const url = 'https://coronavirus-sir-model-api.herokuapp.com/v1/sir_model';
  const [fetching, setFetching] = useState(false);
  const [params, setParams] = useState({});
  const [data, setData] = useState({});

  useEffect(() => {
    if (fetching) {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(params)
      })
      .then(res => res.json())
      .then(result => {
        console.log('success', result);
        setFetching(false);
        setData({
          ...result,
          hospitalCapacity: result.population / 10000 * result.hospitalBedsPer10000People
        });
      })
      .catch((error) => setFetching(false));
    }
  }, [fetching])

  const handleSubmit = (formValues) => {
    setFetching(true);
    setParams(formValues);
  }

  return (
    <div className="Main">
      <h1>Coronavirus SIR</h1>
      <GraphForm handleSubmit={handleSubmit} />

      {data && data.country && (
        <div>
          <InfectionChart
            country={data.country}
            dataPoints={data.points}
            hospitalCapacity={data.hospitalCapacity}
          />
          <p>Country: {data.country}</p>
          <p>Population: {data.population}</p>
          <p>Hospital Bed available: {data.hospitalCapacity}</p>
        </div>
      )}
    </div>
  )
}

export default Main;
