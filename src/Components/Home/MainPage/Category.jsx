import React from 'react';
import {Link} from "react-router-dom";


function Category() {
    return (
        <>
            <section className="category-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-2 col-sm-6">
                            <Link to="/">
                                <div className="single-category style-three">
                                    <img src="images/products/product-45.png" alt="Image"/>
                                        <h3>میوه ها</h3>
                                        <span>15 مورد</span>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-2 col-sm-6">
                            <Link to="/">
                                <div className="single-category style-three">
                                    <img src="images/products/product-46.png" alt="Image"/>
                                        <h3>سبزیجات</h3>
                                        <span>12 مورد</span>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-2 col-sm-6">
                            <Link to="/">
                                <div className="single-category style-three">
                                    <img src="images/products/product-47.png" alt="Image"/>
                                        <h3>گوشت تازه</h3>
                                        <span>11 مورد</span>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-2 col-sm-6">
                            <Link to="/">
                                <div className="single-category style-three">
                                    <img src="images/products/product-48.png" alt="Image"/>
                                        <h3>نان و شیرینی</h3>
                                        <span>10 مورد</span>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-2 col-sm-6">
                            <Link to="/">
                                <div className="single-category style-three">
                                    <img src="images/products/product-49.png" alt="Image"/>
                                        <h3>نگهداری و نظافت</h3>
                                        <span>14 مورد</span>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-2 col-sm-6">
                            <Link to="/">
                                <div className="single-category style-three">
                                    <img src="images/products/product-50.png" alt="Image"/>
                                        <h3>نوشیدنی ها</h3>
                                        <span>11 مورد</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Category