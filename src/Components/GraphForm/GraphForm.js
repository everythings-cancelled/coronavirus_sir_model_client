import React, { useState } from 'react';

const GraphForm = props => {
  const initialValues = {
    country: 'USA',
    rateSi: .5,
    rateRi: .01,
    eons: 5
  };
  const [formVal, setFormVal] = useState(initialValues);

  const handleValueChange = (key, val) => {
    const newVals = {...formVal};
    newVals[key] = val;
    setFormVal(newVals);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(formVal);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="country">Country: </label>
      <input id="country" type="text" value={formVal.country} onChange={e => handleValueChange('country', e.target.value)} />

      <label htmlFor="rateSi">Rate Si: </label>
      <input id="rateSi" type="text" value={formVal.rateSi} onChange={e => handleValueChange('rateSi', e.target.value)} />

      <label htmlFor="rateRi">Rate Ri: </label>
      <input id="rateRi" type="text" value={formVal.rateRi} onChange={e => handleValueChange('rateRi', e.target.value)} />

      <label htmlFor="eons">Eons: </label>
      <input id="eons" type="text" value={formVal.eons} onChange={e => handleValueChange('eons', e.target.value)} />

      <input type="submit" value="Submit" />
    </form>
  )
}

export default GraphForm;
