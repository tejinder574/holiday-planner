import React from "react";
import './HStyles.css';

import Video from '../../assets/videobg.mp4';

function Hero(){
    return (
      <div id="jumbotron jumbotron-fluid">
        <video autoPlay loop muted id='video'>
          <source src={Video} type='video/mp4' />
        </video>
        <div className="overlay"></div>
        <div className="content">
          <div className="title">
            <h1>TRAVEL TO EXPLORE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              natus, enim ipsam magnam odit deserunt itaque? Minima earum velit
              tenetur!
            </p>
          </div>
          <div className="search">
            <div className="container">
              <label>Where you want to go</label>
              <input type="text" placeholder="Search Your location" />
            </div>
            <div className="container">
              <label>Check-in</label>
              <input type="date" />
            </div>
            <div className="container">
              <label>Check-out</label>
              <input type="date" />
            </div>
            <button>Explore Now</button>
          </div>
        </div>
      </div>
    );
}

export default Hero;