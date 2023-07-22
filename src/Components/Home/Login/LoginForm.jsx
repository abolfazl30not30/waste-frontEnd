import { Link } from '@mui/material'
import React from 'react'

export default function LoginForm() {
  return (
    <>
     
		
		<section className="user-area ptb-54">
			<div className="container">
				<div className="user-wrap">
					<div className="row">
						<div className="col-lg-6">
							<div className="user-form-content log-in-50">
								<h3>ورود کاربران</h3>
							
								<form className="user-form">
									<div className="row">
										<div className="col-12">
											<div className="form-group">
												<label>ایمیل</label>
												<input className="form-control" type="text" name="name"/>
											</div>
										</div>
			
										<div className="col-12">
											<div className="form-group">
												<label>گذرواژه</label>
												<input className="form-control" type="password" name="password"/>
											</div>
										</div>
			
										<div className="col-12">
											<div className="login-action">
												<span className="log-rem">
													<input id="remember-2" type="checkbox"/>
													<label>مرا بخاطر بسپار</label>
												</span>
												
												<span className="forgot-login">
													<Link to="/">فراموشی گذرواژه؟</Link>
												</span>
											</div>
										</div>
			
										<div className="col-12">
											<button className="default-btn radius-btn" type="submit">
												ورود
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
	
						<div className="col-lg-6">
							<div className="user-form-content">
								<h3>ثبت نام</h3>
	
								<form className="user-form">
									<div className="row">
										<div className="col-12">
											<div className="form-group">
												<label>نام</label>
												<input className="form-control" type="text" name="name"/>
											</div>
										</div>
	
										<div className="col-12">
											<div className="form-group">
												<label>ایمیل</label>
												<input className="form-control" type="email" name="email"/>
											</div>
										</div>
	
										<div className="col-12">
											<div className="form-group">
												<label>گذرواژه</label>
												<input className="form-control" type="password" name="password"/>
											</div>
										</div>

										<div className="col-12">
											<div className="login-action">
												<span className="log-rem">
													<input id="remember-2" type="checkbox"/>
													<label>موافق هستم با <Link to="/">قوانین</Link> و <Link to="/">حریم خصوصی</Link></label>
												</span>
											</div>
										</div>
			
										<div className="col-12">
											<button className="default-btn radius-btn" type="submit">
												ثبت نام
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}
