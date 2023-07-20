import React from 'react'
import {Link} from "react-router-dom";

export default function BestSellingProducts() {
  return (
    <section class="best-selling-products-area">
			<div class="container">
				<div class="section-title">
					<h2>پرفروش ترین محصولات</h2>

					<Link to="/" class="read-more">
						مشاهده بیشتر
					</Link>
				</div>
				
				<div class="row justify-content-center">
					<div class="col-lg-3 col-sm-6">
						<div class="single-products style-box">
							<div class="product-img">
								<Link to="/">
									<img src="/images/products/product-39.jpg" alt="Image"/>
								</Link>

								<ul class="products-cart-wish-view">
									<li>
										<Link to="/" class="wish-btn">
											<i class="ri-heart-line"></i>
										</Link>
									</li>
									<li>
										<button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
											<i class="ri-eye-line"></i>
										</button>
									</li>
									<li>
										<Link to="/" class="quality-btn">
											<i class="ri-link"></i>
										</Link>
									</li>
								</ul>
							</div>
	
							<div class="product-content">
								<Link to="/" class="title">
									گوشت ارگانیک
								</Link>

								<ul class="products-price">
									<li>
										1100 تومان
										<span class="available out">(1 کیلوگرم)</span>
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

					<div class="col-lg-3 col-sm-6">
						<div class="single-products style-box">
							<div class="product-img">
								<Link to="/">
									<img src="/images/products/product-38.jpg" alt="Image"/>
								</Link>

								<ul class="products-cart-wish-view">
									<li>
										<Link to="/" class="wish-btn">
											<i class="ri-heart-line"></i>
										</Link>
									</li>
									<li>
										<button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
											<i class="ri-eye-line"></i>
										</button>
									</li>
									<li>
										<Link to="/" class="quality-btn">
											<i class="ri-link"></i>
										</Link>
									</li>
								</ul>
							</div>
	
							<div class="product-content">
								<Link to="/" class="title">
									بسته بادام 
								</Link>

								<ul class="products-price">
									<li>
										1100 تومان
										<del>2100 تومان</del>
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

					<div class="col-lg-3 col-sm-6">
						<div class="single-products style-box">
							<div class="product-img">
								<Link to="/">
									<img src="/images/products/product-16.jpg" alt="Image"/>
								</Link>

								<ul class="products-cart-wish-view">
									<li>
										<Link to="/" class="wish-btn">
											<i class="ri-heart-line"></i>
										</Link>
									</li>
									<li>
										<button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
											<i class="ri-eye-line"></i>
										</button>
									</li>
									<li>
										<Link to="/" class="quality-btn">
											<i class="ri-link"></i>
										</Link>
									</li>
								</ul>
							</div>
	
							<div class="product-content">
								<Link to="/" class="title">
									آرد نان سفید
								</Link>

								<ul class="products-price">
									<li>
										1100 تومان
										<del>2100 تومان</del>
										<span class="available out">تمام شده</span>
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

					<div class="col-lg-3 col-sm-6">
						<div class="single-products style-box">
							<div class="product-img">
								<Link to="/">
									<img src="/images/products/product-37.jpg" alt="Image"/>
								</Link>

								<ul class="products-cart-wish-view">
									<li>
										<Link to="/" class="wish-btn">
											<i class="ri-heart-line"></i>
										</Link>
									</li>
									<li>
										<button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
											<i class="ri-eye-line"></i>
										</button>
									</li>
									<li>
										<Link to="/" class="quality-btn">
											<i class="ri-link"></i>
										</Link>
									</li>
								</ul>
							</div>
	
							<div class="product-content">
								<Link to="/" class="title">
									سوسیس خانگی
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
		</section>
  )
}
