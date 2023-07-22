import { Link } from '@mui/material'
import React from 'react'

export default function FilterMainShop() {
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
							<div className="col-lg-4 col-sm-6">
								<div className="single-products style-box">
									<div className="product-img">
										<Link to="/">
											<img src="images/products/product-39.jpg" alt="Image"/>
										</Link>
		
										<ul className="products-cart-wish-view">
											<li>
												<Link to="/" className="wish-btn">
													<i className="ri-heart-line"></i>
												</Link>
											</li>
											<li>
												<button className="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
											گوشت تازه
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
								</div>
							</div>
						</div>
	   </div>
    </>
  )
}
