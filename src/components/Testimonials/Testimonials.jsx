import React from "react";
import "./TStyles.css";
import avatarImage from "../../assets/teamwork.png";
function Testimonials() {
    return (
        <div id="testimonials">
            <div className="title">
                <h2>Happy Customers</h2>
            </div>
            <div className="testimonials">
                <div className="testimonial">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                        asperiores eaque.
                    </p>
                    <div className="info">
                        <img src={avatarImage} alt="" />
                        <div className="details">
                            <h4>Ananya Verma</h4>
                            <span>CEO - Web Solutions</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                        asperiores eaque.
                    </p>
                    <div className="info">
                        <img src={avatarImage} alt="" />
                        <div className="details">
                            <h4>Anamika</h4>
                            <span>Cyber Analyst</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                        asperiores eaque.
                    </p>
                    <div className="info">
                        <img src={avatarImage} alt="" />
                        <div className="details">
                            <h4>Tejinder Singh</h4>
                            <span>Mechanical Engineer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Testimonials;