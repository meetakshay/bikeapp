import React from "react";
// import bike from "file:///C:/Users/User/Downloads/image.svg"
// import elipse from "file:///C:/Users/User/Downloads/Ellipse%207.svg"
import elipse from "../images/Ellipse7.png";
import bike from "../images/bike.png";

const Main = ({ preorder, future }) => {
  return (
    <>
      <>
        <div className="elipse">
          <img src={elipse} alt="" />
        </div>
        <div className="middle">
          <div className="section-left">
            <p id="ride">LET'S RIDE THE</p>
            <h1 id="future">{future}</h1>
            <p id="simple">Simple and sleek design with users in mind.</p>
            <button id="pre-order">{preorder}</button>
          </div>
          <div className="section-right">
            <h1 id="ev">EV-B</h1>
            <img id="bike-image" src={bike} alt="Electric Scooty Image" />
            <div id="bike-features">
              <div>
                <h5>50 km/hr</h5>
                <p>speed</p>
              </div>
              <div>
                <h5>80 km</h5>
                <p>battery range</p>
              </div>
              <div>
                <h5>3.5hr</h5>
                <p>charging time</p>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Main;
