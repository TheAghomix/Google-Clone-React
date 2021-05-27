import React from "react";

import { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <input
        type="text"
        name="search"
        id=""
        onChange={(e) => {
          this.setState({
            text: e.target.value,
          });
          console.log(e.target.value);
        }}
      />
    );
  }
}
export default SearchBar;
