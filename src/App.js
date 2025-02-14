import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/Home/MainPage/MainPage";
import Dashboard from "./Components/User Dashboard/Dashboard";
import AddProducts from "./Components/User Dashboard/Pages/AddProducts";
import { ToastContainer } from "react-toastify";
import MainLogin from "./Components/Home/Login/MainLogin";
import MainShop from "./Components/Home/Shop/MainShop";
import ContactUs from "./Components/Home/ContactUs/CountactUs";
import AboutUs from "./Components/Home/AboutUs/AboutUs";
import EditProfile from "./Components/User Dashboard/Pages/EditProfile";
import 'react-toastify/dist/ReactToastify.min.css';
import ProtectedRoute from "./Components/ProtectedRoute";
import ProductDetails from "./Components/Home/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
            <Route path="add-product" element={<ProtectedRoute><AddProducts /></ProtectedRoute>} />
            <Route path="edit-profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
          </Route>
          <Route path="/login" element={<MainLogin />} />
          <Route path="/shop" element={<MainShop />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"/>
    </>
  );
}

export default App;
