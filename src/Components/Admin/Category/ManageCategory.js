import axios from "axios"
import { useState,Fragment, useEffect } from "react"
import { Link } from "react-router-dom"
import ApiServices from "../../ApiServices"
import { toast } from "react-toastify"
import Moment from "react-moment"
import Modal from 'react-modal';
import { BarLoader } from "react-spinners"

export default function ManageCategory(){
const [data,setData]=useState([])
const [isModalOpen,setIsModalOpen]=useState(false)

    // useEffect(fn,[dependancy])
    useEffect(
        ()=>{
        // console.log("btn")
    getData()
    },[]
    )

        const getData=()=>{
            ApiServices.allcategory(data)
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
        ApiServices.DeleteCategory(data)
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
const changeStatus=(id,status)=>{
    // console.log("btn clicked",id,!status);
    let data={
        _id:id,
        status:!status
    }
    console.log(data);
    ApiServices.DeleteCategory(data)
    .then((res)=>{
        if(res.data.success)
            {
                toast.success(res.data.message)
                getData()
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
            <h1>All Category Loaded</h1><br/>
            
           <div className="container table-responsive">
            <table className="table table-striped table-hover table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th> Sno</th>
                        <th> Name</th>
                        <th> Image</th>
                        <th>Modal</th>
                        <th> Status</th>
                        <th>View</th>
                        <th>Edit</th>
                        <th>CreatedAt</th>
                        <th>Change Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map(
                        (el,index)=>
                        (
                            <tr>
                                <td>{index+1}</td>
                                <td>{el.categoryName}<br/>
                                {el._id}
                                </td>
                                <td>
                                    <img src={"http://localhost:4000/" +el.categoryImage} style={{height:"100px", width:"100px"}}/>
                                </td>
                                <td>
                                    <button onClick={()=>{setIsModalOpen(true)}}>Show</button>
                                </td>
                                <td>{el.status.toString()}
                                <br/>
                                {el.status==true?"Active":"In-active"}
                                </td>
                                <td>
                                    <Link to={"/admin/singlecategory/" +el._id}
                                    className="btn btn-info">
                                        <i className="fa fa-eye"></i>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={"/admin/editcategory/" +el._id}
                                    className="btn btn-success">
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                </td>
                                <td>
                                    <Moment fromNow ago >{el.createdAt}</Moment>
                                    {/* format="MMMM/D/YYYY" */}
                                </td>
                                <td>
                                    <button className="btn btn-dark" onClick={
                                        ()=>{
                                            changeStatus(el._id, el.status)
                                        }
                                    }>Change Status</button>
                                </td>
                              
                              
                            </tr>
                        )
                    )}
                </tbody>
            </table>
           </div>
                <Modal isOpen={isModalOpen}>
                    <BarLoader/>
                    <h1>This is modal</h1>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-outline-danger my-2" onClick={()=>{setIsModalOpen(false)}}>X</button>

                    </div>
                    <input className="form-control"/>
                </Modal>

            {/* <button onClick={getData}>Get Data</button> */}

        </>
    )
}