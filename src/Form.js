import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {country: '', points: []};
  
      this.handleCountryChange = this.handleCountryChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleCountryChange(event) {
      this.setState({country: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();

        const defaultRateSi = 0.05
        const defaultRateIr = 0.01
        const queryString = `?country=${this.state.country}&rateSi=${defaultRateSi}0.05&rateIr=${defaultRateIr}`;
        const baseProdUrl = "https://coronavirus-sir-model-api.herokuapp.com/v1/sir_model";
        const baseLocalUrl = `http://localhost:4567/v1/sir_model`;

        const url = baseLocalUrl + queryString;
        axios.get(url, { 'Access-Control-Allow-Origin': true }).then(function(response) {
            debugger;
            this.setState({points: response.data.points})
        })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Country:
            <input type="text" value={this.state.country} onChange={this.handleCountryChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}

export default Form;
