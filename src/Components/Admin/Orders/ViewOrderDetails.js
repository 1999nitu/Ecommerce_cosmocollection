import { useEffect, useState } from "react";
import { Link,useParams,useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import ApiServices, { BASE_URL } from "../../ApiServices";

export default function ViewOrderDetails(){
    const [loading,setLoading]=useState(true)
    const override={
        
        "display":"block",
        margin:"0 auto",
        "zIndex":"1",
    }
    const userType=sessionStorage.getItem('userType')
    const [orders,setOrders]=useState()
    const {id}=useParams()
    useEffect(()=>{
        if(userType==2 || userType=="2"){
            var data={
                orderId:id
            }
        }
        ApiServices.vieworder(data).then((data)=>{
            setOrders(data.data.data)
            setTimeout(()=>{
                setLoading(false)
            },1000)
        }).catch((error)=>{
            console.log(error)
            toast.error("Something went wrong!!")
             setTimeout(()=>{
                setLoading(false)
            },1000)
        })
    },[loading])
    const authenticate=sessionStorage.getItem("authenticate")
    const nav=useNavigate()
    useEffect(()=>{
        if(!authenticate){
            sessionStorage.setItem("message","Please login First")
            nav("/login")
        }
    },[])
    return(
        <>
        <div className="page-head_agile_info_w3l">
                <div className="container">
                    <h3>
                    Manage <span>Orders </span>
                    </h3>
                    <div className="services-breadcrumb">
                    <div className="agile_inner_breadcrumb">
                        <ul className="w3_short">
                        <li>
                            <Link to={"/admin"}>Home</Link>
                            <i>|</i>
                        </li>
                        <li>Orders</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center my-5">
                <ClipLoader loading={loading} cssOverride={override} size={120}/>
            </div>     
                 <div className={loading?"disabled-screen":""}>
         
            <div className="container my-5 table-responsive">
                <table className="table table-hover table-bordered table-striped ">
                    <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Product Name</th>
                        <th> Address</th>
                        <th> Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders?.map((el,index)=>(
                        <tr key={index+1}>

                            <td>{index+1}</td>
                            <td>{el.quantity}</td>
                            <td>&#8377;{el?.price*el.quantity}</td>
                            <td>{el?.productId?.productName}</td>
                            <td>{el?.address}</td>
                            <th>{el?.orderStatus==1?"Placed":el?.orderStatus==2?"Confirmed":el?.orderStatus==3?"Shipped":el?.orderStatus==4?"Delivered":"Cancelled"}</th>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}