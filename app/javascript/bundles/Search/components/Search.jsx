import React, { Component } from 'react';
import axios from 'axios'

export default class Search extends Component {
  state = { term: '', results: []}

  handleChange = event => {
    const term = event.target.value
    axios.get(`/search.json?term=${term}`)
      .then((response) => {
        this.setState({ term, results: response.data });
      })
      .catch((error) => {
        console.log(error.response);
      })
  }

  render() {
    const { results, term } = this.state;
    return (
      <div>
        <label htmlFor="term">
          <h3>Find Location:</h3>
        </label>
        <input
          type="search"
          name="term"
          value={term}
          onChange={this.handleChange}
          autoComplete="off"
        />
        {results.length > 0 && term.length > 0 && (
          <div>
            {results.map((result, i) => {
              return (
                <p key={i}>
                  <a href={result.location}>{result.name}</a>
                </p>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}