import { Fragment, useEffect, useState } from "react";
import ApiServices, { BASE_URL } from "../ApiServices";
import Moment from "react-moment"
import { Link, useParams } from "react-router-dom";


export default function UserViewSubCategory(){
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

      }
      if(!!c_id){
        data.categoryId=c_id
      }

        ApiServices.allsubcategory(data)
        .then((res)=>{
            console.log(res)
            setData(res.data.data)
        })
        .catch((err)=>{
            console.log(err)

        })

    }

    return(
        <>

        
<div className="container">
<div className="row" style={{marginTop:"10vh", marginBottom:"10vh"}}>

        {data?.map(
          (el,index)=>(
            <Fragment>
           
            <div className="col-md-3 product-men">
       
              <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                  <img src={BASE_URL  +el.subcategoryImage} alt="" className="pro-image-front"  style={{height:"300px", width:"300px"}} />
                  <img src={ BASE_URL +el.subcategoryImage} alt="" className="pro-image-back"  style={{height:"300px", width:"300px"}} />

                <div className="men-cart-pro">
                  <div className="inner-men-cart-pro">
                  <Link to={"/userviewproduct/" +el?._id} className="link-product-add-cart">
                    Quick View
                    
                    </Link>
                  </div>
                </div>

                <span className="product-new-top">New</span>
              </div>
              <div className="item-info-product ">

                <h4>
                  <a href="/skincare">{el.subcategoryName}</a>
                </h4>

                <div className="info-product-price">
                  <span className="item_price">$120.99</span>
                  <del>$189.71</del>
                </div>
              
              <Link to={"/userviewproduct/" +el?._id} className="btn btn-success">View More</Link>
                    
               
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

