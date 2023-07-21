import React from 'react'
import { Link } from 'react-router-dom'

export default function SpecialArea() {
  return (
    <section className="special-area style-three">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-4 col-sm-6">
						<div className="special-wrap seller-sidebar">
							<div className="section-title">
								<h2>محصولات محبوب</h2>
							</div>
								
							<ul className="trending-product-list special-product-list">
								<li className="single-list">
									<Link to="/">
										<img src="/images/products/product-19.jpg" alt="Image"/>
									</Link>
	
									<div className="product-content">
										<Link to="/" className="title">
											ساندویچ کروسان تستی
										</Link>
	
										<ul className="products-price">
											<li>
												1100 تومان
												<span className="available">در دسترس</span>
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
								</li>
	
								<li className="single-list">
									<Link to="/">
										<img src="/images/products/product-20.jpg" alt="Image"/>
									</Link>
	
									<div className="product-content">
										<Link to="/" className="title">
											سیب تازه
										</Link>
	
										<ul className="products-price">
											<li>
												1100 تومان
												<span className="available out">(1 کیلوگرم)</span>
												<span className="available">در دسترس</span>
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
								</li>
	
								<li className="single-list">
									<Link to="/">
										<img src="/images/products/product-25.jpg" alt="Image"/>
									</Link>
	
									<div className="product-content">
										<Link to="/" className="title">
											ترشی میوه
										</Link>
	
										<ul className="products-price">
											<li>
												1100 تومان
												<del>2100 تومان</del>
												<span className="available">در دسترس</span>
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
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="special-wrap seller-sidebar">
							<div className="section-title">
								<h2>پیشنهادهای ویژه</h2>
							</div>
								
							<ul className="trending-product-list special-product-list">
								<li className="single-list">
									<Link to="/">
										<img src="/images/products/product-22.jpg" alt="Image"/>
									</Link>
									<span className="hot">%50-</span>
	
									<div className="product-content">
										<Link to="/" className="title">
											سیب زمینی
										</Link>
	
										<ul className="products-price">
											<li>
												1100 تومان
												<span className="available">در دسترس</span>
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
								</li>
	
								<li class="single-list">
									<Link to="/">
										<img src="/images/products/product-23.jpg" alt="Image"/>
									</Link>
									<span class="hot">%30-</span>
	
									<div class="product-content">
										<Link to="/" class="title">
											لوبیا سیاه
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
									</div>
								</li>
	
								<li class="single-list">
									<Link to="/">
										<img src="/images/products/product-31.jpg" alt="Image"/>
									</Link>
									<span class="hot">%50-</span>

									<div class="product-content">
										<Link to="/" class="title">
											کنسرو لوبیا فرنگی
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
								</li>
							</ul>
						</div>
					</div>

					<div class="col-lg-4 col-sm-6">
						<div class="special-wrap seller-sidebar">
							<div class="section-title">
								<h2>محصولات جدید</h2>
							</div>
								
							<ul class="trending-product-list special-product-list">
								<li class="single-list">
									<Link to="/">
										<img src="/images/products/product-36.jpg" alt="Image"/>
									</Link>
	
									<div class="product-content">
										<Link to="/" class="title">
											بسته ادویه جات
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
								</li>
	
								<li class="single-list">
									<Link to="/">
										<img src="/images/products/product-34.jpg" alt="Image"/>
									</Link>
	
									<div class="product-content">
										<Link to="/" class="title">
											ماهی سالمون
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
								</li>
	
								<li class="single-list">
									<Link to="/">
										<img src="/images/products/product-35.jpg" alt="Image"/>
									</Link>
	
									<div class="product-content">
										<Link to="/" class="title">
											گوجه تازه
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
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}
