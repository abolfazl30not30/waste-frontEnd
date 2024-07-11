import React from 'react'
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom"

export default function Main() {
    const params = useParams();

    const [products,setProducts] = useState([]);

    const getProducts = async () =>{
        await axios.get(`http://localhost:8090/api/v1/product/${params.id}`).then((res) => {
            setProducts(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <section className="product-details-area ptb-54">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="product-details-image pr-15">
                                <img src={products.pictureUrl} alt="Image"/>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="product-details-desc pl-15">
                                <h2>{products.title}</h2>

                                <div className="price">
                                    <span className="new-price">  تومان{products.priceAfterDiscount}<del> تومان{products.price}</del></span>
                                </div>

                                <div className="product-review">
                                    <div className="rating">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                    </div>
                                    <a href="#" className="rating-count">(15 نظر مشتری)</a>
                                </div>

                                <p>{products.description}</p>

                                <a href="#" className="default-btn radius-btn wishlist-btn">
                                    <i className="ri-heart-line"></i>
                                    علاقه مندی
                                </a>

                                <ul className="sku">
                                    <li>
                                        شناسه:
                                        <span>{products.tracingId}</span>
                                    </li>
                                    <li>
                                        نام فروشگاه:
                                        <span>{products.shopName}</span>
                                    </li>
                                    <li>
                                        آدرس فروشگاه:
                                        <span>{products.address}</span>
                                    </li>
                                    <li>
                                        تاريخ انقضا:
                                        <span>{products.expirationDate}</span>
                                    </li>
                                    <li>
                                        برند:
                                        <span>{products.brand}</span>
                                    </li>
                                    <li>
                                        دسته بندی ها:
                                        <span>{products.category}</span>
                                    </li>
                                </ul>


                                <ul className="social-wrap">
                                    <li>
                                        <span>اشتراک گذاری:</span>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="ri-facebook-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="ri-instagram-line"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i className="ri-linkedin-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="ri-twitter-fill"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/*<div className="col-lg-12 col-md-12">*/}
                        {/*    <div id="reviews" className="tab products-details-tab">*/}
                        {/*        <div className="row">*/}
                        {/*            <div className="col-lg-12 col-md-12">*/}
                        {/*                <ul className="tabs">*/}
                        {/*                    <li>*/}
                        {/*                        شرح*/}
                        {/*                    </li>*/}
                        {/*                    <li>*/}
                        {/*                        اطلاعات تکمیلی*/}
                        {/*                    </li>*/}
                        {/*                    <li>*/}
                        {/*                        نظرات*/}
                        {/*                    </li>*/}
                        {/*                </ul>*/}
                        {/*            </div>*/}

                        {/*            <div className="col-lg-12 col-md-12">*/}
                        {/*                <div className="tab_content">*/}
                        {/*                    <div className="tabs_item">*/}
                        {/*                        <div className="products-details-tab-content">*/}
                        {/*                            <h3>بررسی اجمالی</h3>*/}
                        {/*                            <p>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم*/}
                        {/*                                ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به*/}
                        {/*                                سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40*/}
                        {/*                                سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و*/}
                        {/*                                متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت*/}
                        {/*                                بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می*/}
                        {/*                                گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم*/}
                        {/*                                ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم*/}
                        {/*                                به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی*/}
                        {/*                                ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال*/}
                        {/*                                استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن*/}
                        {/*                                را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده*/}
                        {/*                                است.</p>*/}

                        {/*                            <p>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم*/}
                        {/*                                ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به*/}
                        {/*                                سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40*/}
                        {/*                                سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و*/}
                        {/*                                متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت*/}
                        {/*                                بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می*/}
                        {/*                                گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم*/}
                        {/*                                ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم*/}
                        {/*                                به مدت 40 سال استاندارد صنعت بوده است.</p>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}

                        {/*                    <div className="tabs_item">*/}
                        {/*                        <div className="products-details-tab-content">*/}
                        {/*                            <ul className="additional-information">*/}
                        {/*                                <li><span>برند:</span> ویست</li>*/}
                        {/*                                <li><span>تاریخ انقضا:</span> 1402/03/02</li>*/}
                        {/*                                <li><span>آدرس فروشگاه:</span> تهران-شهرک غرب-فروشگاه محصولات*/}
                        {/*                                    ارگانیک*/}
                        {/*                                </li>*/}
                        {/*                                <li><span>اندازه:</span> متوسط</li>*/}
                        {/*                                <li><span>وزن:</span> 1 کیلوگرم</li>*/}

                        {/*                            </ul>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}

                        {/*                    <div className="tabs_item">*/}
                        {/*                        <div className="products-details-tab-content">*/}
                        {/*                            <div className="product-review-form">*/}
                        {/*                                <h3>نظرات کاربران</h3>*/}

                        {/*                                <div className="review-title">*/}
                        {/*                                    <div className="rating">*/}
                        {/*                                        <i className="ri-star-fill"></i>*/}
                        {/*                                        <i className="ri-star-fill"></i>*/}
                        {/*                                        <i className="ri-star-fill"></i>*/}
                        {/*                                        <i className="ri-star-fill"></i>*/}
                        {/*                                        <i className="ri-star-fill"></i>*/}
                        {/*                                    </div>*/}
                        {/*                                    <p>بر اساس 3 بررسی</p>*/}

                        {/*                                    <a href="product-details.html" className="btn default-btn">نظر*/}
                        {/*                                        بدهید</a>*/}
                        {/*                                </div>*/}

                        {/*                                <div className="review-comments">*/}
                        {/*                                    <div className="review-item">*/}
                        {/*                                        <div className="rating">*/}
                        {/*                                            <i className="ri-star-fill"></i>*/}
                        {/*                                            <i className="ri-star-fill"></i>*/}
                        {/*                                            <i className="ri-star-fill"></i>*/}
                        {/*                                            <i className="ri-star-fill"></i>*/}
                        {/*                                            <i className="ri-star-fill"></i>*/}
                        {/*                                        </div>*/}
                        {/*                                        <h3>خوب</h3>*/}
                        {/*                                        <span><strong>مدیر</strong> در <strong>21 دی 1401</strong></span>*/}
                        {/*                                        <p>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می*/}
                        {/*                                            گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده*/}
                        {/*                                            است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر*/}
                        {/*                                            می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت*/}
                        {/*                                            بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را*/}
                        {/*                                            در بر می گیرد.</p>*/}

                        {/*                                        <a href="product-details.html"*/}
                        {/*                                           className="review-report-link">گزارش کاربر</a>*/}
                        {/*                                    </div>*/}

                        {/*                                    <div className="review-item">*/}
                        {/*                                        <div className="rating">*/}
                        {/*                                            <i className="ri-star-fill"></i>*/}
                        {/*                                            <i className="ri-star-fill"></i>*/}
                        {/*                                            <i className="ri-star-fill"></i>*/}
                        {/*                                            <i className="ri-star-fill"></i>*/}
                        {/*                                            <i className="ri-star-fill"></i>*/}
                        {/*                                        </div>*/}
                        {/*                                        <h3>خوب</h3>*/}
                        {/*                                        <span><strong>مدیر</strong> در <strong>21 دی 1401</strong></span>*/}
                        {/*                                        <p>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می*/}
                        {/*                                            گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده*/}
                        {/*                                            است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر*/}
                        {/*                                            می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت*/}
                        {/*                                            بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را*/}
                        {/*                                            در بر می گیرد.</p>*/}

                        {/*                                        <a href="product-details.html"*/}
                        {/*                                           className="review-report-link">گزارش کاربر</a>*/}
                        {/*                                    </div>*/}

                        {/*                                    <div className="review-item">*/}
                        {/*                                        <div className="rating">*/}
                        {/*                                            <i className="ri-star-fill"></i>*/}
                        {/*                                            <i className="ri-star-fill"></i>*/}
                        {/*                                            <i className="ri-star-fill"></i>*/}
                        {/*                                            <i className="ri-star-fill"></i>*/}
                        {/*                                            <i className="ri-star-fill"></i>*/}
                        {/*                                        </div>*/}
                        {/*                                        <h3>خوب</h3>*/}
                        {/*                                        <span><strong>مدیر</strong> در <strong>21 دی 1401</strong></span>*/}
                        {/*                                        <p>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می*/}
                        {/*                                            گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده*/}
                        {/*                                            است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر*/}
                        {/*                                            می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت*/}
                        {/*                                            بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را*/}
                        {/*                                            در بر می گیرد.</p>*/}

                        {/*                                        <a href="product-details.html"*/}
                        {/*                                           className="review-report-link">گزارش کاربر</a>*/}
                        {/*                                    </div>*/}
                        {/*                                </div>*/}

                        {/*                                <div className="review-form">*/}
                        {/*                                    <h3>نظر بدهید</h3>*/}

                        {/*                                    <form>*/}
                        {/*                                        <div className="row">*/}
                        {/*                                            <div className="col-lg-6 col-md-6">*/}
                        {/*                                                <div className="form-group">*/}
                        {/*                                                    <label>نام</label>*/}
                        {/*                                                    <input type="text" id="name" name="name"*/}
                        {/*                                                           className="form-control"/>*/}
                        {/*                                                </div>*/}
                        {/*                                            </div>*/}

                        {/*                                            <div className="col-lg-6 col-md-6">*/}
                        {/*                                                <div className="form-group">*/}
                        {/*                                                    <label>ایمیل</label>*/}
                        {/*                                                    <input type="email" id="email" name="email"*/}
                        {/*                                                           className="form-control"/>*/}
                        {/*                                                </div>*/}
                        {/*                                            </div>*/}

                        {/*                                            <div className="col-lg-12 col-md-12">*/}
                        {/*                                                <div className="form-group">*/}
                        {/*                                                    <label>موضوع</label>*/}
                        {/*                                                    <input type="text" id="review-title"*/}
                        {/*                                                           name="review-title"*/}
                        {/*                                                           className="form-control"/>*/}
                        {/*                                                </div>*/}
                        {/*                                            </div>*/}

                        {/*                                            <div className="col-lg-12 col-md-12">*/}
                        {/*                                                <div className="form-group">*/}
                        {/*                                                    <label>نظر شما (1500)</label>*/}
                        {/*                                                    <textarea name="review-body"*/}
                        {/*                                                              id="review-body" cols="30"*/}
                        {/*                                                              rows="8"*/}
                        {/*                                                              className="form-control"/>*/}
                        {/*                                                </div>*/}
                        {/*                                            </div>*/}

                        {/*                                            <div className="col-lg-12 col-md-12">*/}
                        {/*                                                <button type="submit"*/}
                        {/*                                                        className="btn default-btn">ارسال*/}
                        {/*                                                </button>*/}
                        {/*                                            </div>*/}
                        {/*                                        </div>*/}
                        {/*                                    </form>*/}
                        {/*                                </div>*/}
                        {/*                            </div>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
        </>
    )
}