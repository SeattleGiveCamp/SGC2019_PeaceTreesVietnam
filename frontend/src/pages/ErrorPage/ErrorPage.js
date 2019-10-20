import React from "react";

export default class Error extends React.Component {
  state = {};

  render() {
    return (
      <div style={{position: "relative", height: "50vh", }}>
      <h1>Not Found</h1>
        <p style={{fontSize: "20px"}}>Sorry! We couldn't find the page you're looking for.</p>
      </div>
    );
  }
}
