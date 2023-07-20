import React from 'react'
import { Link } from 'react-router-dom'

export default function SpecialSale() {
  return (
    <section class="delas-area">
			<div class="container">
				<div class="row">
					<div class="col-lg-9">
						<div class="section-title">
							<h2>فروش ویژه</h2>

							<Link to="/" class="read-more">
								مشاهده بیشتر
							</Link>
						</div>
						
						<div class="row justify-content-center">
							<div class="col-lg-4 col-sm-6">
								<div class="single-products style-box">
									<div class="product-img">
										<Link to="/">
											<img src="/images/products/product-40.jpg" alt="Image"/>
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
											سبد نان مخلوط
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

							<div class="col-lg-4 col-sm-6">
								<div class="single-products style-box">
									<div class="product-img">
										<Link to="/">
											<img src="/images/products/product-42.jpg" alt="Image"/>
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
											سبد کامل سبزیجات
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

							<div class="col-lg-4 col-sm-6">
								<div class="single-products style-box">
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
											محصول برنج
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
