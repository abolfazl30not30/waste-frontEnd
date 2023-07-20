import React from 'react';

function AddProducts() {
    return (
        <>
            <div className="cart-area recent-order">
                <div className="flex justify-between items-center py-2 mb-7">
                    <h3 className="mt-3">افزودن کالا جدید</h3>
                    <button className="default-btn">
                        افزودن
                    </button>
                </div>

                <form className="cart-controller mb-0">
                    <div className="cart-table table-responsive">
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th scope="col">حذف</th>
                                <th scope="col">محصول</th>
                                <th scope="col"></th>
                                <th scope="col">قیمت</th>
                                <th scope="col">درصد تخفیف</th>
                                <th scope="col">دسته بندی</th>
                                <th scope="col">تعداد</th>
                                <th scope="col">تاریخ انقضا</th>
                                <th scope="col">برند</th>
                                <th scope="col">آدرس فروشگاه</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td className="trash">
                                    <a href="shopping-cart.html" className="remove">
                                        <i className="ri-delete-bin-line"></i>
                                    </a>
                                </td>
                                <td className="product-thumbnail">
                                    <a href="product-details.html">
                                        <img src="../images/products/product-18.jpg" alt="Image"/>
                                    </a>
                                </td>

                                <td className="product-name">
                                    <a href="product-details.html">گوشت تازه گاو</a>
                                </td>

                                <td className="product-price">
                                    <span className="unit-amount">100,000</span>
                                </td>

                                <td className="product-price">
                                    <span className="unit-amount">60%</span>
                                </td>

                                <td className="product-subtotal">
                                    <span className="subtotal-amount">گوشت</span>
                                </td>

                                <td className="product-subtotal">
                                    <span className="subtotal-amount">5</span>
                                </td>
                                <td className="product-subtotal">
                                    <span className="subtotal-amount">1402/08/01</span>
                                </td>
                                <td className="product-subtotal">
                                    <span className="subtotal-amount">گوشتیران</span>
                                </td>
                                <td className="product-subtotal">
                                    <span className="subtotal-amount">تهران-ولنجک-میدان شهید شهریاری-کوی دوازدهم</span>
                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddProducts