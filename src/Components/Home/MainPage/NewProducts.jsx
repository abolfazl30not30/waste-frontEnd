import React from 'react'
import { Link } from 'react-router-dom'

export default function NewProducts() {
  return (
		<section class="arrivals-area">
			<div class="container">
				<div class="section-title">
					<h2>محصولات جدید</h2>

					<Link to="/" class="read-more">
						مشاهده بیشتر
					</Link>
				</div>
				
				<div class="row justify-content-center">
					<div class="col-xl-2 col-sm-6">
						<div class="single-products arrivals-border arrivals-box">
							<div class="product-img">
								<Link to="/">
									<img src="/images/products/product-1.jpg" alt="Image"/>
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
								<Link to="/roduct-details.html" class="title">
									هویج تازه
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
	
								<div class="cart-button">
									
								</div>
							</div>
						</div>
					</div>

					<div class="col-xl-2 col-sm-6">
						<div class="single-products arrivals-border arrivals-box">
							<div class="product-img">
								<Link to="/">
									<img src="/images/products/product-2.jpg" alt="Image"/>
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
									کروسان شکلاتی
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
	
								<div class="cart-button">
									
								</div>
							</div>
						</div>
					</div>

					<div class="col-xl-2 col-sm-6">
						<div class="single-products arrivals-border arrivals-box">
							<div class="product-img">
								<Link to="/">
									<img src="/images/products/product-3.jpg" alt="Image"/>
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
									فلفل دلمه ای
								</Link>

								<ul class="products-price">
									<li>
										1100 تومان
										<del>2100 تومان</del>
										<span class="available out"></span>
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
	
								<div class="cart-button">
									
								</div>
							</div>
						</div>
					</div>

					<div class="col-xl-2 col-sm-6">
						<div class="single-products arrivals-border arrivals-box">
							<div class="product-img">
								<Link to="/">
									<img src="/images/products/product-4.jpg" alt="Image"/>
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
									ماهی سالمون
								</Link>

								<ul class="products-price">
									<li>
										1100 تومان
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
	
								<div class="cart-button">
								
								</div>
							</div>
						</div>
					</div>

					<div class="col-xl-2 col-sm-6">
						<div class="single-products arrivals-border arrivals-box">
							<div class="product-img">
								<Link to="/">
									<img src="/images/products/product-5.jpg" alt="Image"/>
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
									ماکارونی آشیانه
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
	
								<div class="cart-button">
									
								</div>
							</div>
						</div>
					</div>

					<div class="col-xl-2 col-sm-6">
						<div class="single-products arrivals-border arrivals-box">
							<div class="product-img">
								<Link to="/">
									<img src="/images/products/product-6.jpg" alt="Image"/>
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
									خرچنگ تازه بوستون
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
	
								<div class="cart-button">
									
								</div>
							</div>
						</div>
					</div>

					<div class="col-xl-2 col-sm-6">
						<div class="single-products arrivals-border arrivals-box">
							<div class="product-img">
								<Link to="/">
									<img src="/images/products/product-7.jpg" alt="Image"/>
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
									زردآلو تازه
								</Link>

								<ul class="products-price">
									<li>
										1100 تومان
										<span class="available out"></span>
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
	
								<div class="cart-button">
									
								</div>
							</div>
						</div>
					</div>

					<div class="col-xl-2 col-sm-6">
						<div class="single-products arrivals-border arrivals-box">
							<div class="product-img">
								<Link to="/">
									<img src="/images/products/product-8.jpg" alt="Image"/>
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
									لیمو تازه
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
	
								<div class="cart-button">
									
								</div>
							</div>
						</div>
					</div>

					<div class="col-xl-2 col-sm-6">
						<div class="single-products arrivals-border arrivals-box">
							<div class="product-img">
								<Link to="/">
									<img src="/images/products/product-9.jpg" alt="Image"/>
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
										<span class="available out"></span>
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
	
								<div class="cart-button">
									
								</div>
							</div>
						</div>
					</div>

					<div class="col-xl-2 col-sm-6">
						<div class="single-products arrivals-border arrivals-box">
							<div class="product-img">
								<Link to="/">
									<img src="/images/products/product-10.jpg" alt="Image"/>
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
									تمشک تازه
								</Link>

								<ul class="products-price">
									<li>
										1100 تومان
										<span class="available out"></span>
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
	
								<div class="cart-button">
									
								</div>
							</div>
						</div>
					</div>

					<div class="col-xl-2 col-sm-6">
						<div class="single-products arrivals-border arrivals-box">
							<div class="product-img">
								<Link to="/">
									<img src="/images/products/product-11.jpg" alt="Image"/>
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
									بسته پسته
								</Link>

								<ul class="products-price">
									<li>
										1100 تومان
										<span class="available out"></span>
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
	
								<div class="cart-button">
									
								</div>
							</div>
						</div>
					</div>

					<div class="col-xl-2 col-sm-6">
						<div class="single-products arrivals-border arrivals-box">
							<div class="product-img">
								<Link to="/">
									<img src="/images/products/product-12.jpg" alt="Image"/>
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
									سس خردل
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
	
								<div class="cart-button">
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}
