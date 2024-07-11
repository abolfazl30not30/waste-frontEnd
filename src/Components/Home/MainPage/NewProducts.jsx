import React from 'react'
import { Link } from 'react-router-dom'
import {useEffect, useState} from "react";
import axios from "axios";
import {SeparateNumber} from "../../../Helper/SeparateNumber";

export default function NewProducts() {
	const [products,setProducts] = useState([]);

	const getProducts = async () =>{
		await axios.get("http://localhost:8090/api/v1/product/newestProducts").then((res) => {
			setProducts(res.data)
		}).catch((err) => {
			console.log(err)
		})
	}
	useEffect(() => {
		getProducts()
	}, [])

  return (
		<section className="arrivals-area">
			<div className="container">
				<div className="section-title">
					<h2>محصولات جدید</h2>

					<Link to="/" class="read-more">
						مشاهده بیشتر
					</Link>
				</div>
				
				<div className="row justify-content-center">
					{
						products.map((product)=>(
							<div className="col-xl-3 col-sm-6">
								<div className="single-products arrivals-border arrivals-box h-[27rem]">
									<div className="product-img h-[50%]" >
										<Link to={`/product-details/${product.id}`}>
											<img src={product.pictureUrl} className="h-full w-full object-cover" alt="Image"/>
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
		</section>
  )
}
