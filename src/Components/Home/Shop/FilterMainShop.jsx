import {Link} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {SeparateNumber} from "../../../Helper/SeparateNumber";
import axios from "axios";

export default function FilterMainShop() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        await axios.get("http://localhost:8090/api/v1/product/findAll").then((res) => {
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
            <div className="col-lg-8">
                <div className="showing-result">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="showing-result-count">
                                <p>نمایش 16 محصول از 60 محصول</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="products-filter-options">
                                <div className="view-list-row">
                                    <div className="view-column">
                                        <Link to="/" className="icon-view-three active">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </Link>
                                        <Link to="/" className="view-grid-switch">
                                            <span></span>
                                            <span></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="showing-top-bar-ordering">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>مرتب سازی پیش فرض</option>
                                    <option value="1">ارگانیک</option>
                                    <option value="2">میوه و سبزیجات</option>
                                    <option value="3">شکلات</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="products-filter" className="products-collections-listing row justify-content-center">
                    {
                        products.map((product) => (
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-products arrivals-border arrivals-box h-[27rem] z-5">
                                    <div className="product-img h-[50%] z-5">
                                        <Link to={`/product-details/${product.id}`} className="z-10">
                                            <img src={product.pictureUrl} className="h-full w-full object-cover"
                                                 alt="Image"/>
                                        </Link>
                                        <span className="hot">%{product.discount}</span>

                                        <ul className="products-cart-wish-view">
                                            <li>
                                                <Link to="/" class="wish-btn">
                                                    <i className="ri-heart-line"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <button className="eye-btn" data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal">
                                                    <i className="ri-eye-line"></i>
                                                </button>
                                            </li>
                                            <li>
                                                <Link to="/" class="quality-btn">
                                                    <i className="ri-link"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="product-content">
                                        <Link to={`/product-details/${product.id}`} class="title">
                                            {product.title}
                                        </Link>

                                        <ul className="products-price">
                                            <li>
                                                {SeparateNumber(product.priceAfterDiscount)}تومان
                                                <del> {SeparateNumber(product.price)}تومان </del>
                                            </li>
                                        </ul>

                                        <ul className="products-price">
                                            <li>
                                                <span className="text-neutral-400 font-light"> تاریخ انقضا: </span>
                                                <span
                                                    className="text-neutral-600 font-light">{product.expirationDate}</span>
                                            </li>
                                        </ul>
                                        <ul className="products-price">
                                            <li>
                                                <span className="text-neutral-400 font-light"> برند: </span>
                                                <span className="text-neutral-600 font-light">{product.brand}</span>
                                            </li>
                                        </ul>

                                        <ul className="products-rating">
                                            <li>
                                                <i className="ri-star-fill"></i>
                                            </li>
                                            <li>
                                                <i className="ri-star-fill"></i>
                                            </li>
                                            <li>
                                                <i className="ri-star-fill"></i>
                                            </li>
                                            <li>
                                                <i className="ri-star-fill"></i>
                                            </li>
                                            <li>
                                                <i className="ri-star-fill"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
