import { useEffect, useState } from "react"
import ApiServices, { BASE_URL } from "../../ApiServices"
import { useParams ,useNavigate} from "react-router-dom"
import { toast } from "react-toastify"


export default function EditProduct(){
    const [name,setName]=useState("")
    const [brand,setBrand]=useState("")
    const [image,setImage]=useState({})
    const [imageName,setImageName]=useState("")
    const [previousImg,setPreviousImg]=useState("")
    const [price,setPrice]=useState("")
const param=useParams()
const id=param.id

useEffect(()=>{
    let data={
        _id:id
    }
    ApiServices.singleproduct(data)
    .then((res)=>{
        console.log(res);
        setName(res.data.data.productName)
        setPreviousImg(res.data.data.productImage)
    })
    .catch((err)=>{
        console.log(err)
    })
},[]
)

const nav=useNavigate()

const handleForm=(e)=>{
    e.preventDefault()
    let data=new FormData()
    data.append("productName",name)
    data.append("_id",id)

    if(!!imageName){
        data.append("productImage",image)
    }
    ApiServices.updateproduct(data)
    .then((res)=>{
        if(res.data.success==true)
        {
            toast.success(res.data.message)
            nav("/manageproduct")
        }else{
            toast.error(res.data.message)
        }
    })
    .catch((err)=>{
        toast.error("something went wrong")
    })


}

    return(
        <>
             <h1>Edit Product</h1>
        <br/>
            <form onSubmit={handleForm}>
                <label> Name</label>
                <input value={name}  onChange=
                {
                    (e)=>{
                    setName(e.target.value)}}/>
                <br/>
                <br/>
                <label>Brand</label>
                <input value={brand}  onChange=
                {
                    (e)=>{
                    setBrand(e.target.value)}}/>
                <br/>
                <br/>
                <label> Category</label>
                <select> 

                    <option>select</option>
                    <option>Men</option>
                    <option>Women </option>
                    <option>Baby </option>
                </select>
                <br/>
                <br/>
                <label> Sub Category</label>
                <select> 

                    <option>select</option>
                    <option>Makeup</option>
                    <option>Hair Care</option>
                    <option>Skin Care</option>
                    <option>Fragrance</option>
                </select>
                <br/>
                <br/>

                <img src={BASE_URL+previousImg} style={{height:"100px",width:"100px"}}/>

                <label> Image</label>
                <input type="file" value={imageName} onChange={
                    (e)=>{
                        setImageName(e.target.value)
                        setImage(e.target.files[0])
                    }
                }/>
                <br/>
                <br/>
                <label> Price</label>
                <input value={price} onChange={
                    (e)=>{
                        setPrice(e.target.value)
                    }
                }/>
                <br/>
                <br/>
                <button>Submit</button>
            </form>
        </>
    )
}