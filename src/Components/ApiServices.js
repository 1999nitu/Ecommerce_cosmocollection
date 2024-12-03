import axios from "axios"
import * as qs from "qs"

export const BASE_URL ="http://localhost:4000/"
class ApiServices{

    allcategory()
    {
        return axios.post(BASE_URL+"apis/category/getall")
    }

    singlecategory(data)
    {
        return axios.post(BASE_URL+"apis/category/getsingledata",data)
    }

    updatecategory(data){
    let obj={
        Authorization:localStorage.getItem("token")
    }
    // console.log(obj)
    
        return axios.post(BASE_URL+"apis/category/update",data,{headers:obj})
        // JSON (Stringify)
        // qs (query string) for API
        
    }

    DeleteCategory(data)
    {
        let obj={
            Authorization:localStorage.getItem("token")
        }
        return axios.post(BASE_URL+"apis/category/softdelete",data,{headers:obj})

    }

    allsubcategory(data)
    {
        return axios.post(BASE_URL+"apis/subcategory/getall",data)
    }

    singlesubcategory(data)
    {
        return axios.post(BASE_URL+"apis/subcategory/getsingledata",data)
    }

    updatesubcategory(data){
        let obj={
            Authorization:localStorage.getItem("token")
        }
        // console.log(obj)
        
            return axios.post(BASE_URL+"apis/subcategory/update",data,{headers:obj})
            
        }

        deletesubcategory(data)
        {
            let obj={
                Authorization:localStorage.getItem("token")
            }
            return axios.post(BASE_URL+"apis/subcategory/softdelete",data,{headers:obj})
    
        }

   allproduct(data)
        {
            return axios.post(BASE_URL+"apis/product/getall",data)
        }

    singleproduct(data)
        {
            return axios.post(BASE_URL+"apis/product/getsingledata",data)
        }
    
    updateproduct(data){
            let obj={
                Authorization:localStorage.getItem("token")
            }
            // console.log(obj)
            
                return axios.post(BASE_URL+"apis/product/update",data,{headers:obj})
                
            }

    DeleteProduct(data)
                {
                let obj={
                    Authorization:localStorage.getItem("token")
                }
                return axios.post(BASE_URL+"apis/product/softdelete",data,{headers:obj})

    }
    allcoupon()
    {
        let obj={
            Authorization:localStorage.getItem("token")
        }
        return axios.post(BASE_URL+"apis/coupon/getall",{},{headers:obj})
    }

    singlecoupon(data)
    {
        let obj={
            Authorization:localStorage.getItem("token")
        }
        return axios.post(BASE_URL+"apis/coupon/getsingledata",data,{headers:obj})
    }

    updatecoupon(data){
        let obj={
            Authorization:localStorage.getItem("token")
        }
        // console.log(obj)
        
            return axios.post(BASE_URL+"apis/coupon/update",data,{headers:obj})
            
        }

      deletecoupon(data)
            {
            let obj={
                Authorization:localStorage.getItem("token")
            }
            return axios.post(BASE_URL+"apis/coupon/softdelete",data,{headers:obj})

    }

    login(data){
        return axios.post(BASE_URL+"apis/user/login",data)

    }

    register(data){
        return axios.post(BASE_URL+"apis/user/register",data)

    }


    
    addcoupon(){
        let obj={
            Authorization:localStorage.getItem("token")
        }
        return axios.post(BASE_URL+"apis/coupon/add",{},{headers:obj})

    }

    addcart(data){

        let obj={
            Authorization:localStorage.getItem("token")
        }
        return axios.post(BASE_URL+"apis/cart/add",data,{headers:obj})
    }

    allcart(data){
        let obj={
            Authorization:localStorage.getItem("token")
        }
        return axios.post(BASE_URL+"apis/cart/getall",data,{headers:obj})

    }

    deletecart(data){
        let obj={
            Authorization:localStorage.getItem("token")
        }
        return axios.post(BASE_URL+"apis/cart/delete",data,{headers:obj})

    }

    orderplace(data){
        let obj={
            Authorization:localStorage.getItem("token")
        }
        return axios.post(BASE_URL+"apis/orders/add",data,{headers:obj})

    }

    vieworder(data){
        let obj={
            Authorization:localStorage.getItem("token")
        }
        return axios.post(BASE_URL+"apis/orders/getall",data,{headers:obj})

    }

    updateorder(data){
        let obj={
            Authorization:localStorage.getItem("token")
        }
        return axios.post(BASE_URL+"apis/orders/update",data,{headers:obj})
    }

    deleteData(data){
        let obj={
            Authorization:localStorage.getItem("token")
        }
        return axios.post(BASE_URL+"apis/orders/delete",data,{headers:obj})
    }

    singleorder(data){
        let obj={
            Authorization:localStorage.getItem("token")
        }
        return axios.post(BASE_URL+"apis/orders/single",data,{headers:obj})
    }

    getDashboard(data){
        const token=sessionStorage.getItem("token")
        let header={
            "Accept":"*/*",
            "Authorization":token
        }
        console.log(token)
        return axios.post(BASE_URL+"apis/user/dashboard",{},{headers:header})
    }

    getall(data){
        const token=sessionStorage.getItem("token")
        let header={
            "Accept":"*/*",
            "Authorization":token
        }
        return axios.post(BASE_URL+"user/getall",data,{headers:header})
    }

    getorder(data){
        const token=sessionStorage.getItem("token")
        let header={
            Authorization:token
        }
        return axios.post(BASE_URL+"apis/orders/getall",data,{headers:header})
    }

    updateorder(data){
        const token=sessionStorage.getItem("token")
        let header={
            Authorization:token
        }
        return axios.post(BASE_URL+"apis/orders/update",data,{headers:header})
    }
}   

export default new ApiServices