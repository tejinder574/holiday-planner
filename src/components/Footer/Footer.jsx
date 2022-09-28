import React from "react";
import "./NFooter.css";

function Footer() {
    const quickLinks = [
        "About Us",
        "Destinations",
        "Latest Blog",
        "Our Team",
        "Contact Us",
    ];
    const userdetails = [
        "hello customer 1",
        "good morning",
        "my name",
        "username",
    ];
    const supportLinks = [
        "Customer Support",
        "Privacy Policy",
        "Terms & Condition",
        "Forum",
        "Tour Guide",
    ];
    return (
        <div className="Container">
            <div className="upper-footer">
                <div className="col">
                    <div className="brand">
                        <div className="logo">
        
                        </div>
                        +.0
                        
                    </div>
                    <ul>
                        <li>
                            <span> +0123456789 </span>
                        </li>
                        <li>
                            <span>xyz@gmail.com</span>
                        </li>
                        <li>
                            <span>www.youtube.com</span>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h2>Quick Links</h2>
                </div>
                <div className="col">
                    <h2>Support</h2>
                </div>
                <div className="col">
                    <h2>Newsletter</h2>
                    <div className="newsletter">
                        <input className='input'id="txt-color" type="text" placeholder="Your Email"/>
                        <input id="btn" type="button" value="Subscribe Me" />

                    </div>
                </div>
            </div>
            <div className="lower-footer">
                <span>
                    Copyright &copy; Travel. Designed by AVTTAK.
                </span>
            </div>
        </div>
    );
}
export default Footer;