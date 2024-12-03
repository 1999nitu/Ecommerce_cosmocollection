import { Link } from "react-router-dom";

export default function Mens(){
    return(
        <>
  {/* Modal1 */}
  <div className="modal fade" id="myModal" tabIndex={-1} role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            ×
          </button>
        </div>
        <div className="modal-body modal-body-sub_agile">
          <div className="col-md-8 modal_body_left modal_body_left1">
            <h3 className="agileinfo_sign">
              Sign In <span>Now</span>
            </h3>
            <form action="#" method="post">
              <div className="styled-input agile-styled-input-top">
                <input type="text" name="Name" required="" />
                <label>Name</label>
                <span />
              </div>
              <div className="styled-input">
                <input type="email" name="Email" required="" />
                <label>Email</label>
                <span />
              </div>
              <input type="submit" defaultValue="Sign In" />
            </form>
            <ul className="social-nav model-3d-0 footer-social w3_agile_social top_agile_third">
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
            <div className="clearfix" />
            <p>
              <a href="#" data-toggle="modal" data-target="#myModal2">
                {" "}
                Don't have an account?
              </a>
            </p>
          </div>
          <div className="col-md-4 modal_body_right modal_body_right1">
            <img src="/assets/images/log_pic.jpg" alt=" " />
          </div>
          <div className="clearfix" />
        </div>
      </div>
      {/* //Modal content*/}
    </div>
  </div>
  {/* //Modal1 */}
  {/* Modal2 */}
  <div className="modal fade" id="myModal2" tabIndex={-1} role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            ×
          </button>
        </div>
        <div className="modal-body modal-body-sub_agile">
          <div className="col-md-8 modal_body_left modal_body_left1">
            <h3 className="agileinfo_sign">
              Sign Up <span>Now</span>
            </h3>
            <form action="#" method="post">
              <div className="styled-input agile-styled-input-top">
                <input type="text" name="Name" required="" />
                <label>Name</label>
                <span />
              </div>
              <div className="styled-input">
                <input type="email" name="Email" required="" />
                <label>Email</label>
                <span />
              </div>
              <div className="styled-input">
                <input type="password" name="password" required="" />
                <label>Password</label>
                <span />
              </div>
              <div className="styled-input">
                <input type="password" name="Confirm Password" required="" />
                <label>Confirm Password</label>
                <span />
              </div>
              <input type="submit" defaultValue="Sign Up" />
            </form>
            <ul className="social-nav model-3d-0 footer-social w3_agile_social top_agile_third">
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
            <div className="clearfix" />
            <p>
              <a href="#">By clicking register, I agree to your terms</a>
            </p>
          </div>
          <div className="col-md-4 modal_body_right modal_body_right1">
            <img src="/assets/images/log_pic.jpg" alt=" " />
          </div>
          <div className="clearfix" />
        </div>
      </div>
      {/* //Modal content*/}
    </div>
  </div>
  {/* //Modal2 */}
  {/* /banner_bottom_agile_info */}
  <div className="page-head_agile_info_w3l">
    <div className="container">
      <h3>
        Men's <span>Wear</span>
      </h3>
      {/*/w3_short*/}
      <div className="services-breadcrumb">
        <div className="agile_inner_breadcrumb">
          <ul className="w3_short">
            <li>
              <Link to="/">Home</Link>
              <i>|</i>
            </li>
            <li>Men's Wear</li>
          </ul>
        </div>
      </div>
      {/*//w3_short*/}
    </div>
  </div>
  {/* banner-bootom-w3-agileits */}
  <div className="banner-bootom-w3-agileits">
    <div className="container">
      {/* mens */}
      <div className="col-md-4 products-left">
        <div className="filter-price">
          <h3>
            Filter By <span>Price</span>
          </h3>
          <ul className="dropdown-menu6">
            <li>
              <div id="slider-range" />
              <input
                type="text"
                id="amount"
                style={{ border: 0, color: "#ffffff", fontWeight: "normal" }}
              />
            </li>
          </ul>
        </div>
        <div className="css-treeview">
          <h4>Categories</h4>
          <ul className="tree-list-pad">
            <li>
              <input type="checkbox" defaultChecked="checked" id="item-0" />
              <label htmlFor="item-0">
                <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                Men's Wear
              </label>
              <ul>
                <li>
                  <input type="checkbox" id="item-0-0" />
                  <label htmlFor="item-0-0">
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                    Ethnic Wear
                  </label>
                  <ul>
                    <li>
                      <a href="mens.html">Shirts</a>
                    </li>
                    <li>
                      <a href="mens.html">Caps</a>
                    </li>
                    <li>
                      <a href="mens.html">Shoes</a>
                    </li>
                    <li>
                      <a href="mens.html">Pants</a>
                    </li>
                    <li>
                      <a href="mens.html">SunGlasses</a>
                    </li>
                    <li>
                      <a href="mens.html">Trousers</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <input type="checkbox" id="item-0-1" />
                  <label htmlFor="item-0-1">
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                    Party Wear
                  </label>
                  <ul>
                    <li>
                      <a href="mens.html">Shirts</a>
                    </li>
                    <li>
                      <a href="mens.html">Caps</a>
                    </li>
                    <li>
                      <a href="mens.html">Shoes</a>
                    </li>
                    <li>
                      <a href="mens.html">Pants</a>
                    </li>
                    <li>
                      <a href="mens.html">SunGlasses</a>
                    </li>
                    <li>
                      <a href="mens.html">Trousers</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <input type="checkbox" id="item-0-2" />
                  <label htmlFor="item-0-2">
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                    Casual Wear
                  </label>
                  <ul>
                    <li>
                      <a href="mens.html">Shirts</a>
                    </li>
                    <li>
                      <a href="mens.html">Caps</a>
                    </li>
                    <li>
                      <a href="mens.html">Shoes</a>
                    </li>
                    <li>
                      <a href="mens.html">Pants</a>
                    </li>
                    <li>
                      <a href="mens.html">SunGlasses</a>
                    </li>
                    <li>
                      <a href="mens.html">Trousers</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <input type="checkbox" id="item-1" defaultChecked="checked" />
              <label htmlFor="item-1">
                <i className="fa fa-long-arrow-right" aria-hidden="true" /> Best
                Collections
              </label>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    defaultChecked="checked"
                    id="item-1-0"
                  />
                  <label htmlFor="item-1-0">
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                    New Arrivals
                  </label>
                  <ul>
                    <li>
                      <a href="mens.html">Shirts</a>
                    </li>
                    <li>
                      <a href="mens.html">Shoes</a>
                    </li>
                    <li>
                      <a href="mens.html">Pants</a>
                    </li>
                    <li>
                      <a href="mens.html">SunGlasses</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <input type="checkbox" defaultChecked="checked" id="item-2" />
              <label htmlFor="item-2">
                <i className="fa fa-long-arrow-right" aria-hidden="true" /> Best
                Offers
              </label>
              <ul>
                <li>
                  <input type="checkbox" id="item-2-0" />
                  <label htmlFor="item-2-0">
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                    Summer Discount Sales
                  </label>
                  <ul>
                    <li>
                      <a href="mens.html">Shirts</a>
                    </li>
                    <li>
                      <a href="mens.html">Shoes</a>
                    </li>
                    <li>
                      <a href="mens.html">Pants</a>
                    </li>
                    <li>
                      <a href="mens.html">SunGlasses</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <input type="checkbox" id="item-2-1" />
                  <label htmlFor="item-2-1">
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                    Exciting Offers
                  </label>
                  <ul>
                    <li>
                      <a href="mens.html">Shirts</a>
                    </li>
                    <li>
                      <a href="mens.html">Shoes</a>
                    </li>
                    <li>
                      <a href="mens.html">Pants</a>
                    </li>
                    <li>
                      <a href="mens.html">SunGlasses</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <input type="checkbox" id="item-2-2" />
                  <label htmlFor="item-2-2">
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                    Flat Discounts
                  </label>
                  <ul>
                    <li>
                      <a href="mens.html">Shirts</a>
                    </li>
                    <li>
                      <a href="mens.html">Shoes</a>
                    </li>
                    <li>
                      <a href="mens.html">Pants</a>
                    </li>
                    <li>
                      <a href="mens.html">SunGlasses</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="community-poll">
          <h4>Community Poll</h4>
          <div className="swit form">
            <form>
              <div className="check_box">
                {" "}
                <div className="radio">
                  {" "}
                  <label>
                    <input type="radio" name="radio" defaultChecked="" />
                    <i />
                    More convenient for shipping and delivery
                  </label>{" "}
                </div>
              </div>
              <div className="check_box">
                {" "}
                <div className="radio">
                  {" "}
                  <label>
                    <input type="radio" name="radio" />
                    <i />
                    Lower Price
                  </label>{" "}
                </div>
              </div>
              <div className="check_box">
                {" "}
                <div className="radio">
                  {" "}
                  <label>
                    <input type="radio" name="radio" />
                    <i />
                    Track your item
                  </label>{" "}
                </div>
              </div>
              <div className="check_box">
                {" "}
                <div className="radio">
                  {" "}
                  <label>
                    <input type="radio" name="radio" />
                    <i />
                    Bigger Choice
                  </label>{" "}
                </div>
              </div>
              <div className="check_box">
                {" "}
                <div className="radio">
                  {" "}
                  <label>
                    <input type="radio" name="radio" />
                    <i />
                    More colors to choose
                  </label>{" "}
                </div>
              </div>
              <div className="check_box">
                {" "}
                <div className="radio">
                  {" "}
                  <label>
                    <input type="radio" name="radio" />
                    <i />
                    Secured Payment
                  </label>{" "}
                </div>
              </div>
              <div className="check_box">
                {" "}
                <div className="radio">
                  {" "}
                  <label>
                    <input type="radio" name="radio" />
                    <i />
                    Money back guaranteed
                  </label>{" "}
                </div>
              </div>
              <div className="check_box">
                {" "}
                <div className="radio">
                  {" "}
                  <label>
                    <input type="radio" name="radio" />
                    <i />
                    Others
                  </label>{" "}
                </div>
              </div>
              <input type="submit" defaultValue="SEND" />
            </form>
          </div>
        </div>
        <div className="clearfix" />
      </div>
      <div className="col-md-8 products-right">
        <h5>
          Product <span>Compare(0)</span>
        </h5>
        <div className="sort-grid">
          <div className="sorting">
            <h6>Sort By</h6>
            <select
              id="country1"
              onchange="change_country(this.value)"
              className="frm-field required sect"
            >
              <option value="null">Default</option>
              <option value="null">Name(A - Z)</option>
              <option value="null">Name(Z - A)</option>
              <option value="null">Price(High - Low)</option>
              <option value="null">Price(Low - High)</option>
              <option value="null">Model(A - Z)</option>
              <option value="null">Model(Z - A)</option>
            </select>
            <div className="clearfix" />
          </div>
          <div className="sorting">
            <h6>Showing</h6>
            <select
              id="country2"
              onchange="change_country(this.value)"
              className="frm-field required sect"
            >
              <option value="null">7</option>
              <option value="null">14</option>
              <option value="null">28</option>
              <option value="null">35</option>
            </select>
            <div className="clearfix" />
          </div>
          <div className="clearfix" />
        </div>
        <div className="men-wear-top">
          <div id="top" className="callbacks_container">
            <ul className="rslides" id="slider3">
              <li>
                <img
                  className="img-responsive"
                  src="/assets/images/banner2.jpg"
                  alt=" "
                />
              </li>
              <li>
                <img
                  className="img-responsive"
                  src="/assets/images/banner5.jpg"
                  alt=" "
                />
              </li>
              <li>
                <img
                  className="img-responsive"
                  src="/assets/images/banner2.jpg"
                  alt=" "
                />
              </li>
            </ul>
          </div>
          <div className="clearfix" />
        </div>
        <div className="men-wear-bottom">
          <div className="col-sm-4 men-wear-left">
            <img className="img-responsive" src="/assets/images/bb2.jpg" alt=" " />
          </div>
          <div className="col-sm-8 men-wear-right">
            <h4>
              Exclusive Men's <span>Collections</span>
            </h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.{" "}
            </p>
          </div>
          <div className="clearfix" />
        </div>
        <div className="col-md-4 product-men">
          <div className="men-pro-item simpleCart_shelfItem">
            <div className="men-thumb-item">
              <img src="/assets/images/m8.jpg" alt="" className="pro-image-front" />
              <img src="/assets/images/m8.jpg" alt="" className="pro-image-back" />
              <div className="men-cart-pro">
                <div className="inner-men-cart-pro">
                  <a href="single.html" className="link-product-add-cart">
                    Quick View
                  </a>
                </div>
              </div>
              <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product ">
              <h4>
                <a href="single.html">Party Men's Blazer</a>
              </h4>
              <div className="info-product-price">
                <span className="item_price">$260.99</span>
                <del>$390.71</del>
              </div>
              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                <form action="#" method="post">
                  <fieldset>
                    <input type="hidden" name="cmd" defaultValue="_cart" />
                    <input type="hidden" name="add" defaultValue={1} />
                    <input type="hidden" name="business" defaultValue=" " />
                    <input
                      type="hidden"
                      name="item_name"
                      defaultValue="Party Men's Blazer"
                    />
                    <input type="hidden" name="amount" defaultValue="30.99" />
                    <input
                      type="hidden"
                      name="discount_amount"
                      defaultValue={1.0}
                    />
                    <input
                      type="hidden"
                      name="currency_code"
                      defaultValue="USD"
                    />
                    <input type="hidden" name="return" defaultValue=" " />
                    <input
                      type="hidden"
                      name="cancel_return"
                      defaultValue=" "
                    />
                    <input
                      type="submit"
                      name="submit"
                      defaultValue="Add to cart"
                      className="button"
                    />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 product-men">
          <div className="men-pro-item simpleCart_shelfItem">
            <div className="men-thumb-item">
              <img src="/assets/images/m7.jpg" alt="" className="pro-image-front" />
              <img src="/assets/images/m7.jpg" alt="" className="pro-image-back" />
              <div className="men-cart-pro">
                <div className="inner-men-cart-pro">
                  <a href="single.html" className="link-product-add-cart">
                    Quick View
                  </a>
                </div>
              </div>
              <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product ">
              <h4>
                <a href="single.html">Analog Watch</a>
              </h4>
              <div className="info-product-price">
                <span className="item_price">$160.99</span>
                <del>$290.71</del>
              </div>
              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                <form action="#" method="post">
                  <fieldset>
                    <input type="hidden" name="cmd" defaultValue="_cart" />
                    <input type="hidden" name="add" defaultValue={1} />
                    <input type="hidden" name="business" defaultValue=" " />
                    <input
                      type="hidden"
                      name="item_name"
                      defaultValue="Analog Watch"
                    />
                    <input type="hidden" name="amount" defaultValue="30.99" />
                    <input
                      type="hidden"
                      name="discount_amount"
                      defaultValue={1.0}
                    />
                    <input
                      type="hidden"
                      name="currency_code"
                      defaultValue="USD"
                    />
                    <input type="hidden" name="return" defaultValue=" " />
                    <input
                      type="hidden"
                      name="cancel_return"
                      defaultValue=" "
                    />
                    <input
                      type="submit"
                      name="submit"
                      defaultValue="Add to cart"
                      className="button"
                    />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 product-men">
          <div className="men-pro-item simpleCart_shelfItem">
            <div className="men-thumb-item">
              <img src="/assets/images/s1.jpg" alt="" className="pro-image-front" />
              <img src="/assets/images/s1.jpg" alt="" className="pro-image-back" />
              <div className="men-cart-pro">
                <div className="inner-men-cart-pro">
                  <a href="single.html" className="link-product-add-cart">
                    Quick View
                  </a>
                </div>
              </div>
              <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product ">
              <h4>
                <a href="single.html">Running Shoes</a>
              </h4>
              <div className="info-product-price">
                <span className="item_price">$80.99</span>
                <del>$89.71</del>
              </div>
              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                <form action="#" method="post">
                  <fieldset>
                    <input type="hidden" name="cmd" defaultValue="_cart" />
                    <input type="hidden" name="add" defaultValue={1} />
                    <input type="hidden" name="business" defaultValue=" " />
                    <input
                      type="hidden"
                      name="item_name"
                      defaultValue="Running Shoes"
                    />
                    <input type="hidden" name="amount" defaultValue="30.99" />
                    <input
                      type="hidden"
                      name="discount_amount"
                      defaultValue={1.0}
                    />
                    <input
                      type="hidden"
                      name="currency_code"
                      defaultValue="USD"
                    />
                    <input type="hidden" name="return" defaultValue=" " />
                    <input
                      type="hidden"
                      name="cancel_return"
                      defaultValue=" "
                    />
                    <input
                      type="submit"
                      name="submit"
                      defaultValue="Add to cart"
                      className="button"
                    />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
      <div className="clearfix" />
      <div className="single-pro">
        <div className="col-md-3 product-men">
          <div className="men-pro-item simpleCart_shelfItem">
            <div className="men-thumb-item">
              <img src="/assets/images/m1.jpg" alt="" className="pro-image-front" />
              <img src="/assets/images/m1.jpg" alt="" className="pro-image-back" />
              <div className="men-cart-pro">
                <div className="inner-men-cart-pro">
                  <a href="single.html" className="link-product-add-cart">
                    Quick View
                  </a>
                </div>
              </div>
              <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product ">
              <h4>
                <a href="single.html">Formal Blue Shirt</a>
              </h4>
              <div className="info-product-price">
                <span className="item_price">$45.99</span>
                <del>$69.71</del>
              </div>
              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                <form action="#" method="post">
                  <fieldset>
                    <input type="hidden" name="cmd" defaultValue="_cart" />
                    <input type="hidden" name="add" defaultValue={1} />
                    <input type="hidden" name="business" defaultValue=" " />
                    <input
                      type="hidden"
                      name="item_name"
                      defaultValue="Formal Blue Shirt"
                    />
                    <input type="hidden" name="amount" defaultValue="30.99" />
                    <input
                      type="hidden"
                      name="discount_amount"
                      defaultValue={1.0}
                    />
                    <input
                      type="hidden"
                      name="currency_code"
                      defaultValue="USD"
                    />
                    <input type="hidden" name="return" defaultValue=" " />
                    <input
                      type="hidden"
                      name="cancel_return"
                      defaultValue=" "
                    />
                    <input
                      type="submit"
                      name="submit"
                      defaultValue="Add to cart"
                      className="button"
                    />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 product-men">
          <div className="men-pro-item simpleCart_shelfItem">
            <div className="men-thumb-item">
              <img src="/assets/images/m2.jpg" alt="" className="pro-image-front" />
              <img src="/assets/images/m2.jpg" alt="" className="pro-image-back" />
              <div className="men-cart-pro">
                <div className="inner-men-cart-pro">
                  <a href="single.html" className="link-product-add-cart">
                    Quick View
                  </a>
                </div>
              </div>
              <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product ">
              <h4>
                <a href="single.html">Gabi Full Sleeve Sweatshirt</a>
              </h4>
              <div className="info-product-price">
                <span className="item_price">$45.99</span>
                <del>$69.71</del>
              </div>
              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                <form action="#" method="post">
                  <fieldset>
                    <input type="hidden" name="cmd" defaultValue="_cart" />
                    <input type="hidden" name="add" defaultValue={1} />
                    <input type="hidden" name="business" defaultValue=" " />
                    <input
                      type="hidden"
                      name="item_name"
                      defaultValue="Sweatshirt"
                    />
                    <input type="hidden" name="amount" defaultValue="30.99" />
                    <input
                      type="hidden"
                      name="discount_amount"
                      defaultValue={1.0}
                    />
                    <input
                      type="hidden"
                      name="currency_code"
                      defaultValue="USD"
                    />
                    <input type="hidden" name="return" defaultValue=" " />
                    <input
                      type="hidden"
                      name="cancel_return"
                      defaultValue=" "
                    />
                    <input
                      type="submit"
                      name="submit"
                      defaultValue="Add to cart"
                      className="button"
                    />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 product-men">
          <div className="men-pro-item simpleCart_shelfItem">
            <div className="men-thumb-item">
              <img src="/assets/images/m3.jpg" alt="" className="pro-image-front" />
              <img src="/assets/images/m3.jpg" alt="" className="pro-image-back" />
              <div className="men-cart-pro">
                <div className="inner-men-cart-pro">
                  <a href="single.html" className="link-product-add-cart">
                    Quick View
                  </a>
                </div>
              </div>
              <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product ">
              <h4>
                <a href="single.html">Dark Blue Track Pants</a>
              </h4>
              <div className="info-product-price">
                <span className="item_price">$80.99</span>
                <del>$89.71</del>
              </div>
              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                <form action="#" method="post">
                  <fieldset>
                    <input type="hidden" name="cmd" defaultValue="_cart" />
                    <input type="hidden" name="add" defaultValue={1} />
                    <input type="hidden" name="business" defaultValue=" " />
                    <input
                      type="hidden"
                      name="item_name"
                      defaultValue="Dark Blue Track Pants"
                    />
                    <input type="hidden" name="amount" defaultValue="30.99" />
                    <input
                      type="hidden"
                      name="discount_amount"
                      defaultValue={1.0}
                    />
                    <input
                      type="hidden"
                      name="currency_code"
                      defaultValue="USD"
                    />
                    <input type="hidden" name="return" defaultValue=" " />
                    <input
                      type="hidden"
                      name="cancel_return"
                      defaultValue=" "
                    />
                    <input
                      type="submit"
                      name="submit"
                      defaultValue="Add to cart"
                      className="button"
                    />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 product-men">
          <div className="men-pro-item simpleCart_shelfItem">
            <div className="men-thumb-item">
              <img src="/assets/images/m4.jpg" alt="" className="pro-image-front" />
              <img src="/assets/images/m4.jpg" alt="" className="pro-image-back" />
              <div className="men-cart-pro">
                <div className="inner-men-cart-pro">
                  <a href="single.html" className="link-product-add-cart">
                    Quick View
                  </a>
                </div>
              </div>
              <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product ">
              <h4>
                <a href="single.html">Round Neck Black T-Shirt</a>
              </h4>
              <div className="info-product-price">
                <span className="item_price">$190.99</span>
                <del>$159.71</del>
              </div>
              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                <form action="#" method="post">
                  <fieldset>
                    <input type="hidden" name="cmd" defaultValue="_cart" />
                    <input type="hidden" name="add" defaultValue={1} />
                    <input type="hidden" name="business" defaultValue=" " />
                    <input
                      type="hidden"
                      name="item_name"
                      defaultValue="Black T-Shirt"
                    />
                    <input type="hidden" name="amount" defaultValue="30.99" />
                    <input
                      type="hidden"
                      name="discount_amount"
                      defaultValue={1.0}
                    />
                    <input
                      type="hidden"
                      name="currency_code"
                      defaultValue="USD"
                    />
                    <input type="hidden" name="return" defaultValue=" " />
                    <input
                      type="hidden"
                      name="cancel_return"
                      defaultValue=" "
                    />
                    <input
                      type="submit"
                      name="submit"
                      defaultValue="Add to cart"
                      className="button"
                    />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 product-men">
          <div className="men-pro-item simpleCart_shelfItem">
            <div className="men-thumb-item">
              <img src="/assets/images/m5.jpg" alt="" className="pro-image-front" />
              <img src="/assets/images/m5.jpg" alt="" className="pro-image-back" />
              <div className="men-cart-pro">
                <div className="inner-men-cart-pro">
                  <a href="single.html" className="link-product-add-cart">
                    Quick View
                  </a>
                </div>
              </div>
              <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product ">
              <h4>
                <a href="single.html">Men's Black Jeans</a>
              </h4>
              <div className="info-product-price">
                <span className="item_price">$60.99</span>
                <del>$90.71</del>
              </div>
              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                <form action="#" method="post">
                  <fieldset>
                    <input type="hidden" name="cmd" defaultValue="_cart" />
                    <input type="hidden" name="add" defaultValue={1} />
                    <input type="hidden" name="business" defaultValue=" " />
                    <input
                      type="hidden"
                      name="item_name"
                      defaultValue="Men's Black Jeans"
                    />
                    <input type="hidden" name="amount" defaultValue="30.99" />
                    <input
                      type="hidden"
                      name="discount_amount"
                      defaultValue={1.0}
                    />
                    <input
                      type="hidden"
                      name="currency_code"
                      defaultValue="USD"
                    />
                    <input type="hidden" name="return" defaultValue=" " />
                    <input
                      type="hidden"
                      name="cancel_return"
                      defaultValue=" "
                    />
                    <input
                      type="submit"
                      name="submit"
                      defaultValue="Add to cart"
                      className="button"
                    />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 product-men">
          <div className="men-pro-item simpleCart_shelfItem">
            <div className="men-thumb-item">
              <img src="/assets/images/m7.jpg" alt="" className="pro-image-front" />
              <img src="/assets/images/m7.jpg" alt="" className="pro-image-back" />
              <div className="men-cart-pro">
                <div className="inner-men-cart-pro">
                  <a href="single.html" className="link-product-add-cart">
                    Quick View
                  </a>
                </div>
              </div>
              <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product ">
              <h4>
                <a href="single.html">Analog Watch</a>
              </h4>
              <div className="info-product-price">
                <span className="item_price">$160.99</span>
                <del>$290.71</del>
              </div>
              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                <form action="#" method="post">
                  <fieldset>
                    <input type="hidden" name="cmd" defaultValue="_cart" />
                    <input type="hidden" name="add" defaultValue={1} />
                    <input type="hidden" name="business" defaultValue=" " />
                    <input
                      type="hidden"
                      name="item_name"
                      defaultValue="Analog Watch"
                    />
                    <input type="hidden" name="amount" defaultValue="30.99" />
                    <input
                      type="hidden"
                      name="discount_amount"
                      defaultValue={1.0}
                    />
                    <input
                      type="hidden"
                      name="currency_code"
                      defaultValue="USD"
                    />
                    <input type="hidden" name="return" defaultValue=" " />
                    <input
                      type="hidden"
                      name="cancel_return"
                      defaultValue=" "
                    />
                    <input
                      type="submit"
                      name="submit"
                      defaultValue="Add to cart"
                      className="button"
                    />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 product-men">
          <div className="men-pro-item simpleCart_shelfItem">
            <div className="men-thumb-item">
              <img src="/assets/images/m6.jpg" alt="" className="pro-image-front" />
              <img src="/assets/images/m6.jpg" alt="" className="pro-image-back" />
              <div className="men-cart-pro">
                <div className="inner-men-cart-pro">
                  <a href="single.html" className="link-product-add-cart">
                    Quick View
                  </a>
                </div>
              </div>
              <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product ">
              <h4>
                <a href="single.html">Reversible Belt</a>
              </h4>
              <div className="info-product-price">
                <span className="item_price">$30.99</span>
                <del>$50.71</del>
              </div>
              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                <form action="#" method="post">
                  <fieldset>
                    <input type="hidden" name="cmd" defaultValue="_cart" />
                    <input type="hidden" name="add" defaultValue={1} />
                    <input type="hidden" name="business" defaultValue=" " />
                    <input
                      type="hidden"
                      name="item_name"
                      defaultValue="Reversible Belt"
                    />
                    <input type="hidden" name="amount" defaultValue="30.99" />
                    <input
                      type="hidden"
                      name="discount_amount"
                      defaultValue={1.0}
                    />
                    <input
                      type="hidden"
                      name="currency_code"
                      defaultValue="USD"
                    />
                    <input type="hidden" name="return" defaultValue=" " />
                    <input
                      type="hidden"
                      name="cancel_return"
                      defaultValue=" "
                    />
                    <input
                      type="submit"
                      name="submit"
                      defaultValue="Add to cart"
                      className="button"
                    />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 product-men">
          <div className="men-pro-item simpleCart_shelfItem">
            <div className="men-thumb-item">
              <img src="/assets/images/m8.jpg" alt="" className="pro-image-front" />
              <img src="/assets/images/m8.jpg" alt="" className="pro-image-back" />
              <div className="men-cart-pro">
                <div className="inner-men-cart-pro">
                  <a href="single.html" className="link-product-add-cart">
                    Quick View
                  </a>
                </div>
              </div>
              <span className="product-new-top">New</span>
            </div>
            <div className="item-info-product ">
              <h4>
                <a href="single.html">Party Men's Blazer</a>
              </h4>
              <div className="info-product-price">
                <span className="item_price">$260.99</span>
                <del>$390.71</del>
              </div>
              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                <form action="#" method="post">
                  <fieldset>
                    <input type="hidden" name="cmd" defaultValue="_cart" />
                    <input type="hidden" name="add" defaultValue={1} />
                    <input type="hidden" name="business" defaultValue=" " />
                    <input
                      type="hidden"
                      name="item_name"
                      defaultValue="Party Men's Blazer"
                    />
                    <input type="hidden" name="amount" defaultValue="30.99" />
                    <input
                      type="hidden"
                      name="discount_amount"
                      defaultValue={1.0}
                    />
                    <input
                      type="hidden"
                      name="currency_code"
                      defaultValue="USD"
                    />
                    <input type="hidden" name="return" defaultValue=" " />
                    <input
                      type="hidden"
                      name="cancel_return"
                      defaultValue=" "
                    />
                    <input
                      type="submit"
                      name="submit"
                      defaultValue="Add to cart"
                      className="button"
                    />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </div>
  {/* //mens */}
  {/*/grids*/}
  <div className="coupons">
    <div className="coupons-grids text-center">
      <div className="w3layouts_mail_grid">
        <div className="col-md-3 w3layouts_mail_grid_left">
          <div className="w3layouts_mail_grid_left1 hvr-radial-out">
            <i className="fa fa-truck" aria-hidden="true" />
          </div>
          <div className="w3layouts_mail_grid_left2">
            <h3>FREE SHIPPING</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        <div className="col-md-3 w3layouts_mail_grid_left">
          <div className="w3layouts_mail_grid_left1 hvr-radial-out">
            <i className="fa fa-headphones" aria-hidden="true" />
          </div>
          <div className="w3layouts_mail_grid_left2">
            <h3>24/7 SUPPORT</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        <div className="col-md-3 w3layouts_mail_grid_left">
          <div className="w3layouts_mail_grid_left1 hvr-radial-out">
            <i className="fa fa-shopping-bag" aria-hidden="true" />
          </div>
          <div className="w3layouts_mail_grid_left2">
            <h3>MONEY BACK GUARANTEE</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        <div className="col-md-3 w3layouts_mail_grid_left">
          <div className="w3layouts_mail_grid_left1 hvr-radial-out">
            <i className="fa fa-gift" aria-hidden="true" />
          </div>
          <div className="w3layouts_mail_grid_left2">
            <h3>FREE GIFT COUPONS</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
  {/*grids*/}
  
 </>

    )
}