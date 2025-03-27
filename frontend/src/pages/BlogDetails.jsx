import React from "react";
import page_heading_1 from "../assets/img/page_heading_1.jpg";
import post_img_10 from "../assets/img/post_img_10.jpg";
import quote_1 from "../assets/img/quote_1.svg";
import post_img_11 from "../assets/img/post_img_11.jpg";
import post_img_12 from "../assets/img/post_img_12.jpg";
import avatar_9 from "../assets/img/avatar_9.jpg";
import avatar_10 from "../assets/img/avatar_10.jpg";
import avatar_11 from "../assets/img/avatar_11.jpg";
import recent_post_3 from "../assets/img/recent_post_3.jpg";
import recent_post_4 from "../assets/img/recent_post_4.jpg";
import recent_post_5 from "../assets/img/recent_post_5.jpg";




function BlogDetails() {
  return (
    < >
         
          <div>
              {/* Start Page Heading */}
              <section className="cs_page_heading cs_bg_filed cs_center cs_primary_bg" style={{ backgroundImage: `url(${page_heading_1})` }}>
                  <div className="container">
                      <h1 className="cs_white_color cs_semibold cs_white_color cs_mb_10 cs_fs_50">Blog Details</h1>
                      <ol className="breadcrumb cs_heading_font">
                          <li className="breadcrumb-item"><a href="/">Home</a></li>
                          <li className="breadcrumb-item active">Blog Details</li>
                      </ol>
                  </div>
              </section>
              {/* End Page Heading */}
              {/* Start Blog Details */}
              <section>
                  <div className="cs_height_120 cs_height_lg_80" />
                  <div className="container">
                      <div className="row cs_row_gap_30 cs_gap_y_60">
                          <div className="col-xl-8 col-lg-7">
                              <div className="cs_post_details">
                                  <img src={post_img_10} alt="Post Banner" />
                                  <div className="cs_post_meta_wrapper cs_mb_20">
                                      <div className="cs_post_meta">
                                          <span className="cs_accent_color"><i className="fa-regular fa-calendar-days" /></span>
                                          <span className="cs_heading_color">10 Oct, 2024</span>
                                      </div>
                                      <div className="cs_post_meta">
                                          <span className="cs_accent_color"><i className="fa-regular fa-comments" /></span>
                                          <span className="cs_heading_color">02 Comments</span>
                                      </div>
                                      <div className="cs_post_meta">
                                          <span className="cs_accent_color"><i className="fa-regular fa-user" /></span>
                                          <span className="cs_heading_color">Admin</span>
                                      </div>
                                  </div>
                                  <h2>Reviving Rides, One Car at a Time</h2>
                                  <p>Visit our shop as soon as possible for a diagnostic test to determine the issue sounds, longer stopping distances, or a soft brake pedal are common signs that your brakes need attention engine crank, dim lights, and needing frequent jump starts are typical signs that your battery may need replacement.</p>
                                  <p>Repair times vary depending on the service, but most standard repairs are completed within a few hours provide a detailed estimate before any work begins.</p>
                                  <blockquote>
                                      <img src={quote_1} alt="Quote Image" />
                                      Repair times vary depending on the service, but most standard repairs are completed within a few hours.</blockquote>
                                  <h2>Where Cars Get the Care They Deserve</h2>
                                  <p>Repair times vary depending on the service. We provide estimates before work begins we offer a [specific time frame kinds warranty on parts and labor for most services service all makes and models, including both domestic and foreign vehicles
                                      we accept walk-ins, scheduling an appointment ensures faster service.</p>
                                  <p>We service all makes and models, including both domestic and foreign vehicles standard repairs can be completed any within a day, but it varies depending on the complexity.</p>
                                  <div className="row">
                                      <div className="col-md-6">
                                          <img src={post_img_11} alt="Post Image" />
                                      </div>
                                      <div className="col-md-6">
                                          <img src={post_img_12} alt="Post Image" />
                                      </div>
                                  </div>
                                  <p>You can get an estimate by visiting our shop, calling us, or filling out the online form with details about your car’s issue we offer emergency repair services to get you back on the road as quickly as possible we offer a warranty on all parts and kind labor to ensure your peace of mind.</p>
                              </div>
                              <div className="cs_post_share_wrapper">
                                  <div className="cs_post_tags cs_style_1">
                                      <h3 className="cs_fs_24 cs_semibold">Tags:</h3>
                                      <div className="cs_tags_links cs_fs_14 cs_semibold cs_heading_font">
                                          <a href="#" className="cs_tag_link cs_accent_bg_light">Services</a>
                                          <a href="#" className="cs_tag_link cs_accent_bg_light">Auto Parts</a>
                                          <a href="#" className="cs_tag_link cs_accent_bg_light">Repairs</a>
                                      </div>
                                  </div>
                                  <div className="cs_post_socials">
                                      <h3 className="cs_fs_24 cs_semibold">Share:</h3>
                                      <div className="cs_social_btns cs_style_1">
                                          <a href="#" className="cs_center cs_radius_50"><i className="fa-brands fa-facebook-f" /></a>
                                          <a href="#" className="cs_center cs_radius_50"><i className="fa-brands fa-instagram" /></a>
                                          <a href="#" className="cs_center cs_radius_50"><i className="fa-brands fa-linkedin-in" /></a>
                                          <a href="#" className="cs_center cs_radius_50"><i className="fa-brands fa-x-twitter" /></a>
                                      </div>
                                  </div>
                              </div>
                              <div className="cs_comments_area">
                                  <h2 className="cs_fs_30 cs_mb_28">03 Comments</h2>
                                  <ul className="cs_comment_list cs_heading_font cs_mp_0">
                                      <li className="cs_comment_body position-relative">
                                          <div className="cs_comment_thumbnail">
                                              <img src={avatar_9} alt="Image" />
                                          </div>
                                          <div className="cs_comment_info">
                                              <h3 className="cs_fs_20 cs_semibold cs_mb_9">Leslie Alexander</h3>
                                              <div className="cs_post_meta cs_fs_14 cs_mb_9">
                                                  <span className="cs_accent_color"><i className="fa-regular fa-calendar-days" /></span>
                                                  <span className="cs_heading_color">10 Oct, 2024</span>
                                              </div>
                                              <p className="mb-0">Most repairs can be completed within a few hours, but complex issues might take longer. We always aim a for same-day service when possible.</p>
                                              <a href="#" className="cs_reply_btn cs_heading_bg cs_fs_14 cs_bold cs_white_color text-uppercase">Reply</a>
                                          </div>
                                      </li>
                                      <li className="cs_comment_body position-relative">
                                          <div className="cs_comment_thumbnail">
                                              <img src={avatar_10} alt="Image" />
                                          </div>
                                          <div className="cs_comment_info">
                                              <h3 className="cs_fs_20 cs_semibold cs_mb_9">Cameron Williamson</h3>
                                              <div className="cs_post_meta cs_fs_14 cs_mb_9">
                                                  <span className="cs_accent_color"><i className="fa-regular fa-calendar-days" /></span>
                                                  <span className="cs_heading_color">15 Oct, 2024</span>
                                              </div>
                                              <p className="mb-0">We offer free estimates before any repairs begin, so you know exactly what to expect on all part and labor, ensuring your peace of mind.</p>
                                              <a href="#" className="cs_reply_btn cs_heading_bg cs_fs_14 cs_bold cs_white_color text-uppercase">Reply</a>
                                          </div>
                                      </li>
                                      <li className="cs_comment_body position-relative">
                                          <div className="cs_comment_thumbnail">
                                              <img src={avatar_11} alt="Image" />
                                          </div>
                                          <div className="cs_comment_info">
                                              <h3 className="cs_fs_20 cs_semibold cs_mb_9">Darlene Robertson</h3>
                                              <div className="cs_post_meta cs_fs_14 cs_mb_9">
                                                  <span className="cs_accent_color"><i className="fa-regular fa-calendar-days" /></span>
                                                  <span className="cs_heading_color">20 Oct, 2024</span>
                                              </div>
                                              <p className="mb-0">Tire rotation is typically recommended every 6,000 to 8,000 miles to ensure even wear and extend the life of your tires  more serious that needs attention.</p>
                                              <a href="#" className="cs_reply_btn cs_heading_bg cs_fs_14 cs_bold cs_white_color text-uppercase">Reply</a>
                                          </div>
                                      </li>
                                  </ul>
                                  <div className="cs_height_50 cs_height_lg_50" />
                                  <div className="cs_form_wrapper cs_style_1 cs_accent_bg_light">
                                      <h3 className="cs_fs_30 cs_mb_13">Leave a Reply</h3>
                                      <p className="cs_mb_22">Your email Address Not Be Published. Requied Fields are Marked</p>
                                      <form className="row cs_row_gap_30 cs_gap_y_30">
                                          <div className="col-sm-6">
                                              <input type="text" name="name" placeholder="Your Name" className="cs_form_field cs_white_bg" />
                                          </div>
                                          <div className="col-sm-6">
                                              <input type="email" name="email" placeholder="Email Address" className="cs_form_field cs_white_bg" />
                                          </div>
                                          <div className="col-sm-12">
                                              <input type="text" name="website" placeholder="Enter Website" className="cs_form_field cs_white_bg" />
                                          </div>
                                          <div className="col-sm-12">
                                              <textarea name="comment" rows={6} placeholder="Enter Your Comments" className="cs_form_field cs_white_bg" defaultValue={""} />
                                          </div>
                                          <div className="col-sm-12">
                                              <button type="submit" className="cs_btn cs_style_1 w-100"><span>Submit</span></button>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                          </div>
                          <aside className="col-xl-4 col-lg-5">
                              <div className="cs_sidebar cs_style_1">
                                  <div className="cs_sidebar_widget cs_accent_bg_light position-relative p-0">
                                      <form action="#" className="cs_search">
                                          <input type="text" placeholder="Search...." />
                                          <span className="cs_search_icon cs_center cs_accent_bg cs_fs_24 cs_white_color">
                                              <i className="fa-solid fa-magnifying-glass" /></span>
                                      </form>
                                  </div>
                                  <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                                      <div className="cs_separator" />
                                      <h3 className="cs_sidebar_title cs_fs_30 cs_mb_43">All Services</h3>
                                      <ul className="cs_categories cs_fs_18 cs_semibold cs_mp_0">
                                          <li><a href="service-details">
                                              <span>Structural Mastery</span>
                                              <span><i className="fa-solid fa-arrow-right-long" /></span>
                                          </a></li>
                                          <li><a href="service-details">
                                              <span>Foundation Forte</span>
                                              <span><i className="fa-solid fa-arrow-right-long" /></span>
                                          </a></li>
                                          <li><a href="service-details">
                                              <span>Build Smart Solutions</span>
                                              <span><i className="fa-solid fa-arrow-right-long" /></span>
                                          </a></li>
                                          <li><a href="service-details">
                                              <span>Precision Builds</span>
                                              <span><i className="fa-solid fa-arrow-right-long" /></span>
                                          </a></li>
                                          <li><a href="service-details">
                                              <span>Apex Remodeling</span>
                                              <span><i className="fa-solid fa-arrow-right-long" /></span>
                                          </a></li>
                                      </ul>
                                  </div>
                                  <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                                      <div className="cs_separator" />
                                      <h3 className="cs_sidebar_title cs_fs_30 cs_mb_43">Recent Posts</h3>
                                      <div className="cs_recent_post_wrapper">
                                          <div className="cs_recent_post">
                                              <a className="cs_recent_post_thumb" href="/Blogdetails">
                                                  <img src={recent_post_3} alt="Recent Post Image" />
                                              </a>
                                              <div className="cs_recent_post_right">
                                                  <p className="cs_recent_posted_by cs_fs_14">
                                                      <i className="fa-solid fa-calendar-alt" />12 May, 2024</p>
                                                  <h3 className="cs_fs_18 cs_semibold mb-0">
                                                      <a href="/Blogdetails">Because Your BMW Deserves the Best</a>
                                                  </h3>
                                              </div>
                                          </div>
                                          <div className="cs_recent_post">
                                              <a className="cs_recent_post_thumb" href="/Blogdetails">
                                                  <img src={recent_post_4} alt="Recent Post Image" />
                                              </a>
                                              <div className="cs_recent_post_right">
                                                  <p className="cs_recent_posted_by cs_fs_14">
                                                      <i className="fa-solid fa-calendar-alt" />12 May, 2024</p>
                                                  <h3 className="cs_fs_18 cs_semibold mb-0">
                                                      <a href="/Blogdetails">Because Your Audi Deserves the Best</a>
                                                  </h3>
                                              </div>
                                          </div>
                                          <div className="cs_recent_post">
                                              <a className="cs_recent_post_thumb" href="/Blogdetails">
                                                  <img src={recent_post_5} alt="Recent Post Image" />
                                              </a>
                                              <div className="cs_recent_post_right">
                                                  <p className="cs_recent_posted_by cs_fs_14">
                                                      <i className="fa-solid fa-calendar-alt" />12 May, 2024</p>
                                                  <h3 className="cs_fs_18 cs_semibold mb-0">
                                                      <a href="/Blogdetails">Always Your Car Deserves the Best</a>
                                                  </h3>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                                      <div className="cs_separator" />
                                      <div className="cs_sidebar_tags">
                                          <h3 className="cs_sidebar_title cs_fs_30 cs_mb_43">Popular Tags</h3>
                                          <div className="cs_tags_links cs_fs_14 cs_semibold cs_heading_font">
                                              <a href="#" className="cs_tag_link cs_white_bg">Popular</a>
                                              <a href="#" className="cs_tag_link cs_white_bg">Car</a>
                                              <a href="#" className="cs_tag_link cs_white_bg">Auto Parts</a>
                                              <a href="#" className="cs_tag_link cs_white_bg">Services</a>
                                              <a href="#" className="cs_tag_link cs_white_bg">Repairs</a>
                                              <a href="#" className="cs_tag_link cs_white_bg">Dealer</a>
                                              <a href="#" className="cs_tag_link cs_white_bg">Oil</a>
                                              <a href="#" className="cs_tag_link cs_white_bg">Icon</a>
                                              <a href="#" className="cs_tag_link cs_white_bg">Bike</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </aside>
                      </div>
                  </div>
                  <div className="cs_height_120 cs_height_lg_80" />
              </section>
              {/* End Blog Details */}
          </div>
         
    </>
  );    
    
}
export default BlogDetails;