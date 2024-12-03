// import { useEffect, useState } from "react"
// import ApiServices from "../ApiServices"
// import { toast } from "react-toastify"

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import ApiServices from "../../ApiServices";

// export default function ViewOrder(){
//     const [data,setData]=useState([])

//     useEffect(
//         ()=>{
//             getData()
//     },[]
//     )

//     const getData=()=>{
//         ApiServices.vieworder(data)
//         .then((res)=>{
//             setData(res.data.data)
//             console.log("data",res)
//         })
//         .catch((err)=>{
//         console.log(err)

//         })}
//     const changeStatus=(id,status)=>{
//         let data={
//             _id:id,
//             orderStatus:status

//         }
//         ApiServices.orderstatus(data)
//         .then((res)=>{
//             if(res.data.success)
//                 {
//                     toast.success(res.data.message)
//                     getData()
//                 }
//                 else{
//                     toast.error(res.data.message)
//                 }

//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     }

// const approved=(id,status)=>{
//     let data={
//         _id:id,
//         orderStatus:status

//     }
//     ApiServices.orderplace(data)
//     .then((res)=>{
//         if(changeStatus=2)
//             {
//                 approved()
//             }
//             else{
//                 toast.success(res.data.message)
//             }
//     })
// }
    
//     return(
//         <>
//             <h1><center>View All Orders </center></h1><br/>
//             <div className="container table-responsive">
//              <table className="table table-striped table-hover table-bordered">
//                  <thead className="table-dark">
//                      <tr>
//                      <th> Sno</th>
//                      <th> User Details</th>
//                      <th> Total Price</th>
//                      <th> Status</th>
//                      <th> Address</th>
//                     <th>Action</th>
//                      </tr>
//                  </thead>
//                  <tbody>
//                      {data?.map(
//                          (el,index)=>
//                             (
//                              <tr>
//                                  <td>{index+1}</td>
//                                  <td>{el.name}{el.address}</td>
//                                  <td> {el.totalPrice}</td>
//                                  <td>{el.status}</td>
//                                  <td>{el.address}</td>
//                                  <td>
//                                     <button className="btn btn-success" onClick={
//                                         ()=>{
//                                             changeStatus(el._id,2)
//                                     }}> Approve</button>
//                                     <br/><br/>
//                                  <button className="btn btn-danger" onClick={
//                                     ()=>{
//                                         changeStatus(el._id,5)
//                                     }
//                                  }>Decline</button></td>
//                                  <td>
//                                     <button className="btn btn-warning" onClick={
//                                         ()=>{
//                                             approved()
//                                         }
//                                     }>Shipped</button><br/><br/>

//                                     <button className="btn btn-success" onClick={
//                                         ()=>{
//                                             approved()
//                                         }
//                                         }>Delivered</button>
//                                 </td>
//                              </tr> 
//                          )
//                      )}
//                  </tbody>
//              </table><br/>
//            </div>
//         </>
//     )
// }


export default function ViewOrder(){
    const [loading,setLoading]=useState(true)
    const override={
        "display":"block",
        margin:"0 auto",
        "zIndex":"1",
    }
    const userType=sessionStorage.getItem('userType')
    const [orders,setOrders]=useState()
    useEffect(()=>{
        if(userType==2 || userType=="2"){
            var data={
                userId:sessionStorage.getItem("user_Id")

            }
        }
        ApiServices.vieworder(data)
        .then((data)=>{
            setOrders(data.data.data)
            setTimeout(()=>{
                setLoading(false)

            },1000)
        }).catch((err)=>{
            console.log(err)
            toast.err("something went wrong!!")
            setTimeout(()=>{
                setLoading(false)
            },1000)
        })
    },[loading])

    const cancelOrder=(id)=>{
        let data={
            orderStatus:5,
            _id:id
        }
        setLoading(true)
        ApiServices.updateorder(data).then((data)=>{
            if(data.data.success){
                toast.success(data.data.message)
                setLoading(false)
            }else{
                toast.error(data.data.message)
                setLoading(false)
            }
        }).catch((error)=>{
            console.log(error)
            toast.error("Something went wrong!!")
            setTimeout(()=>{
                setLoading(false)
            },1000)
        })
    }
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
                <table className="table table-hover table-striped table-bordered ">
                    <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Order Id</th>
                        <th>Total Amount</th>
                        <th>Address</th>
                        <th>Shipment Url</th>
                        <th>Tracking Id</th>
                        <th>Order Status</th>
                        <th>Actions</th>
                        {/* <th>Delete</th> */}
                    </tr>
                    </thead>
                    <tbody>
                    {orders?.map((el,index)=>(
                        <tr key={index+1}>
                            <td>{index+1}</td>
                            <td><Link to={`/order-details/${el._id}`}>{el?.orderId}</Link></td>
                            <td>&#8377;{el?.amountTotal}</td>
                            <td>{el?.address}</td>
                            {el?.shipmentUrl?
                            <td>{el?.shipmentUrl}</td>:
                            <td>---</td>
                            }
                            {el?.trackingId?
                            <td>{el?.trackingId}</td>:
                            <td>---</td>
                            }
                            <th>{el?.orderStatus==1?"Placed":el?.orderStatus==2?"Confirmed":el?.orderStatus==3?"Shipped":el?.orderStatus==4?"Delivered":"Cancelled"}</th>
                            <th>
                                {userType==1 && el?.orderStatus!=5?
                                <Link to={`/admin/update_order/${el._id}`}>
                                    <button className="btn btn-info">Edit</button>
                                </Link>:
                                el?.orderStatus!=5 && el?.orderStatus!=3 && el?.orderStatus!=4?
                                    <button className="btn btn-danger" onClick={()=>{
                                        cancelOrder(el?._id)
                                    }}>Cancel</button>
                                :"---"
                                }
                            </th>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )

}



