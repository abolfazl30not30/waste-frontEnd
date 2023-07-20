import React from 'react';

function Slider() {
    return (
        <>
            <section className="hero-slider-area style-three ptb-24">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="hero-slider-two owl-carousel owl-theme">
                                    <div className="slider-item bg-7">
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

                                    <div className="slider-item bg-8">
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

                                    <div className="slider-item bg-9">
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