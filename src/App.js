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
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/dashboard" element={<Dashboard />}>
            <Route path="editprofile" element={<EditProfile />} />
          </Route>
          <Route path="/login" element={<MainLogin />} />
          <Route path="/shop" element={<MainShop />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
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
        theme="colored"
      />
    </>
  );
}

export default App;
