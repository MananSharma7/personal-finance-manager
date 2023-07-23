import React from "react";

const Footer = () => {
  return (
    <div className="ui container" style={{
      position: "relative",
      left: 0,
      bottom: 0
    }}>
      <hr />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p style={{ fontSize: "20px" }}>
          Made by
          <a href="https://github.com/MananSharma7"> Manan Sharma</a>
          <i className="github square icon"></i>
        </p>
      </div>
    </div>
  );
}

export default Footer;