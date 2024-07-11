import { Link } from '@mui/material'
import React from 'react'

export default function ProductShop() {

  return (
    <div className="col-lg-4">
						<div className="widget-sidebar">
							<div className="sidebar-widget categories">
								<ul>
									<li>
										<h3>دسته بندی محصولات</h3>
									</li>
									<li>
										<Link to="/" >
											<div className="flex">
                                                 <img src="/images/icon/fruits.png" alt="Image"/>
											     میوه های تازه
                                            </div>
										</Link>
									</li>
									<li>
										<Link to="/">
                                        <div className="flex">
											<img src="/images/icon/vegetable.png" alt="Image"/>
											سبزیجات تازه 
                                        </div>

										</Link>
									</li>
									<li>
										<Link to="/">
                                        <div className="flex">
											<img src="/images/icon/seafood.png" alt="Image"/>
											گوشت و غذاهای دریایی 
                                        </div>
										</Link>
									</li>
									<li>
										<Link to="/">
                                        <div className="flex">
											<img src="/images/icon/bread.png" alt="Image"/>
											نان و نانوایی
                                        </div>
										</Link>
									</li>
									<li>
										<Link to="/">
                                        <div className="flex">
											<img src="/images/icon/foods.png" alt="Image"/>
											بسته بندی مواد غذایی
                                        </div>
										</Link>
									</li>
									<li>
										<Link to="/">
                                        <div className="flex">
											<img src="/images/icon/frozen.png" alt="Image"/>
											نگهداری و نظافت
                                        </div>
										</Link>
									</li>
									<li>
										<Link to="/">
                                        <div className="flex">
											<img src="/images/icon/biscuits.png" alt="Image"/>
											رشته فرنگی
                                        </div>
										</Link>
									</li>
									<li>
										<Link to="/">
                                        <div className="flex">
											<img src="/images/icon/groceries.png" alt="Image"/>
											خوراک منجمد
                                        </div>
										</Link>
									</li>
									<li>
										<Link to="/">
                                        <div className="flex">
											<img src="/images/icon/cleaning.png" alt="Image"/>
											خدمات آنلاین
                                        </div>
										</Link>
									</li>
									<li>
										<Link to="/">
                                        <div className="flex">
											<img src="/images/icon/noodles.png" alt="Image"/>
											نظافت در محل 
                                        </div>
										</Link>
									</li>
								</ul>
							</div>

							<div className="sidebar-widget filter">
								<h3>فیلتر قیمت گذاری</h3>
								<form className="price-range-content">
									<div className="price-range-bar" id="range-slider"></div>
									<div className="price-range-filter">
										<div className="price-range-filter-item">
											<input type="text" id="price-amount" readonly/>
										</div>
									</div>
									<button className="filter-btn">فیلتر</button>
								</form>
							</div>

							<div className="sidebar-widget brand">
								<ul>
									<li>
										<h3>برندهای محبوب</h3>
									</li>
									<li>
										<div className="form-group checkboxs">
											<input type="checkbox" className="chb2"/>
											دپان
											<span>(21)</span>
										</div>  
									</li>
									<li>
										<div className="form-group checkboxs">
											<input type="checkbox" className="chb2"/>
											ژنوز
											<span>(10)</span>
										</div>  
									</li>
									<li>
										<div className="form-group checkboxs">
											<input type="checkbox" className="chb2"/>
											پوفو
											<span>(15)</span>
										</div>  
									</li>
									<li>
										<div className="form-group checkboxs">
											<input type="checkbox" className="chb2"/>
											نائون
											<span>(05)</span>
										</div>  
									</li>
									<li>
										<div className="form-group checkboxs">
											<input type="checkbox" className="chb2"/>
											آنوا
											<span>(13)</span>
										</div>  
									</li>
									<li>
										<div className="form-group checkboxs">
											<input type="checkbox" className="chb2"/>
											کانستیک
											<span>(17)</span>
										</div>  
									</li>
								</ul>
							</div>
							
							<div className="special-wrap seller-sidebar">
								<div className="section-title">
									<h2>جدیدترین محصولات</h2>
								</div>
									
								<ul className="trending-product-list special-product-list m-0">
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

							<div className="sidebars-ad">
								<Link to="/">
									<img src="/images/sidebar-ad.jpg" alt="Image"/>
								</Link>
							</div>
						</div>
					</div>
  )
}
