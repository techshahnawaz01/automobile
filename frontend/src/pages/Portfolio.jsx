import React from 'react';
import page_heading_1 from '../assets/img/page_heading_1.jpg';
import portfolio_img_5 from '../assets/img/portfolio_img_5.jpg';
import arrow_long from '../assets/img/icons/arrow_long.svg';
import portfolio_img_7 from '../assets/img/portfolio_img_7.jpg';
import portfolio_img_8 from '../assets/img/portfolio_img_8.jpg';
import portfolio_img_6 from '../assets/img/portfolio_img_6.jpg';
import portfolio_img_9 from '../assets/img/portfolio_img_9.jpg';



function Portfolio() {
    return (
        <div>
            {/* Start Page Heading */}
            <section className="cs_page_heading cs_bg_filed cs_center cs_primary_bg" style={{ backgroundImage: `url(${page_heading_1})` }}>
                <div className="container">
                    <h1 className="cs_white_color cs_semibold cs_white_color cs_mb_10 cs_fs_50">Portfolio</h1>
                    <ol className="breadcrumb cs_heading_font">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active">Portfolio</li>
                    </ol>
                </div>
            </section>
            {/* End Page Heading */}
            {/* Start Portfolio Section */}
            <section className="cs_tabs cs_style_1 position-relative">
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div className="cs_cards_grid cs_style_1">
                        <div className="cs_card cs_style_5 position-relative">
                            <div className="cs_card_thumbnail">
                                <img src={portfolio_img_5} alt="Portfolio Image" />
                            </div>
                            <div className="cs_card_info_wrapper cs_heading_bg position-absolute">
                                <div className="cs_portfolio_text">
                                    <h3 className="cs_fs_20 cs_semibold cs_white_color mb-0"><a href="portfolio-details">Projects Growing Services</a></h3>
                                    <p className="cs_white_color mb-0">Car Projects / Growing</p>
                                </div>
                                <a className="cs_text_btn cs_style_1 cs_bold cs_white_color cs_accent_bg" href="portfolio-details">
                                    <img src={arrow_long} alt="Arrow Icon" />
                                </a>
                            </div>
                        </div>
                        <div className="cs_card cs_style_5 position-relative">
                            <div className="cs_card_thumbnail">
                                <img src={portfolio_img_7} alt="Portfolio Image" />
                            </div>
                            <div className="cs_card_info_wrapper cs_heading_bg position-absolute">
                                <div className="cs_portfolio_text">
                                    <h3 className="cs_fs_20 cs_semibold cs_white_color mb-0"><a href="portfolio-details">Projects Growing Services</a></h3>
                                    <p className="cs_white_color mb-0">Car Projects / Growing</p>
                                </div>
                                <a className="cs_text_btn cs_style_1 cs_bold cs_white_color cs_accent_bg" href="portfolio-details">
                                    <img src={arrow_long} alt="Arrow Icon" />
                                </a>
                            </div>
                        </div>
                        <div className="cs_card cs_style_5 position-relative">
                            <div className="cs_card_thumbnail">
                                <img src={portfolio_img_8} alt="Portfolio Image" />
                            </div>
                            <div className="cs_card_info_wrapper cs_heading_bg position-absolute">
                                <div className="cs_portfolio_text">
                                    <h3 className="cs_fs_20 cs_semibold cs_white_color mb-0"><a href="portfolio-details">Projects Growing Services</a></h3>
                                    <p className="cs_white_color mb-0">Car Projects / Growing</p>
                                </div>
                                <a className="cs_text_btn cs_style_1 cs_bold cs_white_color cs_accent_bg" href="portfolio-details">
                                    <img src={arrow_long} alt="Arrow Icon" />
                                </a>
                            </div>
                        </div>
                        <div className="cs_card cs_style_5 position-relative">
                            <div className="cs_card_thumbnail">
                                <img src={portfolio_img_6} alt="Portfolio Image" />
                            </div>
                            <div className="cs_card_info_wrapper cs_heading_bg position-absolute">
                                <div className="cs_portfolio_text">
                                    <h3 className="cs_fs_20 cs_semibold cs_white_color mb-0"><a href="portfolio-details">Projects Growing Services</a></h3>
                                    <p className="cs_white_color mb-0">Car Projects / Growing</p>
                                </div>
                                <a className="cs_text_btn cs_style_1 cs_bold cs_white_color cs_accent_bg" href="portfolio-details">
                                    <img src={arrow_long} alt="Arrow Icon" />
                                </a>
                            </div>
                        </div>
                        <div className="cs_card cs_style_5 position-relative">
                            <div className="cs_card_thumbnail">
                                <img src={portfolio_img_9} alt="Portfolio Image" />
                            </div>
                            <div className="cs_card_info_wrapper cs_heading_bg position-absolute">
                                <div className="cs_portfolio_text">
                                    <h3 className="cs_fs_20 cs_semibold cs_white_color mb-0"><a href="portfolio-details">Projects Growing Services</a></h3>
                                    <p className="cs_white_color mb-0">Car Projects / Growing</p>
                                </div>
                                <a className="cs_text_btn cs_style_1 cs_bold cs_white_color cs_accent_bg" href="portfolio-details">
                                    <img src={arrow_long} alt="Arrow Icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80" />
            </section>
            {/* End Portfolio Section */}
        </div>
    );
}
export default Portfolio;