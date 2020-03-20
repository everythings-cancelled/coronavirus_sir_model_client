import React, { useState } from 'react';

const GraphForm = props => {
  const [country, setCountry] = useState('');

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let params = {
      country: country,
      rateSi: 0.5,
      rateRi: 0.01,
      eons: 2
    };

    props.onSubmit(params);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="country">
        Country:
        <input id="country" type="text" value={country} onChange={handleCountryChange} />
      </label>

      <input type="submit" value="Submit" />
    </form>
  )
}

export default GraphForm;
