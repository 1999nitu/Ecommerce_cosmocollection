import './App.css';
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Master from './Components/Layouts/Master';
import Contact from './Components/Pages/Contact';
import Mens from './Components/Pages/Mens';
import About from './Components/Pages/About';
import Womens from './Components/Pages/Womens';
import Home from './Components/Pages/Home';
import Error from './Components/Layouts/Error';

import AddCategory from './Components/Admin/Category/AddCategory';
import ManageCategory from './Components/Admin/Category/ManageCategory';
import EditCategory from './Components/Admin/Category/EditCategory';
import ViewSingleCategory from './Components/Admin/Category/ViewSingleCategory';

import AddSubCategory from './Components/Admin/SubCategory/AddSubCategory';
import ManageSubCategory from './Components/Admin/SubCategory/ManageSubCategory';
import EditSubCategory from './Components/Admin/SubCategory/EditSubCategory';
import ViewSingleSubCategory from './Components/Admin/SubCategory/ViewSingleSubCategory';

import AddProduct from './Components/Admin/Product/AddProduct';
import EditProduct from './Components/Admin/Product/EditProduct';
import ManageProduct from './Components/Admin/Product/ManageProduct';
import ViewSingleProduct from './Components/Admin/Product/ViewSingleProduct';


import AddCoupon from './Components/Admin/Coupons/AddCoupon';
import ManageCoupon from './Components/Admin/Coupons/ManageCoupon';
import ViewSingleCoupon from './Components/Admin/Coupons/ViewSingleCoupon';
import EditCoupon from './Components/Admin/Coupons/EditCoupon';

import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import ApiServices from './Components/ApiServices';

import UserViewSubCategory from './Components/User/UserViewSubCategory';
import UserViewProduct from './Components/User/UserViewProduct';
import UserViewCoupon from './Components/User/UserViewCoupon';
import UserViewCategory from './Components/User/UserViewCategory';

import UserLogin from './Components/User/UserLogin';
import AllCart from './Components/User/AllCart';
import ViewOrder from './Components/Admin/Orders/ViewOrder';
import UpdateOrder from './Components/Admin/Orders/UpdateOrder';
import AdminOrder from './Components/Admin/Orders/AdminOrder';
import ViewOrderDetails from './Components/Admin/Orders/ViewOrderDetails';

import UserOrder from './Components/User/UserOrder';
import AdminLayout from './Components/Admin/Adminpage/AdminLayout';
import Dashboard from './Components/Admin/Adminpage/Dashboard';

function App() {
 //npm i react-router-dom

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Master/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/womens' element={<Womens/>}/>

        <Route path='/*' element={<Error/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/userviewsubcategory/:id' element={<UserViewSubCategory/>}/>
        <Route path='/userviewproduct/:id' element={<UserViewProduct/>}/>
        <Route path='/userviewproduct' element={<UserViewProduct/>}/>
        <Route path='/userviewcoupon' element={<UserViewCoupon/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/userviewcategory' element={<UserViewCategory/>}/>
        <Route path='/allcart' element={<AllCart/>} />
        <Route path='/userorder' element={<UserOrder/>} />
        </Route>
      

        <Route path='/admin' element={<AdminLayout/>}>

        <Route path='/admin/addcategory' element={<AddCategory/>}/>
        <Route path='/admin/managecategory' element={<ManageCategory/>}/>
        <Route path='/admin/editcategory/:id' element={<EditCategory/>}/>
        <Route path='/admin/singlecategory/:id' element={<ViewSingleCategory/>}/>

        <Route path='/admin/singlesubcategory/:id' element={<ViewSingleSubCategory/>}/>
        <Route path='/admin/managesubcategory' element={<ManageSubCategory/>}/>
        <Route path='/admin/addsubcategory' element={<AddSubCategory/>}/>
        <Route path='/admin/editsubcategory/:id' element={<EditSubCategory/>}/>

        <Route path='/admin/singleproduct/:id' element={<ViewSingleProduct/>}/>
        <Route path='/admin/addproduct' element={<AddProduct/>}/>
        <Route path='/admin/manageproduct' element={<ManageProduct/>}/>
        <Route path='/admin/editproduct/:id' element={<EditProduct/>}/>

        <Route path='/admin/addcoupon' element={<AddCoupon/>}/>
        <Route path='/admin/singlecoupon/:id' element={<ViewSingleCoupon/>}/>
        <Route path='/admin/managecoupon' element={<ManageCoupon/>}/>
        <Route path='/admin/editcoupon/:id' element={<EditCoupon/>} />

        <Route path='/admin/vieworder' element={<ViewOrder/>}/>
        <Route path='/admin/updateorder' element={<UpdateOrder/>}/>
        <Route path='/admin/vieworderdetails' element={<ViewOrderDetails/>}/>
        <Route path='/admin/adminorder' element={<AdminOrder/>}/>

        <Route path='/admin/adminlayout' element={<AdminLayout/>}/>
        <Route path='/admin/adminheader' element={<AdminHeader/>}/>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>

        <Route path='/apiservices' element={<ApiServices/>}/> 
        </Route>

        </Routes>
      <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
        </BrowserRouter>
      );
    }

export default App;
