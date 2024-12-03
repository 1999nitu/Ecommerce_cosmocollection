import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export default function admin1(){
    const [loading,setLoading]=useState(true)
    const override={
        
        "display":"block",
        margin:"0 auto",
        "zIndex":"1",
    }
    const [orders,setOrders]=useState()
    const {id}=useParams()
    useEffect(()=>{
        let data={
            userId:sessionStorage.getItem("user_id")
        }
        ApiServices.getorder(data).then((res)=>{
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
    },[loading])
    const token=sessionStorage.getItem("token")
    const nav=useNavigate()
    useEffect(()=>{
        if(!token){
            sessionStorage.setItem("message","Please login First")
            nav("/login")
        }
    },[])

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
               
                  
            </div>
        </div>
  
        <div>
      <h1>Admin Orders</h1>
      <ul>
        {orders?.map((el) => (
          <li key={el?.productId}>
            <div>{el?.orderDetails}</div>
            <div>Status: {el?.orderStatus}</div>
            {el?.orderStatus === 'placed' && (
              <div>
                <button onClick={() => updateStatus(el?.productId, 'approved')}>Approve</button>
                <button onClick={() => updateStatus(el?.productId, 'declined')}>Decline</button>
              </div>
            )}
            {el?.orderStatus === 'approved' && (
              <button onClick={() => updateStatus(el?.productId, 'shipped')}>Ship</button>
            )}
            {el?.orderStatus === 'shipped' && (
              <button onClick={() => updateStatus(el?.productId, 'delivered')}>Deliver</button>
            )}
          </li>
        ))}
      </ul>
    </div>

        </>
    )
}