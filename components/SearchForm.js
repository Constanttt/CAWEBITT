// Import Dependencies
import React, { Component } from "react";
import Select from 'react-select';

const options = [
  { value: 'the-irish-times', label: 'The Irish Times' },
  { value: 'business-insider', label: 'Business insider' },
  { value: 'axios', label: 'Axios' }
];

//
// Define SearchForm Class
//
export default class SearchForm extends Component {
  // constructor accepts props and initialises state
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
    };
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  //
  // an event handler for form submit
  //
  formSubmitted = event => {
    // Validate input value
    if (event.target.newsSource.value != "") {
      // setNewsSource is a function passed from parent (news page) via props
      // It is used as a way to pass the input value back up to the parent
      // This is called state lifting
      // see: https://reactjs.org/docs/lifting-state-up.html
      this.props.setNewsSource(event.target.newsSource.value);
    }
    // prevent page reload (prevent submit)
    event.preventDefault();
  };

  // Render the form
  render() {
    const { selectedOption } = this.state;
    return (
      <div>
        {/* Search Input */}
        <div id="search">
          <h3>Enter newsapi.org source</h3>
          {/* Note event handler */}
          <form onSubmit={this.formSubmitted}>
            {/* The input field */}
            <Select
            name="newsSource"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
            {/* Button click will trigger submit */}
            <button>Update News</button>
          </form>
        </div>
      </div>
    );
  }
}
