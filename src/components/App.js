// import axios, { Axios } from "axios";
import React from "react";
import breakingBad from "../api/breakingBad";
import DeatailsCard from "./DetailsCard";
import SearchBar from "./SearchBar";

// const App = () => {

// };

class App extends React.Component {
  state = { img: "", chars: [] };

  onSearchSubmit = async (term) => {
    term = "W";
    console.log("Searching for: " + term);
    // https://pokeapi.co/api/v2/pokemon/pikachu
    const response = await breakingBad
      // .get("https://pokeapi.co/api/v2/pokemon/pikachu")
      .get("/characters", {
        params: { name: term },
      });

    this.setState({ chars: response.data });
    // .then((data) => {
    //   console.log(data);
    //   console.log({ showingUrl: data.data[0]["img"] });
    //   this.setState({ img: data.data[0]["img"] });
    // })
    // .catch((err) => {
    //   console.log(err);
    //   this.setState({
    //     img: "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-p%C3%A1gina-no-encontrada-error-con-efecto-de-falla-en-la-pantalla-ilustraci%C3%B3n-vectorial-para-s.jpg",
    //   });
    //   console.log("not found");
    // });
  };
  // componentDidMount() {
  //   this.onSearchSubmit("W");
  // }

  // async onSearchSubmit(term) {
  //   console.log("Searching for: " + term);
  //   // https://pokeapi.co/api/v2/pokemon/pikachu
  //   const responseData = await axios
  //     // .get("https://pokeapi.co/api/v2/pokemon/pikachu")
  //     .get("https://www.breakingbadapi.com/api/characters", {
  //       params: { name: term },
  //     });
  //   this.setState({ chars: responseData.data });
  // }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {/* <img src={this.state.img} /> */}
        Found:{this.state.chars.length}
        <DeatailsCard details={this.state.chars} />
      </div>
    );
  }
}

export default App;
