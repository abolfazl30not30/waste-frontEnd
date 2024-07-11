import {Link} from '@mui/material'
import React, {useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
export default function LoginForm() {
	const [username,setUsername] = useState("")
	const [password,setPasswrod] = useState("")

    const navigate = useNavigate()

    const login = async () =>{
        await axios.post("http://localhost:8090/login",
            {username: username, password: password}
        ).then((response) => {
            localStorage.setItem("Authorization", response.headers["authorization"])
            localStorage.setItem("username", username)
            localStorage.setItem("password", password)

            navigate("/dashboard/add-product")
            return response
        }).catch((error) => {
            console.log(error)
            toast.error("رمز عبور نا معتبر است", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        })
    }

    const register = async () =>{
        await axios.post("http://localhost:8090/api/v1/register",
            {username: username, password: password}
        ).then((response) => {
            login()
            return response
        }).catch((error) => {
            if(error.respond.status === 403){
                toast.error("ثبت نام شما نا موفق بود", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            }else {
                toast.error("سیستم با خطا رو به رو شده است", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            }
        })
    }

	const handleSubmit = async () =>{
        let respond;
        try{
            respond = await axios.post("http://localhost:8090/api/v1/register/verify",{username:username})
        }catch (error){
            toast.error("سیستم با خطا رو به رو شده است", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }


		if(respond.data){
            await login()
		}else{
            await register()
		}
	}

    return (
        <>
            <section className="user-area ptb-54">
                <div className="container">
                    <div className="user-wrap">
                        <div className="">
                            <div className="user-form-content log-in-50">
                                <h3>ورود / ثبت نام</h3>
                                <div className="user-form">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>شماره همراه</label>
                                                <input value={username} onChange={(e)=>{setUsername(e.target.value)}} className="form-control" type="text" name="name"/>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>گذرواژه</label>
                                                <input value={password} onChange={(e)=>{setPasswrod(e.target.value)}} className="form-control" type="password" name="password"/>
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
                                            <button onClick={handleSubmit} className="default-btn radius-btn">
                                                ورود
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
