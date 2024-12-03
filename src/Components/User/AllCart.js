import { useEffect, useState } from "react"
import ApiServices, { BASE_URL } from "../ApiServices"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export default function AllCart(){

    var total=0;

    const [cart,setCart]=useState([])
    const [name,setName]=useState([])
    const [address,setAddress]=useState([])
    const nav=useNavigate()
    //next create a component userorder with a rout and show user order data in that in the form of table and also admin k page par data show kro
    useEffect(
        ()=>{
        // console.log("btn")
       getData()
    },[]
    )

const getData=()=>{
    let data={
        userId:sessionStorage.getItem("user_id")
    }
    ApiServices.allcart(data)
    .then((res)=>{
        setCart(res.data.data)
        console.log("data",res)
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
    
        ApiServices.deletecart(data)
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

    const handleForm=(e)=>{
        e.preventDefault()
        let productarray=cart.map((el)=>{
            return {
                userId:sessionStorage.getItem("userId"),
                productId:el.productId._id,
                categoryId:el.categoryId._id,
                subcategoryId:el.subcategoryId._id,
                productName:el.productId.productName,
                quantity:el.quantity,
                price:el.productId.price
            }
        })

            let data={
             name:name,
             address:address,
             totalPrice:total,
             orderDetails:productarray

            
            }
            console.log(data)
            ApiServices.orderplace(data)
            .then((res)=>{
              if(res.data.success==true){
                toast.success(res.data.message)
                nav("/userorder")
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
            <h1 >All Product Loaded</h1><br/>
            
            <div className="container table-responsive">
             <table className="table table-striped table-hover table-bordered">
                 <thead className="table-dark">
                     <tr>
                     <th> Sno</th>
                     <th> Name</th>
                     <th> Image</th>
                     <th> Quantity</th>
                     <th> Price</th>
                     <th>Delete</th>
                    
                     </tr>
                 </thead>
                 <tbody>
                     {cart?.map(
                         (el,index)=>{
                            total+=parseInt(el.productId?.quantity)*parseInt(el.productId?.price)
                            return(
                             <tr>
                                 <td>{index+1}</td>
                                 <td>{el.productId?.productName}<br/>
                                 {/* {el._id} */}
                                 </td>
                                 <td>
                                     <img src={BASE_URL +el.productId?.productImage} style={{height:"100px", width:"100px"}}/>
                                 </td>
                                 <td>{el.productId?.quantity}</td>
                                 <td>{el.productId?.price}</td>
                                
                                
                                 <td>
                                     <button className="btn btn-info"  onClick={
                                         ()=>{
                                             changeStatus(el._id, el.status)

                                         }
                                     }>
                                     <i class="bi bi-trash3-fill"></i>
                                     </button>
                                 </td>
                              
                             </tr>
                         )}
                     )}
                 </tbody>
             </table>
             <h5>Total is {total}</h5>
             {total>0 ?
             <form onSubmit={handleForm}>
                <label>Name</label>
                <input type="text" name="Name" required="" value={name} onChange={(e)=>{setName(e.target.value)}} />
                     <br/>
                <br/>

                <label>Address</label>
                <input type="text" name="Address" required="" value={address} onChange={(e)=>{setAddress(e.target.value)}} />
                <br/>
                <br/>
                
                <button>Place Order</button>

             </form>
                : "Cart is empty"}
             </div>
        </>
    )
}