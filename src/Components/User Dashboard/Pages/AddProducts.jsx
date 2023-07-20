import React, {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Link} from "react-router-dom";
import {FormControl, MenuItem, Select} from "@mui/material";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";

function AddProducts() {
    const [openAddProduct, setOpenAddProduct] = useState(false);
    const [openDeleteProduct, setOpenDeleteProduct] = useState(false);
    const [dataPicker,setDataPicker] = useState()

    const handleDateInput = (value) => {
        setDataPicker(value)
        let month = value.month < 10 ? ('0' + value.month) : value.month;
        let day = value.day < 10 ? ('0' + value.day) : value.day;
        let convertDate = value.year  + '/' + month + '/' + day;
    }
    const handleClickOpen = () => {
        setOpenAddProduct(true);
    };

    const handleClose = () => {
        setOpenAddProduct(false);
    };

    const handleDeleteClickOpen = () => {
        setOpenDeleteProduct(true);
    };

    const handleDeleteClose = () => {
        setOpenDeleteProduct(false);
    };

    return (
        <>
            <div className="cart-area recent-order">
                <div className="flex justify-between items-center py-2 mb-7">
                    <h3 className="mt-3">افزودن کالا جدید</h3>
                    <button onClick={handleClickOpen} className="default-btn">
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
                                    <div className='remove cursor-pointer' onClick={handleDeleteClickOpen}>
                                        <i className="ri-delete-bin-line"></i>
                                    </div>
                                </td>
                                <td className="product-thumbnail">
                                    <Link to="/">
                                        <img src="../images/products/product-18.jpg" alt="Image"/>
                                    </Link>
                                </td>

                                <td className="product-name">
                                    <Link to="">گوشت تازه گاو</Link>
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
            <Dialog
                maxWidth="sm"
                fullWidth={true}
                open={openDeleteProduct}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                    style: {
                        fontFamily: "Vazirmatn RD FD",
                    },
                }}>
                <DialogTitle style={{fontFamily: "Vazirmatn RD FD"}}>حذف کالا </DialogTitle>
                <DialogContent>
                    <DialogContentText style={{fontFamily: "Vazirmatn RD FD"}}>
                        <h6>آیا از حذف کالا مطمئن هستید؟</h6>
                    </DialogContentText>
                </DialogContent>
                <DialogActions className="gap-3" style={{justifyContent: "center"}}>
                    <button className='bg-red-500 hover:opacity-80 py-2 px-3 rounded-2xl'
                            onClick={handleDeleteClose}>حذف
                    </button>
                    <button className='bg-neutral-300 hover:opacity-80 py-2 px-3 rounded-2xl'
                            onClick={handleDeleteClose}>بستن
                    </button>
                </DialogActions>
            </Dialog>

            <Dialog
                maxWidth="sm"
                fullWidth={true}
                open={openAddProduct}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                    style: {
                        fontFamily: "Vazirmatn RD FD",
                    },
                }}>

                <DialogTitle style={{fontFamily: "Vazirmatn RD FD"}}>افزودن کالا جدید</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{fontFamily: "Vazirmatn RD FD"}}>
                        <div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">عنوان</label>
                                <input type="text" id="default-input"
                                       className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">قیمت</label>
                                <input type="text" id="default-input"
                                       className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">درصد تخفیف</label>
                                <input type="text" id="default-input"
                                       className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">تعداد</label>
                                <input type="text" id="default-input"
                                       className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">تاریخ انقضا</label>
                                <DatePicker
                                    calendarPosition={`top`}
                                    digits={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
                                    format={`YYYY/MM/DD`}
                                    containerStyle={{
                                        width: "100%"
                                    }}
                                    inputClass={`bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5`}
                                    value={dataPicker}
                                    onChange={(value) => {handleDateInput(value)}}
                                    mapDays={({ date }) => {
                                        let props = {}
                                        let isWeekend = [6].includes(date.weekDay.index)

                                        if (isWeekend)
                                            props.className = "highlight highlight-red";

                                        return props
                                    }}

                                    weekDays={
                                        [
                                            ["شنبه", "Sat"],
                                            ["یکشنبه", "Sun"],
                                            ["دوشنبه", "Mon"],
                                            ["سه شنبه", "Tue"],
                                            ["چهارشنبه", "Wed"],
                                            ["پنجشنبه", "Thu"],
                                            ["جمعه", "Fri"],
                                        ]
                                    }

                                    calendar={persian}
                                    locale={persian_fa}>
                                    <button onClick={()=>{setDataPicker("")}}>
                                        ریست
                                    </button>
                                </DatePicker>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">دسته بندی</label>
                                <FormControl sx={{width: '100%'}} size="small">
                                    <Select
                                        className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full">
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">برند</label>
                                <input type="text" id="default-input"
                                       className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">آدرس فروشگاه</label>
                                <textarea id="default-input"
                                          className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">توضیحات</label>
                                <textarea id="default-input"
                                          className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5"/>
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions className="gap-3" style={{justifyContent: "center"}}>
                    <button className='bg-[#83b230] hover:opacity-80 py-2 px-5 rounded-2xl'
                            onClick={handleClose}>افزودن
                    </button>
                    <button className='bg-red-500 hover:opacity-80 py-2 px-5 rounded-2xl' onClick={handleClose}>بستن
                    </button>
                </DialogActions>
            </Dialog>

        </>
    );
}

export default AddProducts