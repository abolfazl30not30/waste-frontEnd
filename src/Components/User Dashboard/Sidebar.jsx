import React from 'react';
import {Link, NavLink} from "react-router-dom";

function Sidebar() {
    return (
        <>
                <div className="col-lg-3">
                    <ul className="dashboard-navigation">
                        <li>
                            <h3>داشبورد</h3>
                        </li>
                        <li>
                            <Link to="/dashboard/add-product" className="active">افزودن کالا</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">ویرایش پروفایل</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">جزئیات سفارش</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">افزودن موقعیت</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">بازیابی گذرواژه</Link>
                        </li>
                        <li>
                            <Link to="/">خروج</Link>
                        </li>
                    </ul>
                </div>
        </>
    );
}

export default Sidebar