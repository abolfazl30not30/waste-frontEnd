import React from 'react'
import { Link } from 'react-router-dom'

export default function Off() {
  return (
    <section class="off-50-area pb-24">
			<div class="container">
				<div class="off-50-bg ptb-54 radius">
					<div class="off-50-content">
						<h3>%50 تخفیف برای تمام سبزیجات تازه</h3>
						<p>فقط این هفته</p>
						<Link to="/" class="default-btn radius-btn">
							<i class="ri-shopping-cart-line"></i>
							اکنون بخرید
						</Link>
					</div>
				</div>
			</div>
		</section>
  )
}
