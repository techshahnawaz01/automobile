import React from "react";
import '../assets/css/style.css';
import Footerlogo from "../assets/img/footer_logo.svg";
// import payment_card from "../assets/img/payment_card.svg";
import footer_bg from "../assets/img/footer_bg.jpg";

export default function Footer() {
    return (
        <>
            {/* <!-- Start Footer --> */}
            <footer className="cs_footer cs_style_1 cs_bg_filed cs_heading_bg" data-src={footer_bg}>
                <div className="container">
                    <div className="cs_footer_newsletter cs_style_1">
                        <div className="cs_footer_newsletter_left cs_accent_bg cs_center">
                            <img src={Footerlogo} alt="Logo" className="wow fadeInLeft"/>
                        </div>
                        <div className="cs_footer_newsletter_right">
                            <h3 className="cs_fs_24 cs_semibold cs_white_color mb-0">Subscribe now to get latest updates</h3>
                            <form action="#" className="cs_footer_newsletter_form">
                                <input type="text" placeholder="Enter Your Email"/>
                                    <button className="cs_btn cs_style_1">
                                        <span>Subscribe</span>
                                    </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="cs_main_footer cs_white_color">
                    <div className="container">
                        <div className="cs_footer_row">
                            <div className="cs_footer_col">
                                <div className="cs_footer_widget">
                                    <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">About</h2>
                                    <div className="cs_footer_widget_seperator">
                                        <span className="cs_accent_bg"></span>
                                        <span className="cs_white_bg"></span>
                                        <span className="cs_white_bg"></span>
                                    </div>
                                    <div className="cs_text_widget">
                                        <p>Phosfluorescently transform out-of-the-box paradigms whereas accurate supply chains. Continually</p>
                                    </div>
                                    <div className="cs_social_btns cs_style_1">
                                        <a href="#" className="cs_social_btn cs_center">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                        <a href="#" className="cs_social_btn cs_center">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                        <a href="#" className="cs_social_btn cs_center">
                                            <i className="fa-brands fa-youtube"></i>
                                        </a>
                                        <a href="#" className="cs_social_btn cs_center">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="cs_footer_col">
                                <div className="cs_footer_widget">
                                    <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Explore</h2>
                                    <div className="cs_footer_widget_seperator">
                                        <span className="cs_accent_bg"></span>
                                        <span className="cs_white_bg"></span>
                                        <span className="cs_white_bg"></span>
                                    </div>
                                    <ul className="cs_footer_menu">
                                        <li>
                                            <a href='service-details'>Adult In Car Lessons</a>
                                        </li>
                                        <li>
                                            <a href='service-details'>Defensive Driving</a>
                                        </li>
                                        <li>
                                            <a href='service-details'>Defensive Driving</a>
                                        </li>
                                        <li>
                                            <a href='service-details'>Initial driving lesson</a>
                                        </li>
                                        <li>
                                            <a href='service-details'>Woman Education</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cs_footer_col">
                                <div className="cs_footer_widget">
                                    <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Contact Us</h2>
                                    <div className="cs_footer_widget_seperator">
                                        <span className="cs_accent_bg"></span>
                                        <span className="cs_white_bg"></span>
                                        <span className="cs_white_bg"></span>
                                    </div>
                                    <ul className="cs_footer_contact_list cs_mp_0">
                                        <li>
                                            <i className="fa-solid fa-location-dot cs_center"></i>
                                            India  422007 nashik Maharashtra
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-phone cs_center"></i>
                                            <a href="tel:+91 8002781578">+91 8002781578</a> <br/>
                                               
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-envelope cs_center"></i>
                                            <a href="mailto:techshahnawaz01@gmail.com">techshahnawaz01@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cs_footer_col">
                                <div className="cs_footer_widget">
                                    <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Working Hours:</h2>
                                    <div className="cs_footer_widget_seperator">
                                        <span className="cs_accent_bg"></span>
                                        <span className="cs_white_bg"></span>
                                        <span className="cs_white_bg"></span>
                                    </div>
                                    <ul className="cs_working_hours">
                                        <li>
                                            <span>Thu - Fri</span>
                                            <span>9:00 AM - 7:00 PM</span>
                                        </li>
                                        <li>
                                            <span>Mon - Wed</span>
                                            <span>8:00 AM - 10:00 PM</span>
                                        </li>
                                        <li>
                                            <span>Saturday</span>
                                            <span>7:00 AM - 9:00 PM</span>
                                        </li>
                                        <li>
                                            <span>Sunday</span>
                                            <span>Close</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs_footer_bottom cs_white_color">
                    <div className="container">
                        <div className="cs_footer_bottom_in">
                            <div className="cs_footer_copyright">
                                Copyright © 2025 <a href="#">techshahnawaz</a>. All Rights Reserved.
                            </div>
                            <div className="cs_footer_copyright">
                                Design And Develope by <a href="#">techshahnawaz</a> 
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            
        </>
    );
}
