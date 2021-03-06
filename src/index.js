import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  //below, we've initialized a state without using a constructor
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    //below we're using the browser's API and extracting info from it
    // more info : https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
    //The getCurrentPosition() function takes 2 callback arguments, first is for success & 2nd is for errors
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <div>Loading...</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
