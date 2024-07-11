import React from 'react'
import {useState} from "react";
import * as yup from "yup";
import {toast} from "react-toastify";
import api from "../../../Api/api";
import {useEffect} from "react";

export default function EditProfile() {
	const [info, setInfo] = useState(
		{
			firstName: "",
			lastName: "",
			email: "",
			shopName: "",
			shopTelephoneNumber: "",
			address: "",
		}
	)

	const validation = async () => {
		const infoSchema = yup.object().shape({
			firstName: yup.string().required("لطفا نام خود را وارد کنید"),
			lastName: yup.string().required("لطفا نام خانوادگی خود را وارد کنید"),
			email: yup.string().required("لطفا ایمیل خود را وارد کنید"),
			shopName: yup.string().required("لطفا عنوان فروشگاه خود را وارد کنید"),
			shopTelephoneNumber: yup.string().required("لطفا شماره تلفن فروشگاه خود را وارد کنید"),
			address: yup.string().required("لطفا آدرس فروشگاه خود را وارد کنید"),
		})

		try {
			return await infoSchema.validate(info, {abortEarly: false})
		} catch (error) {
			toast.info(error.errors[0], {
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
		}
	}
	const getAllProducts = async () => {
		const res = await api.get("characteristic")
		setInfo(res);
	}

	useEffect(() => {
		getAllProducts()
	}, [])

	const handleSubmit = async () => {
		const valid = await validation();
		if (valid !== undefined) {
			const res = await api.put("characteristic", info)
			if (res) {
				toast.success('مشخصات با موفقیت ثبت شد', {
					position: "bottom-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				})
				getAllProducts()
			}
		}
	}
  return (
    <>
       <div className="col-lg-8">
						<div className="edit-profile">
							<h3>ویرایش پروفایل</h3>

							<div className="submit-property-form">
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group">
											<label>نام</label>
											<input value={info.firstName} onChange={(e)=>{setInfo((info)=>({...info,firstName: e.target.value}))}} type="text" className="form-control"/>
										</div>
									</div>

									<div className="col-lg-6">
										<div className="form-group">
											<label>نام خانوادگی</label>
											<input value={info.lastName} onChange={(e)=>{setInfo((info)=>({...info,lastName: e.target.value}))}} type="text" className="form-control"/>
										</div>
									</div>

									<div className="col-lg-6">
										<div className="form-group">
											<label>ایمیل</label>
											<input value={info.email} onChange={(e)=>{setInfo((info)=>({...info,email: e.target.value}))}} type="email" className="form-control"/>
										</div>
									</div>

									<div className="col-lg-6">
										<div className="form-group">
											<label>نام فروشگاه</label>
											<input value={info.shopName} onChange={(e)=>{setInfo((info)=>({...info,shopName: e.target.value}))}} type="text" className="form-control"/>
										</div>
									</div>

									<div className="col-lg-6">
										<div className="form-group">
											<label>شماره تلفن فروشگاه</label>
											<input value={info.shopTelephoneNumber} onChange={(e)=>{setInfo((info)=>({...info,shopTelephoneNumber: e.target.value}))}} type="text" className="form-control"/>
										</div>
									</div>


									<div className="col-lg-12">
										<div className="form-group flex flex-col">
											<label> آدرس فروشگاه را وارد کنید</label>
											<textarea value={info.address} onChange={(e)=>{setInfo((info)=>({...info,address: e.target.value}))}} className="file-upload"/>
										</div>
									</div>

									<div className="col-lg-12">
										<button onClick={handleSubmit} className="default-btn radius-btn">
											ذخیره تغییرات
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				
	
    </>
  )
}
