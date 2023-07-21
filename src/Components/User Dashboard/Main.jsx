import React from 'react';
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Main() {
    return (
        <>
            <div className="p-5">
                <div className="row">
                    <Sidebar/>
                    <div className="col-lg-9">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main