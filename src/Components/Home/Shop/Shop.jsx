import React from 'react'
import FilterMainShop from './FilterMainShop'
import ProductShop from './ProductShop'

export default function Shop() {
  return (
    <section className="products-area ptb-54">
			<div className="container">
				<div className="row">
        <ProductShop/>
        <FilterMainShop/>
                </div>
            </div>
    </section>
  )
}
