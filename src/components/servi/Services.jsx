import React from "react";
import service1 from "../../assets/services1.png";
import service2 from "../../assets/services2.png";
import service3 from "../../assets/services3.png";
import service4 from "../../assets/services4.png";
import "./SStyles.css";

function Services() {
  const data = [
    {
      key: 1,
      icon: service1,
      title: "Get Best Prices",
      subTitle:
        "Pay through our application and save thousands and get amazing rewards.",
    },
    {
      key: 2,
      icon: service2,
      title: "Covid Safe",
      subTitle:
        "We have all the curated hotels that have all the precaution for a covid safe environment.",
    },
    {
      key: 3,
      icon: service3,
      title: "Flexible Payment",
      subTitle:
        " Enjoy the flexible payment through our app and get rewards on every payment.",
    },
    {
      key: 4,
      icon: service4,
      title: "Find The Best Near You",
      subTitle:
        "Find the best hotels and places to visit near you in a single click.",
    },
  ];
  return (
    <div className="title">
      <h2>Our Services</h2>
      <div id="services">
        {data.map((service,index) => {
          return (
            <div className="service">
              <div className="icon">
                <img src={service.icon} alt="" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.subTitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
