import React, { useEffect, useState } from 'react';
import Herobg3 from "../assets/img/hero_bg_3.jpg";
import Herobg2 from "../assets/img/hero_bg_2.jpg";
import Aboutimg1 from "../assets/img/about_img_1.jpg";
import Aboutimg2 from "../assets/img/about_img_2.jpg";
import Aboutimg3 from "../assets/img/about_img_3.jpg";
import gear_2 from "../assets/img/shapes/gear_2.svg";
import gear_1 from "../assets/img/shapes/gear_1.svg";
import quick_fix from "../assets/img/icons/quick-fix.svg";
import avatar_1 from "../assets/img/avatar_1.png";
import service_bg_1 from "../assets/img/service_bg_1.jpg";
import service_icon_1 from "../assets/img/icons/service_icon_1.svg";
import service_icon_2 from "../assets/img/icons/service_icon_2.svg";
import service_icon_3 from "../assets/img/icons/service_icon_3.svg";
import service_img_1 from "../assets/img/service_img_1.jpg";
import service_img_2 from "../assets/img/service_img_2.jpg";
import service_img_3 from "../assets/img/service_img_3.jpg";
import feature_img_1 from "../assets/img/feature_img_1.jpg";
import feature_img_2 from "../assets/img/feature_img_2.jpg";
import feature_img_3 from "../assets/img/feature_img_3.jpg";
import engineicon from "../assets/img/icons/engine.svg";
import caricon from "../assets/img/icons/car.svg";
import gear_icon_2 from "../assets/img/icons/gear_icon_2.svg";
import before_after_bg_1 from "../assets/img/before_after_bg_1.svg";
import after_img_1 from "../assets/img/after_img_1.jpg";
import before_img_1 from "../assets/img/before_img_1.jpg";
import portfolio_img_1 from "../assets/img/portfolio_img_1.jpg";
import portfolio_img_2 from "../assets/img/portfolio_img_2.jpg";
import portfolio_img_3 from "../assets/img/portfolio_img_3.jpg";
import portfolio_img_4 from "../assets/img/portfolio_img_4.jpg";
import location from "../assets/img/icons/location.svg";
import phone from "../assets/img/icons/phone-call.svg";
import email from "../assets/img/icons/mail_open.svg";
import contact_img_1 from "../assets/img/contact_img_1.jpg";
import avatar_2 from "../assets/img/avatar_2.png";
import testimonial_bg_1 from "../assets/img/testimonial_bg_1.jpg";
import quote_1 from "../assets/img/icons/quote_1.svg";
import avatar_3 from "../assets/img/avatar_3.png";
import post_img_1 from "../assets/img/post_img_1.jpg";
import post_img_2 from "../assets/img/post_img_2.jpg";
import post_img_3 from "../assets/img/post_img_3.jpg";
import tyres from "../assets/img/tyres.svg";
import axios from "axios";
// import { loadScripts } from "../utils/loadScripts";



