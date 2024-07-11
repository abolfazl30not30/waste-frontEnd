import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../../assets/images/logo.png"
function Header() {

    return (
        <>
            <header className="header-area">
                <div className="top-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-9">
                                <ul className="header-left-content">
                                    <li>
                                        به فروشگاه ویست خوش آمدید!
                                    </li>
                                    <li>
                                        پشتیبانی؟ تماس بگیرید:
                                        <a href="tel:+1-(514)-321-4567">
                                            <span>021-55555555</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3">
                                <div className="header-right-content">
                                    <ul>
                                        <li>
                                            {
                                                (localStorage.getItem("Authorization")) ? (
                                                    <Link to="/dashboard/add-product">
                                                        {localStorage.getItem("username")}
                                                        <i className="ri-account-pin-circle-line"></i>
                                                    </Link>
                                                ) : (
                                                    <Link to="/login">
                                                        <i className="ri-account-pin-circle-line"></i>
                                                        حساب کاربری
                                                    </Link>
                                                )


                                            }

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="middle-header bg-e4e9ed">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={logo} alt="Image"/>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-8">
                                <form className="search-box">
                                    <input type="text" name="Search" placeholder="جستجو محصولات..."
                                           className="form-control"/>
                                        <button type="submit" className="search-btn">
                                            <i className="ri-search-line"></i>
                                        </button>
                                </form>
                            </div>

                            <div className="col-lg-2 col-md-4">
                                <ul className="wish-cart">
                                    <li>
                                        <Link to="/">
										<span className="wish-icon">
											<i className="ri-heart-line"></i>
											<span className="count">0</span>
										</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header