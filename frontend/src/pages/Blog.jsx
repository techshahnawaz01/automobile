import React from 'react';
import page_heading_1 from '../assets/img/page_heading_1.jpg';
import post_img_4 from '../assets/img/post_img_4.jpg';
import post_img_5 from '../assets/img/post_img_5.jpg';
import post_img_6 from '../assets/img/post_img_6.jpg';
import post_img_7 from '../assets/img/post_img_7.jpg';
import post_img_8 from '../assets/img/post_img_8.jpg';
import post_img_9 from '../assets/img/post_img_9.jpg';



function Blog( ) {
    return (
        <>
           
            <div>
                {/* Start Page Heading */}
                <section className="cs_page_heading cs_bg_filed cs_center cs_primary_bg" style={{ backgroundImage: `url(${page_heading_1})` }}>
                    <div className="container">
                        <h1 className="cs_white_color cs_semibold cs_white_color cs_mb_10 cs_fs_50">Blog</h1>
                        <ol className="breadcrumb cs_heading_font">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active">Blog</li>
                        </ol>
                    </div>
                </section>
                {/* End Page Heading */}
                {/* Start Blog Section */}
                <section className="position-relative">
                    <div className="cs_height_120 cs_height_lg_80" />
                    <div className="container">
                        <div className="row cs_row_gap_30 cs_gap_y_30">
                            <div className="col-lg-4">
                                <div className="cs_post cs_style_1 cs_type_1">
                                    <a className="cs_post_thumbnail cs_mb_16 position-relative" href="blog-details">
                                        <img src={post_img_4} alt="Post Image" />
                                        <div className="cs_post_date cs_accent_bg cs_fs_18 cs_semibold cs_white_color cs_center position-absolute">10 Oct</div>
                                    </a>
                                    <div className="cs_post_content_wrapper">
                                        <div className="cs_post_content">
                                            <div className="cs_post_meta_wrapper cs_mb_11">
                                                <div className="cs_post_meta">
                                                    <span className="cs_accent_color"><i className="fa-regular fa-comments" /></span>
                                                    <span className="cs_heading_color">02 Comments</span>
                                                </div>
                                                <div className="cs_post_meta">
                                                    <span className="cs_accent_color"><i className="fa-regular fa-user" /></span>
                                                    <span className="cs_heading_color">Admin</span>
                                                </div>
                                            </div>
                                            <h3 className="cs_fs_20 cs_semibold cs_mb_5"><a href="blog-details"> We specialize in a wide range of car repairs including engine work</a></h3>
                                            <p className="cs_mb_15">The old engine oil is drained and replaced with fresh oil, and the oil filter</p>
                                            <a className="cs_text_btn cs_style_1 cs_white_bg cs_accent_color" href="blog-details">
                                                <i className="fa-solid fa-angles-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cs_post cs_style_1 cs_type_1">
                                    <a className="cs_post_thumbnail cs_mb_16 position-relative" href="blog-details">
                                        <img src={post_img_5} alt="Post Image" />
                                        <div className="cs_post_date cs_accent_bg cs_fs_18 cs_semibold cs_white_color cs_center position-absolute">10 Oct</div>
                                    </a>
                                    <div className="cs_post_content_wrapper">
                                        <div className="cs_post_content">
                                            <div className="cs_post_meta_wrapper cs_mb_11">
                                                <div className="cs_post_meta">
                                                    <span className="cs_accent_color"><i className="fa-regular fa-comments" /></span>
                                                    <span className="cs_heading_color">02 Comments</span>
                                                </div>
                                                <div className="cs_post_meta">
                                                    <span className="cs_accent_color"><i className="fa-regular fa-user" /></span>
                                                    <span className="cs_heading_color">Admin</span>
                                                </div>
                                            </div>
                                            <h3 className="cs_fs_20 cs_semibold cs_mb_5"><a href="blog-details">The repair time varies depending on the service</a></h3>
                                            <p className="cs_mb_15">we offer a warranty on all parts and labor to ensure your peace of mind.</p>
                                            <a className="cs_text_btn cs_style_1 cs_white_bg cs_accent_color" href="blog-details">
                                                <i className="fa-solid fa-angles-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cs_post cs_style_1 cs_type_1">
                                    <a className="cs_post_thumbnail cs_mb_16 position-relative" href="blog-details">
                                        <img src={post_img_6} alt="Post Image" />
                                        <div className="cs_post_date cs_accent_bg cs_fs_18 cs_semibold cs_white_color cs_center position-absolute">10 Oct</div>
                                    </a>
                                    <div className="cs_post_content_wrapper">
                                        <div className="cs_post_content">
                                            <div className="cs_post_meta_wrapper cs_mb_11">
                                                <div className="cs_post_meta">
                                                    <span className="cs_accent_color"><i className="fa-regular fa-comments" /></span>
                                                    <span className="cs_heading_color">02 Comments</span>
                                                </div>
                                                <div className="cs_post_meta">
                                                    <span className="cs_accent_color"><i className="fa-regular fa-user" /></span>
                                                    <span className="cs_heading_color">Admin</span>
                                                </div>
                                            </div>
                                            <h3 className="cs_fs_20 cs_semibold cs_mb_5"><a href="blog-details">we offer emergency repair services to get you back</a></h3>
                                            <p className="cs_mb_15">You can get an estimate by visiting our shop, calling us, or filling out the online form</p>
                                            <a className="cs_text_btn cs_style_1 cs_white_bg cs_accent_color" href="blog-details">
                                                <i className="fa-solid fa-angles-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cs_post cs_style_1 cs_type_1">
                                    <a className="cs_post_thumbnail cs_mb_16 position-relative" href="blog-details">
                                        <img src={post_img_7} alt="Post Image" />
                                        <div className="cs_post_date cs_accent_bg cs_fs_18 cs_semibold cs_white_color cs_center position-absolute">15 Sep</div>
                                    </a>
                                    <div className="cs_post_content_wrapper">
                                        <div className="cs_post_content">
                                            <div className="cs_post_meta_wrapper cs_mb_11">
                                                <div className="cs_post_meta">
                                                    <span className="cs_accent_color"><i className="fa-regular fa-comments" /></span>
                                                    <span className="cs_heading_color">12 Comments</span>
                                                </div>
                                                <div className="cs_post_meta">
                                                    <span className="cs_accent_color"><i className="fa-regular fa-user" /></span>
                                                    <span className="cs_heading_color">Noyon</span>
                                                </div>
                                            </div>
                                            <h3 className="cs_fs_20 cs_semibold cs_mb_5"><a href="blog-details">Hire certified mechanics and provide ongoing training to keep</a></h3>
                                            <p className="cs_mb_15">Encourage satisfied customers to leave positive kinds reviews on platforms like Google and Yelp.</p>
                                            <a className="cs_text_btn cs_style_1 cs_white_bg cs_accent_color" href="blog-details">
                                                <i className="fa-solid fa-angles-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cs_post cs_style_1 cs_type_1">
                                    <a className="cs_post_thumbnail cs_mb_16 position-relative" href="blog-details">
                                        <img src={post_img_8} alt="Post Image" />
                                        <div className="cs_post_date cs_accent_bg cs_fs_18 cs_semibold cs_white_color cs_center position-absolute">10 Aug</div>
                                    </a>
                                    <div className="cs_post_content_wrapper">
                                        <div className="cs_post_content">
                                            <div className="cs_post_meta_wrapper cs_mb_11">
                                                <div className="cs_post_meta">
                                                    <span className="cs_accent_color"><i className="fa-regular fa-comments" /></span>
                                                    <span className="cs_heading_color">10 Comments</span>
                                                </div>
                                                <div className="cs_post_meta">
                                                    <span className="cs_accent_color"><i className="fa-regular fa-user" /></span>
                                                    <span className="cs_heading_color">Lalin</span>
                                                </div>
                                            </div>
                                            <h3 className="cs_fs_20 cs_semibold cs_mb_5"><a href="blog-details">Invest in high-quality diagnostic lifts and other essential</a></h3>
                                            <p className="cs_mb_15">Share repair tips, showcase completed projects, and  Facebook, Instagram, and YouTube.</p>
                                            <a className="cs_text_btn cs_style_1 cs_white_bg cs_accent_color" href="blog-details">
                                                <i className="fa-solid fa-angles-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cs_post cs_style_1 cs_type_1">
                                    <a className="cs_post_thumbnail cs_mb_16 position-relative" href="blog-details">
                                        <img src={post_img_9} alt="Post Image" />
                                        <div className="cs_post_date cs_accent_bg cs_fs_18 cs_semibold cs_white_color cs_center position-absolute">10 Oct</div>
                                    </a>
                                    <div className="cs_post_content_wrapper">
                                        <div className="cs_post_content">
                                            <div className="cs_post_meta_wrapper cs_mb_11">
                                                <div className="cs_post_meta">
                                                    <span className="cs_accent_color"><i className="fa-regular fa-comments" /></span>
                                                    <span className="cs_heading_color">17 Comments</span>
                                                </div>
                                                <div className="cs_post_meta">
                                                    <span className="cs_accent_color"><i className="fa-regular fa-user" /></span>
                                                    <span className="cs_heading_color">Noyon</span>
                                                </div>
                                            </div>
                                            <h3 className="cs_fs_20 cs_semibold cs_mb_5"><a href="blog-details">Encourage satisfied customers to leave positive review</a></h3>
                                            <p className="cs_mb_15">We’ll provide an estimated time after diagnosis on the complexity of the issue.</p>
                                            <a className="cs_text_btn cs_style_1 cs_white_bg cs_accent_color" href="blog-details">
                                                <i className="fa-solid fa-angles-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cs_height_120 cs_height_lg_80" />
                </section>
                {/* End Blog Section */}
            </div>
            
        </>
    );
}
export default Blog;