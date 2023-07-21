import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className="navbar-area style-three m-0">
                <div className="mobile-responsive-nav">
                    <div className="container">
                        <div className="mobile-responsive-menu">
                            <div className="navbar-category">
                                <button type="button" id="categoryButton" data-bs-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                    <i className="ri-menu-line"></i>
                                </button>
                            </div>
                            <div className="logo">
                                <Link to="/">
                                    <img src="images/logo.png" alt="logo"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="desktop-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md">
                            <div className="navbar-collapse mean-menu">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink to="/" className="nav-link">
                                            خانه
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/shop" className="nav-link">
                                            فروشگاه
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about-us" className="nav-link">
                                            درباره ما
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact-us" className="nav-link">تماس با ما</Link>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}