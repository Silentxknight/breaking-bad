import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    console.log({ dataFromSearchbar: this.state.term });
    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Serach Any Characters Name Of Breaking Bad</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              onClick={(e) => {
                console.log("Woo! You are writing something!");
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
