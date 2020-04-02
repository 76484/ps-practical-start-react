import React from "react";
import "./App.css";
import Header from "./Header";
import FeaturedHouse from "./FeaturedHouse";

class App extends React.Component {
  state = {
    allHouses: [],
    featuredHouse: null
  };

  componentDidMount() {
    this.fetchHouses();
  }

  fetchHouses = () => {
    fetch("/houses.json")
      .then(response => response.json())
      .then(houses => {
        this.allHouses = houses;
        this.setRandomFeaturedHouse();
      });
  };

  setRandomFeaturedHouse = () => {
    if (this.allHouses.length) {
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      const featuredHouse = this.allHouses[randomIndex];

      this.setState({ featuredHouse });
    }
  };

  render() {
    return (
      <div className="container">
        <Header subtitle="Providing houses world wide" />
        <FeaturedHouse house={this.state.featuredHouse} />
      </div>
    );
  }
}

export default App;
