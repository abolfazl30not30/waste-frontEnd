import React from 'react'

export default function EditProfile() {
  return (
    <>
       <div className="col-lg-8">
						<div className="edit-profile">
							<h3>ویرایش پروفایل</h3>
							
							<form className="submit-property-form">
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group">
											<label>نام</label>
											<input type="text" className="form-control"/>
										</div>
									</div>

									<div className="col-lg-6">
										<div className="form-group">
											<label>نام خانوادگی</label>
											<input type="text" className="form-control"/>
										</div>
									</div>

									<div className="col-lg-6">
										<div className="form-group">
											<label>ایمیل</label>
											<input type="email" className="form-control"/>
										</div>
									</div>

									<div className="col-lg-6">
										<div className="form-group">
											<label>شماره تلفن فروشگاه</label>
											<input type="text" className="form-control"/>
										</div>
									</div>
                                    <div className="col-lg-6">
										<div className="form-group">
											<label>نام فروشگاه</label>
											<input type="text" className="form-control"/>
										</div>
									</div>

									<div className="col-lg-12">
										<div className="form-group flex flex-col">
											<label> آدرس فروشگاه را وارد کنید</label>
											<textarea className="file-upload"/>
												
											
										</div>
									</div>

									<div className="col-lg-12">
										<button type="submit" className="default-btn radius-btn">
											ذخیره تغییرات
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				
	
    </>
  )
}
