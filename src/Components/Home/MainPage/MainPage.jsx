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

function MainPage() {
    return (
        <>
            <Header/>
            <Slider/>
            <Category/>
            <BestSellingProducts/>
            <Off/>
            <NewProducts/>
            <SpecialSale/>
            <SpecialArea/>
            <Partner/>
            <Services/>
            <Footer/>
        </>
    );
}

export default MainPage