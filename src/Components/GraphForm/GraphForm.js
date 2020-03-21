import React, { useState } from 'react';

const GraphForm = props => {
  const initialValues = {
    country: 'USA',
    rateSi: .5,
    rateRi: .01,
    eons: 5
  };
  const [params, setFormVal] = useState(initialValues);

  const handleValueChange = (key, val) => {
    const newVals = {...params};
    newVals[key] = val;
    setFormVal(newVals);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(params);
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="country">Country: </label>
      <input id="country" type="text" value={params.country || ''} onChange={e => handleValueChange('country', e.target.value)} />

      <label htmlFor="rateSi">Rate Si: </label>
      <input id="rateSi" type="text" value={params.rateSi || ''} onChange={e => handleValueChange('rateSi', e.target.value)} />

      <label htmlFor="rateRi">Rate Ri: </label>
      <input id="rateRi" type="text" value={params.rateRi || ''} onChange={e => handleValueChange('rateRi', e.target.value)} />

      <label htmlFor="eons">Eons: </label>
      <input id="eons" type="text" value={params.eons || ''} onChange={e => handleValueChange('eons', e.target.value)} />

      <input type="submit" value="Submit" />
    </form>
  )
}

export default GraphForm;
