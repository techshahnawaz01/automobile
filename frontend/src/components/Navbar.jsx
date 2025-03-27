import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/img/logo.svg';
import Wheel from '../assets/img/icons/wheel.svg';
import Preloader from '../assets/img/preloader_logo.svg';
import Logoshapepattern from '../assets/img/logo_shape_pattern.svg';
 


export default function Navbar() {
    return (
        <>
            {/* <!-- Start Preloader --> */}
            {/* <div className="cs_center cs_heading_bg" id="preloader">
                <div className="preloader-inner">
                    <div className="spinner">
                        <img src={Preloader} alt="img" />
                        <img src={Wheel} alt="img" className="wheel" />
                    </div>
                    <div className="loading-text">
                        <img src={Logo} alt="img" />
                    </div>
                </div>
            </div> */}
            {/* <!-- End Preloader -->
                <!-- Start Header Section --> */}
            <header className="cs_site_header cs_style_1 cs_heading_color cs_sticky_header">
                <div className="cs_top_header">
                    <div className="container-fluid">
                        <div className="cs_top_header_in">
                            <div className="cs_top_header_left">
                                <ul className="cs_header_contact_list cs_mp_0">
                                    <li>
                                        <i className="fa-solid fa-phone-volume"></i>
                                        <a href="tel:+91 8002781578">+91 8002781578</a>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-envelope"></i>
                                        <a href="mailto:techshahnawaz01@gmail.com">techshahnawaz01@gmail.com</a>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-location-dot"></i>
                                        <span>India - Nashik Maharashtra</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="cs_top_header_right">
                                <div className="cs_header_social_links_wrap">
                                    <div className="cs_header_social_links">
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
                        </div>
                    </div>
                </div>
                <div className="cs_main_header">
                    <div className="container-fluid">
                        <div className="cs_main_header_in">
                            <div className="cs_main_header_left">
                                <div className="cs_logo_wrap">
                                    <a className='cs_site_branding' href='/'>
                                        <img src={Logo} alt="Logo" />
                                    </a>
                                    <div className="cs_logo_bg_shape cs_accent_color">
                                        <svg width="509" height="141" viewBox="0 0 509 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M74 0H487L508.5 70.5L473.5 141H74V0Z" fill="currentColor" />
                                            <path d="M54 141H472.5L488.5 70.5L443.5 0H54V141Z" fill="white" />
                                            <path d="M0 0H443L464.5 70.5L443 141H0V0Z" fill="currentColor" />
                                        </svg>
                                        <img src={Logoshapepattern} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="cs_main_header_center">
                                <div className="cs_nav cs_fs_18 cs_semibold cs_heading_color cs_heading_font">
                                    <div className="cs_nav_list_wrap">
                                        <ul className="cs_nav_list">
                                            <li className="menu-item">
                                                <Link to="/">Home</Link>
                                               
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to='/services'>Services</Link>
                                                <ul>
                                                    <li><Link to='/services'>Services</Link></li>
                                                    <li><Link to='/service-details'>Service Details</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to='/portfolio'>Portfolio</Link>
                                                <ul>
                                                    <li><Link to='/portfolio'>Portfolio</Link></li>
                                                    <li><Link to='/portfolio-details'>Portfolio Details</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="/team">Team</Link>
                                                <ul>
                                                    <li><Link to='/team'>Team</Link></li>
                                                    <li><Link to='/team-details'>Team Details</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to='/about'>About</Link></li>
                                            <li className="menu-item-has-children">
                                                <Link to='/blog'>News</Link>
                                                <ul>
                                                    <li><Link to='/blog'>Blogs</Link></li>
                                                    <li><Link to='/blog-details'>Blog Details</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to='/contact'>Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="cs_main_header_right">
                                <div className="position-relative d-flex">
                                    <button className="cs_circle_btn cs_center cs_search_tobble_btn" type="button">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                    <div className="cs_header_search_wrap">
                                        <form action="#" className="cs_header_search">
                                            <input type="text" className="cs_header_search_input" placeholder="Search For Anything" />
                                            <button className="cs_header_search_btn cs_center">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <a className='cs_btn cs_style_1' href='/contact'>
                                    <span>Get a Quote</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="cs_site_header_spacing_140"></div>
            {/* <!-- End Header Section --> */}
        </>
    );

};
