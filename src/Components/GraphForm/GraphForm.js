import React, { useState } from 'react';
import { Form, Row, StyledButton, StyledInput } from './styled';
import DropDownList from 'Components/DropDownList/DropDownList';

const GraphForm = props => {
    const initialValues = {
        rateSi: 0.5,
        rateRi: 0.01,
        eons: 15
    };
    const [params, setFormVal] = useState(initialValues);
    const [country, setCountry] = useState('');

    const handleValueChange = (key, val) => {
        const newVals = { ...params };
        newVals[key] = val;
        setFormVal(newVals);
    };

    const onSubmit = e => {
        console.log(country.label);
        e.preventDefault();
        params.country = country.label;
        props.handleSubmit(params);
    };

    return (
        <Form onSubmit={onSubmit}>
            <Row>
                <label htmlFor='country'>Country: </label>
                <DropDownList setCountry={setCountry} />
            </Row>
            <Row>
                <label htmlFor='rateSi'>Rate Si: </label>
                <StyledInput
                    id='rateSi'
                    type='text'
                    value={params.rateSi || ''}
                    onChange={e => handleValueChange('rateSi', e.target.value)}
                />
            </Row>
            <Row>
                <label htmlFor='rateRi'>Rate Ri: </label>
                <StyledInput
                    id='rateRi'
                    type='text'
                    value={params.rateRi || ''}
                    onChange={e => handleValueChange('rateRi', e.target.value)}
                />
            </Row>
            <Row>
                <label htmlFor='eons'>Eons: </label>
                <StyledInput
                    id='eons'
                    type='text'
                    value={params.eons || ''}
                    onChange={e => handleValueChange('eons', e.target.value)}
                />
            </Row>

            <StyledButton type='submit' value='Submit' />
        </Form>
    );
};

export default GraphForm;
