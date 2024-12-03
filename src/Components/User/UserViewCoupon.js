import axios from "axios"
import { useState,Fragment, useEffect } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import ApiServices from "../ApiServices"

export default function UserViewCoupon(){
const [data,setData]=useState([])

    // useEffect(fn,[dependancy])
    useEffect(
        ()=>{
        // console.log("btn")
    getData()
    },[]
    )

        const getData=()=>{
            ApiServices.allcoupon(data)
            .then((res)=>{
                // console.log(res)
                setData(res.data.data)
            })
            .catch((err)=>{
                console.log(err)

            })

        }


    const deleteData=(id)=>{
        console.log("deleted",id)
        let data={
            _id:id
            
        }
        ApiServices.deletecoupon(data)
        .then((res)=>{
            if(res.data.success){
                toast.success(res.data.message)
                getData(res.data.data)
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
            <h1>All Coupon Loaded</h1><br/>
            
           <div className="container table-responsive">
            <table className="table table-striped table-hover table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th> Sno</th>
                        <th>Coupon</th>
                        <th>Discount</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Off Value</th>
                        <th> Status</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map(
                        (el,index)=>
                        (
                            <tr>
                                <td>{index+1}</td>
                                <td>{el.coupon}</td>
                                <td>{el.discount}</td>
                                <td>{el.couponType}</td>
                                <td>{el.amount}</td>
                                <td>{el.offvalue}</td>
                                <td>{el.status.toString()}  {el.status==true?"Active":"In-active"} </td>
                                <td>
                                    <Link to={"/singlecoupon/" +el._id} 
                                        className="btn btn-info"> 
                                        <i className="fa fa-eye"></i>
                                    </Link>
                                </td>
                               
                            </tr>
                        )
                    )}
                </tbody>
            </table>
            </div>
        </>
        
    )
}

