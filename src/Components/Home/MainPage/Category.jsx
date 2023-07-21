import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";


function Category() {
    const [category, setCategory] = useState({
        beverages: 0,
        breadAndCandy:0,
        fruits:0,
        meat:0,
        medicine: 0,
        vegetables: 0,})
    ;
    const getCategory = async () => {
        await axios.get("http://localhost:8090/api/v1/product/category").then((res) => {
            console.log(res.data)
            setCategory(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getCategory()
    }, [])

    return (
        <>
            <section className="category-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-2 col-sm-6">
                            <Link to="/">
                                <div className="single-category style-three">
                                    <img src="images/products/product-45.png" alt="Image"/>
                                    <h3>میوه ها</h3>
                                    <span>{category.fruits}</span>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-2 col-sm-6">
                            <Link to="/">
                                <div className="single-category style-three">
                                    <img src="images/products/product-46.png" alt="Image"/>
                                    <h3>سبزیجات</h3>
                                    <span>{category.vegetables}</span>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-2 col-sm-6">
                            <Link to="/">
                                <div className="single-category style-three">
                                    <img src="images/products/product-47.png" alt="Image"/>
                                    <h3>گوشت</h3>
                                    <span>{category.meat}</span>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-2 col-sm-6">
                            <Link to="/">
                                <div className="single-category style-three">
                                    <img src="images/products/product-48.png" alt="Image"/>
                                    <h3>نان و شیرینی</h3>
                                    <span>{category.breadAndCandy}</span>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-2 col-sm-6">
                            <Link to="/">
                                <div className="single-category style-three">
                                    <img className="h-[7.5rem]" src="images/medicine.png" alt="Image"/>
                                    <h3>دارو</h3>
                                    <span>{category.medicine}</span>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-2 col-sm-6">
                            <Link to="/">
                                <div className="single-category style-three">
                                    <img src="images/products/product-50.png" alt="Image"/>
                                    <h3>نوشیدنی ها</h3>
                                    <span>{category.beverages}</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Category