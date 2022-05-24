import React from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component {
  //below, we've initialized a state without using a constructor
  state = { lat: null };

  render() {
    //below we're using the browser's API and extracting info from it
    // more info : https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
    //The getCurrentPosition() function takes 2 callback arguments, first is for success & 2nd is for errors
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
    return <div>Latitute: {this.state.lat}</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
