import React from 'react';
import Header from "../MainPage/Header"
import Navbar from "../MainPage/Navbar"
import LoginForm from './LoginForm';
import Footer from '../MainPage/Footer';


function MainLogin() {
    return (
        <>
            <Header/>
            <Navbar/>
            <LoginForm/>
            <Footer/>
        </>
    );
}

export default MainLogin