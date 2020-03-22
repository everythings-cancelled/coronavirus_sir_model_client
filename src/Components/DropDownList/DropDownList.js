import React from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

class DropDownList extends React.Component {
    constructor(props) {
        super(props);

        this.options = countryList().getData();

        this.state = {
            options: this.options,
            value: null
        };
    }

    changeHandler = value => {
        this.setState({ value });
        this.props.setCountry(value);
    };

    render() {
        const { options } = this.state;

        return (
            <Select
                styles={{
                    container: provided => ({
                    ...provided,
                    width: 300,
                    fontSize: '16px'
                  })}}
                isSearchable
                placeholder='Search Country...'
                options={options}
                value={this.state.value}
                onChange={this.changeHandler}
            />
        );
    }
}

export default DropDownList;
