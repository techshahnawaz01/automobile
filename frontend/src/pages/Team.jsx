import React from 'react';
import page_heading_1 from '../assets/img/page_heading_1.jpg';
import team_shape_1 from '../assets/img/shapes/team_shape_1.svg';
import team_img_1 from '../assets/img/team_img_1.jpg';
import team_img_2 from '../assets/img/team_img_2.jpg';
import team_img_3 from '../assets/img/team_img_3.jpg';
import team_img_4 from '../assets/img/team_img_4.jpg';
import team_img_5 from '../assets/img/team_img_5.jpg';
import team_img_6 from '../assets/img/team_img_6.jpg';
import team_img_7 from '../assets/img/team_img_7.jpg';
import team_img_8 from '../assets/img/team_img_8.jpg';


function Team(){
    return(
        <>
          
            <div>
                {/* Start Page Heading */}
                <section
                    className="cs_page_heading cs_bg_filed cs_center cs_primary_bg"
                    style={{ backgroundImage: `url(${page_heading_1})` }}
                >
                    <div className="container">
                        <h1 className="cs_white_color cs_semibold cs_white_color cs_mb_10 cs_fs_50">Team</h1>
                        <ol className="breadcrumb cs_heading_font">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active">Team</li>
                        </ol>
                    </div>
                </section>
                {/* End Page Heading */}
                {/* Start Team Section */}
                <section>
                    <div className="cs_height_120 cs_height_lg_80" />
                    <div className="container">
                        <div className="row cs_row_gap_30 cs_gap_y_30">
                            <div className="col-xl-3 col-sm-6">
                                <div className="cs_team cs_style_1 position-relative">
                                    <div className="cs_team_thumbnail cs_mb_10">
                                        <img src={team_img_1} alt="Team Member Image" />
                                        <div className="cs_social_btns cs_style_1 cs_white_bg">
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-vimeo-v" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-linkedin-in" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-twitter" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-facebook-f" /></a>
                                        </div>
                                        <span className="cs_share_btn cs_center">
                                            <i className="fa-solid fa-minus" />
                                            <i className="fa-solid fa-plus" />
                                        </span>
                                    </div>
                                    <div className="cs_team_info">
                                        <h3 className="cs_fs_24 cs_semibold mb-0"><a href="team-details">Brooklyn Simmons</a></h3>
                                        <p className="cs_accent_color mb-0">Brake Repairer</p>
                                    </div>
                                    <div className="cs_team_shape position-absolute">
                                        <img src={team_shape_1} alt="Team Shape" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="cs_team cs_style_1 position-relative">
                                    <div className="cs_team_thumbnail cs_mb_10">
                                        <img src={team_img_2} alt="Team Member Image" />
                                        <div className="cs_social_btns cs_style_1 cs_white_bg">
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-vimeo-v" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-linkedin-in" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-twitter" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-facebook-f" /></a>
                                        </div>
                                        <span className="cs_share_btn cs_center">
                                            <i className="fa-solid fa-minus" />
                                            <i className="fa-solid fa-plus" />
                                        </span>
                                    </div>
                                    <div className="cs_team_info">
                                        <h3 className="cs_fs_24 cs_semibold mb-0"><a href="team-details">Kathryn Murphy</a></h3>
                                        <p className="cs_accent_color mb-0">Truck Mechanic</p>
                                    </div>
                                    <div className="cs_team_shape position-absolute">
                                        <img src={team_shape_1} alt="Team Shape" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="cs_team cs_style_1 position-relative">
                                    <div className="cs_team_thumbnail cs_mb_10">
                                        <img src={team_img_3} alt="Team Member Image" />
                                        <div className="cs_social_btns cs_style_1 cs_white_bg">
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-vimeo-v" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-linkedin-in" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-twitter" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-facebook-f" /></a>
                                        </div>
                                        <span className="cs_share_btn cs_center">
                                            <i className="fa-solid fa-minus" />
                                            <i className="fa-solid fa-plus" />
                                        </span>
                                    </div>
                                    <div className="cs_team_info">
                                        <h3 className="cs_fs_24 cs_semibold mb-0"><a href="team-details">Savannah Nguyen</a></h3>
                                        <p className="cs_accent_color mb-0">Trolley Engine</p>
                                    </div>
                                    <div className="cs_team_shape position-absolute">
                                        <img src={team_shape_1}alt="Team Shape" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="cs_team cs_style_1 position-relative">
                                    <div className="cs_team_thumbnail cs_mb_10">
                                        <img src={team_img_4} alt="Team Member Image" />
                                        <div className="cs_social_btns cs_style_1 cs_white_bg">
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-vimeo-v" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-linkedin-in" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-twitter" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-facebook-f" /></a>
                                        </div>
                                        <span className="cs_share_btn cs_center">
                                            <i className="fa-solid fa-minus" />
                                            <i className="fa-solid fa-plus" />
                                        </span>
                                    </div>
                                    <div className="cs_team_info">
                                        <h3 className="cs_fs_24 cs_semibold mb-0"><a href="team-details">Darlene Robertson</a></h3>
                                        <p className="cs_accent_color mb-0">Main Mechanic</p>
                                    </div>
                                    <div className="cs_team_shape position-absolute">
                                        <img src={team_shape_1} alt="Team Shape" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="cs_team cs_style_1 position-relative">
                                    <div className="cs_team_thumbnail cs_mb_10">
                                        <img src={team_img_5} alt="Team Member Image" />
                                        <div className="cs_social_btns cs_style_1 cs_white_bg">
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-vimeo-v" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-linkedin-in" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-twitter" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-facebook-f" /></a>
                                        </div>
                                        <span className="cs_share_btn cs_center">
                                            <i className="fa-solid fa-minus" />
                                            <i className="fa-solid fa-plus" />
                                        </span>
                                    </div>
                                    <div className="cs_team_info">
                                        <h3 className="cs_fs_24 cs_semibold mb-0"><a href="team-details">Leslie Alexander</a></h3>
                                        <p className="cs_accent_color mb-0">Brake Repairer</p>
                                    </div>
                                    <div className="cs_team_shape position-absolute">
                                        <img src={team_shape_1} alt="Team Shape" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="cs_team cs_style_1 position-relative">
                                    <div className="cs_team_thumbnail cs_mb_10">
                                        <img src={team_img_6} alt="Team Member Image" />
                                        <div className="cs_social_btns cs_style_1 cs_white_bg">
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-vimeo-v" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-linkedin-in" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-twitter" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-facebook-f" /></a>
                                        </div>
                                        <span className="cs_share_btn cs_center">
                                            <i className="fa-solid fa-minus" />
                                            <i className="fa-solid fa-plus" />
                                        </span>
                                    </div>
                                    <div className="cs_team_info">
                                        <h3 className="cs_fs_24 cs_semibold mb-0"><a href="team-details">Savannah Nguyen</a></h3>
                                        <p className="cs_accent_color mb-0">Truck Mechanic</p>
                                    </div>
                                    <div className="cs_team_shape position-absolute">
                                        <img src={team_shape_1} alt="Team Shape" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="cs_team cs_style_1 position-relative">
                                    <div className="cs_team_thumbnail cs_mb_10">
                                        <img src={team_img_7} alt="Team Member Image" />
                                        <div className="cs_social_btns cs_style_1 cs_white_bg">
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-vimeo-v" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-linkedin-in" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-twitter" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-facebook-f" /></a>
                                        </div>
                                        <span className="cs_share_btn cs_center">
                                            <i className="fa-solid fa-minus" />
                                            <i className="fa-solid fa-plus" />
                                        </span>
                                    </div>
                                    <div className="cs_team_info">
                                        <h3 className="cs_fs_24 cs_semibold mb-0"><a href="team-details">Kathryn Murphy</a></h3>
                                        <p className="cs_accent_color mb-0">Trolley Engine</p>
                                    </div>
                                    <div className="cs_team_shape position-absolute">
                                        <img src={team_shape_1} alt="Team Shape" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="cs_team cs_style_1 position-relative">
                                    <div className="cs_team_thumbnail cs_mb_10">
                                        <img src={team_img_8}alt="Team Member Image" />
                                        <div className="cs_social_btns cs_style_1 cs_white_bg">
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-vimeo-v" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-linkedin-in" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-twitter" /></a>
                                            <a href="#" className="cs_social_btn cs_center"><i className="fa-brands fa-facebook-f" /></a>
                                        </div>
                                        <span className="cs_share_btn cs_center">
                                            <i className="fa-solid fa-minus" />
                                            <i className="fa-solid fa-plus" />
                                        </span>
                                    </div>
                                    <div className="cs_team_info">
                                        <h3 className="cs_fs_24 cs_semibold mb-0"><a href="team-details">Esther Howard</a></h3>
                                        <p className="cs_accent_color mb-0">Main Mechanic</p>
                                    </div>
                                    <div className="cs_team_shape position-absolute">
                                        <img src={team_shape_1} alt="Team Shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cs_height_120 cs_height_lg_80" />
                </section>
                {/* End Team Section */}
            </div>
            
        </>
    )
}
export default Team;