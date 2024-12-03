import { Fragment, useEffect, useState } from "react";
import ApiServices, { BASE_URL } from "../ApiServices";
import Moment from "react-moment"
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
   
   
   export default function UserViewProduct(){
   const [data,setData]=useState([])

   const param=useParams()
   const c_id=param.id

useEffect(
    ()=>{
     
  
       // console.log("btn")
   getData()

   },[]
   )
   
       const getData=()=>{

        let data={
          status:true
        }
        if(!!c_id){
          data.subcategoryId=c_id
        }

           ApiServices.allproduct(data)
           .then((res)=>{
               console.log(res)
               setData(res.data.data)
           })
           .catch((err)=>{
               console.log(err)
   
           })
   
       }

       const cart=(categoryId,subcategoryId,productId)=>{

        let data={
          categoryId:categoryId,
          subcategoryId:subcategoryId,
          productId:productId,
          userId:sessionStorage.getItem("user_id"),
          quantity:1
        }
        console.log(data)
        ApiServices.addcart(data)
        .then((res)=>{
          if(res.data.success==true){
            toast.success(res.data.message)

          }
          else{
            toast.error(res.data.message)
          }
        })
        .catch((err)=>{
          console.log(err)
        })
       
       }
   
       return(
           <>
             <div className="page-head_agile_info_w3l">
    <div className="container">
      <h3>
        About <span>Us </span>
      </h3>
      {/*/w3_short*/}
      <div className="services-breadcrumb">
        <div className="agile_inner_breadcrumb">
          <ul className="w3_short">
            <li>
              <a href="index.html">Home</a>
              <i>|</i>
            </li>
            <li>About</li>
          </ul>
        </div>
      </div>
      {/*//w3_short*/}
    </div>
  </div>
<div className="container">
<div className="row" style={{marginTop:"10vh", marginBottom:"10vh"}}>
           {data?.map(
             (el,index)=>(
               <Fragment>
              
               <div className="col-md-3 product-men">
          
                 <div className="men-pro-item simpleCart_shelfItem">
                     <div className="men-thumb-item">
                     <img src={BASE_URL  +el.productImage} alt="" className="pro-image-front"  style={{height:"300px", width:"300px"}} />
                     <img src={ BASE_URL +el.productImage} alt="" className="pro-image-back"  style={{height:"300px", width:"300px"}} />
   
                   <div className="men-cart-pro">
                     <div className="inner-men-cart-pro">
                       <a href="#"className="link-product-add-cart">
                         Quick View
                       </a>
                     </div>
                   </div>
   
                   <span className="product-new-top">New</span>
                 </div>
                 <div className="item-info-product ">
   
                   <h4>
                     <a href="/skincare">{el.productName}</a>
                   </h4>
   
                   <div className="info-product-price">
                     <span className="item_price">$120.99</span>
                     <del>$189.71</del>
                     
                   </div>
                 
                         
                         <button className="btn btn-info" onClick={
                          ()=>{
                            cart(el?.categoryId?._id, el?.subcategoryId?._id, el?._id)
                          }
                         }>
                         <Link to={"/allcart"}> Add to Cart</Link>
                         </button>


                       
                       
                 </div>
               </div>
             </div>
             </Fragment>
             )
           )}
           </div>
           </div>
           </>
       )
   }
   
   