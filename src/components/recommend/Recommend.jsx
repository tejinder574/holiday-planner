import React from "react";
import { useState } from "react";
import Destination1 from "../../assets/Destination1.jpg"
import Destination2 from "../../assets/Destination2.jpg";
import Destination3 from "../../assets/Destination3.jpg";
import Destination4 from "../../assets/Destination4.jpg";
import Destination5 from "../../assets/Destination5.jpg";
import Destination6 from "../../assets/Destination6.jpg";
import info1 from "../../assets/info1.png";
import info2 from "../../assets/info2.png";
import info3 from "../../assets/info3.png";
import "./RStyles.css";


function Recommend(){
    const data = [
      {
        image: Destination1,
        title: "Singapore",
        subTitle: "Singapore, officialy thr Republic of Singapore, is a",
        cost: "38,800",
        duration: "Approx 2 night trip",
      },
      {
        image: Destination2,
        title: "Thailand",
        subTitle: "Thailand is a Southeast Asia country. It's known for",
        cost: "54,200",
        duration: "Approx 2 night trip",
      },
      {
        image: Destination3,
        title: "Paris",
        subTitle: "Paris, France's capital, is a major European city and a",
        cost: "45,500",
        duration: "Approx 2 night trip",
      },
      {
        image: Destination4,
        title: "New Zealand",
        subTitle: "New Zealand is an island country in the",
        cost: "24,100",
        duration: "Approx 1 night trip",
      },
      {
        image: Destination5,
        title: "Bora Bora",
        subTitle: "Bora Bora is a small South Pacific island northwest of",
        cost: "95,400",
        duration: "Approx 2 night 2 day trip",
      },
      {
        image: Destination6,
        title: "London",
        subTitle: "London, the capital of England and the United",
        cost: "38,800",
        duration: "Approx 3 night 2 day trip",
      },
    ];

    const packages = [
        "The Weekend Break",
        "The Package Holiday",
        "The Group Tour",
        "Long Term Slow Travel",
    ];

    const[active,setActive]=useState(1);
    return(
        <div id="recommend">
            <div className="title">
                <h2>Recommended Holiday Destinations</h2>
            </div>

            <div className="packages">
                <ul>
                    {packages.map((pkg,index) =>{
                        return(
                            <li
                              className={active===index+1 ? "active" : ""}
                              onClick={()=>setActive(index+1)}
                            >
                                {pkg}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="destinations">
                {data.map((destination)=>{
                    return(
                        <div className="destination">
                            <img id="img-s" src={destination.image} alt="" />
                            <h3>{destination.title}</h3>
                            <p>{destination.subTitle}</p>
                            <div className="info">
                                <div className="services">
                                    <img src={info1} alt=""/>
                                    <img src={info2} alt=""/>
                                    <img src={info3} alt=""/>
                                </div>
                                <h4>{destination.cost}</h4>
                            </div>
                            <div className="distance">
                                <span>`1000 kms</span>
                                <span>{destination.duration}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default Recommend;