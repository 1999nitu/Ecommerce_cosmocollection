export default function Home(){
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
  {/* banner */}
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    {/* Indicators */}
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to={0} className="active" />
      <li data-target="#myCarousel" data-slide-to={1} className="" />
      <li data-target="#myCarousel" data-slide-to={2} className="" />
      <li data-target="#myCarousel" data-slide-to={3} className="" />
      <li data-target="#myCarousel" data-slide-to={4} className="" />
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <div className="container">
          <div className="carousel-caption">
            <h3>
              The Biggest <span>Sale</span>
            </h3>
            <p>Special for today</p>
            <a className="hvr-outline-out button2" href="mens.html">
              Shop Now{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="item item2">
        <div className="container">
          <div className="carousel-caption">
            <h3>
              Summer <span>Collection</span>
            </h3>
            <p>New Arrivals On Sale</p>
            <a className="hvr-outline-out button2" href="mens.html">
              Shop Now{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="item item3">
        <div className="container">
          <div className="carousel-caption">
            <h3>
              The Biggest <span>Sale</span>
            </h3>
            <p>Special for today</p>
            <a className="hvr-outline-out button2" href="mens.html">
              Shop Now{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="item item4">
        <div className="container">
          <div className="carousel-caption">
            <h3>
              Summer <span>Collection</span>
            </h3>
            <p>New Arrivals On Sale</p>
            <a className="hvr-outline-out button2" href="mens.html">
              Shop Now{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="item item5">
        <div className="container">
          <div className="carousel-caption">
            <h3>
              The Biggest <span>Sale</span>
            </h3>
            <p>Special for today</p>
            <a className="hvr-outline-out button2" href="mens.html">
              Shop Now{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
    <a
      className="left carousel-control"
      href="#myCarousel"
      role="button"
      data-slide="prev"
    >
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="right carousel-control"
      href="#myCarousel"
      role="button"
      data-slide="next"
    >
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
    {/* The Modal */}
  </div>
  {/* //banner */}
  <div className="banner_bottom_agile_info">
    <div className="container">
      <div className="banner_bottom_agile_info_inner_w3ls">
        <div className="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
          <figure className="effect-roxy">
            <img src="/assets/images/br1.jpg" alt=" " className="img-responsive" />
            <figcaption>
              <h3>
                <span>F</span>all Ahead
              </h3>
              <p>New Arrivals</p>
            </figcaption>
          </figure>
        </div>
        <div className="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
          <figure className="effect-roxy">
            <img src="/assets/images/br2.jpg" alt=" " className="img-responsive" />
            <figcaption>
              <h3>
                <span>F</span>all Ahead
              </h3>
              <p>New Arrivals</p>
            </figcaption>
          </figure>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </div>
  {/* schedule-bottom */}
  <div className="schedule-bottom">
    <div className="col-md-6 agileinfo_schedule_bottom_left">
      <img src="/assets/images/mid.jpg" alt=" " className="img-responsive" />
    </div>
    <div className="col-md-6 agileits_schedule_bottom_right">
      <div className="w3ls_schedule_bottom_right_grid">
        <h3>
          Save up to <span>50%</span> in this week
        </h3>
        <p>
          Suspendisse varius turpis efficitur erat laoreet dapibus. Mauris
          sollicitudin scelerisque commodo.Nunc dapibus mauris sed metus finibus
          posuere.
        </p>
        <div className="col-md-4 w3l_schedule_bottom_right_grid1">
          <i className="fa fa-user-o" aria-hidden="true" />
          <h4>Customers</h4>
          <h5 className="counter">653</h5>
        </div>
        <div className="col-md-4 w3l_schedule_bottom_right_grid1">
          <i className="fa fa-calendar-o" aria-hidden="true" />
          <h4>Events</h4>
          <h5 className="counter">823</h5>
        </div>
        <div className="col-md-4 w3l_schedule_bottom_right_grid1">
          <i className="fa fa-shield" aria-hidden="true" />
          <h4>Awards</h4>
          <h5 className="counter">45</h5>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
    <div className="clearfix"> </div>
  </div>
  {/* //schedule-bottom */}
  {/* banner-bootom-w3-agileits */}
  <div className="banner-bootom-w3-agileits">
    <div className="container">
      <h3 className="wthree_text_info">
        What's <span>Trending</span>
      </h3>
      <div className="col-md-5 bb-grids bb-left-agileits-w3layouts">
        <a href="womens.html">
          <div className="bb-left-agileits-w3layouts-inner grid">
            <figure className="effect-roxy">
              <img src="/assets/images/br6.jpg" alt=" " className="img-responsive" />
              <figcaption>
                <h3>
                  <span>S</span>ale{" "}
                </h3>
                <p>Upto 55%</p>
              </figcaption>
            </figure>
          </div>
        </a>
      </div>
      <div className="col-md-7 bb-grids bb-middle-agileits-w3layouts">
        <a href="mens.html">
          <div className="bb-middle-agileits-w3layouts grid">
            <figure className="effect-roxy">
              <img
                src="/assets/images/br7.jpg"
                alt=" "
                className="img-responsive"
              />
              <figcaption>
                <h3>
                  <span>S</span>ale{" "}
                </h3>
                <p>Upto 55%</p>
              </figcaption>
            </figure>
          </div>
        </a>
        <a href="mens.html">
          <div className="bb-middle-agileits-w3layouts forth grid">
            <figure className="effect-roxy">
              <img
                src="/assets/images/nail11.jpg"
                alt=" "
                className="img-responsive"
              />
              <figcaption>
                <h3>
                  <span>S</span>ale{" "}
                </h3>
                <p>Upto 65%</p>
              </figcaption>
            </figure>
          </div>
        </a>
        <div className="clearfix" />
      </div>
    </div>
  </div>
  {/*/grids*/}
  <div className="agile_last_double_sectionw3ls">
    <div className="col-md-6 multi-gd-img multi-gd-text ">
      <a href="womens.html">
        <img src="/assets/images/br9.jpg" alt=" " />
        <h4>
          Flat <span>50%</span> offer
        </h4>
      </a>
    </div>
    <div className="col-md-6 multi-gd-img multi-gd-text ">
      <a href="womens.html">
        <img src="/assets/images/n1.jpg" alt=" " />
        <h4>
          Flat <span>50%</span> offer
        </h4>
      </a>
    </div>
    <div className="clearfix" />
  </div>
  {/*/grids*/}
  {/* /new_arrivals */}
  <div className="new_arrivals_agile_w3ls_info">
    <div className="container">
      <h3 className="wthree_text_info">
        New <span>Arrivals</span>
      </h3>
      <div id="horizontalTab">
        <ul className="resp-tabs-list">
          <li> Makeup</li>
          <li> Skin</li>
          <li> Hair</li>
          <li> Fragrance</li>
        </ul>
        <div className="resp-tabs-container">
          {/*/tab_one*/}
          <div className="tab1">
            <div className="col-md-3 product-men">
              <div className="men-pro-item simpleCart_shelfItem">
                <div className="men-thumb-item">
                  <img src="/assets/images/lip12.jpg" alt="" className="pro-image-front" style={{height:"300px", width:"300px"}} />
                  <img src="/assets/images/lip12.jpg" alt="" className="pro-image-back" style={{height:"300px", width:"300px"}} />
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
                    <a href="single.html">Eye Linar</a>
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
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/sub_2.jpg" alt="" className="pro-image-front" style={{height:"300px", width:"300px"}} />
                  <img src="/assets/images/sub_2.jpg" alt="" className="pro-image-back" style={{height:"300px", width:"300px"}} />
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
                    <a href="single.html">Hair Accessories</a>
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
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/pik1.jpg" alt="" className="pro-image-front"style={{height:"300px", width:"300px"}} />
                  <img src="/assets/images/pik1.jpg" alt="" className="pro-image-back" style={{height:"300px", width:"300px"}}/>
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
                    <a href="single.html">Makeup</a>
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
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/dior.png" alt="" className="pro-image-front" style={{height:"300px", width:"300px"}} />
                  <img src="/assets/images/dior.png" alt="" className="pro-image-back" style={{height:"300px", width:"300px"}}/>
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
                    <a href="single.html">Dior</a>
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
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/br1.jpg" alt="" className="pro-image-front"style={{height:"300px", width:"300px"}} />
                  <img src="/assets/images/br1.jpg" alt="" className="pro-image-back" style={{height:"300px", width:"300px"}}/>
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
                    <a href="single.html">Kit</a>
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
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/j4.png" alt="" className="pro-image-front" style={{height:"300px", width:"300px"}} />
                  <img src="/assets/images/j4.png" alt="" className="pro-image-back" style={{height:"300px", width:"300px"}} />
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
                    <a href="single.html">Ring </a>
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
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/c3.jpg" alt="" className="pro-image-front" style={{height:"300px", width:"300px"}} />
                  <img src="/assets/images/c3.jpg" alt="" className="pro-image-back" style={{height:"300px", width:"300px"}}/>
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
                    <a href="single.html">Cetaphil</a>
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
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
                  <img src="/assets/images/e4.png" alt="" className="pro-image-front" style={{height:"300px", width:"300px"}} />
                  <img src="/assets/images/e4.png" alt="" className="pro-image-back" style={{height:"300px", width:"300px"}}/>
                  <div className="men-cart-pro">
                    <div className="inner-men-cart-pro">
                      <a href="single.html" className="link-product-add-cart">
                        Linar
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
                        <input
                          type="hidden"
                          name="amount"
                          defaultValue="30.99"
                        />
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
          {/*//tab_one*/}
        
          
        </div>
      </div>
    </div>
  </div>
  {/* //new_arrivals */}
 
 
</>

    )
}