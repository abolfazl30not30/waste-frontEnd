import React from 'react'
import { Link } from 'react-router-dom'
import {useEffect, useState} from "react";
import axios from "axios";
import {SeparateNumber} from "../../../Helper/SeparateNumber";

export default function SpecialSale() {
	const [products,setProducts] = useState([]);

	const getProducts = async () =>{
		await axios.get("http://localhost:8090/api/v1/product/bestOffer").then((res) => {
			setProducts(res.data)
		}).catch((err) => {
			console.log(err)
		})
	}
	useEffect(() => {
		getProducts()
	}, [])
  return (
    <section className="delas-area mb-5">
			<div className="container">
				<div className="row">
					<div class="col-lg-9">
						<div class="section-title">
							<h2>فروش ویژه</h2>

							<Link to="/" class="read-more">
								مشاهده بیشتر
							</Link>
						</div>
						
						<div className="row justify-content-center">
							{
								products.map((product)=>(
									<div className="col-lg-4 col-sm-6">
										<div className="single-products style-box h-[30rem]">
											<div className="product-img h-[60%]">
												<Link to="/">
													<img src={product.pictureUrl} className="h-full w-full object-cover" alt="Image"/>
												</Link>
												<span className="hot">%{product.discount}</span>
												<ul className="products-cart-wish-view">
													<li>
														<Link to="/" className="wish-btn">
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
														<Link to="/" className="quality-btn">
															<i className="ri-link"></i>
														</Link>
													</li>
												</ul>
											</div>

											<div className="product-content">
												<Link to="/" className="title">
													{product.title}
												</Link>

												<ul className="products-price">
													<li>
														<del>{SeparateNumber(product.price)}</del>
														{SeparateNumber(product.priceAfterDiscount)}
													</li>
												</ul>
												<ul className="products-price">
													<li>
														<span className="text-neutral-400 font-light"> تاریخ انقضا: </span>
														<span className="text-neutral-600 font-light">{product.expirationDate}</span>
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

					<div class="col-lg-3">
						<div class="deals-products-wrap style-three">
							<div class="section-title">
								<h2>پیشنهاد ویژه</h2>
								<Link to="/" class="read-more">
									مشاهده همه
								</Link>
							</div>

							<div class="deals-products-slider owl-carousel owl-theme">
								<div class="single-products deals-products">
									<div class="product-img">
										<div id="timer">
											<div id="days"></div>
											<div id="hours"></div>
											<div id="minutes"></div>
											<div id="seconds"></div>
										</div>

										<Link to="/">
											<img src="/images/products/product-53.jpg" alt="Image"/>
										</Link>
									</div>

									<div class="product-content">
										<Link to="/" class="title">
											مجموعه ادویه جات
										</Link>

										<ul class="products-price">
											<li>
												1100 تومان
												<span class="available">در دسترس</span>
											</li>
										</ul>

										<ul class="products-rating">
											<li>
												<i class="ri-star-fill"></i>
											</li>
											<li>
												<i class="ri-star-fill"></i>
											</li>
											<li>
												<i class="ri-star-fill"></i>
											</li>
											<li>
												<i class="ri-star-fill"></i>
											</li>
											<li>
												<i class="ri-star-fill"></i>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}
