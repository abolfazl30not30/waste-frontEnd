import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
    <div className="footer-area bg-color-e3e8ee pt-54 pb-30">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="single-footer-widget">
							<img src="/images/logo.png" class="logo" alt="Image"/>

							<p>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>

							<span>ارتباط با ما:</span>

							<ul class="social-link">
								<li>
									<Link to="/" target="_blank">
										<i class="ri-facebook-fill"></i>
									</Link>
								</li>
								<li>
									<Link to="/" target="_blank">
										<i class="ri-twitter-fill"></i>
									</Link>
								</li>
								<li>
									<Link to="/" target="_blank">
										<i class="ri-linkedin-fill"></i>
									</Link>
								</li>
								<li>
									<Link to="/" target="_blank">
										<i class="ri-instagram-fill"></i>
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div class="col">
						<div class="single-footer-widget ml-30">
							<h3>اطلاعات</h3>

							<ul class="import-link">
								<li>
									<Link to="/">درباره ما</Link>
								</li>
								<li>
									<Link to="/">تماس با ما</Link>
								</li>
								<li>
									<Link to="/">شرایط و ضوابط</Link>
								</li>
								<li>
									<Link to="/">برندها</Link>
								</li>
								<li>
									<Link to="/">موارد مهم</Link>
								</li>
							</ul>
						</div>
					</div>

					<div class="col">
						<div class="single-footer-widget ml-30">
							<h3>پشتیبانی</h3>

							<ul class="import-link">
								<li>
									<Link to="/">موقعیت فروشگاه</Link>
								</li>
								<li>
									<Link to="/">رهگیری سفارش</Link>
								</li>
								<li>
									<Link to="/">جستجو محصول</Link>
								</li>
								<li>
									<Link to="/">سوالات متداول</Link>
								</li>
								<li>
									<Link to="/">پیشتیبانی آنلاین</Link>
								</li>
								<li>
									<Link to="/">شرایط و ضوابط</Link>
								</li>
							</ul>
						</div>
					</div>

					<div class="col">
						<div class="single-footer-widget">
							<h3>اطلاعات تماس</h3>

							<ul class="info-list">
								<li>
									<i class="ri-map-pin-line"></i>
									ایران، استان تهران، ولنجك ، پارك علم و فناوری دانشگاه شهید بهشتی
								</li>
								<li>
									<i class="ri-phone-line"></i>
									<Link to="/">+021-0000000</Link>
								</li>
								<li>
									<i class="ri-mail-send-line"></i>
									<Link to="/"> contact@Waste.com</Link>
								</li>

							</ul>
						</div>
					</div>


				</div>
			</div>
            
		</div>
        <div class="copy-right-area">
        <div class="container">
            <p>
                © ویست. تمام حقوق قالب محفوظ است.
            </p>
        </div>
    </div>
    </div>
  )
}
