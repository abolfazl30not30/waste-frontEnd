import React from 'react';
import Header from "./Header";
import Slider from "./Slider";
import Category from "./Category";
import BestSellingProducts from './BestSellingProducts';
import Off from './Off';
import NewProducts from './NewProducts';
import SpecialSale from './SpecialSale';
import SpecialArea from './SpecialArea';
import Partner from './Partner';
import Services from './Services';
import Footer from './Footer';
import Navbar from "./Navbar";

function MainPage() {
    return (
        <>
            <div className="space-y-3">
                <Header/>
                <Navbar/>
                <Slider/>
                <Category/>
                <BestSellingProducts/>
                <Off/>
                <NewProducts/>
                <SpecialSale/>
                <Partner/>
                <Services/>
                <Footer/>
            </div>
        </>
    );
}

export default MainPage