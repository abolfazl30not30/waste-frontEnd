import React, {useEffect, useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";


function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const intervalID = setInterval(() =>  {
            nextSlide()
        }, 2000);
        return () => clearInterval(intervalID);

    }, [currentIndex]);

    const slides = [
        {
            content:
                <div className="slider-item bg-7 h-full transition-all ease-in-out duration-700">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="hero-slider-content style-three">
                            <span></span>
                            <h1>تاريخ انقضا رفيقته</h1>
                            <p>فروشگاه خريد كالا های نزديك به تاريخ انقضا</p>

                            <div className="hero-slider-btn">
                                <a href="#" className="default-btn">
                                    <i className="ri-shopping-cart-line"></i>
                                    اکنون بخرید
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        },
        {
            content:
                <div className="slider-item bg-8 h-full transition-all ease-in-out duration-700">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="hero-slider-content style-three">
                            <span></span>
                            <h1>یا استفاده کن یا از دستش بده</h1>
                            <p>فروشگاه خريد كالا های نزديك به تاريخ انقضا</p>

                            <div className="hero-slider-btn">
                                <a href="#" className="default-btn">
                                    <i className="ri-shopping-cart-line"></i>
                                    اکنون بخرید
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        },
        {
            content: <div className="slider-item bg-9 h-full transition-all ease-in-out duration-700">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="hero-slider-content style-three">
                            <span></span>
                            <h1>قبل خداحافظی بخرش</h1>
                            <p>فروشگاه خريد كالا های نزديك به تاريخ انقضا</p>

                            <div className="hero-slider-btn">
                                <a href="#" className="default-btn">
                                    <i className="ri-shopping-cart-line"></i>
                                    اکنون بخرید
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    ];



    return (
        <>
            <section className="hero-slider-area style-three ptb-24">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className='hero-slider-two h-full relative group'>
                                {slides[currentIndex].content}

                                <div className='absolute top-[50%] text-white -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-2 bg-black/20 text-white  cursor-pointer'>
                                    <IoIosArrowBack onClick={prevSlide} size={30} />
                                </div>

                                <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                                    <IoIosArrowForward onClick={nextSlide} size={30} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="offer-tools">
                                <span>فروش تابستانی</span>
                                <h3>فقط این هفته</h3>
                                <p>مجموعه ادویه جات </p>

                                <a href="#" className="read-more">
                                    اکنون بخرید
                                </a>
                            </div>

                            <div className="offer-tools bg-2">
                                <span>فروش تابستانی</span>
                                <h3>فقط این هفته</h3>
                                <p>تا 60% تخفیف </p>

                                <a href="#" className="read-more">
                                    اکنون بخرید
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Slider