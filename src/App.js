import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./Components/Home/MainPage/MainPage";
import Dashboard from "./Components/User Dashboard/Dashboard";
import AddProducts from "./Components/User Dashboard/Pages/AddProducts";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={(<MainPage/>)}/>
                    <Route exact path="/dashboard" element={(<Dashboard/>)}>
                        <Route path="add-product" element={<AddProducts/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;