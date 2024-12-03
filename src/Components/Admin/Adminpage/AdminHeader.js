
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ApiServices from "../../ApiServices";
export default function AdminHeader(){
    const [category,setCategory]=useState()
    const userType=sessionStorage.getItem('userType')
    const authenticate=sessionStorage.getItem('authenticate')
    const nav=useNavigate()
    useEffect(()=>{
        ApiServices.allcategory().then((res)=>{
            if(res.data.success){
                setCategory(res.data.data)
            }
            else{
                toast.error(res.data.message)
            }
        }).catch((error)=>{
            console.log(error)
            toast.error("Something went wrong!!Try Again Later")
        })
    },[])
    const logout=()=>{
        sessionStorage.clear()
        setTimeout(()=>{
            sessionStorage.setItem("message","Logout Successfully")
            nav("/login")
        },500)
    }
    // const [cart_item,setCartItem]=useState(0)
    // useEffect(()=>{
        
    // },[cart_item])
    return(
        <>
         {/* header */}
  <div className="header" id="home">
    <div className="container">
      <ul>
       
      
        <li>
          <i className="fa fa-map" aria-hidden="true" /> Address : Jal, Punjab, India 
        </li>
        <li>
          <i className="fa fa-phone" aria-hidden="true" /> Call : 01234567898
        </li>
        <li>
          <i className="fa fa-envelope-o" aria-hidden="true" />{" "}
          <a href="mailto:info@example.com">info@clothes.com</a>
        </li>
      </ul>
    </div>
  </div>
  {/* //header */}
  {/* header-bot */}
  <div className="header-bot">
    <div className="header-bot_inner_wthreeinfo_header_mid">
    
      {/* header-bot */}
      <div className="col-md-4 logo_agile">
        <h1>
          <a href="index.html">
            <span>C</span>osmoCollection{" "}
            <i
              className="fa fa-shopping-bag top_logo_agile_bag"
              aria-hidden="true"
            />
          </a>
        </h1>
      </div>
      {/* header-bot */}
      <div className="col-md-4 agileits-social top_content">
        <ul className="social-nav model-3d-0 footer-social w3_agile_social">
          <li className="share">Share On : </li>
          <li>
            <a href="#" className="facebook">
              <div className="front">
                <i className="fa fa-facebook" aria-hidden="true" />
              </div>
              <div className="back">
                <i className="fa fa-facebook" aria-hidden="true" />
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="twitter">
              <div className="front">
                <i className="fa fa-twitter" aria-hidden="true" />
              </div>
              <div className="back">
                <i className="fa fa-twitter" aria-hidden="true" />
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="instagram">
              <div className="front">
                <i className="fa fa-instagram" aria-hidden="true" />
              </div>
              <div className="back">
                <i className="fa fa-instagram" aria-hidden="true" />
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="pinterest">
              <div className="front">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </div>
              <div className="back">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="clearfix" />
    </div>
  </div>
  {/* //header-bot */}
  <div className="ban-top">
    <div className="container">
      <div className="top_nav_left">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div
              className="collapse navbar-collapse menu--shylock"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav menu__list">
                {/* {authenticate && userType==1  ? */}
                  {/* <> */}
                  <li className="active menu__item">
                  <Link className="menu__link" to={"/admin"}>
                    Home 
                  </Link>
                </li>
                <li className="active menu__item">
                  <Link className="menu__link" to={"/admin/dashboard"}>
                    Dashboard 
                  </Link>
                </li>
                <li className="dropdown menu__item">
                  <a
                    href="#"
                    className="dropdown-toggle menu__link"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                  Category <span className="caret" />
                  </a>
                  <ul className="dropdown-menu multi-column columns-3">
                    <div className="agile_inner_drop_nav_info">
                      <div className="col-sm-4 multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <li>
                            <Link to="/admin/addcategory">Add</Link>
                          </li>
                          <li>
                            <Link to="/admin/managecategory">Manage</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </ul>
                </li>
                <li className="dropdown menu__item">
                  <a
                    href="#"
                    className="dropdown-toggle menu__link"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                  Sub-Category <span className="caret" />
                  </a>
                  <ul className="dropdown-menu multi-column columns-3">
                    <div className="agile_inner_drop_nav_info">
                      <div className="col-sm-3 multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <li>
                            <Link to="/admin/addsubcategory" >Add</Link>
                          </li>
                          <li>
                            <Link to="/admin/managesubcategory" >Manage</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </ul>
                </li>
                <li className="dropdown menu__item">
                  <a
                    to=""
                    className="dropdown-toggle menu__link"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                  Products <span className="caret" />
                  </a>
                  <ul className="dropdown-menu multi-column columns-3">
                    <div className="agile_inner_drop_nav_info">
                      <div className="col-sm multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <li>
                            <Link to="/admin/addproduct">Add</Link>
                          </li>
                          <li>
                            <Link to="/admin/manageproduct">Manage</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </ul>
                </li>
                <li className=" menu__item">
                  <Link to="/admin/adminorder" className="menu__link">
                    Orders
                  </Link>
                </li>
                {/* <li className=" menu__item">
                  <Link className="menu__link" to={"/admin/user"}>
                    User
                  </Link>
                </li> */}
              
             
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="top_nav_right">
      {authenticate && userType!=1  &&
        <div className="wthreecartaits wthreecartaits2 cart cart box_1">
          <form action="#" method="post" className="last">
            <input type="hidden" name="cmd" defaultValue="_cart" />
            <input type="hidden" name="display" defaultValue={1} />
            <Link to={"/allcart"}>
            <button
              className="w3view-cart"
              type="submit"
              name="submit"
              value=""
            >
              <i className="fa fa-cart-arrow-down" aria-hidden="true" />
            </button>
            </Link>
          </form>
        </div>
      }
      </div>
      <div className="clearfix" />
    </div>
  </div>
        </>
    )
}