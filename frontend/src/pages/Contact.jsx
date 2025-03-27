import React from 'react';
import page_heading_1 from '../assets/img/page_heading_1.jpg';


function Contact( ) {
    return (
         <>
          
            <div>
                {/* Start Page Heading */}
                <section className="cs_page_heading cs_bg_filed cs_center cs_primary_bg" style={{ backgroundImage: `url(${page_heading_1})` }}>
                    <div className="container">
                        <h1 className="cs_white_color cs_semibold cs_white_color cs_mb_10 cs_fs_50">Contact</h1>
                        <ol className="breadcrumb cs_heading_font">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active">Contact</li>
                        </ol>
                    </div>
                </section>
                {/* End Page Heading */}
                {/* Start Contact */}
                <section>
                    <div className="cs_height_120 cs_height_lg_80" />
                    <div className="container">
                        <div className="row cs_gap_y_50">
                            <div className="col-lg-6">
                                <div className="cs_contact_desc">
                                    <h3 className="cs_fs_24 cs_mb_33">Contact Information</h3>
                                    <div className="cs_contact_info_grid">
                                        <div className="cs_iconbox cs_style_5">
                                            <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                                                <i className="fa-solid fa-phone-volume" /></div>
                                            <div className="cs_iconbox_info">
                                                <h3 className="cs_fs_18 cs_semibold cs_mb_2">Phone Number:</h3>
                                                {/* <a href="tel:+111(564)56825">+111 (564) 568 25</a><br /> */}
                                                <a href="tel:+918002781578">+91 8002781578</a>
                                            </div>
                                        </div>
                                        <div className="cs_iconbox cs_style_5">
                                            <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                                                <i className="fa-solid fa-envelope" /></div>
                                            <div className="cs_iconbox_info">
                                                <h3 className="cs_fs_18 cs_semibold cs_mb_2">Email Address:</h3>
                                                <a href="mailTo:techshahnawaz01@gmail.com">techshahnawaz01@gmail.com</a><br />
                                                {/* <a href="mailTo:criparneedhelp@gmail.com">criparneedhelp@gmail.com</a> */}
                                            </div>
                                        </div>
                                        <div className="cs_iconbox cs_style_5">
                                            <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                                                <i className="fa-solid fa-location-dot" /></div>
                                            <div className="cs_iconbox_info">
                                                <h3 className="cs_fs_18 cs_semibold cs_mb_2">Our Address:</h3>
                                                <p className="mb-0">422007  Nashik Maharashtra</p>
                                            </div>
                                        </div>
                                        <div className="cs_iconbox cs_style_5">
                                            <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                                                <i className="fa-solid fa-clock" /></div>
                                            <div className="cs_iconbox_info">
                                                <h3 className="cs_fs_18 cs_semibold cs_mb_2">Working Time:</h3>
                                                <p className="mb-0">Sunday to Friday :</p>
                                                <p className="mb-0">10 Am - 05PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cs_height_44 cs_height_lg_30" />
                                <div className="cs_social_desc">
                                    <h3 className="cs_fs_24 cs_semibold cs_mb_10">Follow The Social Media:</h3>
                                    <p className="cs_mb_22">Algae can quickly take over a Car Repair if not addressed promptly. Learn effective.</p>
                                    <div className="cs_social_btns cs_style_1">
                                        <a href="#" className="cs_center cs_accent_bg_light"><i className="fa-brands fa-facebook-f" /></a>
                                        <a href="#" className="cs_center cs_accent_bg_light"><i className="fa-brands fa-x-twitter" /></a>
                                        <a href="#" className="cs_center cs_accent_bg_light"><i className="fa-brands fa-whatsapp" /></a>
                                        <a href="#" className="cs_center cs_accent_bg_light"><i className="fa-brands fa-instagram" /></a>
                                        <a href="#" className="cs_center cs_accent_bg_light"><i className="fa-brands fa-linkedin-in" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="cs_form_wrapper cs_style_1 cs_accent_bg_light">
                                    <h3 className="cs_fs_24 cs_mb_33">Send Message</h3>
                                    <form className="row cs_row_gap_30 cs_gap_y_30">
                                        <div className="col-sm-6">
                                            <input type="text" name="name" placeholder="Your Name" className="cs_form_field cs_white_bg" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="email" name="email" placeholder="Email Address" className="cs_form_field cs_white_bg" />
                                        </div>
                                        <div className="col-sm-12">
                                            <input type="text" name="subject" placeholder="Subject" className="cs_form_field cs_white_bg" />
                                        </div>
                                        <div className="col-sm-12">
                                            <textarea name="massage" rows={5} placeholder="Massage" className="cs_form_field cs_white_bg" defaultValue={""} />
                                        </div>
                                        <div className="col-sm-12">
                                            <button type="submit" className="cs_btn cs_style_1 cs_radius_5">
                                                <span>Send Message</span>
                                                <span><i className="fa-solid fa-arrow-right-long" /></span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cs_height_120 cs_height_lg_80" />
                </section>
                {/* End Contact */}
                {/* Start Navigation Map */}
                <div className="cs_navigation_map wow fadeInUp">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100140.61575457298!2d73.72107817969032!3d19.991105340959415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0xcb07845d9d28215c!2sNashik%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1742903202917!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    
                </div>
                {/* End Navigation Map */}
            </div>
 
         </> 
    );
    
}
export default Contact;