import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate();
    const handleExit = () =>{
        navigate("/")
        localStorage.clear()
    }
    return (
        <>
                <div className="col-lg-3">
                    <ul className="dashboard-navigation">
                        <li>
                            <h3>پنل کاربری</h3>
                        </li>
                        <li>
                            <NavLink activeClassName={"activeSideBar"} to="/dashboard/add-product">افزودن کالا</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"activeSideBar"} to="/dashboard/edit-profile">ویرایش پروفایل</NavLink>
                        </li>
                        {/*<li>*/}
                        {/*    <NavLink activeClassName={"activeSideBar"} to="/dashboard">جزئیات سفارش</NavLink>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <NavLink activeClassName={"activeSideBar"} to="/dashboard">افزودن موقعیت</NavLink>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <NavLink activeClassName={"activeSideBar"} to="/dashboard">بازیابی گذرواژه</NavLink>*/}
                        {/*</li>*/}
                        <li>
                            <button onClick={handleExit}>خروج</button>
                        </li>
                    </ul>
                </div>
        </>
    );
}

export default Sidebar