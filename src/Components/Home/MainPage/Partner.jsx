import React from 'react';
import Slider from "react-slick";

export default function Partner() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        draggable: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

  return (
    <>
     <div className="partner-area pb-24">
			<div class="container">
				<div class="partner-wrap style-three">
					<h3>برند های معتبر موجود در ویست</h3>

					<div class="partner-slide owl-carousel owl-theme">
                    <Slider {...settings}>
					
                        <div class="partner-item">
							<img src="/images/partners/partner-1.png" alt="Image"/>
						</div>
						<div class="partner-item">
							<img src="/images/partners/partner-2.png" alt="Image"/>
						</div>
						<div class="partner-item">
							<img src="/images/partners/partner-3.png" alt="Image"/>
						</div>
						<div class="partner-item">
							<img src="/images/partners/partner-4.png" alt="Image"/>
						</div>
						<div class="partner-item">
							<img src="/images/partners/partner-5.png" alt="Image"/>
						</div>
						<div class="partner-item">
							<img src="/images/partners/partner-6.png" alt="Image"/>
						</div>
                        <div class="partner-item">
							<img src="/images/partners/partner-4.png" alt="Image"/>
						</div>
						<div class="partner-item">
							<img src="/images/partners/partner-5.png" alt="Image"/>
						</div>
						<div class="partner-item">
							<img src="/images/partners/partner-6.png" alt="Image"/>
						</div>

                     </Slider>
					</div>
				</div>
			</div>
		</div>
    </>
  )
}
