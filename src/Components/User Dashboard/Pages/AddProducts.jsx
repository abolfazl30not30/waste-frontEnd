import React, {useEffect, useState} from 'react';
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
import {RiFileUploadFill} from "react-icons/ri";
import {MdDelete} from "react-icons/md";
import {toast} from 'react-toastify';
import ReactLoading from 'react-loading';
import * as yup from "yup";
import api from "../../../Api/api";
import axios from "axios";

function AddProducts() {
    const [openAddProduct, setOpenAddProduct] = useState(false);
    const [openDeleteProduct, setOpenDeleteProduct] = useState(false);
    const [dataPicker, setDataPicker] = useState()
    const [isUpload, setIsUpload] = useState(false);
    const [uploadLoading, setUploadLoading] = useState(false);
    const [deleteLoading, setdeleteLoading] = useState(false);
    const [productImage, setProductImage] = useState();
    const [category, setCategory] = useState([{value: "", name: ""}]);
    const [listOfproducts, setListOfProducts] = useState([])
    const [product, setProduct] = useState(
        {
            title: "",
            price: "",
            discount: "",
            count: "",
            expirationDate: "",
            category: "",
            brand: "",
            description: "",
            pictureUrl: "",
            unitPrice: "تومان",
        }
    )

    const getAllProducts = async () => {
        const res = await api.get("product/specificProduct")
        setListOfProducts(res);

    }

    useEffect(() => {
        getAllProducts()
    }, [])

    const handleDateInput = (value) => {
        setDataPicker(value)
        let month = value.month < 10 ? ('0' + value.month) : value.month;
        let day = value.day < 10 ? ('0' + value.day) : value.day;
        let convertDate = value.year + '/' + month + '/' + day;
        setProduct((pro) => ({...pro, expirationDate: convertDate}))
    }

    const handleClickOpen = async () => {
        await axios.get("http://localhost:8090/api/v1/product/categories").then((res) => {
            setCategory(res.data)
        }).catch((error) => {
            toast.error("خطا در سیستم", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        });
        setOpenAddProduct(true);


    };

    const handleClose = () => {
        setOpenAddProduct(false);
        resetProductState()
    };

    const handleDeleteClickOpen = () => {
        setOpenDeleteProduct(true);
    };

    const handleDeleteClose = () => {
        setOpenDeleteProduct(false);
    };

    const handleInputFile = async (event) => {
        setProductImage(event.target.files[0])
    }

    const resetProductState = () => {
        setProduct({
            title: "",
            price: "",
            discount: "",
            count: "",
            expirationDate: "",
            category: "",
            brand: "",
            description: "",
            pictureUrl: "",
            unitPrice: "تومان",
        })
        setDataPicker("")
        setIsUpload(false)
        setProductImage("")
    }

    const validation = async () => {
        const productSchema = yup.object().shape({
            title: yup.string().required("لطفا عنوان کالا را وارد کنید"),
            price: yup.string().required("لطفا قیمت کالا را وارد کنید"),
            discount: yup.string().required("لطفا درصد تخفیف کالا را وارد کنید"),
            count: yup.string().required("لطفا تعداد کالا را وارد کنید"),
            expirationDate: yup.string().required("لطفا تاریخ انقضا کالا را وارد کنید"),
            category: yup.string().required("لطفا دسته بندی کالا را انتخاب کنید"),
            brand: yup.string().required("لطفا برند کالا را وارد کنید"),
            description: yup.string().required("لطفا توضیحات را وارد کنید"),
            pictureUrl: yup.string().required("لطفا عکس کالا را آپلود کنید"),
            unitPrice: yup.string().required("لطفا واحد قیمت را وارد کنید"),
        })

        try {
            return await productSchema.validate(product, {abortEarly: false})
        } catch (error) {
            toast.info(error.errors[0], {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    const handleUpload = async (event) => {
        setUploadLoading(true)
        let formData = new FormData();
        formData.append('file', event.target.files[0]);

        await axios.post("http://localhost:8090/api/v1/file/upload", formData).then((res) => {
            setProduct((pro) => ({...pro, pictureUrl: res.data}))
            setProductImage(event.target.files[0]);
            toast.success('آپلود با موفقیت انجام شد', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            setIsUpload(true)
        }).catch((error) => {
            console.log(error)
            toast.error("فایل آپلود نشد", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            setIsUpload(false)
        });
        setUploadLoading(false)

    }

    const handleDeleteFile = () => {
        setIsUpload(false)
    }
    const handleSubmit = async () => {
        const valid = await validation();
        if (valid !== undefined) {
            const res = await api.post("product", product)
            if (res) {
                toast.success('کالا با موفقیت ثبت شد', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
                getAllProducts()
            }
            handleClose()
        }
    }
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
                                <th scope="col">شماره</th>
                                <th scope="col">محصول</th>
                                <th scope="col"></th>
                                <th scope="col">قیمت</th>
                                <th scope="col">درصد تخفیف</th>
                                <th scope="col">دسته بندی</th>
                                <th scope="col">تعداد</th>
                                <th scope="col">تاریخ انقضا</th>
                                <th scope="col">برند</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                listOfproducts?.map((product, index) => (
                                    <tr>
                                        <td className="trash">
                                            <div className='remove cursor-pointer'>
                                                {index + 1}
                                            </div>
                                        </td>
                                        <td className="product-thumbnail">
                                            <Link to={`/product-details/${product.id}`}>
                                                <img src={product.pictureUrl} alt="Image"/>
                                            </Link>
                                        </td>

                                        <td className="product-name">
                                            <Link to="">{product.title}</Link>
                                        </td>

                                        <td className="product-price">
                                            <span className="unit-amount">{product.price}</span>
                                        </td>

                                        <td className="product-price">
                                            <span className="unit-amount">{product.discount}</span>
                                        </td>

                                        <td className="product-subtotal">
                                            <span className="subtotal-amount">{product.category}</span>
                                        </td>

                                        <td className="product-subtotal">
                                            <span className="subtotal-amount">{product.count}</span>
                                        </td>
                                        <td className="product-subtotal">
                                            <span className="subtotal-amount">{product.expirationDate}</span>
                                        </td>
                                        <td className="product-subtotal">
                                            <span className="subtotal-amount">{product.brand}</span>
                                        </td>
                                    </tr>))
                            }
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
                                <input value={product.title} onChange={(e) => {
                                    setProduct((pro) => ({...pro, title: e.target.value}))
                                }} type="text" id="default-input"
                                       className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">قیمت</label>
                                <input value={product.price} onChange={(e) => {
                                    setProduct((pro) => ({...pro, price: e.target.value}))
                                }} type="number" id="default-input"
                                       className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">درصد تخفیف</label>
                                <input value={product.discount} onChange={(e) => {
                                    setProduct((pro) => ({...pro, discount: e.target.value}))
                                }} type="number" id="default-input"
                                       className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">تعداد</label>
                                <input value={product.count} onChange={(e) => {
                                    setProduct((pro) => ({...pro, count: e.target.value}))
                                }} type="number" id="default-input"
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
                                    onChange={(value) => {
                                        handleDateInput(value)
                                    }}
                                    mapDays={({date}) => {
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
                                    <button onClick={() => {
                                        setDataPicker("")
                                    }}>
                                        ریست
                                    </button>
                                </DatePicker>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">دسته بندی</label>
                                <FormControl sx={{width: '100%'}} size="small">
                                    <Select
                                        value={product.category}
                                        onChange={(e) => {
                                            setProduct((pro) => ({...pro, category: e.target.value}))
                                        }}
                                        className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full">
                                        {
                                            category?.map((cate) => (
                                                <MenuItem value={cate.value}>{cate.name}</MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">برند</label>
                                <input value={product.brand} onChange={(e) => {
                                    setProduct((pro) => ({...pro, brand: e.target.value}))
                                }} type="text" id="default-input"
                                       className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-sm font-medium text-neutral-600">توضیحات</label>
                                <textarea value={product.description} onChange={(e) => {
                                    setProduct((pro) => ({...pro, description: e.target.value}))
                                }} id="default-input"
                                          className="bg-[#e4e9ed] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-700 focus:border-neutral-700 block w-full p-2.5"/>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="default-input"
                                   className="block mb-2 text-sm font-medium text-neutral-600">آپلود عکس کالا</label>
                            <div>
                                {!isUpload ? (
                                    !uploadLoading ? (
                                        <div>
                                            <input className="form-control form-control " id="formFileLg" type="file"
                                                   onChange={(e) => {
                                                       handleUpload(e)
                                                   }}/>
                                        </div>
                                    ) : (
                                        <div className="d-flex align-item-start">
                                            <ReactLoading type="cylon" color="#bdc3c7" className="submitLoading"
                                                          height={1}
                                                          width={45}/>
                                        </div>
                                    )
                                ) : (
                                    <div
                                        className="flex justify-content-between border border-1 border-neutral-400 rounded-xl p-3"
                                        style={{marginTop: '-2px'}}>
                                        <button onClick={handleDeleteFile}><MdDelete
                                            className="text-red-600 hover:text-red-400" fontSize="25px"/></button>
                                        <div className="d-flex align-items-center">
                                            <h6 className="mx-1">{productImage && (productImage.name)}</h6>
                                            <RiFileUploadFill className="text-[#83b230] text-2xl"/>
                                        </div>
                                    </div>
                                )
                                }
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions className="gap-3" style={{justifyContent: "center"}}>
                    <button className='bg-[#83b230] hover:opacity-80 py-2 px-5 rounded-2xl'
                            onClick={handleSubmit}>افزودن
                    </button>
                    <button className='bg-red-500 hover:opacity-80 py-2 px-5 rounded-2xl' onClick={handleClose}>بستن
                    </button>
                </DialogActions>
            </Dialog>

        </>
    );
}

export default AddProducts