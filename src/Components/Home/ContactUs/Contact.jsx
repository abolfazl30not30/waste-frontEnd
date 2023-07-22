import { Link } from '@mui/material'
import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className='flex justify-center my-8'>
        <img classNamemx="  w-3/4" src="/images/map.jpg" alt="map" />
      </div>
      <section className="contact-area ptb-54">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="contact-form">
							<h2>پیام بدهید</h2>
		
							<form id="contactForm">
								<div className="row">
									<div className="col-lg-6 col-sm-6">
										<div className="form-group">
											<label>نام</label>
											<input type="text" name="name" id="name" className="form-control" required data-error="لطفا نام خود را وارد کنید"/>
											<div className="help-block with-errors"></div>
										</div>
									</div>
		
									<div className="col-lg-6 col-sm-6">
										<div className="form-group">
											<label>ایمیل</label>
											<input type="email" name="email" id="email" className="form-control" required data-error="لطفا ایمیل خود را وارد کنید"/>
											<div className="help-block with-errors"></div>
										</div>
									</div>
		
									<div className="col-lg-6 col-sm-6">
										<div className="form-group">
											<label>تلفن</label>
											<input type="text" name="phone_number" id="phone_number" required data-error="لطفا تلفن خود را وارد کنید" className="form-control"/>
											<div className="help-block with-errors"></div>
										</div>
									</div>
		
									<div className="col-lg-6 col-sm-6">
										<div className="form-group">
											<label>موضوع</label>
											<input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="لطفا موضوع خود را وارد کنید"/>
											<div className="help-block with-errors"></div>
										</div>
									</div>
		
									<div className="col-lg-12">
										<div className="form-group">
											<label>پیام شما</label>
											<textarea name="message" className="form-control" id="message" cols="30" rows="6" required data-error="پیام خود را بنویسید"></textarea>
											<div className="help-block with-errors"></div>
										</div>
									</div>
		
									<div className="col-lg-12 col-md-12">
										<div className="form-group checkboxs">
											<input type="checkbox" className="chb2"/>
											<p>
												موافقم با <Link to="/">شرایط و ضوابط</Link> و <Link href="privacy-policy.html">حریم خصوصی.</Link>
											</p>
										</div>
									</div>
		
									<div className="col-lg-12 col-md-12">
										<button type="submit" className="default-btn radius-btn">
											<span>ارسال پیام</span>
										</button>
										<div id="msgSubmit" className="h3 text-center hidden"></div>
										<div className="clearfix"></div>
									</div>
								</div>
							</form>
						</div>
					</div>

					<div className="col-lg-4">
						<div className="contact-info-europe">
							<h3>موقعیت ما</h3>

							<ul>
								<li>
									<i className="ri-map-pin-line"></i>
									ایران، استان تهران، میدان آزادی
								</li>
								<li>
									<i className="ri-phone-line"></i>
									<Link to="/">973-635-8147</Link>
								</li>
								<li>
									<i className="ri-mail-send-line"></i>
									<Link to="/"> contact@groe.com</Link>
								</li>
							</ul>
						</div>

						<div className="contact-info-europe hours">
							<h3>ساعت کاری:</h3>

							<ul>
								<li>
									<i className="ri-time-line"></i>
									شنبه - دوشنبه 7:00 صبح تا 8:00 شب <br/>
									شنبه - دوشنبه 7:00 صبح تا 8:00 شب
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
  )
}