function Home() {
    // useEffect(() => {
    //     loadScripts(); // Load scripts when the app starts
    // }, []);
    const [submitMessage, setSubmitMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        service: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset errors and messages
        setErrors({
            name: '',
            email: '',
            subject: '',
            service: '',
            message: ''
        });
        setSubmitMessage('');
        setIsError(false);

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            service: e.target.querySelector('select').value,
            message: e.target.message.value
        };

        try {
            const response = await axios.post(
                "http://localhost:8000/api/contacts",
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                }
            );

            if (response.status === 200 || response.status === 201) {
                setSubmitMessage("Thanks for contacting us. We'll get back to you shortly.");
                setIsError(false);
                e.target.reset();

                setTimeout(() => setSubmitMessage(''), 5000);
            }
        } catch (error) {
            if (error.response?.status === 422) {
                const validationErrors = {};
                Object.entries(error.response.data.errors).forEach(([key, value]) => {
                    validationErrors[key] = value[0];
                });
                setErrors(validationErrors);
            } else {
                console.error("Full error:", error);
                setSubmitMessage(
                    error.response?.data?.message ||
                    error.response?.statusText ||
                    "Network error - please check your connection"
                );
                setIsError(true);
                setTimeout(() => setSubmitMessage(''), 5000);
            }
        }
    };
    return (
        <>
            {/* End Header Section */}
            {/* Start Hero Section */}
            <section className="cs_slider cs_style_1">
                <div className="cs_slider_container" data-autoplay={0} data-loop={1} data-speed={900} data-center={0} data-variable-width={0} data-slides-per-view={1}>
                    <div className="cs_slider_wrapper">
                        <div className="cs_slide">
                            <div className="cs_hero cs_style_1 cs_type_1 cs_bg_filed cs_primary_bg cs_center" style={{ backgroundImage: `url(${Herobg2})` }}>
                                <div className="container">
                                    <div className="cs_hero_text">
                                        <h1 className="cs_hero_title cs_fs_70 cs_mb_18 wow fadeInUp">Precision Care for Every Car Fast Fixes Lasting Results</h1>
                                        <p className="cs_hero_subtitle cs_mb_34">Repair times vary depending on the service. We provide an estimated time after our initial diagnostic check Specific details can be provided</p>
                                        <div className="cs_hero_btns">
                                            <a className="cs_btn cs_style_1 wow fadeInLeft" href="about">
                                                <span>Read more</span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </a>
                                            <span className="cs_hero_number  wow fadeInRight">
                                                <span className="cs_hero_number_icon cs_center cs_heading_bg cs_white_color cs_fs_18">
                                                    <i className="fa-solid fa-phone-volume" />
                                                </span>
                                                <a href="tel:8002781578" className="cs_fs_24 cs_semibold cs_heading_color">8002781578</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs_slide">
                            <div className="cs_hero cs_style_1 cs_type_1 cs_bg_filed cs_primary_bg cs_center" style={{ backgroundImage: `url(${Herobg3})` }}>
                                <div className="container">
                                    <div className="cs_hero_text">
                                        <h1 className="cs_hero_title cs_fs_70 cs_mb_18">Precision Care for Every Car Fast Fixes Lasting Results</h1>
                                        <p className="cs_hero_subtitle cs_mb_34">Repair times vary depending on the service. We provide an estimated time after our initial diagnostic check Specific details can be provided</p>
                                        <div className="cs_hero_btns">
                                            <a className="cs_btn cs_style_1" href="about">
                                                <span>Read more</span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </a>
                                            <span className="cs_hero_number">
                                                <span className="cs_hero_number_icon cs_center cs_heading_bg cs_white_color cs_fs_18">
                                                    <i className="fa-solid fa-phone-volume" />
                                                </span>
                                                <a href="tel:8002781578" className="cs_fs_24 cs_semibold cs_heading_color">8002781578</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs_slide">
                            <div className="cs_hero cs_style_1 cs_type_1 cs_bg_filed cs_primary_bg cs_center" style={{ backgroundImage: `url(${Herobg2})` }}>
                                <div className="container">
                                    <div className="cs_hero_text">
                                        <h1 className="cs_hero_title cs_fs_70 cs_mb_18">Precision Care for Every Car Fast Fixes Lasting Results</h1>
                                        <p className="cs_hero_subtitle cs_mb_34">Repair times vary depending on the service. We provide an estimated time after our initial diagnostic check Specific details can be provided</p>
                                        <div className="cs_hero_btns">
                                            <a className="cs_btn cs_style_1" href="about">
                                                <span>Read more</span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </a>
                                            <span className="cs_hero_number">
                                                <span className="cs_hero_number_icon cs_center cs_heading_bg cs_white_color cs_fs_18">
                                                    <i className="fa-solid fa-phone-volume" />
                                                </span>
                                                <a href="tel:8002781578" className="cs_fs_24 cs_semibold cs_heading_color">8002781578</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cs_pagination cs_style_1" />
                </div>
            </section>
            {/* End Hero Section */}
            {/* Start About Section */}
            <section className="cs_about cs_style_1 position-relative">
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div className="row cs_gap_y_40 align-items-center">
                        <div className="col-xl-6">
                            <div className="cs_about_thumbnail_wrapper position-relative">
                                <div className="cs_about_thumbnail">
                                    <img src={Aboutimg1} alt="About Image" />
                                </div>
                                <div className="cs_about_thumbnail">
                                    <img src={Aboutimg2} alt="About Image" />
                                </div>
                                <div className="cs_about_thumbnail">
                                    <img src={Aboutimg3} alt="About Image" />
                                </div>
                                <div className="cs_esperience_text position-absolute">
                                    <h2 className="cs_experience_title mb-0">
                                        <span className="cs_fs_100 cs_black cs_accent_color">58</span>
                                        <span className="cs_fs_50">Years</span>
                                        <span className="cs_fs_50 cs_accent_color">Experience</span>
                                    </h2>
                                </div>

                                <div className="cs_phone_icon cs_fs_24 cs_accent_color cs_center cs_radius_50">
                                    <i className="fa-solid fa-phone-volume" />
                                </div>
                                <a href="tel:8002781578" className="cs_fs_24 cs_semibold cs_heading_color">8002781578</a>
                                <div className="cs_about_shape_1 position-absolute">
                                    <img src={gear_1} alt="Gear Shape" />
                                </div>
                                <div className="cs_about_shape_2 position-absolute">
                                    <img src={gear_2} alt="Gear Shape" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="cs_about_text">
                                <div className="cs_section_heading cs_style_1 cs_mb_20">
                                    <h3 className="cs_section_subtitle cs_fs_18 cs_accent_color cs_semibold text-uppercase cs_mb_12 wow fadeInDown">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528ZM11.2557 1.33733C11.7741 0.819199 12.465 0.533066 13.1506 0.533066H13.1967L12.9498 0.780266C12.6463 1.08373 12.4791 1.4864 12.4791 1.91467C12.4791 2.34293 12.6463 2.7456 12.9498 3.04907C13.2533 3.35253 13.6551 3.51813 14.0842 3.51813C14.5133 3.51813 14.9159 3.35147 15.2186 3.04907L15.4655 2.80187C15.4786 3.50293 15.1917 4.21333 14.6618 4.7432C14.0042 5.4008 13.0666 5.68293 12.2095 5.4784C11.7917 5.38533 11.425 5.18373 11.1202 4.87867C10.8154 4.5736 10.6133 4.20693 10.5194 3.78507C10.3159 2.93253 10.5981 1.9944 11.2557 1.3368V1.33733ZM3.78578 5.48C2.93325 5.68373 1.99512 5.40133 1.33752 4.74373C0.807651 4.21387 0.520718 3.50347 0.533785 2.8024L0.780718 3.0496C1.08338 3.352 1.48632 3.51867 1.91512 3.51867C2.34392 3.51867 2.74712 3.352 3.04925 3.0496C3.35272 2.74613 3.51992 2.34347 3.51992 1.9152C3.51992 1.48693 3.35272 1.08427 3.04925 0.780799L2.80232 0.533599C3.51058 0.525866 4.21352 0.807733 4.74365 1.3376C5.40125 1.9952 5.68338 2.93307 5.47912 3.78987C5.38632 4.20747 5.18445 4.57387 4.87912 4.8792C4.57378 5.18453 4.20765 5.38587 3.78578 5.48ZM4.60365 5.73867C4.84373 5.61088 5.06362 5.44832 5.25618 5.25627C5.44814 5.06361 5.61068 4.84374 5.73858 4.60373L7.62205 6.48693L6.48712 7.62187L4.60365 5.73867ZM4.74365 14.6621C4.21378 15.1917 3.51192 15.4752 2.80232 15.4661L3.04925 15.2189C3.35165 14.9163 3.51832 14.5133 3.51832 14.0845C3.51832 13.6557 3.35165 13.2528 3.04925 12.9501C2.74823 12.6497 2.3403 12.4809 1.91498 12.4809C1.48967 12.4809 1.08174 12.6497 0.780718 12.9501L0.533785 13.1973C0.520718 12.4963 0.807651 11.7859 1.33752 11.256C1.99538 10.5987 2.93325 10.3168 3.78978 10.5208C4.20765 10.6139 4.57432 10.8155 4.87912 11.1205C5.18392 11.4256 5.38605 11.7923 5.47992 12.2141C5.68338 13.0667 5.40125 14.0045 4.74365 14.6621ZM5.25618 10.7435C5.06331 10.5513 4.84317 10.3885 4.60285 10.2605L10.2605 4.60293C10.3884 4.84331 10.551 5.06354 10.7431 5.25653C10.936 5.44873 11.1561 5.61146 11.3965 5.73947L5.73885 11.3971C5.61092 11.1567 5.44829 10.9365 5.25618 10.7435ZM12.7711 10.4549C13.4562 10.4549 14.1455 10.7395 14.6621 11.256C15.1919 11.7859 15.4789 12.4963 15.4658 13.1973L15.2189 12.9501C14.9178 12.6497 14.5099 12.4809 14.0846 12.4809C13.6593 12.4809 13.2513 12.6497 12.9503 12.9501C12.8011 13.0989 12.6828 13.2757 12.6023 13.4704C12.5217 13.6651 12.4806 13.8738 12.4813 14.0845C12.4806 14.2952 12.5217 14.504 12.6023 14.6987C12.6828 14.8934 12.8011 15.0702 12.9503 15.2189L13.1973 15.4661C12.4935 15.4736 11.7861 15.192 11.2559 14.6621C10.5983 14.0045 10.3162 13.0667 10.5205 12.2099C10.611 11.7964 10.8194 11.418 11.1205 11.1205C11.5711 10.6699 12.1623 10.4549 12.7711 10.4549ZM11.3959 10.2611C11.1558 10.3889 10.936 10.5514 10.7434 10.7435C10.5514 10.9361 10.3889 11.156 10.261 11.396L8.37752 9.5128L9.51245 8.37787L11.3959 10.2611Z" fill="currentColor" />
                                        </svg> Our About</h3>
                                    <h2 className="cs_section_title cs_fs_50 mb-0 wow fadeInUp">Speedy Repairs Quality Results</h2>
                                </div>
                                <p className="cs_mb_40">We are professional and committed to service" is a statement that highlights the company's professionalism and dedication to providing</p>
                                <div className="cs_features_list cs_mb_32">
                                    <div className="cs_iconbox cs_style_1">
                                        <div className="cs_iconbox_icon cs_center">
                                            <img src={quick_fix} ralt="Fix Icon" />
                                        </div>
                                        <h3 className="cs_iconbox_title cs_fs_24 cs_semibold mb-0">Express Oil Change</h3>
                                    </div>
                                    <div className="cs_iconbox cs_style_1">
                                        <div className="cs_iconbox_icon cs_center">
                                            <img src={quick_fix} alt="Fix Icon" />
                                        </div>
                                        <h3 className="cs_iconbox_title cs_fs_24 cs_semibold mb-0">Quick Fix Tire Rotation</h3>
                                    </div>
                                </div>
                                <ul className="cs_list cs_style_1 cs_fs_18 cs_semibold cs_heading_color cs_heading_font cs_mb_38 p-0">
                                    <li>
                                        <span className="cs_list_icon cs_center cs_accent_color cs_radius_50">
                                            <i className="fa-solid fa-check" /></span>
                                        <span>Driving Quality, Ensuring Safety Every Car</span>
                                    </li>
                                    <li>
                                        <span className="cs_list_icon cs_center cs_accent_color cs_radius_50">
                                            <i className="fa-solid fa-check" /></span>
                                        <span>Comprehensive Diagnostic Check</span>
                                    </li>
                                    <li>
                                        <span className="cs_list_icon cs_center cs_accent_color cs_radius_50">
                                            <i className="fa-solid fa-check" /></span>
                                        <span>We Know Your Car Inside Out</span>
                                    </li>
                                </ul>
                                <div className="cs_about_btns">
                                    <a className="cs_btn cs_style_1 wow fadeInLeft" href="about">
                                        <span>Read more</span>
                                        <i className="fa-solid fa-arrow-right" />
                                    </a>
                                    <div className="cs_avatar cs_style_1 wow fadeInRight">
                                        <div className="cs_avatar_thumbnail cs_center cs_radius_50">
                                            <img src={avatar_1} alt="Avatar" />
                                        </div>
                                        <div className="cs_avatar_info">
                                            <h3 className="cs_heading_color cs_fs_18 cs_semibold mb-0">Ronald Richards</h3>
                                            <p className="cs_fs_14 mb-0">Founder CEO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80" />
            </section>
            {/* End About Section */}
            {/* Start Service Section */}
            <section className="cs_gray_bg cs_bg_filed position-relative" style={{ backgroundImage: `url(${service_bg_1})` }}>
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div className="cs_section_heading cs_style_1 cs_type_1 cs_mb_50">
                        <div className="cs_section_heading_left">
                            <h3 className="cs_section_subtitle cs_fs_18 cs_accent_color cs_semibold text-uppercase cs_mb_12">
                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528ZM11.2557 1.33733C11.7741 0.819199 12.465 0.533066 13.1506 0.533066H13.1967L12.9498 0.780266C12.6463 1.08373 12.4791 1.4864 12.4791 1.91467C12.4791 2.34293 12.6463 2.7456 12.9498 3.04907C13.2533 3.35253 13.6551 3.51813 14.0842 3.51813C14.5133 3.51813 14.9159 3.35147 15.2186 3.04907L15.4655 2.80187C15.4786 3.50293 15.1917 4.21333 14.6618 4.7432C14.0042 5.4008 13.0666 5.68293 12.2095 5.4784C11.7917 5.38533 11.425 5.18373 11.1202 4.87867C10.8154 4.5736 10.6133 4.20693 10.5194 3.78507C10.3159 2.93253 10.5981 1.9944 11.2557 1.3368V1.33733ZM3.78578 5.48C2.93325 5.68373 1.99512 5.40133 1.33752 4.74373C0.807651 4.21387 0.520718 3.50347 0.533785 2.8024L0.780718 3.0496C1.08338 3.352 1.48632 3.51867 1.91512 3.51867C2.34392 3.51867 2.74712 3.352 3.04925 3.0496C3.35272 2.74613 3.51992 2.34347 3.51992 1.9152C3.51992 1.48693 3.35272 1.08427 3.04925 0.780799L2.80232 0.533599C3.51058 0.525866 4.21352 0.807733 4.74365 1.3376C5.40125 1.9952 5.68338 2.93307 5.47912 3.78987C5.38632 4.20747 5.18445 4.57387 4.87912 4.8792C4.57378 5.18453 4.20765 5.38587 3.78578 5.48ZM4.60365 5.73867C4.84373 5.61088 5.06362 5.44832 5.25618 5.25627C5.44814 5.06361 5.61068 4.84374 5.73858 4.60373L7.62205 6.48693L6.48712 7.62187L4.60365 5.73867ZM4.74365 14.6621C4.21378 15.1917 3.51192 15.4752 2.80232 15.4661L3.04925 15.2189C3.35165 14.9163 3.51832 14.5133 3.51832 14.0845C3.51832 13.6557 3.35165 13.2528 3.04925 12.9501C2.74823 12.6497 2.3403 12.4809 1.91498 12.4809C1.48967 12.4809 1.08174 12.6497 0.780718 12.9501L0.533785 13.1973C0.520718 12.4963 0.807651 11.7859 1.33752 11.256C1.99538 10.5987 2.93325 10.3168 3.78978 10.5208C4.20765 10.6139 4.57432 10.8155 4.87912 11.1205C5.18392 11.4256 5.38605 11.7923 5.47992 12.2141C5.68338 13.0667 5.40125 14.0045 4.74365 14.6621ZM5.25618 10.7435C5.06331 10.5513 4.84317 10.3885 4.60285 10.2605L10.2605 4.60293C10.3884 4.84331 10.551 5.06354 10.7431 5.25653C10.936 5.44873 11.1561 5.61146 11.3965 5.73947L5.73885 11.3971C5.61092 11.1567 5.44829 10.9365 5.25618 10.7435ZM12.7711 10.4549C13.4562 10.4549 14.1455 10.7395 14.6621 11.256C15.1919 11.7859 15.4789 12.4963 15.4658 13.1973L15.2189 12.9501C14.9178 12.6497 14.5099 12.4809 14.0846 12.4809C13.6593 12.4809 13.2513 12.6497 12.9503 12.9501C12.8011 13.0989 12.6828 13.2757 12.6023 13.4704C12.5217 13.6651 12.4806 13.8738 12.4813 14.0845C12.4806 14.2952 12.5217 14.504 12.6023 14.6987C12.6828 14.8934 12.8011 15.0702 12.9503 15.2189L13.1973 15.4661C12.4935 15.4736 11.7861 15.192 11.2559 14.6621C10.5983 14.0045 10.3162 13.0667 10.5205 12.2099C10.611 11.7964 10.8194 11.418 11.1205 11.1205C11.5711 10.6699 12.1623 10.4549 12.7711 10.4549ZM11.3959 10.2611C11.1558 10.3889 10.936 10.5514 10.7434 10.7435C10.5514 10.9361 10.3889 11.156 10.261 11.396L8.37752 9.5128L9.51245 8.37787L11.3959 10.2611Z" fill="currentColor" />
                                </svg> Best Services</h3>
                            <h2 className="cs_section_title cs_fs_50 mb-0 wow fadeInDown">Where Your Car Gets Pride the Best Care</h2>
                        </div>
                        <div className="cs_section_heading_right mb-0 wow fadeInDown">Regular tire rotation ensures even wear, extending the life of your tires and improving vehicle performance If your car struggles to start, the lights dim when idling or the battery is over</div>
                    </div>
                </div>
                <div className="cs_slider cs_style_1 cs_slider_gap_30 wow fadeInUp">
                    <div className="container">
                        <div className="cs_slider_container" data-autoplay={0} data-loop={1} data-speed={600} data-center={0} data-variable-width={0} data-xs-slides={1} data-sm-slides={2} data-md-slides={2} data-lg-slides={3} data-add-slides={3} data-slides-per-view="responsive">
                            <div className="cs_slider_wrapper">
                                <div className="cs_slide">
                                    <div className="cs_card cs_style_1">
                                        <div className="cs_card_thumbnail">
                                            <img src={service_img_1} alt="Service Image" />
                                        </div>
                                        <div className="cs_card_info cs_white_bg cs_radius_10 text-center">
                                            <div className="cs_card_icon cs_center cs_heading_bg cs_mb_22">
                                                <img src={service_icon_1} alt="Service Icon" />
                                            </div>
                                            <h3 className="cs_card_title cs_fs_30 cs_mb_8">
                                                <a href="service-details">Brake Safe Inspection</a></h3>
                                            <p className="cs_card_subtitle cs_mb_18">If your car struggles to start the lights dim when idling or the battery over three years old it may be time</p>
                                            <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="service-details">
                                                <span className="cs_btn_text text-uppercase">Read More</span>
                                                <span className="cs_btn_icon cs_center">
                                                    <i className="fa-solid fa-arrow-right" />
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="cs_slide">
                                    <div className="cs_card cs_style_1">
                                        <div className="cs_card_thumbnail">
                                            <img src={service_img_2} alt="Service Image" />
                                        </div>
                                        <div className="cs_card_info cs_white_bg cs_radius_10 text-center">
                                            <div className="cs_card_icon cs_center cs_heading_bg cs_mb_22">
                                                <img src={service_icon_2} alt="Service Icon" />
                                            </div>
                                            <h3 className="cs_card_title cs_fs_30 cs_mb_8">
                                                <a href="service-details">Engine Tune-Up Plus</a></h3>
                                            <p className="cs_card_subtitle cs_mb_18">Proper insulation and ventilation are key  also offer Ice Guard services to prevent ice buildup and damage If your check battery</p>
                                            <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="service-details">
                                                <span className="cs_btn_text text-uppercase">Read More</span>
                                                <span className="cs_btn_icon cs_center">
                                                    <i className="fa-solid fa-arrow-right" />
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="cs_slide">
                                    <div className="cs_card cs_style_1">
                                        <div className="cs_card_thumbnail">
                                            <img src={service_img_3} alt="Service Image" />
                                        </div>
                                        <div className="cs_card_info cs_white_bg cs_radius_10 text-center">
                                            <div className="cs_card_icon cs_center cs_heading_bg cs_mb_22">
                                                <img src={service_icon_3} alt="Service Icon" />
                                            </div>
                                            <h3 className="cs_card_title cs_fs_30 cs_mb_8">
                                                <a href="service-details">Battery Boost Check</a></h3>
                                            <p className="cs_card_subtitle cs_mb_18">If your check battery light comes on it's best to schedule a diagnostic service as soon as possible to identify address</p>
                                            <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="service-details">
                                                <span className="cs_btn_text text-uppercase">Read More</span>
                                                <span className="cs_btn_icon cs_center">
                                                    <i className="fa-solid fa-arrow-right" />
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="cs_slide">
                                    <div className="cs_card cs_style_1">
                                        <div className="cs_card_thumbnail">
                                            <img src={service_img_1} alt="Service Image" />
                                        </div>
                                        <div className="cs_card_info cs_white_bg cs_radius_10 text-center">
                                            <div className="cs_card_icon cs_center cs_heading_bg cs_mb_22">
                                                <img src={service_icon_1} alt="Service Icon" />
                                            </div>
                                            <h3 className="cs_card_title cs_fs_30 cs_mb_8">
                                                <a href="service-details">Brake Safe Inspection</a></h3>
                                            <p className="cs_card_subtitle cs_mb_18">If your car struggles to start the lights dim when idling or the battery over three years old it may be time</p>
                                            <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="service-details">
                                                <span className="cs_btn_text text-uppercase">Read More</span>
                                                <span className="cs_btn_icon cs_center">
                                                    <i className="fa-solid fa-arrow-right" />
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cs_slider_arrows cs_style_1">
                                <div className="cs_arrow_wrap cs_arrow_wrap_left cs_center">
                                    <div className="cs_left_arrow cs_center cs_heading_bg cs_white_color slick-arrow">
                                        <i className="fa-solid fa-arrow-left" />
                                    </div>
                                </div>
                                <div className="cs_arrow_wrap cs_arrow_wrap_right cs_center">
                                    <div className="cs_right_arrow cs_center cs_heading_bg cs_white_color slick-arrow">
                                        <i className="fa-solid fa-arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80" />
            </section>
            {/* End Service Section */}
            {/* Start Why Choose Us Section */}
            <section>
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div className="cs_section_heading cs_style_1 text-center">
                        <h3 className="cs_section_subtitle cs_fs_18 cs_accent_color cs_semibold text-uppercase cs_mb_12">
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528ZM11.2557 1.33733C11.7741 0.819199 12.465 0.533066 13.1506 0.533066H13.1967L12.9498 0.780266C12.6463 1.08373 12.4791 1.4864 12.4791 1.91467C12.4791 2.34293 12.6463 2.7456 12.9498 3.04907C13.2533 3.35253 13.6551 3.51813 14.0842 3.51813C14.5133 3.51813 14.9159 3.35147 15.2186 3.04907L15.4655 2.80187C15.4786 3.50293 15.1917 4.21333 14.6618 4.7432C14.0042 5.4008 13.0666 5.68293 12.2095 5.4784C11.7917 5.38533 11.425 5.18373 11.1202 4.87867C10.8154 4.5736 10.6133 4.20693 10.5194 3.78507C10.3159 2.93253 10.5981 1.9944 11.2557 1.3368V1.33733ZM3.78578 5.48C2.93325 5.68373 1.99512 5.40133 1.33752 4.74373C0.807651 4.21387 0.520718 3.50347 0.533785 2.8024L0.780718 3.0496C1.08338 3.352 1.48632 3.51867 1.91512 3.51867C2.34392 3.51867 2.74712 3.352 3.04925 3.0496C3.35272 2.74613 3.51992 2.34347 3.51992 1.9152C3.51992 1.48693 3.35272 1.08427 3.04925 0.780799L2.80232 0.533599C3.51058 0.525866 4.21352 0.807733 4.74365 1.3376C5.40125 1.9952 5.68338 2.93307 5.47912 3.78987C5.38632 4.20747 5.18445 4.57387 4.87912 4.8792C4.57378 5.18453 4.20765 5.38587 3.78578 5.48ZM4.60365 5.73867C4.84373 5.61088 5.06362 5.44832 5.25618 5.25627C5.44814 5.06361 5.61068 4.84374 5.73858 4.60373L7.62205 6.48693L6.48712 7.62187L4.60365 5.73867ZM4.74365 14.6621C4.21378 15.1917 3.51192 15.4752 2.80232 15.4661L3.04925 15.2189C3.35165 14.9163 3.51832 14.5133 3.51832 14.0845C3.51832 13.6557 3.35165 13.2528 3.04925 12.9501C2.74823 12.6497 2.3403 12.4809 1.91498 12.4809C1.48967 12.4809 1.08174 12.6497 0.780718 12.9501L0.533785 13.1973C0.520718 12.4963 0.807651 11.7859 1.33752 11.256C1.99538 10.5987 2.93325 10.3168 3.78978 10.5208C4.20765 10.6139 4.57432 10.8155 4.87912 11.1205C5.18392 11.4256 5.38605 11.7923 5.47992 12.2141C5.68338 13.0667 5.40125 14.0045 4.74365 14.6621ZM5.25618 10.7435C5.06331 10.5513 4.84317 10.3885 4.60285 10.2605L10.2605 4.60293C10.3884 4.84331 10.551 5.06354 10.7431 5.25653C10.936 5.44873 11.1561 5.61146 11.3965 5.73947L5.73885 11.3971C5.61092 11.1567 5.44829 10.9365 5.25618 10.7435ZM12.7711 10.4549C13.4562 10.4549 14.1455 10.7395 14.6621 11.256C15.1919 11.7859 15.4789 12.4963 15.4658 13.1973L15.2189 12.9501C14.9178 12.6497 14.5099 12.4809 14.0846 12.4809C13.6593 12.4809 13.2513 12.6497 12.9503 12.9501C12.8011 13.0989 12.6828 13.2757 12.6023 13.4704C12.5217 13.6651 12.4806 13.8738 12.4813 14.0845C12.4806 14.2952 12.5217 14.504 12.6023 14.6987C12.6828 14.8934 12.8011 15.0702 12.9503 15.2189L13.1973 15.4661C12.4935 15.4736 11.7861 15.192 11.2559 14.6621C10.5983 14.0045 10.3162 13.0667 10.5205 12.2099C10.611 11.7964 10.8194 11.418 11.1205 11.1205C11.5711 10.6699 12.1623 10.4549 12.7711 10.4549ZM11.3959 10.2611C11.1558 10.3889 10.936 10.5514 10.7434 10.7435C10.5514 10.9361 10.3889 11.156 10.261 11.396L8.37752 9.5128L9.51245 8.37787L11.3959 10.2611Z" fill="currentColor" />
                            </svg>WHY CHOOSE US<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528ZM11.2557 1.33733C11.7741 0.819199 12.465 0.533066 13.1506 0.533066H13.1967L12.9498 0.780266C12.6463 1.08373 12.4791 1.4864 12.4791 1.91467C12.4791 2.34293 12.6463 2.7456 12.9498 3.04907C13.2533 3.35253 13.6551 3.51813 14.0842 3.51813C14.5133 3.51813 14.9159 3.35147 15.2186 3.04907L15.4655 2.80187C15.4786 3.50293 15.1917 4.21333 14.6618 4.7432C14.0042 5.4008 13.0666 5.68293 12.2095 5.4784C11.7917 5.38533 11.425 5.18373 11.1202 4.87867C10.8154 4.5736 10.6133 4.20693 10.5194 3.78507C10.3159 2.93253 10.5981 1.9944 11.2557 1.3368V1.33733ZM3.78578 5.48C2.93325 5.68373 1.99512 5.40133 1.33752 4.74373C0.807651 4.21387 0.520718 3.50347 0.533785 2.8024L0.780718 3.0496C1.08338 3.352 1.48632 3.51867 1.91512 3.51867C2.34392 3.51867 2.74712 3.352 3.04925 3.0496C3.35272 2.74613 3.51992 2.34347 3.51992 1.9152C3.51992 1.48693 3.35272 1.08427 3.04925 0.780799L2.80232 0.533599C3.51058 0.525866 4.21352 0.807733 4.74365 1.3376C5.40125 1.9952 5.68338 2.93307 5.47912 3.78987C5.38632 4.20747 5.18445 4.57387 4.87912 4.8792C4.57378 5.18453 4.20765 5.38587 3.78578 5.48ZM4.60365 5.73867C4.84373 5.61088 5.06362 5.44832 5.25618 5.25627C5.44814 5.06361 5.61068 4.84374 5.73858 4.60373L7.62205 6.48693L6.48712 7.62187L4.60365 5.73867ZM4.74365 14.6621C4.21378 15.1917 3.51192 15.4752 2.80232 15.4661L3.04925 15.2189C3.35165 14.9163 3.51832 14.5133 3.51832 14.0845C3.51832 13.6557 3.35165 13.2528 3.04925 12.9501C2.74823 12.6497 2.3403 12.4809 1.91498 12.4809C1.48967 12.4809 1.08174 12.6497 0.780718 12.9501L0.533785 13.1973C0.520718 12.4963 0.807651 11.7859 1.33752 11.256C1.99538 10.5987 2.93325 10.3168 3.78978 10.5208C4.20765 10.6139 4.57432 10.8155 4.87912 11.1205C5.18392 11.4256 5.38605 11.7923 5.47992 12.2141C5.68338 13.0667 5.40125 14.0045 4.74365 14.6621ZM5.25618 10.7435C5.06331 10.5513 4.84317 10.3885 4.60285 10.2605L10.2605 4.60293C10.3884 4.84331 10.551 5.06354 10.7431 5.25653C10.936 5.44873 11.1561 5.61146 11.3965 5.73947L5.73885 11.3971C5.61092 11.1567 5.44829 10.9365 5.25618 10.7435ZM12.7711 10.4549C13.4562 10.4549 14.1455 10.7395 14.6621 11.256C15.1919 11.7859 15.4789 12.4963 15.4658 13.1973L15.2189 12.9501C14.9178 12.6497 14.5099 12.4809 14.0846 12.4809C13.6593 12.4809 13.2513 12.6497 12.9503 12.9501C12.8011 13.0989 12.6828 13.2757 12.6023 13.4704C12.5217 13.6651 12.4806 13.8738 12.4813 14.0845C12.4806 14.2952 12.5217 14.504 12.6023 14.6987C12.6828 14.8934 12.8011 15.0702 12.9503 15.2189L13.1973 15.4661C12.4935 15.4736 11.7861 15.192 11.2559 14.6621C10.5983 14.0045 10.3162 13.0667 10.5205 12.2099C10.611 11.7964 10.8194 11.418 11.1205 11.1205C11.5711 10.6699 12.1623 10.4549 12.7711 10.4549ZM11.3959 10.2611C11.1558 10.3889 10.936 10.5514 10.7434 10.7435C10.5514 10.9361 10.3889 11.156 10.261 11.396L8.37752 9.5128L9.51245 8.37787L11.3959 10.2611Z" fill="currentColor" />
                            </svg></h3>
                        <h2 className="cs_section_title cs_fs_50 mb-0 wow pulse">Because Your Car Deserves <br /> the Best</h2>
                    </div>
                    <div className="cs_height_27 cs_height_lg_65" />
                    <div className="row cs_row_gap_40 cs_gap_y_40 align-items-center">
                        <div className="col-xl-4 wow fadeInLeft">
                            <div className="cs_features_thumbnail_1 position-relative">
                                <img src={feature_img_1} alt="Feature Image" />
                            </div>
                        </div>
                        <div className="col-xl-4 wow fadeInDown">
                            <p className="cs_feature_text cs_mb_30">Squeaking, grinding noises, or a spongy brake pedal are car common indicators that your brakes need attention Slow an  engine cranking.</p>
                            <div className="cs_iconbox cs_style_2 cs_mb_12">
                                <div className="cs_iconbox_icon cs_gray_bg cs_center cs_radius_50">
                                    <img src={caricon} alt="Car Icon" />
                                </div>
                                <div className="cs_iconbox_info">
                                    <h3 className="cs_iconbox_title cs_fs_18 cs_semibold cs_mb_2">Car Protection &amp; Fitness</h3>
                                    <p className="cs_iconbox_subtitle cs_fs_12 mb-0">Regular oil changes are essential for keeping the asd engine lubricated reducing.</p>
                                </div>
                            </div>
                            <div className="cs_iconbox cs_style_2 cs_mb_12">
                                <div className="cs_iconbox_icon cs_gray_bg cs_center cs_radius_50">
                                    <img src={engineicon} alt="Engine Icon" />
                                </div>
                                <div className="cs_iconbox_info">
                                    <h3 className="cs_iconbox_title cs_fs_18 cs_semibold cs_mb_2">Expert Engine &amp; Balancing</h3>
                                    <p className="cs_iconbox_subtitle cs_fs_12 mb-0">The old engine oil is drained and replaced with fresh oil, and the oil filter is also replaced.</p>
                                </div>
                            </div>
                            <div className="cs_iconbox cs_style_2 cs_mb_36">
                                <div className="cs_iconbox_icon cs_gray_bg cs_center cs_radius_50">
                                    <img src={gear_icon_2} alt="Gear Icon" />
                                </div>
                                <div className="cs_iconbox_info">
                                    <h3 className="cs_iconbox_title cs_fs_18 cs_semibold cs_mb_2">Wing shield &amp; glass Repair</h3>
                                    <p className="cs_iconbox_subtitle cs_fs_12 mb-0">The braking system is crucial for safety requiring car regular maintenance to ensure optimal</p>
                                </div>
                            </div>
                            <a className="cs_btn cs_style_1" href="about">
                                <span>Read more</span><i className="fa-solid fa-arrow-right" />
                            </a>
                        </div>
                        <div className="col-xl-4 wow fadeInRight">
                            <div className="cs_features_thumbnail_2 position-relative">
                                <img src={feature_img_2} alt="Feature Image" />
                                <div className="cs_features_thumbnail_3">
                                    <img src={feature_img_3} alt="Feature Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_105" />
            </section>
            {/* End Why Choose Us Section */}
            {/* Start Before After Section */}
            <section className="cs_before_after_slider cs_style_1 position-relative">
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div className="cs_before_after_overlay cs_heading_bg cs_bg_filed cs_headiong_bg" style={{ backgroundImage: `url(${before_after_bg_1})` }} />
                    <div className="cs_section_heading cs_style_1 cs_mb_47 text-center">
                        <h3 className="cs_section_subtitle cs_fs_18 cs_white_color cs_semibold text-uppercase cs_mb_12 wow fadeInDown">
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528ZM11.2557 1.33733C11.7741 0.819199 12.465 0.533066 13.1506 0.533066H13.1967L12.9498 0.780266C12.6463 1.08373 12.4791 1.4864 12.4791 1.91467C12.4791 2.34293 12.6463 2.7456 12.9498 3.04907C13.2533 3.35253 13.6551 3.51813 14.0842 3.51813C14.5133 3.51813 14.9159 3.35147 15.2186 3.04907L15.4655 2.80187C15.4786 3.50293 15.1917 4.21333 14.6618 4.7432C14.0042 5.4008 13.0666 5.68293 12.2095 5.4784C11.7917 5.38533 11.425 5.18373 11.1202 4.87867C10.8154 4.5736 10.6133 4.20693 10.5194 3.78507C10.3159 2.93253 10.5981 1.9944 11.2557 1.3368V1.33733ZM3.78578 5.48C2.93325 5.68373 1.99512 5.40133 1.33752 4.74373C0.807651 4.21387 0.520718 3.50347 0.533785 2.8024L0.780718 3.0496C1.08338 3.352 1.48632 3.51867 1.91512 3.51867C2.34392 3.51867 2.74712 3.352 3.04925 3.0496C3.35272 2.74613 3.51992 2.34347 3.51992 1.9152C3.51992 1.48693 3.35272 1.08427 3.04925 0.780799L2.80232 0.533599C3.51058 0.525866 4.21352 0.807733 4.74365 1.3376C5.40125 1.9952 5.68338 2.93307 5.47912 3.78987C5.38632 4.20747 5.18445 4.57387 4.87912 4.8792C4.57378 5.18453 4.20765 5.38587 3.78578 5.48ZM4.60365 5.73867C4.84373 5.61088 5.06362 5.44832 5.25618 5.25627C5.44814 5.06361 5.61068 4.84374 5.73858 4.60373L7.62205 6.48693L6.48712 7.62187L4.60365 5.73867ZM4.74365 14.6621C4.21378 15.1917 3.51192 15.4752 2.80232 15.4661L3.04925 15.2189C3.35165 14.9163 3.51832 14.5133 3.51832 14.0845C3.51832 13.6557 3.35165 13.2528 3.04925 12.9501C2.74823 12.6497 2.3403 12.4809 1.91498 12.4809C1.48967 12.4809 1.08174 12.6497 0.780718 12.9501L0.533785 13.1973C0.520718 12.4963 0.807651 11.7859 1.33752 11.256C1.99538 10.5987 2.93325 10.3168 3.78978 10.5208C4.20765 10.6139 4.57432 10.8155 4.87912 11.1205C5.18392 11.4256 5.38605 11.7923 5.47992 12.2141C5.68338 13.0667 5.40125 14.0045 4.74365 14.6621ZM5.25618 10.7435C5.06331 10.5513 4.84317 10.3885 4.60285 10.2605L10.2605 4.60293C10.3884 4.84331 10.551 5.06354 10.7431 5.25653C10.936 5.44873 11.1561 5.61146 11.3965 5.73947L5.73885 11.3971C5.61092 11.1567 5.44829 10.9365 5.25618 10.7435ZM12.7711 10.4549C13.4562 10.4549 14.1455 10.7395 14.6621 11.256C15.1919 11.7859 15.4789 12.4963 15.4658 13.1973L15.2189 12.9501C14.9178 12.6497 14.5099 12.4809 14.0846 12.4809C13.6593 12.4809 13.2513 12.6497 12.9503 12.9501C12.8011 13.0989 12.6828 13.2757 12.6023 13.4704C12.5217 13.6651 12.4806 13.8738 12.4813 14.0845C12.4806 14.2952 12.5217 14.504 12.6023 14.6987C12.6828 14.8934 12.8011 15.0702 12.9503 15.2189L13.1973 15.4661C12.4935 15.4736 11.7861 15.192 11.2559 14.6621C10.5983 14.0045 10.3162 13.0667 10.5205 12.2099C10.611 11.7964 10.8194 11.418 11.1205 11.1205C11.5711 10.6699 12.1623 10.4549 12.7711 10.4549ZM11.3959 10.2611C11.1558 10.3889 10.936 10.5514 10.7434 10.7435C10.5514 10.9361 10.3889 11.156 10.261 11.396L8.37752 9.5128L9.51245 8.37787L11.3959 10.2611Z" fill="currentColor" />
                            </svg>Before &amp; after<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528ZM11.2557 1.33733C11.7741 0.819199 12.465 0.533066 13.1506 0.533066H13.1967L12.9498 0.780266C12.6463 1.08373 12.4791 1.4864 12.4791 1.91467C12.4791 2.34293 12.6463 2.7456 12.9498 3.04907C13.2533 3.35253 13.6551 3.51813 14.0842 3.51813C14.5133 3.51813 14.9159 3.35147 15.2186 3.04907L15.4655 2.80187C15.4786 3.50293 15.1917 4.21333 14.6618 4.7432C14.0042 5.4008 13.0666 5.68293 12.2095 5.4784C11.7917 5.38533 11.425 5.18373 11.1202 4.87867C10.8154 4.5736 10.6133 4.20693 10.5194 3.78507C10.3159 2.93253 10.5981 1.9944 11.2557 1.3368V1.33733ZM3.78578 5.48C2.93325 5.68373 1.99512 5.40133 1.33752 4.74373C0.807651 4.21387 0.520718 3.50347 0.533785 2.8024L0.780718 3.0496C1.08338 3.352 1.48632 3.51867 1.91512 3.51867C2.34392 3.51867 2.74712 3.352 3.04925 3.0496C3.35272 2.74613 3.51992 2.34347 3.51992 1.9152C3.51992 1.48693 3.35272 1.08427 3.04925 0.780799L2.80232 0.533599C3.51058 0.525866 4.21352 0.807733 4.74365 1.3376C5.40125 1.9952 5.68338 2.93307 5.47912 3.78987C5.38632 4.20747 5.18445 4.57387 4.87912 4.8792C4.57378 5.18453 4.20765 5.38587 3.78578 5.48ZM4.60365 5.73867C4.84373 5.61088 5.06362 5.44832 5.25618 5.25627C5.44814 5.06361 5.61068 4.84374 5.73858 4.60373L7.62205 6.48693L6.48712 7.62187L4.60365 5.73867ZM4.74365 14.6621C4.21378 15.1917 3.51192 15.4752 2.80232 15.4661L3.04925 15.2189C3.35165 14.9163 3.51832 14.5133 3.51832 14.0845C3.51832 13.6557 3.35165 13.2528 3.04925 12.9501C2.74823 12.6497 2.3403 12.4809 1.91498 12.4809C1.48967 12.4809 1.08174 12.6497 0.780718 12.9501L0.533785 13.1973C0.520718 12.4963 0.807651 11.7859 1.33752 11.256C1.99538 10.5987 2.93325 10.3168 3.78978 10.5208C4.20765 10.6139 4.57432 10.8155 4.87912 11.1205C5.18392 11.4256 5.38605 11.7923 5.47992 12.2141C5.68338 13.0667 5.40125 14.0045 4.74365 14.6621ZM5.25618 10.7435C5.06331 10.5513 4.84317 10.3885 4.60285 10.2605L10.2605 4.60293C10.3884 4.84331 10.551 5.06354 10.7431 5.25653C10.936 5.44873 11.1561 5.61146 11.3965 5.73947L5.73885 11.3971C5.61092 11.1567 5.44829 10.9365 5.25618 10.7435ZM12.7711 10.4549C13.4562 10.4549 14.1455 10.7395 14.6621 11.256C15.1919 11.7859 15.4789 12.4963 15.4658 13.1973L15.2189 12.9501C14.9178 12.6497 14.5099 12.4809 14.0846 12.4809C13.6593 12.4809 13.2513 12.6497 12.9503 12.9501C12.8011 13.0989 12.6828 13.2757 12.6023 13.4704C12.5217 13.6651 12.4806 13.8738 12.4813 14.0845C12.4806 14.2952 12.5217 14.504 12.6023 14.6987C12.6828 14.8934 12.8011 15.0702 12.9503 15.2189L13.1973 15.4661C12.4935 15.4736 11.7861 15.192 11.2559 14.6621C10.5983 14.0045 10.3162 13.0667 10.5205 12.2099C10.611 11.7964 10.8194 11.418 11.1205 11.1205C11.5711 10.6699 12.1623 10.4549 12.7711 10.4549ZM11.3959 10.2611C11.1558 10.3889 10.936 10.5514 10.7434 10.7435C10.5514 10.9361 10.3889 11.156 10.261 11.396L8.37752 9.5128L9.51245 8.37787L11.3959 10.2611Z" fill="currentColor" />
                            </svg></h3>
                        <h2 className="cs_section_title cs_fs_50 cs_white_color mb-0 wow fadeInUp">Recent Completed Projects</h2>
                    </div>
                    <div className="cs_before_after-in">
                        <div className="cs_before_after">
                            <div className="cs_after cs_single_slide cs_bg_filed" style={{ backgroundImage: `url(${after_img_1})` }}>
                                <div className="cs_after_badge cs_accent_bg cs_fs_20 cs_semibold cs_white_color position-absolute">
                                    After</div>
                            </div>
                            <div className="cs_before cs_single_slide cs_bg_filed" style={{ backgroundImage: `url(${before_img_1})` }}>
                                <div className="cs_before_badge cs_accent_bg cs_fs_20 cs_semibold cs_white_color position-absolute">
                                    Before</div>
                            </div>
                            <div className="cs_handle_before_after">
                                <span />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Before After Section */}
            {/* Start Portfolio Section */}
            <section className="cs_tabs cs_style_1 position-relative">
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div className="cs_section_heading cs_style_1 cs_type_1">
                        <div className="cs_section_heading_left">
                            <h3 className="cs_section_subtitle cs_fs_18 cs_accent_color cs_semibold text-uppercase cs_mb_12">
                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528ZM11.2557 1.33733C11.7741 0.819199 12.465 0.533066 13.1506 0.533066H13.1967L12.9498 0.780266C12.6463 1.08373 12.4791 1.4864 12.4791 1.91467C12.4791 2.34293 12.6463 2.7456 12.9498 3.04907C13.2533 3.35253 13.6551 3.51813 14.0842 3.51813C14.5133 3.51813 14.9159 3.35147 15.2186 3.04907L15.4655 2.80187C15.4786 3.50293 15.1917 4.21333 14.6618 4.7432C14.0042 5.4008 13.0666 5.68293 12.2095 5.4784C11.7917 5.38533 11.425 5.18373 11.1202 4.87867C10.8154 4.5736 10.6133 4.20693 10.5194 3.78507C10.3159 2.93253 10.5981 1.9944 11.2557 1.3368V1.33733ZM3.78578 5.48C2.93325 5.68373 1.99512 5.40133 1.33752 4.74373C0.807651 4.21387 0.520718 3.50347 0.533785 2.8024L0.780718 3.0496C1.08338 3.352 1.48632 3.51867 1.91512 3.51867C2.34392 3.51867 2.74712 3.352 3.04925 3.0496C3.35272 2.74613 3.51992 2.34347 3.51992 1.9152C3.51992 1.48693 3.35272 1.08427 3.04925 0.780799L2.80232 0.533599C3.51058 0.525866 4.21352 0.807733 4.74365 1.3376C5.40125 1.9952 5.68338 2.93307 5.47912 3.78987C5.38632 4.20747 5.18445 4.57387 4.87912 4.8792C4.57378 5.18453 4.20765 5.38587 3.78578 5.48ZM4.60365 5.73867C4.84373 5.61088 5.06362 5.44832 5.25618 5.25627C5.44814 5.06361 5.61068 4.84374 5.73858 4.60373L7.62205 6.48693L6.48712 7.62187L4.60365 5.73867ZM4.74365 14.6621C4.21378 15.1917 3.51192 15.4752 2.80232 15.4661L3.04925 15.2189C3.35165 14.9163 3.51832 14.5133 3.51832 14.0845C3.51832 13.6557 3.35165 13.2528 3.04925 12.9501C2.74823 12.6497 2.3403 12.4809 1.91498 12.4809C1.48967 12.4809 1.08174 12.6497 0.780718 12.9501L0.533785 13.1973C0.520718 12.4963 0.807651 11.7859 1.33752 11.256C1.99538 10.5987 2.93325 10.3168 3.78978 10.5208C4.20765 10.6139 4.57432 10.8155 4.87912 11.1205C5.18392 11.4256 5.38605 11.7923 5.47992 12.2141C5.68338 13.0667 5.40125 14.0045 4.74365 14.6621ZM5.25618 10.7435C5.06331 10.5513 4.84317 10.3885 4.60285 10.2605L10.2605 4.60293C10.3884 4.84331 10.551 5.06354 10.7431 5.25653C10.936 5.44873 11.1561 5.61146 11.3965 5.73947L5.73885 11.3971C5.61092 11.1567 5.44829 10.9365 5.25618 10.7435ZM12.7711 10.4549C13.4562 10.4549 14.1455 10.7395 14.6621 11.256C15.1919 11.7859 15.4789 12.4963 15.4658 13.1973L15.2189 12.9501C14.9178 12.6497 14.5099 12.4809 14.0846 12.4809C13.6593 12.4809 13.2513 12.6497 12.9503 12.9501C12.8011 13.0989 12.6828 13.2757 12.6023 13.4704C12.5217 13.6651 12.4806 13.8738 12.4813 14.0845C12.4806 14.2952 12.5217 14.504 12.6023 14.6987C12.6828 14.8934 12.8011 15.0702 12.9503 15.2189L13.1973 15.4661C12.4935 15.4736 11.7861 15.192 11.2559 14.6621C10.5983 14.0045 10.3162 13.0667 10.5205 12.2099C10.611 11.7964 10.8194 11.418 11.1205 11.1205C11.5711 10.6699 12.1623 10.4549 12.7711 10.4549ZM11.3959 10.2611C11.1558 10.3889 10.936 10.5514 10.7434 10.7435C10.5514 10.9361 10.3889 11.156 10.261 11.396L8.37752 9.5128L9.51245 8.37787L11.3959 10.2611Z" fill="currentColor" />
                                </svg>Popular Project</h3>
                            <h2 className="cs_section_title cs_fs_50 mb-0 wow fadeInUp">Where Your Car Gets Pride the Best Care</h2>
                        </div>
                    </div>
                    <ul className="cs_tab_links cs_style_1 cs_heading_color cs_mp_0 wow fadeInDown">
                        <li className="active"><a href="#all">All</a></li>
                        <li><a href="#Hail_damage">Hail Damage</a></li>
                        <li><a href="#Flood_insurance">Flood Insurance</a></li>
                        <li><a href="#Motorcycle_towing">Motorcycle Towing</a></li>
                    </ul>
                </div>
                <div className="container-fluid p-0">
                    <div className="cs_tab_body">
                        <div className="cs_tab active" id="all">
                            <div className="row cs_row_gap_60 cs_gap_y_30">
                                <div className="col-xl-3 col-md-6 wow fadeInLeft">
                                    <div className="cs_card cs_style_2 position-relative">
                                        <a className="cs_card_thumbnail position-relative" href="portfolio-details">
                                            <img src={portfolio_img_1} alt="Portfolio Image" />
                                        </a>
                                        <div className="cs_card_info cs_white_bg">
                                            <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_15"><a href="portfolio-details">Suspension Check-Up</a></h3>
                                            <p className="cs_card_subtitle">Proper insulation and ventilation are key  also offer Ice Guard services to prevent ice buildup and damage.</p>
                                            <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="portfolio-details">
                                                <span className="cs_btn_text text-uppercase">Read More</span>
                                                <span className="cs_btn_icon cs_center">
                                                    <i className="fa-solid fa-arrow-right" />
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 wow fadeInDown">
                                    <div className="cs_card cs_style_2 position-relative">
                                        <a className="cs_card_thumbnail position-relative" href="portfolio-details">
                                            <img src={portfolio_img_2} alt="Portfolio Image" />
                                        </a>
                                        <div className="cs_card_info cs_white_bg">
                                            <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_15"><a href="portfolio-details">Exhaust System Service</a></h3>
                                            <p className="cs_card_subtitle">Proper insulation and ventilation are key  also offer Ice Guard services to prevent ice buildup and damage.</p>
                                            <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="portfolio-details">
                                                <span className="cs_btn_text text-uppercase">Read More</span>
                                                <span className="cs_btn_icon cs_center">
                                                    <i className="fa-solid fa-arrow-right" />
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 wow fadeInUp">
                                    <div className="cs_card cs_style_2 position-relative">
                                        <a className="cs_card_thumbnail position-relative" href="portfolio-details">
                                            <img src={portfolio_img_3} alt="Portfolio Image" />
                                        </a>
                                        <div className="cs_card_info cs_white_bg">
                                            <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_15"><a href="portfolio-details">Full Vehicle Inspection</a></h3>
                                            <p className="cs_card_subtitle">Proper insulation and ventilation are key  also offer Ice Guard services to prevent ice buildup and damage.</p>
                                            <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="portfolio-details">
                                                <span className="cs_btn_text text-uppercase">Read More</span>
                                                <span className="cs_btn_icon cs_center">
                                                    <i className="fa-solid fa-arrow-right" />
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 wow fadeInRight">
                                    <div className="cs_card cs_style_2 position-relative">
                                        <a className="cs_card_thumbnail position-relative" href="portfolio-details">
                                            <img src={portfolio_img_4} alt="Portfolio Image" />
                                        </a>
                                        <div className="cs_card_info cs_white_bg">
                                            <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_15"><a href="portfolio-details">Complete Brake Service</a></h3>
                                            <p className="cs_card_subtitle">Proper insulation and ventilation are key  also offer Ice Guard services to prevent ice buildup and damage.</p>
                                            <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="portfolio-details">
                                                <span className="cs_btn_text text-uppercase">Read More</span>
                                                <span className="cs_btn_icon cs_center">
                                                    <i className="fa-solid fa-arrow-right" />
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs_tab" id="Hail_damage">
                            <div className="row cs_row_gap_60 cs_gap_y_30">
                                <div className="col-xl-3 col-md-6">
                                    <div className="cs_card cs_style_2 position-relative">
                                        <a className="cs_card_thumbnail position-relative" href="portfolio-details">
                                            <img src={portfolio_img_1} alt="Portfolio Image" />
                                        </a>
                                        <div className="cs_card_info cs_white_bg">
                                            <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_15"><a href="portfolio-details">Suspension Check-Up</a></h3>
                                            <p className="cs_card_subtitle">Proper insulation and ventilation are key  also offer Ice Guard services to prevent ice buildup and damage.</p>
                                            <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="portfolio-details">
                                                <span className="cs_btn_text text-uppercase">Read More</span>
                                                <span className="cs_btn_icon cs_center">
                                                    <i className="fa-solid fa-arrow-right" />
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="cs_card cs_style_2 position-relative">
                                        <a className="cs_card_thumbnail position-relative" href="portfolio-details">
                                            <img src={portfolio_img_2} alt="Portfolio Image" />
                                        </a>
                                        <div className="cs_card_info cs_white_bg">
                                            <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_15"><a href="portfolio-details">Exhaust System Service</a></h3>
                                            <p className="cs_card_subtitle">Proper insulation and ventilation are key  also offer Ice Guard services to prevent ice buildup and damage.</p>
                                            <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="portfolio-details">
                                                <span className="cs_btn_text text-uppercase">Read More</span>
                                                <span className="cs_btn_icon cs_center">
                                                    <i className="fa-solid fa-arrow-right" />
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="cs_card cs_style_2 position-relative">
                                        <a className="cs_card_thumbnail position-relative" href="portfolio-details">
                                            <img src={portfolio_img_3} alt="Portfolio Image" />
                                        </a>
                                        <div className="cs_card_info cs_white_bg">
                                            <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_15"><a href="portfolio-details">Full Vehicle Inspection</a></h3>
                                            <p className="cs_card_subtitle">Proper insulation and ventilation are key  also offer Ice Guard services to prevent ice buildup and damage.</p>
                                            <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="portfolio-details">
                                                <span className="cs_btn_text text-uppercase">Read More</span>
                                                <span className="cs_btn_icon cs_center">
                                                    <i className="fa-solid fa-arrow-right" />
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="cs_card cs_style_2 position-relative">
                                        <a className="cs_card_thumbnail position-relative" href="portfolio-details">
                                            <img src={portfolio_img_4} alt="Portfolio Image" />
                                        </a>
                                        <div className="cs_card_info cs_white_bg">
                                            <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_15"><a href="portfolio-details">Complete Brake Service</a></h3>
                                            <p className="cs_card_subtitle">Proper insulation and ventilation are key  also offer Ice Guard services to prevent ice buildup and damage.</p>
                                            <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="portfolio-details">
                                                <span className="cs_btn_text text-uppercase">Read More</span>
                                                <span className="cs_btn_icon cs_center">
                                                    <i className="fa-solid fa-arrow-right" />
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs_tab" id="Flood_insurance">
                            <div className="row cs_row_gap_60 cs_gap_y_30">
                                <div className="col-xl-3 col-md-6">
                                    <div className="cs_card cs_style_2 position-relative">
                                        <a className="cs_card_thumbnail position-relative" href="portfolio-details">
                                            <img src={portfolio_img_1} alt="Portfolio Image" />
                                        </a>
                                        <div className="cs_card_info cs_white_bg">
                                            <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_15"><a href="portfolio-details">Suspension Check-Up</a></h3>
                                            <p className="cs_card_subtitle">Proper insulation and ventilation are key  also offer Ice Guard services to prevent ice buildup and damage.</p>
                                            <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="portfolio-details">
                                                <span className="cs_btn_text text-uppercase">Read More</span>
                                                <span className="cs_btn_icon cs_center">
                                                    <i className="fa-solid fa-arrow-right" />
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="cs_card cs_style_2 position-relative">
                                        <a className="cs_card_thumbnail position-relative" href="portfolio-details">
                                            <img src={portfolio_img_2} alt="Portfolio Image" />
                                        </a>
                                        <div className="cs_card_info cs_white_bg">
                                            <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_15"><a href="portfolio-details">Exhaust System Service</a></h3>
                                            <p className="cs_card_subtitle">Proper insulation and ventilation are key  also offer Ice Guard services to prevent ice buildup and damage.</p>
                                            <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="portfolio-details">
                                                <span className="cs_btn_text text-uppercase">Read More</span>
                                                <span className="cs_btn_icon cs_center">
                                                    <i className="fa-solid fa-arrow-right" />
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="cs_card cs_style_2 position-relative">
                                        <a className="cs_card_thumbnail position-relative" href="portfolio-details">
                                            <img src={portfolio_img_3} alt="Portfolio Image" />
                                        </a>
                                        <div className="cs_card_info cs_white_bg">
                                            <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_15"><a href="portfolio-details">Full Vehicle Inspection</a></h3>
                                            <p className="cs_card_subtitle">Proper insulation and ventilation are key  also offer Ice Guard services to prevent ice buildup and damage.</p>
                                            <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="portfolio-details">
                                                <span className="cs_btn_text text-uppercase">Read More</span>
                                                <span className="cs_btn_icon cs_center">
                                                    <i className="fa-solid fa-arrow-right" />
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="cs_card cs_style_2 position-relative">
                                        <a className="cs_card_thumbnail position-relative" href="portfolio-details">
                                            <img src={portfolio_img_4} alt="Portfolio Image" />
                                        </a>
                                        <div className="cs_card_info cs_white_bg">
                                            <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_15"><a href="portfolio-details">Complete Brake Service</a></h3>
                                            <p className="cs_card_subtitle">Proper insulation and ventilation are key  also offer Ice Guard services to prevent ice buildup and damage.</p>
                                            <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="portfolio-details">
                                                <span className="cs_btn_text text-uppercase">Read More</span>
                                                <span className="cs_btn_icon cs_center">
                                                    <i className="fa-solid fa-arrow-right" />
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs_tab" id="Motorcycle_towing">
                            <div className="row cs_row_gap_60 cs_gap_y_30">
                                <div className="col-xl-3 col-md-6">
                                    <div className="cs_card cs_style_2 position-relative">
                                        <a className="cs_card_thumbnail position-relative" href="portfolio-details">
                                            <img src={portfolio_img_1} alt="Portfolio Image" />
                                        </a>
                                        <div className="cs_card_info cs_white_bg">
                                            <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_15"><a href="portfolio-details">Suspension Check-Up</a></h3>
                                            <p className="cs_card_subtitle">Proper insulation and ventilation are key  also offer Ice Guard services to prevent ice buildup and damage.</p>
                                            <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="portfolio-details">
                                                <span className="cs_btn_text text-uppercase">Read More</span>
                                                <span className="cs_btn_icon cs_center">
                                                    <i className="fa-solid fa-arrow-right" />
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="cs_card cs_style_2 position-relative">
                                        <a className="cs_card_thumbnail position-relative" href="portfolio-details">
                                            <img src={portfolio_img_2} alt="Portfolio Image" />
                                        </a>
                                        <div className="cs_card_info cs_white_bg">
                                            <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_15"><a href="portfolio-details">Exhaust System Service</a></h3>
                                            <p className="cs_card_subtitle">Proper insulation and ventilation are key  also offer Ice Guard services to prevent ice buildup and damage.</p>
                                            <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="portfolio-details">
                                                <span className="cs_btn_text text-uppercase">Read More</span>
                                                <span className="cs_btn_icon cs_center">
                                                    <i className="fa-solid fa-arrow-right" />
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="cs_card cs_style_2 position-relative">
                                        <a className="cs_card_thumbnail position-relative" href="portfolio-details">
                                            <img src={portfolio_img_3} alt="Portfolio Image" />
                                        </a>
                                        <div className="cs_card_info cs_white_bg">
                                            <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_15"><a href="portfolio-details">Full Vehicle Inspection</a></h3>
                                            <p className="cs_card_subtitle">Proper insulation and ventilation are key  also offer Ice Guard services to prevent ice buildup and damage.</p>
                                            <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="portfolio-details">
                                                <span className="cs_btn_text text-uppercase">Read More</span>
                                                <span className="cs_btn_icon cs_center">
                                                    <i className="fa-solid fa-arrow-right" />
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="cs_card cs_style_2 position-relative">
                                        <a className="cs_card_thumbnail position-relative" href="portfolio-details">
                                            <img src={portfolio_img_4} alt="Portfolio Image" />
                                        </a>
                                        <div className="cs_card_info cs_white_bg">
                                            <h3 className="cs_card_title cs_fs_24 cs_semibold cs_mb_15"><a href="portfolio-details">Complete Brake Service</a></h3>
                                            <p className="cs_card_subtitle">Proper insulation and ventilation are key  also offer Ice Guard services to prevent ice buildup and damage.</p>
                                            <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="portfolio-details">
                                                <span className="cs_btn_text text-uppercase">Read More</span>
                                                <span className="cs_btn_icon cs_center">
                                                    <i className="fa-solid fa-arrow-right" />
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80" />
            </section>
            {/* End Portfolio Section */}
            {/* Start Contact Section */}
            <section>
                <div className="container">
                    <div className="row cs_row_gap_40 cs_gap_y_40">
                        <div className="col-lg-6">
                            <div className="cs_contact_info_wrapper position-relative">
                                <div className="cs_contact_info cs_white_bg wow fadeInDown">
                                    <div className="cs_accent_bg cs_line_shape cs_mb_32" />
                                    <h3 className="cs_contact_info_title cs_fs_30 cs_mb_12">Contact Information</h3>
                                    <p className="cs_mb_25">It is a long established fact that a reader be by the readable distracted  layout.</p>
                                    <div className="cs_iconbox cs_style_1 cs_type_1 cs_mb_18">
                                        <div className="cs_iconbox_icon cs_center">
                                            <img src={location} alt="Location Icon" />
                                        </div>
                                        <div className="cs_iconbox_info">
                                            <p className="mb-0">Nashik, Maharashtra</p>
                                        </div>
                                    </div>
                                    <div className="cs_iconbox cs_style_1 cs_type_1 cs_mb_18">
                                        <div className="cs_iconbox_icon cs_center">
                                            <img src={email} alt="Mail Icon" />
                                        </div>
                                        <div className="cs_iconbox_info">
                                            {/* <a href="mailTo:cripar@gmail.com">Cripar@gmail.com</a><br /> */}
                                            <a href="mailTo:techshahnawaz01@gmail.com">techshahnawaz01@gmail.com</a>
                                        </div>
                                    </div>
                                    <div className="cs_iconbox cs_style_1 cs_type_1">
                                        <div className="cs_iconbox_icon cs_center">
                                            <img src={phone} alt="Phone Icon" />
                                        </div>
                                        <div className="cs_iconbox_info">
                                            <a href="tel:8002781578">8002781578</a><br />
                                            {/* <a href="tel:(123)2154546455">(123) 2154 5464 55</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="cs_contact_thumbnail wow fadeInUp">
                                    <img src={contact_img_1} alt="Contact Image" />
                                </div>
                                <div className="cs_client_info_wapper cs_white_bg">
                                    <h3 className="cs_fs_30 cs_accent_color">5,400</h3>
                                    <p className="cs_fs_14 mb-0">Happy Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="cs_section_heading cs_style_1 cs_mb_45">
                                <h3 className="cs_section_subtitle cs_fs_18 cs_accent_color cs_semibold text-uppercase cs_mb_12">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528ZM11.2557 1.33733C11.7741 0.819199 12.465 0.533066 13.1506 0.533066H13.1967L12.9498 0.780266C12.6463 1.08373 12.4791 1.4864 12.4791 1.91467C12.4791 2.34293 12.6463 2.7456 12.9498 3.04907C13.2533 3.35253 13.6551 3.51813 14.0842 3.51813C14.5133 3.51813 14.9159 3.35147 15.2186 3.04907L15.4655 2.80187C15.4786 3.50293 15.1917 4.21333 14.6618 4.7432C14.0042 5.4008 13.0666 5.68293 12.2095 5.4784C11.7917 5.38533 11.425 5.18373 11.1202 4.87867C10.8154 4.5736 10.6133 4.20693 10.5194 3.78507C10.3159 2.93253 10.5981 1.9944 11.2557 1.3368V1.33733ZM3.78578 5.48C2.93325 5.68373 1.99512 5.40133 1.33752 4.74373C0.807651 4.21387 0.520718 3.50347 0.533785 2.8024L0.780718 3.0496C1.08338 3.352 1.48632 3.51867 1.91512 3.51867C2.34392 3.51867 2.74712 3.352 3.04925 3.0496C3.35272 2.74613 3.51992 2.34347 3.51992 1.9152C3.51992 1.48693 3.35272 1.08427 3.04925 0.780799L2.80232 0.533599C3.51058 0.525866 4.21352 0.807733 4.74365 1.3376C5.40125 1.9952 5.68338 2.93307 5.47912 3.78987C5.38632 4.20747 5.18445 4.57387 4.87912 4.8792C4.57378 5.18453 4.20765 5.38587 3.78578 5.48ZM4.60365 5.73867C4.84373 5.61088 5.06362 5.44832 5.25618 5.25627C5.44814 5.06361 5.61068 4.84374 5.73858 4.60373L7.62205 6.48693L6.48712 7.62187L4.60365 5.73867ZM4.74365 14.6621C4.21378 15.1917 3.51192 15.4752 2.80232 15.4661L3.04925 15.2189C3.35165 14.9163 3.51832 14.5133 3.51832 14.0845C3.51832 13.6557 3.35165 13.2528 3.04925 12.9501C2.74823 12.6497 2.3403 12.4809 1.91498 12.4809C1.48967 12.4809 1.08174 12.6497 0.780718 12.9501L0.533785 13.1973C0.520718 12.4963 0.807651 11.7859 1.33752 11.256C1.99538 10.5987 2.93325 10.3168 3.78978 10.5208C4.20765 10.6139 4.57432 10.8155 4.87912 11.1205C5.18392 11.4256 5.38605 11.7923 5.47992 12.2141C5.68338 13.0667 5.40125 14.0045 4.74365 14.6621ZM5.25618 10.7435C5.06331 10.5513 4.84317 10.3885 4.60285 10.2605L10.2605 4.60293C10.3884 4.84331 10.551 5.06354 10.7431 5.25653C10.936 5.44873 11.1561 5.61146 11.3965 5.73947L5.73885 11.3971C5.61092 11.1567 5.44829 10.9365 5.25618 10.7435ZM12.7711 10.4549C13.4562 10.4549 14.1455 10.7395 14.6621 11.256C15.1919 11.7859 15.4789 12.4963 15.4658 13.1973L15.2189 12.9501C14.9178 12.6497 14.5099 12.4809 14.0846 12.4809C13.6593 12.4809 13.2513 12.6497 12.9503 12.9501C12.8011 13.0989 12.6828 13.2757 12.6023 13.4704C12.5217 13.6651 12.4806 13.8738 12.4813 14.0845C12.4806 14.2952 12.5217 14.504 12.6023 14.6987C12.6828 14.8934 12.8011 15.0702 12.9503 15.2189L13.1973 15.4661C12.4935 15.4736 11.7861 15.192 11.2559 14.6621C10.5983 14.0045 10.3162 13.0667 10.5205 12.2099C10.611 11.7964 10.8194 11.418 11.1205 11.1205C11.5711 10.6699 12.1623 10.4549 12.7711 10.4549ZM11.3959 10.2611C11.1558 10.3889 10.936 10.5514 10.7434 10.7435C10.5514 10.9361 10.3889 11.156 10.261 11.396L8.37752 9.5128L9.51245 8.37787L11.3959 10.2611Z" fill="currentColor" />
                                    </svg>Contact us</h3>
                                <h2 className="cs_section_title cs_fs_50 mb-0 wow flipInX">Book and Appointment</h2>
                            </div>
                            <form className="row cs_row_gap_30 cs_gap_y_30" id="cs_form" onSubmit={handleSubmit}>
                                <div className="col-sm-6">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className={`cs_form_field cs_radius_5 ${errors.name ? 'border-danger' : ''}`}
                                    />
                                    {errors.name && <div className="text-danger small mt-1">{errors.name}</div>}
                                </div>
                                <div className="col-sm-6">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className={`cs_form_field cs_radius_5 ${errors.email ? 'border-danger' : ''}`}
                                    />
                                    {errors.email && <div className="text-danger small mt-1">{errors.email}</div>}
                                </div>
                                <div className="col-sm-6">
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        className={`cs_form_field cs_radius_5 ${errors.subject ? 'border-danger' : ''}`}
                                    />
                                    {errors.subject && <div className="text-danger small mt-1">{errors.subject}</div>}
                                </div>
                                <div className="col-sm-6 position-relative">
                                    <select className={`form-select cs_form_field cs_radius_5 ${errors.service ? 'border-danger' : ''}`}>
                                        <option defaultValue>Choose an option</option>
                                        <option value="car-service">Car Service</option>
                                        <option value="car-wash">Car Wash</option>
                                        <option value="engine-oil">Engine Oil</option>
                                        <option value="motor-service">Motor Cycle</option>
                                    </select>
                                    {errors.service && <div className="text-danger small mt-1">{errors.service}</div>}
                                </div>
                                <div className="col-12">
                                    <textarea
                                        name="message"
                                        rows={6}
                                        placeholder="Message"
                                        className={`cs_form_field ${errors.message ? 'border-danger' : ''}`}
                                        defaultValue={""}
                                    />
                                    {errors.message && <div className="text-danger small mt-1">{errors.message}</div>}
                                </div>

                                {submitMessage && (
                                    <div className={`alert ${isError ? 'alert-danger' : 'alert-success'} text-center`} role="alert">
                                        {submitMessage}
                                    </div>
                                )}

                                <div className="col-12">
                                    <button type="submit" className="cs_btn cs_style_1 wow fadeInRight">
                                        <span>Submit</span><i className="fa-solid fa-arrow-right" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80" />
            </section>
            {/* End Contact Section */}
            {/* Start Testimonial Section */}
            <section className="cs_slider cs_style_1 cs_slider_gap_30 cs_bg_filed position-relative" style={{ backgroundImage: `url(${testimonial_bg_1})` }}>
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div className="cs_section_heading cs_style_1 cs_mb_47 text-center">
                        <h3 className="cs_section_subtitle cs_fs_18 cs_white_color cs_semibold text-uppercase cs_mb_12 wow fadeInDown">
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528ZM11.2557 1.33733C11.7741 0.819199 12.465 0.533066 13.1506 0.533066H13.1967L12.9498 0.780266C12.6463 1.08373 12.4791 1.4864 12.4791 1.91467C12.4791 2.34293 12.6463 2.7456 12.9498 3.04907C13.2533 3.35253 13.6551 3.51813 14.0842 3.51813C14.5133 3.51813 14.9159 3.35147 15.2186 3.04907L15.4655 2.80187C15.4786 3.50293 15.1917 4.21333 14.6618 4.7432C14.0042 5.4008 13.0666 5.68293 12.2095 5.4784C11.7917 5.38533 11.425 5.18373 11.1202 4.87867C10.8154 4.5736 10.6133 4.20693 10.5194 3.78507C10.3159 2.93253 10.5981 1.9944 11.2557 1.3368V1.33733ZM3.78578 5.48C2.93325 5.68373 1.99512 5.40133 1.33752 4.74373C0.807651 4.21387 0.520718 3.50347 0.533785 2.8024L0.780718 3.0496C1.08338 3.352 1.48632 3.51867 1.91512 3.51867C2.34392 3.51867 2.74712 3.352 3.04925 3.0496C3.35272 2.74613 3.51992 2.34347 3.51992 1.9152C3.51992 1.48693 3.35272 1.08427 3.04925 0.780799L2.80232 0.533599C3.51058 0.525866 4.21352 0.807733 4.74365 1.3376C5.40125 1.9952 5.68338 2.93307 5.47912 3.78987C5.38632 4.20747 5.18445 4.57387 4.87912 4.8792C4.57378 5.18453 4.20765 5.38587 3.78578 5.48ZM4.60365 5.73867C4.84373 5.61088 5.06362 5.44832 5.25618 5.25627C5.44814 5.06361 5.61068 4.84374 5.73858 4.60373L7.62205 6.48693L6.48712 7.62187L4.60365 5.73867ZM4.74365 14.6621C4.21378 15.1917 3.51192 15.4752 2.80232 15.4661L3.04925 15.2189C3.35165 14.9163 3.51832 14.5133 3.51832 14.0845C3.51832 13.6557 3.35165 13.2528 3.04925 12.9501C2.74823 12.6497 2.3403 12.4809 1.91498 12.4809C1.48967 12.4809 1.08174 12.6497 0.780718 12.9501L0.533785 13.1973C0.520718 12.4963 0.807651 11.7859 1.33752 11.256C1.99538 10.5987 2.93325 10.3168 3.78978 10.5208C4.20765 10.6139 4.57432 10.8155 4.87912 11.1205C5.18392 11.4256 5.38605 11.7923 5.47992 12.2141C5.68338 13.0667 5.40125 14.0045 4.74365 14.6621ZM5.25618 10.7435C5.06331 10.5513 4.84317 10.3885 4.60285 10.2605L10.2605 4.60293C10.3884 4.84331 10.551 5.06354 10.7431 5.25653C10.936 5.44873 11.1561 5.61146 11.3965 5.73947L5.73885 11.3971C5.61092 11.1567 5.44829 10.9365 5.25618 10.7435ZM12.7711 10.4549C13.4562 10.4549 14.1455 10.7395 14.6621 11.256C15.1919 11.7859 15.4789 12.4963 15.4658 13.1973L15.2189 12.9501C14.9178 12.6497 14.5099 12.4809 14.0846 12.4809C13.6593 12.4809 13.2513 12.6497 12.9503 12.9501C12.8011 13.0989 12.6828 13.2757 12.6023 13.4704C12.5217 13.6651 12.4806 13.8738 12.4813 14.0845C12.4806 14.2952 12.5217 14.504 12.6023 14.6987C12.6828 14.8934 12.8011 15.0702 12.9503 15.2189L13.1973 15.4661C12.4935 15.4736 11.7861 15.192 11.2559 14.6621C10.5983 14.0045 10.3162 13.0667 10.5205 12.2099C10.611 11.7964 10.8194 11.418 11.1205 11.1205C11.5711 10.6699 12.1623 10.4549 12.7711 10.4549ZM11.3959 10.2611C11.1558 10.3889 10.936 10.5514 10.7434 10.7435C10.5514 10.9361 10.3889 11.156 10.261 11.396L8.37752 9.5128L9.51245 8.37787L11.3959 10.2611Z" fill="currentColor" />
                            </svg>Testimonial<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528ZM11.2557 1.33733C11.7741 0.819199 12.465 0.533066 13.1506 0.533066H13.1967L12.9498 0.780266C12.6463 1.08373 12.4791 1.4864 12.4791 1.91467C12.4791 2.34293 12.6463 2.7456 12.9498 3.04907C13.2533 3.35253 13.6551 3.51813 14.0842 3.51813C14.5133 3.51813 14.9159 3.35147 15.2186 3.04907L15.4655 2.80187C15.4786 3.50293 15.1917 4.21333 14.6618 4.7432C14.0042 5.4008 13.0666 5.68293 12.2095 5.4784C11.7917 5.38533 11.425 5.18373 11.1202 4.87867C10.8154 4.5736 10.6133 4.20693 10.5194 3.78507C10.3159 2.93253 10.5981 1.9944 11.2557 1.3368V1.33733ZM3.78578 5.48C2.93325 5.68373 1.99512 5.40133 1.33752 4.74373C0.807651 4.21387 0.520718 3.50347 0.533785 2.8024L0.780718 3.0496C1.08338 3.352 1.48632 3.51867 1.91512 3.51867C2.34392 3.51867 2.74712 3.352 3.04925 3.0496C3.35272 2.74613 3.51992 2.34347 3.51992 1.9152C3.51992 1.48693 3.35272 1.08427 3.04925 0.780799L2.80232 0.533599C3.51058 0.525866 4.21352 0.807733 4.74365 1.3376C5.40125 1.9952 5.68338 2.93307 5.47912 3.78987C5.38632 4.20747 5.18445 4.57387 4.87912 4.8792C4.57378 5.18453 4.20765 5.38587 3.78578 5.48ZM4.60365 5.73867C4.84373 5.61088 5.06362 5.44832 5.25618 5.25627C5.44814 5.06361 5.61068 4.84374 5.73858 4.60373L7.62205 6.48693L6.48712 7.62187L4.60365 5.73867ZM4.74365 14.6621C4.21378 15.1917 3.51192 15.4752 2.80232 15.4661L3.04925 15.2189C3.35165 14.9163 3.51832 14.5133 3.51832 14.0845C3.51832 13.6557 3.35165 13.2528 3.04925 12.9501C2.74823 12.6497 2.3403 12.4809 1.91498 12.4809C1.48967 12.4809 1.08174 12.6497 0.780718 12.9501L0.533785 13.1973C0.520718 12.4963 0.807651 11.7859 1.33752 11.256C1.99538 10.5987 2.93325 10.3168 3.78978 10.5208C4.20765 10.6139 4.57432 10.8155 4.87912 11.1205C5.18392 11.4256 5.38605 11.7923 5.47992 12.2141C5.68338 13.0667 5.40125 14.0045 4.74365 14.6621ZM5.25618 10.7435C5.06331 10.5513 4.84317 10.3885 4.60285 10.2605L10.2605 4.60293C10.3884 4.84331 10.551 5.06354 10.7431 5.25653C10.936 5.44873 11.1561 5.61146 11.3965 5.73947L5.73885 11.3971C5.61092 11.1567 5.44829 10.9365 5.25618 10.7435ZM12.7711 10.4549C13.4562 10.4549 14.1455 10.7395 14.6621 11.256C15.1919 11.7859 15.4789 12.4963 15.4658 13.1973L15.2189 12.9501C14.9178 12.6497 14.5099 12.4809 14.0846 12.4809C13.6593 12.4809 13.2513 12.6497 12.9503 12.9501C12.8011 13.0989 12.6828 13.2757 12.6023 13.4704C12.5217 13.6651 12.4806 13.8738 12.4813 14.0845C12.4806 14.2952 12.5217 14.504 12.6023 14.6987C12.6828 14.8934 12.8011 15.0702 12.9503 15.2189L13.1973 15.4661C12.4935 15.4736 11.7861 15.192 11.2559 14.6621C10.5983 14.0045 10.3162 13.0667 10.5205 12.2099C10.611 11.7964 10.8194 11.418 11.1205 11.1205C11.5711 10.6699 12.1623 10.4549 12.7711 10.4549ZM11.3959 10.2611C11.1558 10.3889 10.936 10.5514 10.7434 10.7435C10.5514 10.9361 10.3889 11.156 10.261 11.396L8.37752 9.5128L9.51245 8.37787L11.3959 10.2611Z" fill="currentColor" />
                            </svg></h3>
                        <h2 className="cs_section_title cs_fs_50 cs_white_color mb-0 wow fadeInUp">What our clients say <br /> About Us</h2>
                    </div>
                    <div className="cs_slider_container" data-autoplay={0} data-loop={1} data-speed={600} data-center={0} data-variable-width={0} data-xs-slides={1} data-sm-slides={1} data-md-slides={1} data-lg-slides={2} data-add-slides={2} data-slides-per-view="responsive">
                        <div className="cs_slider_wrapper">
                            <div className="cs_slide wow fadeInLeft">
                                <div className="cs_testimonial cs_style_1 position-relative">
                                    <div className="cs_testimonial_content cs_white_bg position-relative">
                                        <div className="cs_testimonial_header cs_mb_35">
                                            <div className="cs_testimonial_thumbnail">
                                                <img src={avatar_2} alt="Avatar" />
                                            </div>
                                            <div className="cs_testimonial_info">
                                                <div className="cs_rating cs_mb_6" data-rating="4.5">
                                                    <div className="cs_rating_percentage" />
                                                </div>
                                                <h3 className="cs_fs_24 cs_semibold cs_mb_1">Kathryn Murphy</h3>
                                                <p className="cs_fs_14 cs_heading_color mb-0">Business Woman</p>
                                            </div>
                                        </div>
                                        <blockquote className="cs_fs_16">Insufficient cooling or heating, strange noises when the A/C is on, or foul car odors coming from the vents Flickering lights, non-functioning accessories, or trouble starting the vehicle</blockquote>
                                        <div className="cs_quote_icon position-absolute">
                                            <img src={quote_1} alt="Quote Icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cs_slide wow fadeInRight">
                                <div className="cs_testimonial cs_style_1 position-relative">
                                    <div className="cs_testimonial_content cs_white_bg position-relative">
                                        <div className="cs_testimonial_header cs_mb_35">
                                            <div className="cs_testimonial_thumbnail">
                                                <img src={avatar_3} alt="Avatar" />
                                            </div>
                                            <div className="cs_testimonial_info">
                                                <div className="cs_rating cs_mb_6" data-rating="4.5">
                                                    <div className="cs_rating_percentage" />
                                                </div>
                                                <h3 className="cs_fs_24 cs_semibold cs_mb_1">Cameron Williamson</h3>
                                                <p className="cs_fs_14 cs_heading_color mb-0">Business Man</p>
                                            </div>
                                        </div>
                                        <blockquote className="cs_fs_16">Often recommended every 15,000 to 30,000 miles, depending on the vehicle age and condition Flickering lights, non-functioning accessories, or trouble starting the vehicle Body and paint services</blockquote>
                                        <div className="cs_quote_icon position-absolute">
                                            <img src={quote_1} alt="Quote Icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cs_slide">
                                <div className="cs_testimonial cs_style_1 position-relative">
                                    <div className="cs_testimonial_content cs_white_bg position-relative">
                                        <div className="cs_testimonial_header cs_mb_35">
                                            <div className="cs_testimonial_thumbnail">
                                                <img src={avatar_2} alt="Avatar" />
                                            </div>
                                            <div className="cs_testimonial_info">
                                                <div className="cs_rating cs_mb_6" data-rating="4.5">
                                                    <div className="cs_rating_percentage" />
                                                </div>
                                                <h3 className="cs_fs_24 cs_semibold cs_mb_1">Kathryn Murphy</h3>
                                                <p className="cs_fs_14 cs_heading_color mb-0">Business Icon</p>
                                            </div>
                                        </div>
                                        <blockquote className="cs_fs_16">Insufficient cooling or heating, strange noises when the A/C is on, or foul car odors coming from the vents Flickering lights, non-functioning accessories, or trouble starting the vehicle</blockquote>
                                        <div className="cs_quote_icon position-absolute">
                                            <img src={quote_1} alt="Quote Icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs_pagination cs_style_1 cs_type_1" />
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80" />
            </section>
            {/* End Testimonial Section */}
            {/* Start Pricing Section */}
            <section className="cs_tabs cs_style_1 position-relative">
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div className="cs_section_heading cs_style_1 cs_type_1 cs_mb_47">
                        <div className="cs_section_heading_left">
                            <h3 className="cs_section_subtitle cs_fs_18 cs_accent_color cs_semibold text-uppercase cs_mb_12">
                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528ZM11.2557 1.33733C11.7741 0.819199 12.465 0.533066 13.1506 0.533066H13.1967L12.9498 0.780266C12.6463 1.08373 12.4791 1.4864 12.4791 1.91467C12.4791 2.34293 12.6463 2.7456 12.9498 3.04907C13.2533 3.35253 13.6551 3.51813 14.0842 3.51813C14.5133 3.51813 14.9159 3.35147 15.2186 3.04907L15.4655 2.80187C15.4786 3.50293 15.1917 4.21333 14.6618 4.7432C14.0042 5.4008 13.0666 5.68293 12.2095 5.4784C11.7917 5.38533 11.425 5.18373 11.1202 4.87867C10.8154 4.5736 10.6133 4.20693 10.5194 3.78507C10.3159 2.93253 10.5981 1.9944 11.2557 1.3368V1.33733ZM3.78578 5.48C2.93325 5.68373 1.99512 5.40133 1.33752 4.74373C0.807651 4.21387 0.520718 3.50347 0.533785 2.8024L0.780718 3.0496C1.08338 3.352 1.48632 3.51867 1.91512 3.51867C2.34392 3.51867 2.74712 3.352 3.04925 3.0496C3.35272 2.74613 3.51992 2.34347 3.51992 1.9152C3.51992 1.48693 3.35272 1.08427 3.04925 0.780799L2.80232 0.533599C3.51058 0.525866 4.21352 0.807733 4.74365 1.3376C5.40125 1.9952 5.68338 2.93307 5.47912 3.78987C5.38632 4.20747 5.18445 4.57387 4.87912 4.8792C4.57378 5.18453 4.20765 5.38587 3.78578 5.48ZM4.60365 5.73867C4.84373 5.61088 5.06362 5.44832 5.25618 5.25627C5.44814 5.06361 5.61068 4.84374 5.73858 4.60373L7.62205 6.48693L6.48712 7.62187L4.60365 5.73867ZM4.74365 14.6621C4.21378 15.1917 3.51192 15.4752 2.80232 15.4661L3.04925 15.2189C3.35165 14.9163 3.51832 14.5133 3.51832 14.0845C3.51832 13.6557 3.35165 13.2528 3.04925 12.9501C2.74823 12.6497 2.3403 12.4809 1.91498 12.4809C1.48967 12.4809 1.08174 12.6497 0.780718 12.9501L0.533785 13.1973C0.520718 12.4963 0.807651 11.7859 1.33752 11.256C1.99538 10.5987 2.93325 10.3168 3.78978 10.5208C4.20765 10.6139 4.57432 10.8155 4.87912 11.1205C5.18392 11.4256 5.38605 11.7923 5.47992 12.2141C5.68338 13.0667 5.40125 14.0045 4.74365 14.6621ZM5.25618 10.7435C5.06331 10.5513 4.84317 10.3885 4.60285 10.2605L10.2605 4.60293C10.3884 4.84331 10.551 5.06354 10.7431 5.25653C10.936 5.44873 11.1561 5.61146 11.3965 5.73947L5.73885 11.3971C5.61092 11.1567 5.44829 10.9365 5.25618 10.7435ZM12.7711 10.4549C13.4562 10.4549 14.1455 10.7395 14.6621 11.256C15.1919 11.7859 15.4789 12.4963 15.4658 13.1973L15.2189 12.9501C14.9178 12.6497 14.5099 12.4809 14.0846 12.4809C13.6593 12.4809 13.2513 12.6497 12.9503 12.9501C12.8011 13.0989 12.6828 13.2757 12.6023 13.4704C12.5217 13.6651 12.4806 13.8738 12.4813 14.0845C12.4806 14.2952 12.5217 14.504 12.6023 14.6987C12.6828 14.8934 12.8011 15.0702 12.9503 15.2189L13.1973 15.4661C12.4935 15.4736 11.7861 15.192 11.2559 14.6621C10.5983 14.0045 10.3162 13.0667 10.5205 12.2099C10.611 11.7964 10.8194 11.418 11.1205 11.1205C11.5711 10.6699 12.1623 10.4549 12.7711 10.4549ZM11.3959 10.2611C11.1558 10.3889 10.936 10.5514 10.7434 10.7435C10.5514 10.9361 10.3889 11.156 10.261 11.396L8.37752 9.5128L9.51245 8.37787L11.3959 10.2611Z" fill="currentColor" />
                                </svg>our price plan
                            </h3>
                            <h2 className="cs_section_title cs_fs_50 mb-0 wow fadeInRight">Choose The Right Plan Which You Need!</h2>
                        </div>
                    </div>
                    <ul className="cs_tab_links cs_style_1 cs_type_1 cs_fs_18 cs_semibold cs_heading_color cs_heading_font cs_mp_0 wow fadeInUp">
                        <li className="active"><a href="#monthly">Monthly</a></li>
                        <li><a href="#yearly">Yearly</a></li>
                    </ul>
                    <div className="cs_tab_body">
                        <div className="cs_tab active" id="monthly">
                            <div className="row cs_row_gap_30 cs_gap_y_30 justify-content-center">
                                <div className="col-lg-4">
                                    <div className="cs_pricing_table cs_style_1">
                                        <div className="cs_pricing_head cs_radius_50">
                                            <div className="cs_pricing_head_inner cs_radius_50 cs_white_bg">
                                                <h2 className="cs_price_value cs_fs_56 cs_accent_color cs_mb_2">$100</h2>
                                                <p className="cs_pricing_head_subtitle cs_fs_14 text-uppercase cs_accent_color mb-0">Emergency Plan</p>
                                            </div>
                                        </div>
                                        <div className="cs_pricing_info_wrapper">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 686" width={510} height={686}>
                                                <title>pricing_bg_1-svg</title>
                                                <style dangerouslySetInnerHTML={{ __html: "\n                        .s0 { fill: #ffffff }\n                      " }} />
                                                <g>
                                                    <path className="s0" d="m144.1 609.4c1.7 9.6 10 16.6 19.7 16.6h185.3c9.8 0 18.1-7 19.7-16.7l90.3-534.3c3.1-18.3-11-35-29.6-35h-348.8c-18.7 0-32.8 16.8-29.6 35.1z" />
                                                </g>
                                            </svg>
                                            <svg width={510} height={686} viewBox="0 0 510 686" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_1_2723475)">
                                                    <path d="M144.116 609.43C145.783 619.008 154.097 626 163.819 626H349.095C358.855 626 367.19 618.955 368.816 609.332L459.087 74.9974C462.18 56.6917 448.072 40 429.507 40H80.6729C62.0474 40 47.9233 56.7949 51.1173 75.1445L144.116 609.43Z" fill="white" />
                                                    <path d="M145.101 609.258C146.685 618.358 154.583 625 163.819 625H349.095C358.367 625 366.285 618.308 367.83 609.165L458.101 74.8308C461.091 57.1353 447.453 41 429.507 41H80.6729C62.6682 41 49.015 57.235 52.1025 74.973L145.101 609.258Z" stroke="currentColor" strokeWidth={2} />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_1_2778475" x="0.665039" y={0} width="508.85" height={686} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                        <feOffset dy={10} />
                                                        <feGaussianBlur stdDeviation={25} />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_27475" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_27475" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                            <div className="cs_pricing_plan cs_mb_27">
                                                <h3 className="cs_pricing_head_title cs_fs_24 cs_semibold mb-0">Basic Plan</h3>
                                                <p className="cs_pricing_head_subtitle mb-0">Exclusive for Small</p>
                                            </div>
                                            <ul className="cs_pricing_feature_list cs_mp_0">
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Rims &amp; Tire Change
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Light Carpet Clean
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Wipe all Surfaces
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Wipe all Surfaces
                                                </li>
                                                <li><span className="cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Interior Cleaning
                                                </li>
                                                <li><span className="cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Water proofing
                                                </li>
                                            </ul>
                                            <a className="cs_pricing_btn cs_fs_14 cs_bold cs_heading_color text-uppercase cs_radius_10" href="contact">Choose Plan</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="cs_pricing_table cs_style_1 active">
                                        <div className="cs_pricing_head cs_radius_50">
                                            <div className="cs_pricing_head_inner cs_radius_50 cs_white_bg">
                                                <h2 className="cs_price_value cs_fs_56 cs_accent_color cs_mb_2">$160</h2>
                                                <p className="cs_pricing_head_subtitle cs_fs_14 text-uppercase cs_accent_color mb-0">Emergency Plan</p>
                                            </div>
                                        </div>
                                        <div className="cs_pricing_info_wrapper">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 686" width={510} height={686}>
                                                <title>pricing_bg_1-svg</title>
                                                <style dangerouslySetInnerHTML={{ __html: "\n                        .s0 {\n                          fill: #ffffff\n                        }\n                      " }} />
                                                <g>
                                                    <path className="s0" d="m144.1 609.4c1.7 9.6 10 16.6 19.7 16.6h185.3c9.8 0 18.1-7 19.7-16.7l90.3-534.3c3.1-18.3-11-35-29.6-35h-348.8c-18.7 0-32.8 16.8-29.6 35.1z" />
                                                </g>
                                            </svg>
                                            <svg width={510} height={686} viewBox="0 0 510 686" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_1_274705)">
                                                    <path d="M144.116 609.43C145.783 619.008 154.097 626 163.819 626H349.095C358.855 626 367.19 618.955 368.816 609.332L459.087 74.9974C462.18 56.6917 448.072 40 429.507 40H80.6729C62.0474 40 47.9233 56.7949 51.1173 75.1445L144.116 609.43Z" fill="white" />
                                                    <path d="M145.101 609.258C146.685 618.358 154.583 625 163.819 625H349.095C358.367 625 366.285 618.308 367.83 609.165L458.101 74.8308C461.091 57.1353 447.453 41 429.507 41H80.6729C62.6682 41 49.015 57.235 52.1025 74.973L145.101 609.258Z" stroke="currentColor" strokeWidth={2} />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_1_274575" x="0.665039" y={0} width="508.85" height={686} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                        <feOffset dy={10} />
                                                        <feGaussianBlur stdDeviation={25} />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_27475" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_27475" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                            <div className="cs_pricing_plan cs_mb_27">
                                                <h3 className="cs_pricing_head_title cs_fs_24 cs_semibold mb-0">Stander Plan</h3>
                                                <p className="cs_pricing_head_subtitle mb-0">Exclusive for Small</p>
                                            </div>
                                            <ul className="cs_pricing_feature_list cs_mp_0">
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Rims &amp; Tire Change
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Light Carpet Clean
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Wipe all Surfaces
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Wipe all Surfaces
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Interior Cleaning
                                                </li>
                                                <li><span className="cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Water proofing
                                                </li>
                                            </ul>
                                            <a className="cs_pricing_btn cs_fs_14 cs_bold cs_heading_color text-uppercase cs_radius_10" href="contact">Choose Plan</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="cs_pricing_table cs_style_1">
                                        <div className="cs_pricing_head cs_radius_50">
                                            <div className="cs_pricing_head_inner cs_radius_50 cs_white_bg">
                                                <h2 className="cs_price_value cs_fs_56 cs_accent_color cs_mb_2">$200</h2>
                                                <p className="cs_pricing_head_subtitle cs_fs_14 text-uppercase cs_accent_color mb-0">Emergency Plan</p>
                                            </div>
                                        </div>
                                        <div className="cs_pricing_info_wrapper">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 686" width={510} height={686}>
                                                <title>pricing_bg_1-svg</title>
                                                <style dangerouslySetInnerHTML={{ __html: "\n                        .s0 {\n                          fill: #ffffff\n                        }\n                      " }} />
                                                <g>
                                                    <path className="s0" d="m144.1 609.4c1.7 9.6 10 16.6 19.7 16.6h185.3c9.8 0 18.1-7 19.7-16.7l90.3-534.3c3.1-18.3-11-35-29.6-35h-348.8c-18.7 0-32.8 16.8-29.6 35.1z" />
                                                </g>
                                            </svg>
                                            <svg width={510} height={686} viewBox="0 0 510 686" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_1_274755)">
                                                    <path d="M144.116 609.43C145.783 619.008 154.097 626 163.819 626H349.095C358.855 626 367.19 618.955 368.816 609.332L459.087 74.9974C462.18 56.6917 448.072 40 429.507 40H80.6729C62.0474 40 47.9233 56.7949 51.1173 75.1445L144.116 609.43Z" fill="white" />
                                                    <path d="M145.101 609.258C146.685 618.358 154.583 625 163.819 625H349.095C358.367 625 366.285 618.308 367.83 609.165L458.101 74.8308C461.091 57.1353 447.453 41 429.507 41H80.6729C62.6682 41 49.015 57.235 52.1025 74.973L145.101 609.258Z" stroke="currentColor" strokeWidth={2} />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_1_278475" x="0.665039" y={0} width="508.85" height={686} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                        <feOffset dy={10} />
                                                        <feGaussianBlur stdDeviation={25} />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_27475" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_27475" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                            <div className="cs_pricing_plan cs_mb_27">
                                                <h3 className="cs_pricing_head_title cs_fs_24 cs_semibold mb-0">Premium plan</h3>
                                                <p className="cs_pricing_head_subtitle mb-0">Exclusive for Small</p>
                                            </div>
                                            <ul className="cs_pricing_feature_list cs_mp_0">
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Rims &amp; Tire Change
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Light Carpet Clean
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Wipe all Surfaces
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Wipe all Surfaces
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Interior Cleaning
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Water proofing
                                                </li>
                                            </ul>
                                            <a className="cs_pricing_btn cs_fs_14 cs_bold cs_heading_color text-uppercase cs_radius_10" href="contact">Choose Plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs_tab" id="yearly">
                            <div className="row cs_row_gap_30 cs_gap_y_30 justify-content-center">
                                <div className="col-lg-4">
                                    <div className="cs_pricing_table cs_style_1">
                                        <div className="cs_pricing_head cs_radius_50">
                                            <div className="cs_pricing_head_inner cs_radius_50 cs_white_bg">
                                                <h2 className="cs_price_value cs_fs_56 cs_accent_color cs_mb_2">$250</h2>
                                                <p className="cs_pricing_head_subtitle cs_fs_14 text-uppercase cs_accent_color mb-0">Emergency Plan</p>
                                            </div>
                                        </div>
                                        <div className="cs_pricing_info_wrapper">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 686" width={510} height={686}>
                                                <title>pricing_bg_1-svg</title>
                                                <style dangerouslySetInnerHTML={{ __html: "\n                        .s0 { fill: #ffffff }\n                      " }} />
                                                <g>
                                                    <path className="s0" d="m144.1 609.4c1.7 9.6 10 16.6 19.7 16.6h185.3c9.8 0 18.1-7 19.7-16.7l90.3-534.3c3.1-18.3-11-35-29.6-35h-348.8c-18.7 0-32.8 16.8-29.6 35.1z" />
                                                </g>
                                            </svg>
                                            <svg width={510} height={686} viewBox="0 0 510 686" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_1_277475)">
                                                    <path d="M144.116 609.43C145.783 619.008 154.097 626 163.819 626H349.095C358.855 626 367.19 618.955 368.816 609.332L459.087 74.9974C462.18 56.6917 448.072 40 429.507 40H80.6729C62.0474 40 47.9233 56.7949 51.1173 75.1445L144.116 609.43Z" fill="white" />
                                                    <path d="M145.101 609.258C146.685 618.358 154.583 625 163.819 625H349.095C358.367 625 366.285 618.308 367.83 609.165L458.101 74.8308C461.091 57.1353 447.453 41 429.507 41H80.6729C62.6682 41 49.015 57.235 52.1025 74.973L145.101 609.258Z" stroke="currentColor" strokeWidth={2} />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_1_2735475" x="0.665039" y={0} width="508.85" height={686} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                        <feOffset dy={10} />
                                                        <feGaussianBlur stdDeviation={25} />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_27475" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_27475" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                            <div className="cs_pricing_plan cs_mb_27">
                                                <h3 className="cs_pricing_head_title cs_fs_24 cs_semibold mb-0">Basic Plan</h3>
                                                <p className="cs_pricing_head_subtitle mb-0">Exclusive for Small</p>
                                            </div>
                                            <ul className="cs_pricing_feature_list cs_mp_0">
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Rims &amp; Tire Change
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Light Carpet Clean
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Wipe all Surfaces
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Wipe all Surfaces
                                                </li>
                                                <li><span className="cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Interior Cleaning
                                                </li>
                                                <li><span className="cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Water proofing
                                                </li>
                                            </ul>
                                            <a className="cs_pricing_btn cs_fs_14 cs_bold cs_heading_color text-uppercase cs_radius_10" href="contact">Choose Plan</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="cs_pricing_table cs_style_1 active">
                                        <div className="cs_pricing_head cs_radius_50">
                                            <div className="cs_pricing_head_inner cs_radius_50 cs_white_bg">
                                                <h2 className="cs_price_value cs_fs_56 cs_accent_color cs_mb_2">$460</h2>
                                                <p className="cs_pricing_head_subtitle cs_fs_14 text-uppercase cs_accent_color mb-0">Emergency Plan</p>
                                            </div>
                                        </div>
                                        <div className="cs_pricing_info_wrapper">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 686" width={510} height={686}>
                                                <title>pricing_bg_1-svg</title>
                                                <style dangerouslySetInnerHTML={{ __html: "\n                        .s0 {\n                          fill: #ffffff\n                        }\n                      " }} />
                                                <g>
                                                    <path className="s0" d="m144.1 609.4c1.7 9.6 10 16.6 19.7 16.6h185.3c9.8 0 18.1-7 19.7-16.7l90.3-534.3c3.1-18.3-11-35-29.6-35h-348.8c-18.7 0-32.8 16.8-29.6 35.1z" />
                                                </g>
                                            </svg>
                                            <svg width={510} height={686} viewBox="0 0 510 686" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_1_274975)">
                                                    <path d="M144.116 609.43C145.783 619.008 154.097 626 163.819 626H349.095C358.855 626 367.19 618.955 368.816 609.332L459.087 74.9974C462.18 56.6917 448.072 40 429.507 40H80.6729C62.0474 40 47.9233 56.7949 51.1173 75.1445L144.116 609.43Z" fill="white" />
                                                    <path d="M145.101 609.258C146.685 618.358 154.583 625 163.819 625H349.095C358.367 625 366.285 618.308 367.83 609.165L458.101 74.8308C461.091 57.1353 447.453 41 429.507 41H80.6729C62.6682 41 49.015 57.235 52.1025 74.973L145.101 609.258Z" stroke="currentColor" strokeWidth={2} />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_1_2747635" x="0.665039" y={0} width="508.85" height={686} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                        <feOffset dy={10} />
                                                        <feGaussianBlur stdDeviation={25} />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_27475" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_27475" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                            <div className="cs_pricing_plan cs_mb_27">
                                                <h3 className="cs_pricing_head_title cs_fs_24 cs_semibold mb-0">Stander Plan</h3>
                                                <p className="cs_pricing_head_subtitle mb-0">Exclusive for Small</p>
                                            </div>
                                            <ul className="cs_pricing_feature_list cs_mp_0">
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Rims &amp; Tire Change
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Light Carpet Clean
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Wipe all Surfaces
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Wipe all Surfaces
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Interior Cleaning
                                                </li>
                                                <li><span className="cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Water proofing
                                                </li>
                                            </ul>
                                            <a className="cs_pricing_btn cs_fs_14 cs_bold cs_heading_color text-uppercase cs_radius_10" href="contact">Choose Plan</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="cs_pricing_table cs_style_1">
                                        <div className="cs_pricing_head cs_radius_50">
                                            <div className="cs_pricing_head_inner cs_radius_50 cs_white_bg">
                                                <h2 className="cs_price_value cs_fs_56 cs_accent_color cs_mb_2">$600</h2>
                                                <p className="cs_pricing_head_subtitle cs_fs_14 text-uppercase cs_accent_color mb-0">Emergency Plan</p>
                                            </div>
                                        </div>
                                        <div className="cs_pricing_info_wrapper">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 686" width={510} height={686}>
                                                <title>pricing_bg_1-svg</title>
                                                <style dangerouslySetInnerHTML={{ __html: "\n                        .s0 {\n                          fill: #ffffff\n                        }\n                      " }} />
                                                <g>
                                                    <path className="s0" d="m144.1 609.4c1.7 9.6 10 16.6 19.7 16.6h185.3c9.8 0 18.1-7 19.7-16.7l90.3-534.3c3.1-18.3-11-35-29.6-35h-348.8c-18.7 0-32.8 16.8-29.6 35.1z" />
                                                </g>
                                            </svg>
                                            <svg width={510} height={686} viewBox="0 0 510 686" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_1_2740075)">
                                                    <path d="M144.116 609.43C145.783 619.008 154.097 626 163.819 626H349.095C358.855 626 367.19 618.955 368.816 609.332L459.087 74.9974C462.18 56.6917 448.072 40 429.507 40H80.6729C62.0474 40 47.9233 56.7949 51.1173 75.1445L144.116 609.43Z" fill="white" />
                                                    <path d="M145.101 609.258C146.685 618.358 154.583 625 163.819 625H349.095C358.367 625 366.285 618.308 367.83 609.165L458.101 74.8308C461.091 57.1353 447.453 41 429.507 41H80.6729C62.6682 41 49.015 57.235 52.1025 74.973L145.101 609.258Z" stroke="currentColor" strokeWidth={2} />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_1_2747175" x="0.665039" y={0} width="508.85" height={686} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                        <feOffset dy={10} />
                                                        <feGaussianBlur stdDeviation={25} />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_27475" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_27475" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                            <div className="cs_pricing_plan cs_mb_27">
                                                <h3 className="cs_pricing_head_title cs_fs_24 cs_semibold mb-0">Premium plan</h3>
                                                <p className="cs_pricing_head_subtitle mb-0">Exclusive for Small</p>
                                            </div>
                                            <ul className="cs_pricing_feature_list cs_mp_0">
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Rims &amp; Tire Change
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Light Carpet Clean
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Wipe all Surfaces
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Wipe all Surfaces
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Interior Cleaning
                                                </li>
                                                <li><span className="cs_accent_bg cs_white_color cs_center cs_radius_50">
                                                    <i className="fa-solid fa-check" /></span>Water proofing
                                                </li>
                                            </ul>
                                            <a className="cs_pricing_btn cs_fs_14 cs_bold cs_heading_color text-uppercase cs_radius_10" href="contact">Choose Plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cs_height_120 cs_height_lg_80" />
                </div>
            </section>
            {/* End Pricing Section */}
            {/* Start Process Section */}
            <section className="cs_bg_filed" data-src="https://acko-cms.ackoassets.com/Minor_Damages_Small_Repair_Claim_Add_on_388fd6de0c.png" >
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div className="cs_section_heading cs_style_1 cs_mb_47 text-center">
                        <h3 className="cs_section_subtitle cs_fs_18 cs_accent_color cs_semibold text-uppercase cs_mb_12">
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528ZM11.2557 1.33733C11.7741 0.819199 12.465 0.533066 13.1506 0.533066H13.1967L12.9498 0.780266C12.6463 1.08373 12.4791 1.4864 12.4791 1.91467C12.4791 2.34293 12.6463 2.7456 12.9498 3.04907C13.2533 3.35253 13.6551 3.51813 14.0842 3.51813C14.5133 3.51813 14.9159 3.35147 15.2186 3.04907L15.4655 2.80187C15.4786 3.50293 15.1917 4.21333 14.6618 4.7432C14.0042 5.4008 13.0666 5.68293 12.2095 5.4784C11.7917 5.38533 11.425 5.18373 11.1202 4.87867C10.8154 4.5736 10.6133 4.20693 10.5194 3.78507C10.3159 2.93253 10.5981 1.9944 11.2557 1.3368V1.33733ZM3.78578 5.48C2.93325 5.68373 1.99512 5.40133 1.33752 4.74373C0.807651 4.21387 0.520718 3.50347 0.533785 2.8024L0.780718 3.0496C1.08338 3.352 1.48632 3.51867 1.91512 3.51867C2.34392 3.51867 2.74712 3.352 3.04925 3.0496C3.35272 2.74613 3.51992 2.34347 3.51992 1.9152C3.51992 1.48693 3.35272 1.08427 3.04925 0.780799L2.80232 0.533599C3.51058 0.525866 4.21352 0.807733 4.74365 1.3376C5.40125 1.9952 5.68338 2.93307 5.47912 3.78987C5.38632 4.20747 5.18445 4.57387 4.87912 4.8792C4.57378 5.18453 4.20765 5.38587 3.78578 5.48ZM4.60365 5.73867C4.84373 5.61088 5.06362 5.44832 5.25618 5.25627C5.44814 5.06361 5.61068 4.84374 5.73858 4.60373L7.62205 6.48693L6.48712 7.62187L4.60365 5.73867ZM4.74365 14.6621C4.21378 15.1917 3.51192 15.4752 2.80232 15.4661L3.04925 15.2189C3.35165 14.9163 3.51832 14.5133 3.51832 14.0845C3.51832 13.6557 3.35165 13.2528 3.04925 12.9501C2.74823 12.6497 2.3403 12.4809 1.91498 12.4809C1.48967 12.4809 1.08174 12.6497 0.780718 12.9501L0.533785 13.1973C0.520718 12.4963 0.807651 11.7859 1.33752 11.256C1.99538 10.5987 2.93325 10.3168 3.78978 10.5208C4.20765 10.6139 4.57432 10.8155 4.87912 11.1205C5.18392 11.4256 5.38605 11.7923 5.47992 12.2141C5.68338 13.0667 5.40125 14.0045 4.74365 14.6621ZM5.25618 10.7435C5.06331 10.5513 4.84317 10.3885 4.60285 10.2605L10.2605 4.60293C10.3884 4.84331 10.551 5.06354 10.7431 5.25653C10.936 5.44873 11.1561 5.61146 11.3965 5.73947L5.73885 11.3971C5.61092 11.1567 5.44829 10.9365 5.25618 10.7435ZM12.7711 10.4549C13.4562 10.4549 14.1455 10.7395 14.6621 11.256C15.1919 11.7859 15.4789 12.4963 15.4658 13.1973L15.2189 12.9501C14.9178 12.6497 14.5099 12.4809 14.0846 12.4809C13.6593 12.4809 13.2513 12.6497 12.9503 12.9501C12.8011 13.0989 12.6828 13.2757 12.6023 13.4704C12.5217 13.6651 12.4806 13.8738 12.4813 14.0845C12.4806 14.2952 12.5217 14.504 12.6023 14.6987C12.6828 14.8934 12.8011 15.0702 12.9503 15.2189L13.1973 15.4661C12.4935 15.4736 11.7861 15.192 11.2559 14.6621C10.5983 14.0045 10.3162 13.0667 10.5205 12.2099C10.611 11.7964 10.8194 11.418 11.1205 11.1205C11.5711 10.6699 12.1623 10.4549 12.7711 10.4549ZM11.3959 10.2611C11.1558 10.3889 10.936 10.5514 10.7434 10.7435C10.5514 10.9361 10.3889 11.156 10.261 11.396L8.37752 9.5128L9.51245 8.37787L11.3959 10.2611Z" fill="currentColor" />
                            </svg>Working Process<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528ZM11.2557 1.33733C11.7741 0.819199 12.465 0.533066 13.1506 0.533066H13.1967L12.9498 0.780266C12.6463 1.08373 12.4791 1.4864 12.4791 1.91467C12.4791 2.34293 12.6463 2.7456 12.9498 3.04907C13.2533 3.35253 13.6551 3.51813 14.0842 3.51813C14.5133 3.51813 14.9159 3.35147 15.2186 3.04907L15.4655 2.80187C15.4786 3.50293 15.1917 4.21333 14.6618 4.7432C14.0042 5.4008 13.0666 5.68293 12.2095 5.4784C11.7917 5.38533 11.425 5.18373 11.1202 4.87867C10.8154 4.5736 10.6133 4.20693 10.5194 3.78507C10.3159 2.93253 10.5981 1.9944 11.2557 1.3368V1.33733ZM3.78578 5.48C2.93325 5.68373 1.99512 5.40133 1.33752 4.74373C0.807651 4.21387 0.520718 3.50347 0.533785 2.8024L0.780718 3.0496C1.08338 3.352 1.48632 3.51867 1.91512 3.51867C2.34392 3.51867 2.74712 3.352 3.04925 3.0496C3.35272 2.74613 3.51992 2.34347 3.51992 1.9152C3.51992 1.48693 3.35272 1.08427 3.04925 0.780799L2.80232 0.533599C3.51058 0.525866 4.21352 0.807733 4.74365 1.3376C5.40125 1.9952 5.68338 2.93307 5.47912 3.78987C5.38632 4.20747 5.18445 4.57387 4.87912 4.8792C4.57378 5.18453 4.20765 5.38587 3.78578 5.48ZM4.60365 5.73867C4.84373 5.61088 5.06362 5.44832 5.25618 5.25627C5.44814 5.06361 5.61068 4.84374 5.73858 4.60373L7.62205 6.48693L6.48712 7.62187L4.60365 5.73867ZM4.74365 14.6621C4.21378 15.1917 3.51192 15.4752 2.80232 15.4661L3.04925 15.2189C3.35165 14.9163 3.51832 14.5133 3.51832 14.0845C3.51832 13.6557 3.35165 13.2528 3.04925 12.9501C2.74823 12.6497 2.3403 12.4809 1.91498 12.4809C1.48967 12.4809 1.08174 12.6497 0.780718 12.9501L0.533785 13.1973C0.520718 12.4963 0.807651 11.7859 1.33752 11.256C1.99538 10.5987 2.93325 10.3168 3.78978 10.5208C4.20765 10.6139 4.57432 10.8155 4.87912 11.1205C5.18392 11.4256 5.38605 11.7923 5.47992 12.2141C5.68338 13.0667 5.40125 14.0045 4.74365 14.6621ZM5.25618 10.7435C5.06331 10.5513 4.84317 10.3885 4.60285 10.2605L10.2605 4.60293C10.3884 4.84331 10.551 5.06354 10.7431 5.25653C10.936 5.44873 11.1561 5.61146 11.3965 5.73947L5.73885 11.3971C5.61092 11.1567 5.44829 10.9365 5.25618 10.7435ZM12.7711 10.4549C13.4562 10.4549 14.1455 10.7395 14.6621 11.256C15.1919 11.7859 15.4789 12.4963 15.4658 13.1973L15.2189 12.9501C14.9178 12.6497 14.5099 12.4809 14.0846 12.4809C13.6593 12.4809 13.2513 12.6497 12.9503 12.9501C12.8011 13.0989 12.6828 13.2757 12.6023 13.4704C12.5217 13.6651 12.4806 13.8738 12.4813 14.0845C12.4806 14.2952 12.5217 14.504 12.6023 14.6987C12.6828 14.8934 12.8011 15.0702 12.9503 15.2189L13.1973 15.4661C12.4935 15.4736 11.7861 15.192 11.2559 14.6621C10.5983 14.0045 10.3162 13.0667 10.5205 12.2099C10.611 11.7964 10.8194 11.418 11.1205 11.1205C11.5711 10.6699 12.1623 10.4549 12.7711 10.4549ZM11.3959 10.2611C11.1558 10.3889 10.936 10.5514 10.7434 10.7435C10.5514 10.9361 10.3889 11.156 10.261 11.396L8.37752 9.5128L9.51245 8.37787L11.3959 10.2611Z" fill="currentColor" /></svg>
                        </h3>
                        <h2 className="cs_section_title cs_fs_50 mb-0 wow flipInX">Our Shimpol Working Process</h2>
                    </div>
                    <div className="row cs_row_gap_30 cs_gap_y_30">
                        <div className="col-xl-3 col-md-6">
                            <div className="cs_card cs_style_3 position-relative">
                                <div className="cs_card_content cs_white_bg cs_radius_35 text-center">
                                    <div className="cs_card_icon cs_center cs_heading_color cs_mb_22">
                                        <svg width={60} height={60} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_27424)"><path d="M29.0625 16.8752H26.4778L28.3059 15.0471L24.3281 11.0702L22.5 12.8984V10.3127H16.875V12.8984L15.0469 11.0702L11.0691 15.0471L12.8972 16.8752H10.3125V22.5002H12.8972L11.0691 24.3274L15.0469 28.3052L16.875 26.4771V29.0627H22.5V26.4771L24.3281 28.3052L28.3059 24.3274L26.4778 22.5002H29.0625V16.8752ZM27.1875 20.6252H26.4778C25.7166 20.6252 25.0369 21.079 24.7453 21.7821C24.4538 22.4852 24.6131 23.2868 25.1522 23.8259L25.6547 24.3274L24.3281 25.654L23.8256 25.1515C23.2875 24.6134 22.4859 24.4531 21.7828 24.7446C21.0797 25.0362 20.625 25.7168 20.625 26.4771V27.1877H18.75V26.4771C18.75 25.7159 18.2953 25.0362 17.5922 24.7446C17.2499 24.6012 16.8726 24.5634 16.5086 24.6359C16.1446 24.7083 15.8106 24.8879 15.5494 25.1515L15.0469 25.654L13.7203 24.3274L14.2228 23.8259C14.7609 23.2877 14.9203 22.4852 14.6297 21.7821C14.3391 21.079 13.6584 20.6252 12.8972 20.6252H12.1875V18.7502H12.8972C13.6584 18.7502 14.3381 18.2965 14.6297 17.5934C14.9212 16.8902 14.7619 16.0887 14.2228 15.5496L13.7203 15.0471L15.0469 13.7215L15.5494 14.224C15.8108 14.4873 16.1448 14.6666 16.5087 14.7391C16.8726 14.8115 17.2498 14.7739 17.5922 14.6309C17.9352 14.4894 18.2284 14.2492 18.4346 13.9407C18.6407 13.6322 18.7505 13.2694 18.75 12.8984V12.1877H20.625V12.8984C20.625 13.6596 21.0797 14.3393 21.7828 14.6309C22.4859 14.9243 23.2875 14.7631 23.8256 14.224L24.3281 13.7215L25.6547 15.0471L25.1522 15.5496C24.6141 16.0877 24.4547 16.8902 24.7453 17.5934C25.0359 18.2965 25.7166 18.7502 26.4778 18.7502H27.1875V20.6252Z" fill="currentColor" /><path d="M19.6875 15.9377C17.6194 15.9377 15.9375 17.6196 15.9375 19.6877C15.9375 21.7559 17.6194 23.4377 19.6875 23.4377C21.7556 23.4377 23.4375 21.7559 23.4375 19.6877C23.4375 17.6196 21.7556 15.9377 19.6875 15.9377ZM19.6875 21.5627C18.6534 21.5627 17.8125 20.7218 17.8125 19.6877C17.8125 18.6537 18.6534 17.8127 19.6875 17.8127C20.7216 17.8127 21.5625 18.6537 21.5625 19.6877C21.5625 20.7218 20.7216 21.5627 19.6875 21.5627Z" fill="currentColor" /><path d="M57.1875 0.937744H47.8125C46.7784 0.937744 45.9375 1.77868 45.9375 2.81274V4.68774H40.3125V14.0627H37.5619C35.1225 6.30306 27.8831 0.937744 19.6875 0.937744C9.34875 0.937744 0.9375 9.34899 0.9375 19.6877C0.9375 28.0671 6.46406 35.1781 14.0625 37.5734V56.2502C14.0625 57.8009 15.3244 59.0627 16.875 59.0627H22.5C24.0506 59.0627 25.3125 57.8009 25.3125 56.2502V51.5627H40.3125V55.3127H45.9375V57.1877C45.9375 58.2218 46.7784 59.0627 47.8125 59.0627H57.1875C58.2216 59.0627 59.0625 58.2218 59.0625 57.1877V51.5627C59.0625 50.5287 58.2216 49.6877 57.1875 49.6877H47.8125C46.7784 49.6877 45.9375 50.5287 45.9375 51.5627V53.4377H42.1875V49.6877H25.3125V45.9377H32.8125V42.1877H34.6875V45.9377C34.6875 46.9718 35.5284 47.8127 36.5625 47.8127H45.9375C46.9716 47.8127 47.8125 46.9718 47.8125 45.9377V40.3127C47.8125 39.2787 46.9716 38.4377 45.9375 38.4377H36.5625C35.5284 38.4377 34.6875 39.2787 34.6875 40.3127H30.9375V44.0627H25.3125V37.5724C31.7175 35.5821 36.6619 30.2731 38.0438 23.4377H40.3125V32.8127H45.9375V34.6877C45.9375 35.7218 46.7784 36.5627 47.8125 36.5627H57.1875C58.2216 36.5627 59.0625 35.7218 59.0625 34.6877V29.0627C59.0625 28.0287 58.2216 27.1877 57.1875 27.1877H47.8125C46.7784 27.1877 45.9375 28.0287 45.9375 29.0627V30.9377H42.1875V21.5627H30.9375V23.4377H32.2687C30.6328 28.9334 25.5159 32.8127 19.6875 32.8127C12.45 32.8127 6.5625 26.9252 6.5625 19.6877C6.5625 12.4502 12.45 6.56274 19.6875 6.56274C22.1698 6.56607 24.6004 7.27223 26.698 8.59952C28.7956 9.92681 30.4745 11.821 31.5403 14.0627H30.9375V15.9377H42.1875V6.56274H45.9375V8.43774C45.9375 9.47181 46.7784 10.3127 47.8125 10.3127H57.1875C58.2216 10.3127 59.0625 9.47181 59.0625 8.43774V2.81274C59.0625 1.77868 58.2216 0.937744 57.1875 0.937744ZM47.8125 51.5627H57.1875L57.1884 57.1877H47.8125V51.5627ZM36.5625 40.3127H45.9375L45.9384 45.9377H36.5625V40.3127ZM47.8125 29.0627H57.1875L57.1884 34.6877H47.8125V29.0627ZM22.5 57.1877H16.875C16.3584 57.1877 15.9375 56.7677 15.9375 56.2502V44.0627H23.4375V56.2502C23.4375 56.7677 23.0166 57.1877 22.5 57.1877ZM23.4375 42.1877H15.9375V38.0599C17.1497 38.3065 18.4031 38.4377 19.6875 38.4377C20.9719 38.4377 22.2234 38.299 23.4375 38.0552V42.1877ZM19.6875 4.68774C11.4169 4.68774 4.6875 11.4171 4.6875 19.6877C4.6875 27.9584 11.4169 34.6877 19.6875 34.6877C26.5331 34.6877 32.5087 29.9974 34.2 23.4377H36.1313C34.4053 31.1037 27.6656 36.5627 19.6875 36.5627C10.3828 36.5627 2.8125 28.9924 2.8125 19.6877C2.8125 10.3831 10.3828 2.81274 19.6875 2.81274C26.8669 2.81274 33.2363 7.38212 35.5959 14.0627H33.5841C31.3041 8.43118 25.8084 4.68774 19.6875 4.68774ZM47.8125 8.43774V2.81274H57.1875L57.1884 8.43774H47.8125Z" fill="currentColor" /><path d="M49.6875 4.68774H51.5625V6.56274H49.6875V4.68774ZM53.4375 4.68774H55.3125V6.56274H53.4375V4.68774ZM57.1875 14.0627H47.8125C46.7784 14.0627 45.9375 14.9037 45.9375 15.9377V17.8127H30.9375V19.6877H45.9375V21.5627C45.9375 22.5968 46.7784 23.4377 47.8125 23.4377H57.1875C58.2216 23.4377 59.0625 22.5968 59.0625 21.5627V15.9377C59.0625 14.9037 58.2216 14.0627 57.1875 14.0627ZM47.8125 21.5627V15.9377H57.1875L57.1884 21.5627H47.8125Z" fill="currentColor" /><path d="M49.6875 17.8127H51.5625V19.6877H49.6875V17.8127ZM53.4375 17.8127H55.3125V19.6877H53.4375V17.8127ZM49.6875 30.9377H51.5625V32.8127H49.6875V30.9377ZM53.4375 30.9377H55.3125V32.8127H53.4375V30.9377ZM38.4375 42.1877H40.3125V44.0627H38.4375V42.1877ZM42.1875 42.1877H44.0625V44.0627H42.1875V42.1877ZM49.6875 53.4377H51.5625V55.3127H49.6875V53.4377ZM53.4375 53.4377H55.3125V55.3127H53.4375V53.4377Z" fill="currentColor" /></g><defs>
                                            <clipPath id="clip0_1_27424"><rect width={60} height={60} fill="white" transform="translate(0 0.000244141)" /></clipPath></defs></svg>
                                    </div>
                                    <h3 className="cs_fs_24 cs_semibold cs_mb_10">Identify Issues</h3>
                                    <p className="mb-0">setting for web iterate process before meta services impact</p>
                                </div>
                                <svg width={160} height={238} viewBox="0 0 160 238" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100.821 237.029H72.9299V214.498H100.821C119.567 214.498 134.817 200.855 134.817 184.085V50.8337C134.817 35.2827 120.673 22.6291 103.29 22.6291H5.51724L0 11.3635L5.51724 0.0979004H103.287C134.558 0.0979004 160 22.8579 160 50.8337V184.085C160 213.28 133.452 237.029 100.821 237.029Z" fill="currentColor" /></svg>
                                <svg width={186} height={164} viewBox="0 0 186 164" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M176.385 163.309H56.5362C25.362 163.309 0 138.219 0 107.376V7.10943L12.5535 0.555664L25.1071 7.10943V107.376C25.1071 124.521 39.2073 138.472 56.5362 138.472H176.385L186 150.89L176.385 163.309Z" fill="currentColor" /></svg>
                                <svg width={129} height={128} viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.55219 128.01C1.6859 128.01 0.982422 127.314 0.982422 126.457V124.87C0.982422 124.013 1.6859 123.317 2.55219 123.317C3.41848 123.317 4.12196 124.013 4.12196 124.87V126.457C4.12196 127.317 3.41848 128.01 2.55219 128.01ZM2.55219 110.552C1.6859 110.552 0.982422 109.856 0.982422 108.999V107.413C0.982422 106.556 1.6859 105.86 2.55219 105.86C3.41848 105.86 4.12196 106.556 4.12196 107.413V108.999C4.12196 109.856 3.41848 110.552 2.55219 110.552ZM2.55219 93.0913C1.6859 93.0913 0.982422 92.3953 0.982422 91.5383V89.9517C0.982422 89.0946 1.6859 88.3986 2.55219 88.3986C3.41848 88.3986 4.12196 89.0946 4.12196 89.9517V91.5383C4.12196 92.3953 3.41848 93.0913 2.55219 93.0913ZM2.55219 75.6335C1.6859 75.6335 0.982422 74.9375 0.982422 74.0804V72.4939C0.982422 71.6368 1.6859 70.9408 2.55219 70.9408C3.41848 70.9408 4.12196 71.6368 4.12196 72.4939V74.0804C4.12196 74.9375 3.41848 75.6335 2.55219 75.6335ZM2.55219 58.1726C1.6859 58.1726 0.982422 57.4766 0.982422 56.6196V55.033C0.982422 54.1759 1.6859 53.4799 2.55219 53.4799C3.41848 53.4799 4.12196 54.1759 4.12196 55.033V56.6196C4.12196 57.4766 3.41848 58.1726 2.55219 58.1726ZM3.09592 40.7452C3.01605 40.7452 2.93311 40.7391 2.85017 40.727C1.99309 40.5933 1.40942 39.797 1.54459 38.952C1.6306 38.4171 1.72891 37.87 1.83335 37.3351C1.99924 36.4932 2.82252 35.9431 3.67345 36.1103C4.52438 36.2744 5.07733 37.0889 4.91145 37.9308C4.81315 38.4323 4.72099 38.9399 4.64112 39.4383C4.52131 40.1981 3.8547 40.7452 3.09592 40.7452ZM9.23983 24.5062C8.95414 24.5062 8.66844 24.4302 8.40733 24.2691C7.67313 23.8132 7.45195 22.8558 7.90967 22.1294C8.20458 21.6674 8.5087 21.2024 8.81897 20.7526C9.30741 20.0444 10.2812 19.859 11.0001 20.3393C11.7158 20.8195 11.9032 21.786 11.4178 22.4972C11.1291 22.9166 10.8465 23.3482 10.5731 23.7798C10.272 24.2478 9.76206 24.5062 9.23983 24.5062ZM21.3126 11.9325C20.818 11.9325 20.3326 11.7015 20.0255 11.2699C19.5278 10.5679 19.6998 9.59832 20.4094 9.10899C20.861 8.79594 21.3249 8.48593 21.7857 8.19111C22.5137 7.72306 23.4845 7.92973 23.9545 8.65005C24.4245 9.37037 24.2187 10.3308 23.4906 10.7958C23.0605 11.0693 22.6305 11.3581 22.2096 11.6499C21.9393 11.8413 21.6259 11.9325 21.3126 11.9325ZM37.3758 5.01503C36.6509 5.01503 35.9996 4.51354 35.8429 3.78411C35.6648 2.94526 36.2054 2.1216 37.0533 1.94228C37.5909 1.82983 38.1407 1.72649 38.6845 1.63227C39.5385 1.48639 40.3495 2.0517 40.5 2.89663C40.6475 3.74156 40.0761 4.54394 39.2221 4.69286C38.7152 4.781 38.2053 4.87826 37.7045 4.9816C37.5939 5.00287 37.4834 5.01503 37.3758 5.01503ZM127.151 4.0698H125.547C124.681 4.0698 123.977 3.3738 123.977 2.51671C123.977 1.65963 124.681 0.963623 125.547 0.963623H127.151C128.017 0.963623 128.72 1.65963 128.72 2.51671C128.717 3.3738 128.017 4.0698 127.151 4.0698ZM109.502 4.0698H107.899C107.032 4.0698 106.329 3.3738 106.329 2.51671C106.329 1.65963 107.032 0.963623 107.899 0.963623H109.502C110.368 0.963623 111.072 1.65963 111.072 2.51671C111.072 3.3738 110.368 4.0698 109.502 4.0698ZM91.8538 4.0698H90.2503C89.384 4.0698 88.6805 3.3738 88.6805 2.51671C88.6805 1.65963 89.384 0.963623 90.2503 0.963623H91.8538C92.7201 0.963623 93.4236 1.65963 93.4236 2.51671C93.4236 3.3738 92.7201 4.0698 91.8538 4.0698ZM74.2085 4.0698H72.605C71.7387 4.0698 71.0352 3.3738 71.0352 2.51671C71.0352 1.65963 71.7387 0.963623 72.605 0.963623H74.2085C75.0748 0.963623 75.7783 1.65963 75.7783 2.51671C75.7783 3.3738 75.0748 4.0698 74.2085 4.0698ZM56.5602 4.0698H54.9566C54.0903 4.0698 53.3868 3.3738 53.3868 2.51671C53.3868 1.65963 54.0903 0.963623 54.9566 0.963623H56.5602C57.4265 0.963623 58.1299 1.65963 58.1299 2.51671C58.1299 3.3738 57.4265 4.0698 56.5602 4.0698Z" fill="currentColor" /></svg>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="cs_card cs_style_3 position-relative">
                                <div className="cs_card_content cs_white_bg cs_radius_35 text-center">
                                    <div className="cs_card_icon cs_center cs_heading_color cs_mb_22">
                                        <svg width={60} height={60} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_27401)"><path d="M50.7275 40.0912C49.2729 39.5458 47.6365 39.7276 46.182 40.6367L37.4547 45.9094C37.0911 45.6367 36.7275 45.364 36.3638 45.2731L23.182 40.5458C22.182 40.1822 21.0911 40.1822 20.182 40.6367C20.182 40.6367 20.0911 40.6367 20.0911 40.7276L14.8184 43.9094V43.6367C14.8184 42.6367 14.0002 41.8185 13.0002 41.8185H8.63654C7.63654 41.8185 6.81836 42.6367 6.81836 43.6367V57.2731C6.81836 58.2731 7.63654 59.0912 8.63654 59.0912H12.9093C13.9093 59.0912 14.7275 58.2731 14.7275 57.2731V56.8185C16.7275 55.7276 17.5456 54.7276 18.9093 54.9094L33.4547 58.0912C34.6365 58.4549 35.9093 58.1822 37.0002 57.4549L51.8184 45.7276C53.8184 44.364 53.6365 41.1822 50.7275 40.0912ZM8.63654 57.2731V43.6367H12.9093V57.2731H8.63654ZM50.7275 44.2731C35.6365 55.7276 36.0002 56.9094 33.9093 56.2731L19.2729 53.0912H19.182C17.0911 52.7276 15.6365 54.1822 14.7275 54.6367V45.9094L20.9093 42.1822C21.4547 42.0003 22.0002 42.0003 22.5456 42.1822L35.7275 46.9094C36.9093 47.364 37.3638 48.8185 36.6365 49.8185C36.0911 50.5458 35.182 50.8185 34.2729 50.4549L26.4547 47.4549C26.0002 47.2731 25.4547 47.5458 25.2729 48.0003C25.0911 48.4549 25.3638 49.0003 25.8184 49.1822L33.6365 52.1822C35.2729 52.9094 37.0911 52.364 38.0911 51.0003C38.8184 50.0003 39.0911 48.8185 38.5456 47.4549L47.182 42.2731C48.0911 41.7276 49.182 41.5458 50.182 41.9094C51.5456 42.364 51.6365 43.6367 50.7275 44.2731Z" fill="currentColor" /><path d="M28.4546 31.0004C29.2728 31.5458 29.8182 32.4549 30 33.364C29.1819 33.8185 28.7273 34.7276 28.7273 35.6367C28.7273 36.9095 29.6364 38.0004 30.9091 38.2731L31.2728 41.1822C31.3637 41.6367 31.7273 42.0004 32.1819 42.0004H39.2728C39.7273 42.0004 40.091 41.6367 40.1819 41.1822L40.5455 38.1822C41.6364 37.8185 42.5455 36.8185 42.5455 35.6367C42.5455 34.6367 42 33.8185 41.2728 33.364C41.3637 32.4549 41.9091 31.5458 42.8182 30.9095C46.1819 28.5458 48.2728 24.7276 48.2728 20.6367C48.2728 13.5458 42.3637 7.81855 35.1819 8.18218C28.7273 8.45491 23.3637 14.0004 23.2728 20.4549C23 24.7276 25 28.6367 28.4546 31.0004ZM32.9091 40.2731L32.7273 38.4549H38.6364L38.4546 40.2731H32.9091ZM39.6364 36.6367H31.3637C30.9091 36.6367 30.4546 36.2731 30.4546 35.7276C30.4546 35.2731 30.8182 34.8185 31.3637 34.8185H39.6364C40.091 34.8185 40.5455 35.1822 40.5455 35.7276C40.5455 36.1822 40.1819 36.6367 39.6364 36.6367ZM35 10.0913C41.091 9.81855 46.1819 14.7276 46.1819 20.7276C46.1819 24.2731 44.4546 27.5458 41.5455 29.5458C40.2728 30.364 39.4546 31.6367 39.2728 33.0913H31.8182C31.6364 31.7276 30.8182 30.4549 29.5455 29.5458C26.6364 27.5458 24.9091 24.1822 24.9091 20.6367C25 15.0913 29.5455 10.364 35 10.0913Z" fill="currentColor" /><path d="M35.273 14.6367C38.7275 14.4549 41.6366 17.2731 41.6366 20.7276C41.6366 21.2731 42.0003 21.6367 42.5457 21.6367C43.0912 21.6367 43.4548 21.2731 43.4548 20.7276C43.4548 16.2731 39.7275 12.6367 35.1821 12.8185C34.6366 12.8185 34.273 13.2731 34.273 13.7276C34.273 14.2731 34.7275 14.6367 35.273 14.6367ZM35.5457 6.27306C36.0912 6.27306 36.4548 5.90942 36.4548 5.36397V1.81851C36.4548 1.27306 36.0912 0.909424 35.5457 0.909424C35.0003 0.909424 34.6366 1.27306 34.6366 1.81851V5.36397C34.6366 5.90942 35.0003 6.27306 35.5457 6.27306ZM29.0912 6.72761C29.273 7.09124 29.5457 7.27306 29.9094 7.27306C30.0003 7.27306 30.1821 7.27306 30.273 7.18215C30.7275 7.00033 31.0003 6.45488 30.7275 6.00033L29.3639 2.72761C29.1821 2.27306 28.6366 2.00033 28.1821 2.27306C27.7275 2.45488 27.4548 3.00033 27.7275 3.45488L29.0912 6.72761ZM24.5457 10.1822C24.9094 10.5458 25.4548 10.5458 25.8184 10.1822C26.1821 9.81851 26.1821 9.27306 25.8184 8.90942L23.273 6.36397C22.9094 6.00033 22.3639 6.00033 22.0003 6.36397C21.6366 6.72761 21.6366 7.27306 22.0003 7.6367L24.5457 10.1822ZM46.4548 10.4549L49.0003 7.90942C49.3639 7.54579 49.3639 7.00033 49.0003 6.6367C48.6366 6.27306 48.0912 6.27306 47.7275 6.6367L45.1821 9.09124C44.8184 9.45488 44.8184 10.0003 45.1821 10.364C45.4548 10.7276 46.0912 10.7276 46.4548 10.4549ZM40.7275 7.36397C40.8184 7.45488 41.0003 7.45488 41.0912 7.45488C41.4548 7.45488 41.8184 7.27306 41.9094 6.90942L43.273 3.6367C43.4548 3.18215 43.273 2.6367 42.8184 2.45488C42.3639 2.27306 41.8184 2.45488 41.6366 2.90942L40.273 6.18215C40.0912 6.6367 40.273 7.18215 40.7275 7.36397Z" fill="currentColor" /></g><defs>
                                            <clipPath id="clip0_1_27401"><rect width={60} height={60} fill="white" transform="translate(0 0.000244141)" /></clipPath></defs></svg>
                                    </div>
                                    <h3 className="cs_fs_24 cs_semibold cs_mb_10">Prepare Solution</h3>
                                    <p className="mb-0">Getting for web iterate process before meta services impact</p>
                                </div>
                                <svg width={160} height={238} viewBox="0 0 160 238" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100.821 237.029H72.9299V214.498H100.821C119.567 214.498 134.817 200.855 134.817 184.085V50.8337C134.817 35.2827 120.673 22.6291 103.29 22.6291H5.51724L0 11.3635L5.51724 0.0979004H103.287C134.558 0.0979004 160 22.8579 160 50.8337V184.085C160 213.28 133.452 237.029 100.821 237.029Z" fill="currentColor" /></svg>
                                <svg width={186} height={164} viewBox="0 0 186 164" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M176.385 163.309H56.5362C25.362 163.309 0 138.219 0 107.376V7.10943L12.5535 0.555664L25.1071 7.10943V107.376C25.1071 124.521 39.2073 138.472 56.5362 138.472H176.385L186 150.89L176.385 163.309Z" fill="currentColor" /></svg>
                                <svg width={129} height={128} viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.55219 128.01C1.6859 128.01 0.982422 127.314 0.982422 126.457V124.87C0.982422 124.013 1.6859 123.317 2.55219 123.317C3.41848 123.317 4.12196 124.013 4.12196 124.87V126.457C4.12196 127.317 3.41848 128.01 2.55219 128.01ZM2.55219 110.552C1.6859 110.552 0.982422 109.856 0.982422 108.999V107.413C0.982422 106.556 1.6859 105.86 2.55219 105.86C3.41848 105.86 4.12196 106.556 4.12196 107.413V108.999C4.12196 109.856 3.41848 110.552 2.55219 110.552ZM2.55219 93.0913C1.6859 93.0913 0.982422 92.3953 0.982422 91.5383V89.9517C0.982422 89.0946 1.6859 88.3986 2.55219 88.3986C3.41848 88.3986 4.12196 89.0946 4.12196 89.9517V91.5383C4.12196 92.3953 3.41848 93.0913 2.55219 93.0913ZM2.55219 75.6335C1.6859 75.6335 0.982422 74.9375 0.982422 74.0804V72.4939C0.982422 71.6368 1.6859 70.9408 2.55219 70.9408C3.41848 70.9408 4.12196 71.6368 4.12196 72.4939V74.0804C4.12196 74.9375 3.41848 75.6335 2.55219 75.6335ZM2.55219 58.1726C1.6859 58.1726 0.982422 57.4766 0.982422 56.6196V55.033C0.982422 54.1759 1.6859 53.4799 2.55219 53.4799C3.41848 53.4799 4.12196 54.1759 4.12196 55.033V56.6196C4.12196 57.4766 3.41848 58.1726 2.55219 58.1726ZM3.09592 40.7452C3.01605 40.7452 2.93311 40.7391 2.85017 40.727C1.99309 40.5933 1.40942 39.797 1.54459 38.952C1.6306 38.4171 1.72891 37.87 1.83335 37.3351C1.99924 36.4932 2.82252 35.9431 3.67345 36.1103C4.52438 36.2744 5.07733 37.0889 4.91145 37.9308C4.81315 38.4323 4.72099 38.9399 4.64112 39.4383C4.52131 40.1981 3.8547 40.7452 3.09592 40.7452ZM9.23983 24.5062C8.95414 24.5062 8.66844 24.4302 8.40733 24.2691C7.67313 23.8132 7.45195 22.8558 7.90967 22.1294C8.20458 21.6674 8.5087 21.2024 8.81897 20.7526C9.30741 20.0444 10.2812 19.859 11.0001 20.3393C11.7158 20.8195 11.9032 21.786 11.4178 22.4972C11.1291 22.9166 10.8465 23.3482 10.5731 23.7798C10.272 24.2478 9.76206 24.5062 9.23983 24.5062ZM21.3126 11.9325C20.818 11.9325 20.3326 11.7015 20.0255 11.2699C19.5278 10.5679 19.6998 9.59832 20.4094 9.10899C20.861 8.79594 21.3249 8.48593 21.7857 8.19111C22.5137 7.72306 23.4845 7.92973 23.9545 8.65005C24.4245 9.37037 24.2187 10.3308 23.4906 10.7958C23.0605 11.0693 22.6305 11.3581 22.2096 11.6499C21.9393 11.8413 21.6259 11.9325 21.3126 11.9325ZM37.3758 5.01503C36.6509 5.01503 35.9996 4.51354 35.8429 3.78411C35.6648 2.94526 36.2054 2.1216 37.0533 1.94228C37.5909 1.82983 38.1407 1.72649 38.6845 1.63227C39.5385 1.48639 40.3495 2.0517 40.5 2.89663C40.6475 3.74156 40.0761 4.54394 39.2221 4.69286C38.7152 4.781 38.2053 4.87826 37.7045 4.9816C37.5939 5.00287 37.4834 5.01503 37.3758 5.01503ZM127.151 4.0698H125.547C124.681 4.0698 123.977 3.3738 123.977 2.51671C123.977 1.65963 124.681 0.963623 125.547 0.963623H127.151C128.017 0.963623 128.72 1.65963 128.72 2.51671C128.717 3.3738 128.017 4.0698 127.151 4.0698ZM109.502 4.0698H107.899C107.032 4.0698 106.329 3.3738 106.329 2.51671C106.329 1.65963 107.032 0.963623 107.899 0.963623H109.502C110.368 0.963623 111.072 1.65963 111.072 2.51671C111.072 3.3738 110.368 4.0698 109.502 4.0698ZM91.8538 4.0698H90.2503C89.384 4.0698 88.6805 3.3738 88.6805 2.51671C88.6805 1.65963 89.384 0.963623 90.2503 0.963623H91.8538C92.7201 0.963623 93.4236 1.65963 93.4236 2.51671C93.4236 3.3738 92.7201 4.0698 91.8538 4.0698ZM74.2085 4.0698H72.605C71.7387 4.0698 71.0352 3.3738 71.0352 2.51671C71.0352 1.65963 71.7387 0.963623 72.605 0.963623H74.2085C75.0748 0.963623 75.7783 1.65963 75.7783 2.51671C75.7783 3.3738 75.0748 4.0698 74.2085 4.0698ZM56.5602 4.0698H54.9566C54.0903 4.0698 53.3868 3.3738 53.3868 2.51671C53.3868 1.65963 54.0903 0.963623 54.9566 0.963623H56.5602C57.4265 0.963623 58.1299 1.65963 58.1299 2.51671C58.1299 3.3738 57.4265 4.0698 56.5602 4.0698Z" fill="currentColor" /></svg>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="cs_card cs_style_3 position-relative">
                                <div className="cs_card_content cs_white_bg cs_radius_35 text-center">
                                    <div className="cs_card_icon cs_center cs_heading_color cs_mb_22">
                                        <svg width={60} height={51} viewBox="0 0 60 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18.7171 28.243C17.763 28.2429 16.823 28.0133 15.9762 27.5736C15.1295 27.134 14.401 26.4971 13.852 25.7168C13.244 24.8539 12.8767 23.8448 12.7879 22.793C12.699 21.7412 12.8917 20.6847 13.3463 19.732L7.9858 12.1153C6.93566 12.2217 5.87612 12.0466 4.91606 11.6079C3.95601 11.1693 3.13006 10.4829 2.52308 9.61939C1.85579 8.67158 1.47994 7.54947 1.44171 6.39095C1.40349 5.23243 1.70455 4.08798 2.30792 3.09825C2.39159 2.96091 2.50919 2.84742 2.6494 2.76866C2.78961 2.6899 2.94772 2.64854 3.10853 2.64854H3.11765C3.27997 2.65011 3.43911 2.6938 3.57948 2.77535C3.71985 2.85689 3.83665 2.97348 3.91843 3.11371L5.46009 5.75709L7.62577 4.23285L5.65784 1.88959C5.55335 1.7653 5.48294 1.61598 5.45352 1.45628C5.42411 1.29659 5.43669 1.13199 5.49004 0.978615C5.54339 0.825245 5.63568 0.688368 5.75785 0.581401C5.88003 0.474434 6.0279 0.401049 6.18697 0.368437C7.32227 0.134568 8.50116 0.237465 9.57877 0.664485C10.6564 1.0915 11.5858 1.82404 12.2527 2.77208C12.8607 3.63496 13.228 4.64415 13.3168 5.69595C13.4057 6.74775 13.213 7.80426 12.7584 8.75692L18.1187 16.3734C19.1689 16.267 20.2285 16.4422 21.1886 16.8808C22.1487 17.3195 22.9747 18.0059 23.5816 18.8695C24.2489 19.8174 24.6248 20.9395 24.6631 22.0981C24.7013 23.2567 24.4003 24.4012 23.797 25.391C23.7125 25.5296 23.5934 25.6438 23.4515 25.7226C23.3096 25.8014 23.1497 25.842 22.9874 25.8404C22.8251 25.8389 22.666 25.7952 22.5256 25.7137C22.3852 25.6322 22.2684 25.5157 22.1866 25.3755L20.6448 22.7318L18.4789 24.2561L20.447 26.5996C20.5514 26.724 20.6217 26.8733 20.651 27.0329C20.6804 27.1926 20.6678 27.3571 20.6144 27.5104C20.5611 27.6637 20.4689 27.8006 20.3469 27.9076C20.2248 28.0146 20.077 28.088 19.9181 28.1208C19.5177 28.203 19.1155 28.243 18.7171 28.243ZM8.41841 10.1632C8.56874 10.1632 8.71685 10.1993 8.85027 10.2686C8.98369 10.3379 9.0985 10.4382 9.18501 10.5611L15.2138 19.1277C15.3193 19.2775 15.3785 19.4549 15.3842 19.638C15.3899 19.8211 15.3418 20.0019 15.2459 20.1579C14.8284 20.8364 14.6191 21.6224 14.6439 22.4186C14.6687 23.2148 14.9264 23.9862 15.3852 24.6374C15.9409 25.4275 16.7593 25.9944 17.6943 26.237L16.3865 24.6796C16.303 24.5801 16.2411 24.4644 16.2047 24.3398C16.1683 24.2152 16.1581 24.0843 16.1749 23.9556C16.1917 23.8268 16.235 23.703 16.3021 23.5918C16.3692 23.4807 16.4587 23.3847 16.5649 23.3099L20.4006 20.6104C20.5068 20.5357 20.6274 20.4838 20.7547 20.4581C20.882 20.4324 21.0132 20.4334 21.1401 20.4611C21.2669 20.4888 21.3867 20.5425 21.4917 20.6189C21.5967 20.6953 21.6847 20.7927 21.7501 20.9048L22.7747 22.6617C22.8619 21.6997 22.6044 20.738 22.0483 19.9483C21.5901 19.2966 20.9509 18.7936 20.2097 18.5016C19.4686 18.2095 18.6581 18.1412 17.8785 18.3051C17.6992 18.3427 17.5128 18.3269 17.3424 18.2597C17.172 18.1926 17.025 18.0769 16.9195 17.9271L10.8909 9.36092C10.7854 9.21113 10.7262 9.0337 10.7205 8.85059C10.7148 8.66749 10.7629 8.48672 10.8588 8.33065C11.2763 7.65221 11.4856 6.86621 11.4608 6.07C11.436 5.27379 11.1782 4.50233 10.7194 3.85117C10.1636 3.06121 9.34533 2.49435 8.41044 2.25173L9.71821 3.80902C9.80167 3.90846 9.86358 4.02415 9.9 4.14876C9.93642 4.27338 9.94656 4.40419 9.9298 4.53293C9.91303 4.66167 9.86971 4.78552 9.80258 4.89664C9.73545 5.00776 9.64598 5.10374 9.53983 5.17848L5.70407 7.87802C5.5979 7.95283 5.47734 8.00475 5.35005 8.03049C5.22275 8.05622 5.09149 8.05522 4.9646 8.02753C4.83771 7.99985 4.71797 7.94609 4.61296 7.86966C4.50795 7.79324 4.41998 7.69582 4.35462 7.58359L3.33005 5.82692C3.2427 6.78883 3.5001 7.75047 4.05628 8.54013C5.03691 9.95467 6.76331 10.5209 8.41841 10.1632Z" fill="currentColor" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M54.5821 28.7167C54.3334 28.7167 54.095 28.6179 53.9192 28.4421C53.7433 28.2663 53.6446 28.0278 53.6446 27.7792V24.3638C53.6446 23.6921 53.098 23.1456 52.4263 23.1456H48.3179C46.4384 23.1456 44.9091 21.6164 44.9091 19.7367V18.5598C44.9091 17.8881 44.3625 17.3415 43.6908 17.3415H16.9935C16.7448 17.3415 16.5064 17.2428 16.3306 17.067C16.1547 16.8911 16.056 16.6527 16.056 16.404C16.056 16.1554 16.1547 15.917 16.3306 15.7411C16.5064 15.5653 16.7448 15.4666 16.9935 15.4666H43.691C45.3965 15.4666 46.7842 16.8541 46.7842 18.5598V19.7367C46.7842 20.5826 47.4722 21.2706 48.3181 21.2706H52.4265C54.132 21.2706 55.5197 22.6581 55.5197 24.3638V27.7792C55.5196 28.0278 55.4208 28.2663 55.245 28.4421C55.0692 28.6179 54.8307 28.7166 54.5821 28.7167ZM35.2057 42.9181H11.8677C10.1621 42.9181 8.77441 41.5304 8.77441 39.8249V18.5598C8.77441 16.8542 10.1619 15.4666 11.8677 15.4666H12.1497C12.3984 15.4666 12.6368 15.5653 12.8126 15.7411C12.9885 15.917 13.0872 16.1554 13.0872 16.404C13.0872 16.6527 12.9885 16.8911 12.8126 17.067C12.6368 17.2428 12.3984 17.3415 12.1497 17.3415H11.8677C11.196 17.3415 10.6494 17.8881 10.6494 18.5598V39.8247C10.6494 40.4964 11.196 41.043 11.8677 41.043H35.2057C35.4543 41.043 35.6928 41.1418 35.8686 41.3176C36.0445 41.4934 36.1432 41.7319 36.1432 41.9806C36.1432 42.2292 36.0445 42.4677 35.8686 42.6435C35.6928 42.8194 35.4543 42.9181 35.2057 42.9181ZM43.6908 42.9181H39.1342C38.8856 42.9181 38.6471 42.8194 38.4713 42.6435C38.2955 42.4677 38.1967 42.2293 38.1967 41.9806C38.1967 41.732 38.2955 41.4935 38.4713 41.3177C38.6471 41.1419 38.8856 41.0431 39.1342 41.0431H43.6908C44.3625 41.0431 44.9091 40.4966 44.9091 39.8249V38.6476C44.9091 36.7681 46.4382 35.2388 48.3179 35.2388H52.4263C53.098 35.2388 53.6446 34.6921 53.6446 34.0202V31.8243C53.6446 31.5756 53.7433 31.3372 53.9192 31.1613C54.095 30.9855 54.3334 30.8868 54.5821 30.8868C54.8307 30.8868 55.0692 30.9855 55.245 31.1613C55.4208 31.3372 55.5196 31.5756 55.5196 31.8243V34.0202C55.5196 35.7261 54.132 37.1138 52.4263 37.1138H48.3179C47.4722 37.1138 46.7841 37.8018 46.7841 38.6476V39.8249C46.7841 41.5304 45.3964 42.9181 43.6908 42.9181Z" fill="currentColor" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M46.8448 50.5468H38.8074C36.3048 50.5468 34.2686 48.5108 34.2686 46.008V39.5722C34.2684 39.4132 34.2052 39.2608 34.0928 39.1484C33.9804 39.036 33.828 38.9728 33.669 38.9726H23.0924C21.728 38.9726 20.6178 37.8625 20.6178 36.498V30.0774C20.6178 28.2867 22.0747 26.8299 23.8652 26.8299C25.6562 26.8299 27.1131 28.2867 27.1131 30.0774V32.016C27.1131 32.2203 27.1983 32.4221 27.3469 32.5699C27.4872 32.7094 27.6671 32.7861 27.8538 32.7861H27.858C28.0527 32.7854 28.2392 32.7075 28.3766 32.5694C28.4456 32.5008 28.5003 32.4192 28.5375 32.3294C28.5747 32.2395 28.5938 32.1431 28.5935 32.0458V30.1118C28.5935 28.3077 30.0457 26.8356 31.8306 26.8299H31.8412C32.2679 26.8286 32.6905 26.9121 33.0847 27.0754C33.4789 27.2388 33.8367 27.4787 34.1374 27.7814C34.44 28.0821 34.6798 28.4399 34.8431 28.834C35.0064 29.2281 35.0898 29.6507 35.0886 30.0772V32.0457C35.0888 32.2419 35.1669 32.4301 35.3057 32.5689C35.4444 32.7076 35.6326 32.7857 35.8288 32.7859L35.9112 32.7861C36.1075 32.7858 36.2956 32.7078 36.4344 32.569C36.5732 32.4302 36.6512 32.2421 36.6514 32.0458V29.5398C36.6514 28.816 36.9335 28.1355 37.4454 27.624C37.6963 27.3719 37.9947 27.172 38.3233 27.0359C38.6519 26.8999 39.0042 26.8303 39.3599 26.8313H39.3619L57.043 26.8437C58.6735 26.8448 60 28.1723 60 29.8028C60 31.4345 58.6725 32.762 57.0409 32.762H43.1464V36.4988C43.1464 37.163 42.8851 37.7857 42.4107 38.2524C41.9444 38.711 41.3249 38.9669 40.6662 38.9726C40.5091 38.9736 40.3588 39.0367 40.2481 39.1482C40.1923 39.2037 40.148 39.2698 40.1178 39.3425C40.0877 39.4153 40.0723 39.4933 40.0725 39.572V44.0666C40.0727 44.2256 40.1359 44.378 40.2483 44.4904C40.3607 44.6028 40.5131 44.6661 40.6721 44.6662H46.8151C48.432 44.6662 49.7644 45.9678 49.7852 47.5678C49.7915 47.9573 49.7198 48.3441 49.5743 48.7055C49.4288 49.0669 49.2125 49.3955 48.938 49.6719C48.6651 49.95 48.3393 50.1706 47.9798 50.3209C47.6203 50.4711 47.2344 50.5479 46.8448 50.5468ZM23.8325 28.7055C23.0831 28.7234 22.4929 29.3541 22.4929 30.1038V36.4983C22.4929 36.6573 22.5561 36.8098 22.6686 36.9223C22.781 37.0347 22.9335 37.0979 23.0926 37.0979L33.6692 37.0977C35.0357 37.0977 36.1438 38.2056 36.1438 39.5723V46.0082C36.1438 47.4794 37.3363 48.6719 38.8075 48.6719H46.8225C47.1016 48.6719 47.3747 48.5725 47.5772 48.3804C47.6844 48.2794 47.7694 48.1572 47.8268 48.0215C47.8841 47.8858 47.9125 47.7396 47.9102 47.5923C47.9027 47.0129 47.4113 46.5414 46.815 46.5414H40.6719C39.3052 46.5414 38.1973 45.4335 38.1973 44.0668V39.5722C38.1973 38.9112 38.4548 38.2898 38.9223 37.8225C39.3799 37.3625 40.0008 37.102 40.6496 37.0977C40.9983 37.0946 41.2714 36.8316 41.2714 36.4988V31.8245C41.2714 31.5758 41.3701 31.3374 41.546 31.1616C41.7218 30.9858 41.9602 30.887 42.2089 30.887H57.0179C57.6076 30.887 58.1068 30.4257 58.1247 29.8364C58.1432 29.2237 57.6502 28.7192 57.0418 28.7187L39.3607 28.7063H39.3601C39.2074 28.7063 39.056 28.7454 38.9267 28.8264C38.6713 28.9864 38.5264 29.2521 38.5264 29.5398V32.0047C38.5264 33.4718 37.3371 34.6609 35.8702 34.6609C34.4031 34.6609 33.2138 33.4716 33.2138 32.0045V30.0772C33.2143 29.897 33.179 29.7185 33.1101 29.552C33.0411 29.3854 32.9397 29.2343 32.8119 29.1072C32.6848 28.9792 32.5336 28.8777 32.367 28.8086C32.2004 28.7395 32.0218 28.7042 31.8414 28.7047H31.837C31.0826 28.7071 30.469 29.3382 30.469 30.1116V32.0457C30.469 32.7442 30.1969 33.401 29.7029 33.8951C28.7314 34.9031 27.004 34.9141 26.0258 33.8997C25.5255 33.4024 25.2385 32.7159 25.2385 32.0159V30.0772C25.2382 29.3098 24.6043 28.6871 23.8325 28.7055ZM9.71239 32.2413H3.04883C2.73259 32.2413 2.42107 32.1931 2.12289 32.0979C1.5057 31.903 0.966911 31.516 0.585049 30.9934C0.203187 30.4708 -0.00178434 29.8399 1.17032e-05 29.1926C1.17032e-05 28.3784 0.317069 27.6127 0.892913 27.0369C1.23777 26.6926 1.65984 26.4356 2.12403 26.2874C2.42298 26.1921 2.7349 26.1437 3.04867 26.144H9.71206C9.9607 26.144 10.1992 26.2428 10.375 26.4186C10.5508 26.5944 10.6496 26.8328 10.6496 27.0815C10.6496 27.3301 10.5508 27.5686 10.375 27.7444C10.1992 27.9202 9.9607 28.019 9.71206 28.019H3.04867C2.89437 28.0188 2.74154 28.0491 2.599 28.1081C2.45645 28.1672 2.327 28.2539 2.2181 28.3632C2.10891 28.4719 2.02235 28.6012 1.96343 28.7436C1.90452 28.8859 1.8744 29.0386 1.87484 29.1926C1.87411 29.4419 1.95299 29.6848 2.09999 29.8861C2.24699 30.0873 2.45443 30.2363 2.69206 30.3115C2.80733 30.348 2.92757 30.3666 3.04851 30.3663H9.71206C9.9607 30.3663 10.1992 30.465 10.375 30.6408C10.5509 30.8166 10.6497 31.055 10.6497 31.3036C10.6498 31.5523 10.551 31.7908 10.3752 31.9666C10.1995 32.1424 9.96103 32.2413 9.71239 32.2413ZM42.6146 12.6959H28.8005C27.1936 12.6959 25.8862 11.3885 25.8862 9.78157C25.8862 8.17464 27.1936 6.86719 28.8005 6.86719H42.6146C44.2216 6.86719 45.529 8.17464 45.529 9.78157C45.529 11.3885 44.2216 12.6959 42.6146 12.6959ZM28.8005 8.74218C28.2275 8.74218 27.7612 9.20849 27.7612 9.78157C27.7612 10.3546 28.2275 10.821 28.8005 10.821H42.6146C43.1877 10.821 43.654 10.3546 43.654 9.78157C43.654 9.20849 43.1877 8.74218 42.6146 8.74218H28.8005Z" fill="currentColor" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2.40722 28.1186C2.15858 28.1186 1.92013 28.0198 1.74431 27.844C1.5685 27.6682 1.46973 27.4297 1.46973 27.1811V19.6876C1.46973 18.2379 2.64909 17.0585 4.09879 17.0585C4.80159 17.0585 5.4619 17.3321 5.95816 17.829C6.20305 18.0725 6.39717 18.3622 6.5293 18.6812C6.66142 19.0003 6.72891 19.3424 6.72785 19.6877V27.0819C6.72785 27.3306 6.62908 27.569 6.45326 27.7448C6.27745 27.9207 6.03899 28.0194 5.79035 28.0194C5.54171 28.0194 5.30326 27.9207 5.12744 27.7448C4.95163 27.569 4.85286 27.3306 4.85286 27.0819V19.6877C4.85318 19.5888 4.83386 19.4907 4.796 19.3992C4.75815 19.3077 4.70251 19.2247 4.63232 19.1549C4.56246 19.0845 4.47933 19.0287 4.38774 18.9908C4.29615 18.9528 4.19793 18.9334 4.09879 18.9337C3.89886 18.9339 3.70719 19.0134 3.56582 19.1548C3.42445 19.2962 3.34494 19.4878 3.34472 19.6877V27.1812C3.34468 27.4298 3.24589 27.6682 3.07008 27.844C2.89427 28.0198 2.65584 28.1186 2.40722 28.1186ZM4.09879 41.3275C2.64909 41.3275 1.46973 40.1481 1.46973 38.6984V31.205C1.46973 30.9563 1.5685 30.7179 1.74431 30.5421C1.92013 30.3662 2.15858 30.2675 2.40722 30.2675C2.65586 30.2675 2.89432 30.3662 3.07014 30.5421C3.24595 30.7179 3.34472 30.9563 3.34472 31.205V38.6984C3.34472 39.1143 3.68294 39.4525 4.09879 39.4525C4.51464 39.4525 4.85286 39.1143 4.85286 38.6984V31.3041C4.85286 31.0555 4.95163 30.817 5.12744 30.6412C5.30326 30.4654 5.54171 30.3666 5.79035 30.3666C6.03899 30.3666 6.27745 30.4654 6.45326 30.6412C6.62908 30.817 6.72785 31.0555 6.72785 31.3041V38.6984C6.72785 40.1481 5.54849 41.3275 4.09879 41.3275ZM33.8513 17.3422C33.6027 17.3422 33.3642 17.2434 33.1884 17.0676C33.0126 16.8918 32.9138 16.6534 32.9138 16.4047V11.7587C32.9138 11.5101 33.0126 11.2716 33.1884 11.0958C33.3642 10.92 33.6027 10.8212 33.8513 10.8212C34.0999 10.8212 34.3384 10.92 34.5142 11.0958C34.69 11.2716 34.7888 11.5101 34.7888 11.7587V16.4047C34.7888 16.6534 34.69 16.8918 34.5142 17.0676C34.3384 17.2434 34.0999 17.3422 33.8513 17.3422ZM37.5619 17.3422C37.3133 17.3422 37.0748 17.2434 36.899 17.0676C36.7232 16.8918 36.6244 16.6534 36.6244 16.4047V11.7587C36.6244 11.5101 36.7232 11.2716 36.899 11.0958C37.0748 10.92 37.3133 10.8212 37.5619 10.8212C37.8106 10.8212 38.049 10.92 38.2248 11.0958C38.4006 11.2716 38.4994 11.5101 38.4994 11.7587V16.4047C38.4994 16.6534 38.4006 16.8918 38.2248 17.0676C38.049 17.2434 37.8106 17.3422 37.5619 17.3422ZM22.6225 6.0304C22.4812 6.0304 22.3418 5.99829 22.2148 5.93649C19.1219 4.43942 15.5123 4.95537 15.4762 4.96074C15.2305 4.99733 14.9802 4.93499 14.7804 4.78738C14.5806 4.63977 14.4474 4.41894 14.4101 4.17331C14.3729 3.92779 14.4347 3.67754 14.5819 3.47756C14.7292 3.27759 14.9498 3.14427 15.1953 3.1069C15.3654 3.08102 19.4031 2.49248 23.0317 4.24866C23.223 4.34103 23.3772 4.49563 23.4692 4.68714C23.5611 4.87864 23.5853 5.09569 23.5378 5.30274C23.4902 5.50978 23.3738 5.69454 23.2075 5.82674C23.0412 5.95894 22.8349 6.03075 22.6225 6.0304ZM23.2369 9.35379C23.0795 9.3538 22.9246 9.31393 22.7867 9.23791C21.5992 8.58622 20.186 8.16353 18.5862 7.98173C18.4639 7.96783 18.3455 7.92997 18.2378 7.87031C18.1301 7.81065 18.0352 7.73036 17.9585 7.63402C17.8819 7.53768 17.825 7.42718 17.791 7.30884C17.7571 7.19049 17.7468 7.06662 17.7607 6.9443C17.7746 6.82196 17.8125 6.70357 17.8721 6.59587C17.9318 6.48818 18.0121 6.39329 18.1084 6.31663C18.2047 6.23997 18.3152 6.18304 18.4336 6.14909C18.5519 6.11514 18.6758 6.10484 18.7981 6.11878C20.6411 6.32825 22.2866 6.82467 23.6887 7.5942C23.8714 7.6943 24.0155 7.85236 24.0983 8.04344C24.1811 8.23452 24.198 8.44774 24.1462 8.64946C24.0944 8.85118 23.9769 9.02991 23.8122 9.15744C23.6476 9.28498 23.4452 9.35406 23.2369 9.35379Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <h3 className="cs_fs_24 cs_semibold cs_mb_10">Working On This</h3>
                                    <p className="mb-0">Extensible for web iterate proce before meta services impact</p>
                                </div>
                                <svg width={160} height={238} viewBox="0 0 160 238" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100.821 237.029H72.9299V214.498H100.821C119.567 214.498 134.817 200.855 134.817 184.085V50.8337C134.817 35.2827 120.673 22.6291 103.29 22.6291H5.51724L0 11.3635L5.51724 0.0979004H103.287C134.558 0.0979004 160 22.8579 160 50.8337V184.085C160 213.28 133.452 237.029 100.821 237.029Z" fill="currentColor" /></svg>
                                <svg width={186} height={164} viewBox="0 0 186 164" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M176.385 163.309H56.5362C25.362 163.309 0 138.219 0 107.376V7.10943L12.5535 0.555664L25.1071 7.10943V107.376C25.1071 124.521 39.2073 138.472 56.5362 138.472H176.385L186 150.89L176.385 163.309Z" fill="currentColor" /></svg>
                                <svg width={129} height={128} viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.55219 128.01C1.6859 128.01 0.982422 127.314 0.982422 126.457V124.87C0.982422 124.013 1.6859 123.317 2.55219 123.317C3.41848 123.317 4.12196 124.013 4.12196 124.87V126.457C4.12196 127.317 3.41848 128.01 2.55219 128.01ZM2.55219 110.552C1.6859 110.552 0.982422 109.856 0.982422 108.999V107.413C0.982422 106.556 1.6859 105.86 2.55219 105.86C3.41848 105.86 4.12196 106.556 4.12196 107.413V108.999C4.12196 109.856 3.41848 110.552 2.55219 110.552ZM2.55219 93.0913C1.6859 93.0913 0.982422 92.3953 0.982422 91.5383V89.9517C0.982422 89.0946 1.6859 88.3986 2.55219 88.3986C3.41848 88.3986 4.12196 89.0946 4.12196 89.9517V91.5383C4.12196 92.3953 3.41848 93.0913 2.55219 93.0913ZM2.55219 75.6335C1.6859 75.6335 0.982422 74.9375 0.982422 74.0804V72.4939C0.982422 71.6368 1.6859 70.9408 2.55219 70.9408C3.41848 70.9408 4.12196 71.6368 4.12196 72.4939V74.0804C4.12196 74.9375 3.41848 75.6335 2.55219 75.6335ZM2.55219 58.1726C1.6859 58.1726 0.982422 57.4766 0.982422 56.6196V55.033C0.982422 54.1759 1.6859 53.4799 2.55219 53.4799C3.41848 53.4799 4.12196 54.1759 4.12196 55.033V56.6196C4.12196 57.4766 3.41848 58.1726 2.55219 58.1726ZM3.09592 40.7452C3.01605 40.7452 2.93311 40.7391 2.85017 40.727C1.99309 40.5933 1.40942 39.797 1.54459 38.952C1.6306 38.4171 1.72891 37.87 1.83335 37.3351C1.99924 36.4932 2.82252 35.9431 3.67345 36.1103C4.52438 36.2744 5.07733 37.0889 4.91145 37.9308C4.81315 38.4323 4.72099 38.9399 4.64112 39.4383C4.52131 40.1981 3.8547 40.7452 3.09592 40.7452ZM9.23983 24.5062C8.95414 24.5062 8.66844 24.4302 8.40733 24.2691C7.67313 23.8132 7.45195 22.8558 7.90967 22.1294C8.20458 21.6674 8.5087 21.2024 8.81897 20.7526C9.30741 20.0444 10.2812 19.859 11.0001 20.3393C11.7158 20.8195 11.9032 21.786 11.4178 22.4972C11.1291 22.9166 10.8465 23.3482 10.5731 23.7798C10.272 24.2478 9.76206 24.5062 9.23983 24.5062ZM21.3126 11.9325C20.818 11.9325 20.3326 11.7015 20.0255 11.2699C19.5278 10.5679 19.6998 9.59832 20.4094 9.10899C20.861 8.79594 21.3249 8.48593 21.7857 8.19111C22.5137 7.72306 23.4845 7.92973 23.9545 8.65005C24.4245 9.37037 24.2187 10.3308 23.4906 10.7958C23.0605 11.0693 22.6305 11.3581 22.2096 11.6499C21.9393 11.8413 21.6259 11.9325 21.3126 11.9325ZM37.3758 5.01503C36.6509 5.01503 35.9996 4.51354 35.8429 3.78411C35.6648 2.94526 36.2054 2.1216 37.0533 1.94228C37.5909 1.82983 38.1407 1.72649 38.6845 1.63227C39.5385 1.48639 40.3495 2.0517 40.5 2.89663C40.6475 3.74156 40.0761 4.54394 39.2221 4.69286C38.7152 4.781 38.2053 4.87826 37.7045 4.9816C37.5939 5.00287 37.4834 5.01503 37.3758 5.01503ZM127.151 4.0698H125.547C124.681 4.0698 123.977 3.3738 123.977 2.51671C123.977 1.65963 124.681 0.963623 125.547 0.963623H127.151C128.017 0.963623 128.72 1.65963 128.72 2.51671C128.717 3.3738 128.017 4.0698 127.151 4.0698ZM109.502 4.0698H107.899C107.032 4.0698 106.329 3.3738 106.329 2.51671C106.329 1.65963 107.032 0.963623 107.899 0.963623H109.502C110.368 0.963623 111.072 1.65963 111.072 2.51671C111.072 3.3738 110.368 4.0698 109.502 4.0698ZM91.8538 4.0698H90.2503C89.384 4.0698 88.6805 3.3738 88.6805 2.51671C88.6805 1.65963 89.384 0.963623 90.2503 0.963623H91.8538C92.7201 0.963623 93.4236 1.65963 93.4236 2.51671C93.4236 3.3738 92.7201 4.0698 91.8538 4.0698ZM74.2085 4.0698H72.605C71.7387 4.0698 71.0352 3.3738 71.0352 2.51671C71.0352 1.65963 71.7387 0.963623 72.605 0.963623H74.2085C75.0748 0.963623 75.7783 1.65963 75.7783 2.51671C75.7783 3.3738 75.0748 4.0698 74.2085 4.0698ZM56.5602 4.0698H54.9566C54.0903 4.0698 53.3868 3.3738 53.3868 2.51671C53.3868 1.65963 54.0903 0.963623 54.9566 0.963623H56.5602C57.4265 0.963623 58.1299 1.65963 58.1299 2.51671C58.1299 3.3738 57.4265 4.0698 56.5602 4.0698Z" fill="currentColor" /></svg>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="cs_card cs_style_3 position-relative">
                                <div className="cs_card_content cs_white_bg cs_radius_35 text-center">
                                    <div className="cs_card_icon cs_center cs_heading_color cs_mb_22">
                                        <svg width={61} height={60} viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.7504 16.9661H11.4012C11.0552 16.9661 10.7234 16.8287 10.4788 16.5841C10.2341 16.3394 10.0967 16.0076 10.0967 15.6617C10.0967 15.3157 10.2341 14.9839 10.4788 14.7393C10.7234 14.4946 11.0552 14.3572 11.4012 14.3572H25.7504C26.0964 14.3572 26.4282 14.4946 26.6728 14.7393C26.9174 14.9839 27.0549 15.3157 27.0549 15.6617C27.0549 16.0076 26.9174 16.3394 26.6728 16.5841C26.4282 16.8287 26.0964 16.9661 25.7504 16.9661Z" fill="currentColor" /><path d="M25.7507 16.9663C25.5794 16.9665 25.4097 16.9328 25.2514 16.8672C25.0932 16.8016 24.9494 16.7054 24.8284 16.5841L19.6105 11.3662C19.3659 11.1216 19.2285 10.7898 19.2285 10.4439C19.2285 10.098 19.3659 9.76626 19.6105 9.52166C19.8551 9.27707 20.1869 9.13965 20.5328 9.13965C20.8787 9.13965 21.2105 9.27707 21.4551 9.52166L26.673 14.7396C26.856 14.9218 26.9807 15.1542 27.0314 15.4074C27.0821 15.6607 27.0564 15.9232 26.9576 16.1618C26.8587 16.4004 26.6913 16.6042 26.4764 16.7475C26.2615 16.8907 26.0089 16.9669 25.7507 16.9663Z" fill="currentColor" /><path d="M20.5326 22.1841C20.2744 22.1847 20.0218 22.1085 19.8069 21.9653C19.592 21.8221 19.4246 21.6182 19.3257 21.3796C19.2269 21.141 19.2012 20.8785 19.2519 20.6252C19.3026 20.372 19.4273 20.1396 19.6103 19.9574L24.8283 14.7395C24.9494 14.6184 25.0931 14.5223 25.2514 14.4567C25.4096 14.3912 25.5792 14.3575 25.7505 14.3575C25.9218 14.3575 26.0914 14.3912 26.2496 14.4567C26.4079 14.5223 26.5517 14.6184 26.6728 14.7395C26.7939 14.8606 26.89 15.0044 26.9555 15.1626C27.0211 15.3209 27.0548 15.4905 27.0548 15.6617C27.0548 15.833 27.0211 16.0026 26.9555 16.1609C26.89 16.3191 26.7939 16.4629 26.6728 16.584L21.4549 21.8019C21.3339 21.9232 21.1901 22.0194 21.0319 22.085C20.8736 22.1506 20.7039 22.1843 20.5326 22.1841ZM50.5356 45.6647H36.1863C35.8404 45.6647 35.5086 45.5273 35.2639 45.2826C35.0193 45.038 34.8818 44.7062 34.8818 44.3602C34.8818 44.0142 35.0193 43.6824 35.2639 43.4378C35.5086 43.1932 35.8404 43.0557 36.1863 43.0557H50.5356C50.8815 43.0557 51.2133 43.1932 51.458 43.4378C51.7026 43.6824 51.84 44.0142 51.84 44.3602C51.84 44.7062 51.7026 45.038 51.458 45.2826C51.2133 45.5273 50.8815 45.6647 50.5356 45.6647ZM45.3176 14.0964C45.1519 14.0969 44.9876 14.0654 44.8337 14.0038L30.4845 8.26537C30.242 8.16877 30.034 8.00164 29.8875 7.7856C29.741 7.56956 29.6627 7.31454 29.6627 7.05351C29.6627 6.79249 29.741 6.53747 29.8875 6.32142C30.034 6.10538 30.242 5.93825 30.4845 5.84166L44.8337 0.101963C45.1442 -0.0232453 45.4911 -0.0232453 45.8016 0.101963L60.1508 5.84166C60.3933 5.93825 60.6013 6.10538 60.7478 6.32142C60.8942 6.53747 60.9726 6.79249 60.9726 7.05351C60.9726 7.31454 60.8942 7.56956 60.7478 7.7856C60.6013 8.00164 60.3933 8.16877 60.1508 8.26537L45.8016 14.0038C45.6475 14.0648 45.4834 14.0962 45.3176 14.0964ZM34.4814 7.05221L45.319 11.3857L56.1565 7.05221L45.319 2.71744L34.4814 7.05221Z" fill="currentColor" />
                                            <path d="M59.667 25.5758C59.321 25.5758 58.9892 25.4384 58.7446 25.1938C58.5 24.9491 58.3625 24.6173 58.3625 24.2714V7.05228C58.3625 6.70631 58.5 6.37451 58.7446 6.12988C58.9892 5.88524 59.321 5.7478 59.667 5.7478C60.013 5.7478 60.3448 5.88524 60.5894 6.12988C60.834 6.37451 60.9715 6.70631 60.9715 7.05228V24.2701C60.9717 24.4415 60.938 24.6112 60.8726 24.7697C60.8071 24.9281 60.711 25.072 60.5899 25.1933C60.4687 25.3146 60.3249 25.4108 60.1665 25.4764C60.0082 25.542 59.8384 25.5758 59.667 25.5758ZM30.9685 25.5758C30.6226 25.5758 30.2908 25.4384 30.0461 25.1938C29.8015 24.9491 29.6641 24.6173 29.6641 24.2714V7.05228C29.6641 6.70631 29.8015 6.37451 30.0461 6.12988C30.2908 5.88524 30.6226 5.7478 30.9685 5.7478C31.3145 5.7478 31.6463 5.88524 31.8909 6.12988C32.1356 6.37451 32.273 6.70631 32.273 7.05228V24.2701C32.2732 24.4415 32.2396 24.6112 32.1741 24.7697C32.1086 24.9281 32.0126 25.072 31.8914 25.1933C31.7703 25.3146 31.6264 25.4108 31.468 25.4764C31.3097 25.542 31.14 25.5758 30.9685 25.5758ZM45.3178 31.3155C44.9718 31.3155 44.64 31.1781 44.3954 30.9335C44.1507 30.6888 44.0133 30.357 44.0133 30.011V12.792C44.0133 12.446 44.1507 12.1142 44.3954 11.8696C44.64 11.6249 44.9718 11.4875 45.3178 11.4875C45.6637 11.4875 45.9955 11.6249 46.2402 11.8696C46.4848 12.1142 46.6222 12.446 46.6222 12.792V30.011C46.6222 30.357 46.4848 30.6888 46.2402 30.9335C45.9955 31.1781 45.6637 31.3155 45.3178 31.3155Z" fill="currentColor" />
                                            <path d="M45.3177 31.3154C45.152 31.3159 44.9877 31.2844 44.8338 31.2228L30.4846 25.4831C30.3254 25.4195 30.1803 25.3253 30.0576 25.2056C29.9349 25.086 29.837 24.9434 29.7694 24.7859C29.6329 24.4679 29.6283 24.1087 29.7567 23.7873C29.8202 23.6281 29.9145 23.4831 30.0341 23.3603C30.1537 23.2376 30.2963 23.1397 30.4538 23.0721C30.7718 22.9356 31.1311 22.931 31.4525 23.0594L45.3177 28.606L59.183 23.0594C59.5044 22.931 59.8637 22.9356 60.1817 23.0721C60.4997 23.2086 60.7505 23.4659 60.8788 23.7873C61.0072 24.1087 61.0026 24.4679 60.8661 24.7859C60.7296 25.104 60.4723 25.3547 60.1509 25.4831L45.8017 31.2228C45.6478 31.2844 45.4835 31.3159 45.3177 31.3154ZM16.6728 60.01C10.9331 60.01 5.48819 56.7566 2.80097 51.72C-0.267158 45.9725 0.584665 38.837 4.91683 33.9648C7.87799 30.6332 12.1684 28.7221 16.6897 28.7221C18.5999 28.7186 20.4941 29.0707 22.2755 29.7605C28.2552 32.0785 32.2717 37.946 32.2717 44.3602C32.2717 52.1074 26.258 58.9311 18.5799 59.8912C17.9511 59.9708 17.3093 60.01 16.6728 60.01ZM16.691 31.3311C12.9133 31.3311 9.33248 32.9225 6.86702 35.6971C3.31363 39.694 2.58834 45.7794 5.10206 50.4925C7.34185 54.6903 11.8827 57.4023 16.6715 57.4023C17.2013 57.4023 17.7319 57.3697 18.2577 57.3045C24.6535 56.5048 29.664 50.8186 29.664 44.3615C29.664 39.0157 26.3168 34.1252 21.3337 32.1946C19.8534 31.6202 18.2788 31.3273 16.691 31.3311ZM41.4043 50.8825C41.233 50.8827 41.0633 50.849 40.905 50.7834C40.7468 50.7178 40.603 50.6216 40.4821 50.5003L35.2641 45.2824C35.143 45.1613 35.047 45.0175 34.9814 44.8593C34.9159 44.701 34.8821 44.5314 34.8821 44.3602C34.8821 44.1889 34.9159 44.0193 34.9814 43.861C35.047 43.7028 35.143 43.559 35.2641 43.4379C35.3853 43.3168 35.529 43.2207 35.6873 43.1552C35.8455 43.0896 36.0151 43.0559 36.1864 43.0559C36.3577 43.0559 36.5273 43.0896 36.6855 43.1552C36.8438 43.2207 36.9876 43.3168 37.1087 43.4379L42.3266 48.6558C42.5096 48.838 42.6344 49.0704 42.685 49.3237C42.7357 49.5769 42.71 49.8394 42.6112 50.078C42.5124 50.3166 42.3449 50.5205 42.13 50.6637C41.9151 50.8069 41.6626 50.8831 41.4043 50.8825Z" fill="currentColor" />
                                            <path d="M36.1861 45.6645C35.9278 45.6651 35.6752 45.589 35.4604 45.4457C35.2455 45.3025 35.078 45.0986 34.9792 44.86C34.8804 44.6215 34.8547 44.3589 34.9053 44.1057C34.956 43.8525 35.0808 43.62 35.2638 43.4378L40.4817 38.2199C40.6028 38.0988 40.7466 38.0027 40.9048 37.9372C41.0631 37.8716 41.2327 37.8379 41.404 37.8379C41.5752 37.8379 41.7449 37.8716 41.9031 37.9372C42.0613 38.0027 42.2051 38.0988 42.3262 38.2199C42.4473 38.341 42.5434 38.4848 42.609 38.643C42.6745 38.8013 42.7082 38.9709 42.7082 39.1422C42.7082 39.3134 42.6745 39.4831 42.609 39.6413C42.5434 39.7995 42.4473 39.9433 42.3262 40.0644L37.1083 45.2823C36.9874 45.4037 36.8436 45.4999 36.6853 45.5655C36.5271 45.631 36.3574 45.6647 36.1861 45.6645ZM16.6189 39.7944C16.273 39.7944 15.9412 39.657 15.6965 39.4123C15.4519 39.1677 15.3145 38.8359 15.3145 38.4899V35.8758C15.3145 35.5298 15.4519 35.198 15.6965 34.9534C15.9412 34.7087 16.273 34.5713 16.6189 34.5713C16.9649 34.5713 17.2967 34.7087 17.5413 34.9534C17.786 35.198 17.9234 35.5298 17.9234 35.8758V38.4899C17.9234 38.8359 17.786 39.1677 17.5413 39.4123C17.2967 39.657 16.9649 39.7944 16.6189 39.7944ZM16.6189 54.1489C16.273 54.1489 15.9412 54.0114 15.6965 53.7668C15.4519 53.5222 15.3145 53.1904 15.3145 52.8444V50.2302C15.3145 49.8842 15.4519 49.5524 15.6965 49.3078C15.9412 49.0632 16.273 48.9257 16.6189 48.9257C16.9649 48.9257 17.2967 49.0632 17.5413 49.3078C17.786 49.5524 17.9234 49.8842 17.9234 50.2302V52.8444C17.9234 53.1904 17.786 53.5222 17.5413 53.7668C17.2967 54.0114 16.9649 54.1489 16.6189 54.1489Z" fill="currentColor" />
                                            <path d="M19.5088 51.5349H13.73C13.0013 51.5338 12.3028 51.2439 11.7876 50.7287C11.2724 50.2135 10.9825 49.515 10.9814 48.7863C10.9814 48.4404 11.1189 48.1086 11.3635 47.8639C11.6082 47.6193 11.94 47.4819 12.2859 47.4819C12.6319 47.4819 12.9637 47.6193 13.2083 47.8639C13.453 48.1086 13.5904 48.4404 13.5904 48.7863C13.5904 48.8646 13.653 48.9259 13.73 48.9259H19.5088C19.5871 48.9259 19.6484 48.8633 19.6484 48.7863V45.8056C19.6486 45.7872 19.6451 45.769 19.6381 45.752C19.6312 45.735 19.6209 45.7195 19.6079 45.7065C19.5949 45.6935 19.5794 45.6832 19.5624 45.6763C19.5454 45.6693 19.5272 45.6658 19.5088 45.666H13.73C13.0013 45.665 12.3028 45.3751 11.7876 44.8599C11.2724 44.3446 10.9825 43.6461 10.9814 42.9175V39.9368C10.9825 39.2081 11.2724 38.5096 11.7876 37.9944C12.3028 37.4792 13.0013 37.1893 13.73 37.1882H19.5088C20.2374 37.1893 20.9359 37.4792 21.4512 37.9944C21.9664 38.5096 22.2563 39.2081 22.2573 39.9368C22.2573 40.2827 22.1199 40.6145 21.8753 40.8592C21.6306 41.1038 21.2988 41.2412 20.9529 41.2412C20.6069 41.2412 20.2751 41.1038 20.0305 40.8592C19.7858 40.6145 19.6484 40.2827 19.6484 39.9368C19.6486 39.9184 19.6451 39.9002 19.6381 39.8831C19.6312 39.8661 19.6209 39.8507 19.6079 39.8377C19.5949 39.8247 19.5794 39.8144 19.5624 39.8075C19.5454 39.8005 19.5272 39.797 19.5088 39.7972H13.73C13.7116 39.797 13.6934 39.8005 13.6764 39.8075C13.6593 39.8144 13.6439 39.8247 13.6309 39.8377C13.6179 39.8507 13.6076 39.8661 13.6007 39.8831C13.5937 39.9002 13.5902 39.9184 13.5904 39.9368V42.9175C13.5904 42.9958 13.653 43.0571 13.73 43.0571H19.5088C20.2374 43.0581 20.9359 43.348 21.4512 43.8632C21.9664 44.3785 22.2563 45.077 22.2573 45.8056V48.7863C22.2563 49.515 21.9664 50.2135 21.4512 50.7287C20.9359 51.2439 20.2374 51.5338 19.5088 51.5349Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <h3 className="cs_fs_24 cs_semibold cs_mb_10">Deliver On Hand</h3>
                                    <p className="mb-0">web iterate process before met services impact with olisti</p>
                                </div>
                                <svg width={160} height={238} viewBox="0 0 160 238" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100.821 237.029H72.9299V214.498H100.821C119.567 214.498 134.817 200.855 134.817 184.085V50.8337C134.817 35.2827 120.673 22.6291 103.29 22.6291H5.51724L0 11.3635L5.51724 0.0979004H103.287C134.558 0.0979004 160 22.8579 160 50.8337V184.085C160 213.28 133.452 237.029 100.821 237.029Z" fill="currentColor" /></svg>
                                <svg width={186} height={164} viewBox="0 0 186 164" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M176.385 163.309H56.5362C25.362 163.309 0 138.219 0 107.376V7.10943L12.5535 0.555664L25.1071 7.10943V107.376C25.1071 124.521 39.2073 138.472 56.5362 138.472H176.385L186 150.89L176.385 163.309Z" fill="currentColor" /></svg>
                                <svg width={129} height={128} viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.55219 128.01C1.6859 128.01 0.982422 127.314 0.982422 126.457V124.87C0.982422 124.013 1.6859 123.317 2.55219 123.317C3.41848 123.317 4.12196 124.013 4.12196 124.87V126.457C4.12196 127.317 3.41848 128.01 2.55219 128.01ZM2.55219 110.552C1.6859 110.552 0.982422 109.856 0.982422 108.999V107.413C0.982422 106.556 1.6859 105.86 2.55219 105.86C3.41848 105.86 4.12196 106.556 4.12196 107.413V108.999C4.12196 109.856 3.41848 110.552 2.55219 110.552ZM2.55219 93.0913C1.6859 93.0913 0.982422 92.3953 0.982422 91.5383V89.9517C0.982422 89.0946 1.6859 88.3986 2.55219 88.3986C3.41848 88.3986 4.12196 89.0946 4.12196 89.9517V91.5383C4.12196 92.3953 3.41848 93.0913 2.55219 93.0913ZM2.55219 75.6335C1.6859 75.6335 0.982422 74.9375 0.982422 74.0804V72.4939C0.982422 71.6368 1.6859 70.9408 2.55219 70.9408C3.41848 70.9408 4.12196 71.6368 4.12196 72.4939V74.0804C4.12196 74.9375 3.41848 75.6335 2.55219 75.6335ZM2.55219 58.1726C1.6859 58.1726 0.982422 57.4766 0.982422 56.6196V55.033C0.982422 54.1759 1.6859 53.4799 2.55219 53.4799C3.41848 53.4799 4.12196 54.1759 4.12196 55.033V56.6196C4.12196 57.4766 3.41848 58.1726 2.55219 58.1726ZM3.09592 40.7452C3.01605 40.7452 2.93311 40.7391 2.85017 40.727C1.99309 40.5933 1.40942 39.797 1.54459 38.952C1.6306 38.4171 1.72891 37.87 1.83335 37.3351C1.99924 36.4932 2.82252 35.9431 3.67345 36.1103C4.52438 36.2744 5.07733 37.0889 4.91145 37.9308C4.81315 38.4323 4.72099 38.9399 4.64112 39.4383C4.52131 40.1981 3.8547 40.7452 3.09592 40.7452ZM9.23983 24.5062C8.95414 24.5062 8.66844 24.4302 8.40733 24.2691C7.67313 23.8132 7.45195 22.8558 7.90967 22.1294C8.20458 21.6674 8.5087 21.2024 8.81897 20.7526C9.30741 20.0444 10.2812 19.859 11.0001 20.3393C11.7158 20.8195 11.9032 21.786 11.4178 22.4972C11.1291 22.9166 10.8465 23.3482 10.5731 23.7798C10.272 24.2478 9.76206 24.5062 9.23983 24.5062ZM21.3126 11.9325C20.818 11.9325 20.3326 11.7015 20.0255 11.2699C19.5278 10.5679 19.6998 9.59832 20.4094 9.10899C20.861 8.79594 21.3249 8.48593 21.7857 8.19111C22.5137 7.72306 23.4845 7.92973 23.9545 8.65005C24.4245 9.37037 24.2187 10.3308 23.4906 10.7958C23.0605 11.0693 22.6305 11.3581 22.2096 11.6499C21.9393 11.8413 21.6259 11.9325 21.3126 11.9325ZM37.3758 5.01503C36.6509 5.01503 35.9996 4.51354 35.8429 3.78411C35.6648 2.94526 36.2054 2.1216 37.0533 1.94228C37.5909 1.82983 38.1407 1.72649 38.6845 1.63227C39.5385 1.48639 40.3495 2.0517 40.5 2.89663C40.6475 3.74156 40.0761 4.54394 39.2221 4.69286C38.7152 4.781 38.2053 4.87826 37.7045 4.9816C37.5939 5.00287 37.4834 5.01503 37.3758 5.01503ZM127.151 4.0698H125.547C124.681 4.0698 123.977 3.3738 123.977 2.51671C123.977 1.65963 124.681 0.963623 125.547 0.963623H127.151C128.017 0.963623 128.72 1.65963 128.72 2.51671C128.717 3.3738 128.017 4.0698 127.151 4.0698ZM109.502 4.0698H107.899C107.032 4.0698 106.329 3.3738 106.329 2.51671C106.329 1.65963 107.032 0.963623 107.899 0.963623H109.502C110.368 0.963623 111.072 1.65963 111.072 2.51671C111.072 3.3738 110.368 4.0698 109.502 4.0698ZM91.8538 4.0698H90.2503C89.384 4.0698 88.6805 3.3738 88.6805 2.51671C88.6805 1.65963 89.384 0.963623 90.2503 0.963623H91.8538C92.7201 0.963623 93.4236 1.65963 93.4236 2.51671C93.4236 3.3738 92.7201 4.0698 91.8538 4.0698ZM74.2085 4.0698H72.605C71.7387 4.0698 71.0352 3.3738 71.0352 2.51671C71.0352 1.65963 71.7387 0.963623 72.605 0.963623H74.2085C75.0748 0.963623 75.7783 1.65963 75.7783 2.51671C75.7783 3.3738 75.0748 4.0698 74.2085 4.0698ZM56.5602 4.0698H54.9566C54.0903 4.0698 53.3868 3.3738 53.3868 2.51671C53.3868 1.65963 54.0903 0.963623 54.9566 0.963623H56.5602C57.4265 0.963623 58.1299 1.65963 58.1299 2.51671C58.1299 3.3738 57.4265 4.0698 56.5602 4.0698Z" fill="currentColor" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80" />
            </section>
            {/* End Process Section */}
            {/* Start Blog Section */}
            <section className="position-relative">
                <div className="cs_height_120 cs_height_lg_80" />
                <div className="container">
                    <div className="cs_section_heading cs_style_1 cs_type_1 cs_mb_47">
                        <div className="cs_section_heading_left wow fadeInDown">
                            <h3 className="cs_section_subtitle cs_fs_18 cs_accent_color cs_semibold text-uppercase cs_mb_12">
                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528ZM11.2557 1.33733C11.7741 0.819199 12.465 0.533066 13.1506 0.533066H13.1967L12.9498 0.780266C12.6463 1.08373 12.4791 1.4864 12.4791 1.91467C12.4791 2.34293 12.6463 2.7456 12.9498 3.04907C13.2533 3.35253 13.6551 3.51813 14.0842 3.51813C14.5133 3.51813 14.9159 3.35147 15.2186 3.04907L15.4655 2.80187C15.4786 3.50293 15.1917 4.21333 14.6618 4.7432C14.0042 5.4008 13.0666 5.68293 12.2095 5.4784C11.7917 5.38533 11.425 5.18373 11.1202 4.87867C10.8154 4.5736 10.6133 4.20693 10.5194 3.78507C10.3159 2.93253 10.5981 1.9944 11.2557 1.3368V1.33733ZM3.78578 5.48C2.93325 5.68373 1.99512 5.40133 1.33752 4.74373C0.807651 4.21387 0.520718 3.50347 0.533785 2.8024L0.780718 3.0496C1.08338 3.352 1.48632 3.51867 1.91512 3.51867C2.34392 3.51867 2.74712 3.352 3.04925 3.0496C3.35272 2.74613 3.51992 2.34347 3.51992 1.9152C3.51992 1.48693 3.35272 1.08427 3.04925 0.780799L2.80232 0.533599C3.51058 0.525866 4.21352 0.807733 4.74365 1.3376C5.40125 1.9952 5.68338 2.93307 5.47912 3.78987C5.38632 4.20747 5.18445 4.57387 4.87912 4.8792C4.57378 5.18453 4.20765 5.38587 3.78578 5.48ZM4.60365 5.73867C4.84373 5.61088 5.06362 5.44832 5.25618 5.25627C5.44814 5.06361 5.61068 4.84374 5.73858 4.60373L7.62205 6.48693L6.48712 7.62187L4.60365 5.73867ZM4.74365 14.6621C4.21378 15.1917 3.51192 15.4752 2.80232 15.4661L3.04925 15.2189C3.35165 14.9163 3.51832 14.5133 3.51832 14.0845C3.51832 13.6557 3.35165 13.2528 3.04925 12.9501C2.74823 12.6497 2.3403 12.4809 1.91498 12.4809C1.48967 12.4809 1.08174 12.6497 0.780718 12.9501L0.533785 13.1973C0.520718 12.4963 0.807651 11.7859 1.33752 11.256C1.99538 10.5987 2.93325 10.3168 3.78978 10.5208C4.20765 10.6139 4.57432 10.8155 4.87912 11.1205C5.18392 11.4256 5.38605 11.7923 5.47992 12.2141C5.68338 13.0667 5.40125 14.0045 4.74365 14.6621ZM5.25618 10.7435C5.06331 10.5513 4.84317 10.3885 4.60285 10.2605L10.2605 4.60293C10.3884 4.84331 10.551 5.06354 10.7431 5.25653C10.936 5.44873 11.1561 5.61146 11.3965 5.73947L5.73885 11.3971C5.61092 11.1567 5.44829 10.9365 5.25618 10.7435ZM12.7711 10.4549C13.4562 10.4549 14.1455 10.7395 14.6621 11.256C15.1919 11.7859 15.4789 12.4963 15.4658 13.1973L15.2189 12.9501C14.9178 12.6497 14.5099 12.4809 14.0846 12.4809C13.6593 12.4809 13.2513 12.6497 12.9503 12.9501C12.8011 13.0989 12.6828 13.2757 12.6023 13.4704C12.5217 13.6651 12.4806 13.8738 12.4813 14.0845C12.4806 14.2952 12.5217 14.504 12.6023 14.6987C12.6828 14.8934 12.8011 15.0702 12.9503 15.2189L13.1973 15.4661C12.4935 15.4736 11.7861 15.192 11.2559 14.6621C10.5983 14.0045 10.3162 13.0667 10.5205 12.2099C10.611 11.7964 10.8194 11.418 11.1205 11.1205C11.5711 10.6699 12.1623 10.4549 12.7711 10.4549ZM11.3959 10.2611C11.1558 10.3889 10.936 10.5514 10.7434 10.7435C10.5514 10.9361 10.3889 11.156 10.261 11.396L8.37752 9.5128L9.51245 8.37787L11.3959 10.2611Z" fill="currentColor" /></svg>NEWS &amp; UPDATES
                            </h3>
                            <h2 className="cs_section_title cs_fs_50 mb-0 wow fadeInRight">Latest New and Blog</h2>
                        </div>
                        <div className="cs_section_heading_right wow fadeInLeft">
                            <a className="cs_btn cs_style_1" href="blog">
                                <span>View all news</span><i className="fa-solid fa-arrow-right" />
                            </a>
                        </div>
                    </div>
                    <div className="row cs_row_gap_30 cs_gap_y_30">
                        <div className="col-lg-4">
                            <div className="cs_post cs_style_1">
                                <a className="cs_post_thumbnail" href="blog-details">
                                    <img src={post_img_1} alt="Post Image" />
                                </a>
                                <div className="cs_post_content_wrapper position-relative">
                                    <div className="cs_post_content cs_white_bg">
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
                                        <h3 className="cs_fs_20 cs_semibold cs_mb_5"><a href="blog-details">Fast Service Reliable Results Car's Best Friend</a></h3>
                                        <p className="cs_mb_19">The old engine oil is drained and replaced with fresh oil, and the oil filter</p>
                                        <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="blog-details">
                                            <span className="cs_btn_text text-uppercase">Read More</span>
                                            <span className="cs_btn_icon cs_center">
                                                <i className="fa-solid fa-arrow-right" />
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </a>
                                    </div>
                                    <div className="cs_post_date cs_accent_bg cs_fs_18 cs_semibold cs_white_color cs_center position-absolute">10 Oct</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp">
                            <div className="cs_post cs_style_1">
                                <a className="cs_post_thumbnail" href="blog-details">
                                    <img src={post_img_2} alt="Post Image" />
                                </a>
                                <div className="cs_post_content_wrapper position-relative">
                                    <div className="cs_post_content cs_white_bg">
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
                                        <h3 className="cs_fs_20 cs_semibold cs_mb_5"><a href="blog-details">Your Ride Our Pride Your Car Deserves the Best</a></h3>
                                        <p className="cs_mb_19">The old engine oil is drained and replaced with fresh oil, and the oil filter</p>
                                        <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="blog-details">
                                            <span className="cs_btn_text text-uppercase">Read More</span>
                                            <span className="cs_btn_icon cs_center">
                                                <i className="fa-solid fa-arrow-right" />
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </a>
                                    </div>
                                    <div className="cs_post_date cs_accent_bg cs_fs_18 cs_semibold cs_white_color cs_center position-absolute">10 Oct</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cs_post cs_style_1">
                                <a className="cs_post_thumbnail" href="blog-details">
                                    <img src={post_img_3} alt="Post Image" />
                                </a>
                                <div className="cs_post_content_wrapper position-relative">
                                    <div className="cs_post_content cs_white_bg">
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
                                        <h3 className="cs_fs_20 cs_semibold cs_mb_5"><a href="blog-details">Fast Service Reliable Results Car's Best Friend</a></h3>
                                        <p className="cs_mb_19">The old engine oil is drained and replaced with fresh oil, and the oil filter</p>
                                        <a className="cs_text_btn cs_style_1 cs_bold cs_heading_color" href="blog-details">
                                            <span className="cs_btn_text text-uppercase">Read More</span>
                                            <span className="cs_btn_icon cs_center">
                                                <i className="fa-solid fa-arrow-right" />
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </a>
                                    </div>
                                    <div className="cs_post_date cs_accent_bg cs_fs_18 cs_semibold cs_white_color cs_center position-absolute">10 Oct</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cs_tyres_shape position-absolute">
                        <img src={tyres} alt="Tyres Image" />
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80" />
            </section>
            {/* End Blog Section --*/}


        </>
    );
}

export default Home;
