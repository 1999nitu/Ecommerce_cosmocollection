import { useEffect, useState } from "react";
import { Link,useParams,useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import ApiServices, { BASE_URL } from "../../ApiServices";


export default function UserOrder(){
    const [loading,setLoading]=useState(true)
    const override={
        
        "display":"block",
        margin:"0 auto",
        "zIndex":"1",
    }
    const [orders,setOrders]=useState()
    useEffect(()=>{
      getOrder()
    },[loading])
    const getOrder=()=>{
      let data={
      }
      ApiServices.vieworder(data).then((res)=>{
          setOrders(res.data.data)
          setTimeout(()=>{
              setLoading(false)
          },1000)
      }).catch((err)=>{
          console.log(err)
          toast.error("Something went wrong!!")
           setTimeout(()=>{
              setLoading(false)
          },1000)
      })
  }
    const token=sessionStorage.getItem("token")
    const nav=useNavigate()
    useEffect(()=>{
        if(!token){
            sessionStorage.setItem("message","Please login First")
            nav("/login")
        }
    },[])
    const updateStatus=(id,status)=>{
      let data={
        _id:id,
        orderStatus:status

      }
      ApiServices.updateorder(data).then((res)=>{
        toast.success("Data updated")
          getOrder()
      })
      .catch((err)=>{
        console.log(err)
        toast.error("Something went wrong!!")
      })
      //yha update order ki api lga lena
    }
    return(
        <>
        <div className="page-head_agile_info_w3l">
                <div className="container">
                    <h3>
                    User <span>Orders </span>
                    </h3>
                    <div className="services-breadcrumb">
                    <div className="agile_inner_breadcrumb">
                        <ul className="w3_short">
                        <li>
                            <Link to={"/"}>Home</Link>
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
                        <th>Order Date</th>
                        <th>Total Price</th>
                        <th>Order Details</th>
                        <th>Address </th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders?.map((el,index)=>(
                        <tr key={index+1}>
                            <td>{index+1}</td>
                            <td>{el?.createdAt}</td>
                            <td>&#8377;{el?.totalPrice}</td>
                            <td>
                                <ul>
                                    {el?.orderDetails?.map((el,index)=>(
                                        <li className="my-2">
                                            <img src={BASE_URL+el?.productId?.productImage} style={{height:"50px",width:"50px"}}/>
                                            {el?.productId?.productName}({el?.quantity})</li>
                                    ))}
                                </ul>
                            </td>
                            <td>{el?.address}</td>
                            <td>{el?.orderStatus==1?"Placed":el?.orderStatus==2?"Confirmed":el?.orderStatus==3?"Shipped":el?.orderStatus==4?"Delivered":el?.orderStatus==5?"Cancelled":""}</td>
                            <td>
                            {el?.orderStatus ==1 && 
                                <div>
                                  <button onClick={() => updateStatus(el?._id, 2)}>Approve</button>
                                  <button onClick={() => updateStatus(el?._id, 5)}>Decline</button>
                                </div>
                              }
                              {el?.orderStatus == 2 && (
                                <button onClick={() => updateStatus(el?._id, 3)}>Ship</button>
                              )}
                              {el?.orderStatus == 3 && (
                                <button onClick={() => updateStatus(el?._id, 4)}>Deliver</button>
                              )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
