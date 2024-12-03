
export default function About(){
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
        About <span>Us </span>
      </h3>
      {/*/w3_short*/}
      <div className="services-breadcrumb">
        <div className="agile_inner_breadcrumb">
          <ul className="w3_short">
            <li>
              <a href="index.html">Home</a>
              <i>|</i>
            </li>
            <li>About</li>
          </ul>
        </div>
      </div>
      {/*//w3_short*/}
    </div>
  </div>
  {/* /banner_bottom_agile_info */}
  <div className="banner_bottom_agile_info">
    <div className="container">
      <div className="agile_ab_w3ls_info">
        <div className="col-md-6 ab_pic_w3ls">
          <img src="/assets/images/about1.png" alt=" " className="img-responsive"/>
        </div>
        <div className="col-md-6 ab_pic_w3ls_text_info">
          <h5>
            About Our cosmo <span> Collection</span>{" "}
          </h5>
          <p>
          Cosmetics are composed of mixtures of chemical compounds derived
           from either natural sources or synthetically created ones.
            Cosmetics have various purposes, including personal care and skin care.
             These can be used to cleanse or protect the body and skin.
             as well as replenish it, through the use of body lotions,
            cleansers, toners, serums,
          </p>
         
        </div>
        <div className="clearfix" />
      </div>
      <div className="banner_bottom_agile_info_inner_w3ls">
        <div className="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
          <figure className="effect-roxy">
            <img src="/assets/images/about2.jpg" alt=" " className="img-responsive" />
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
            <img src="/assets/images/about3.jpg" alt=" " className="img-responsive" />
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
  {/* team */}
  <div className="banner_bottom_agile_info team">
    <div className="container">
      <h3 className="wthree_text_info">
        Our Team <span>Members</span>
      </h3>
      <div className="inner_w3l_agile_grids">
        <div className="col-md-3 team-grids">
          <div className="thumbnail team-w3agile">
            <img src="/assets/images/t1.jpg" className="img-responsive" alt="" />
            <div className="social-icons team-icons right-w3l fotw33">
              <div className="caption">
                <h4>Joanna Vilken</h4>
                <p>Add Short Description</p>
              </div>
              <ul className="social-nav model-3d-0 footer-social w3_agile_social two">
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
          </div>
        </div>
        <div className="col-md-3 team-grids">
          <div className="thumbnail team-w3agile">
            <img src="/assets/images/t2.jpg" className="img-responsive" alt="" />
            <div className="social-icons team-icons right-w3l fotw33">
              <div className="caption">
                <h4>Anika Mollik</h4>
                <p>Add Short Description</p>
              </div>
              <ul className="social-nav model-3d-0 footer-social w3_agile_social two">
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
          </div>
        </div>
        <div className="col-md-3 team-grids">
          <div className="thumbnail team-w3agile">
            <img src="/assets/images/t3.jpg" className="img-responsive" alt="" />
            <div className="social-icons team-icons right-w3l fotw33">
              <div className="caption">
                <h4>Megali Deo</h4>
                <p>Add Short Description</p>
              </div>
              <ul className="social-nav model-3d-0 footer-social w3_agile_social two">
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
          </div>
        </div>
        <div className="col-md-3 team-grids">
          <div className="thumbnail team-w3agile">
            <img src="/assets/images/t4.jpg" className="img-responsive" alt="" />
            <div className="social-icons team-icons right-w3l fotw33">
              <div className="caption">
                <h4>Retas Word</h4>
                <p>Add Short Description</p>
              </div>
              <ul className="social-nav model-3d-0 footer-social w3_agile_social two">
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
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
  {/* //team */}
  {/* schedule-bottom */}
  <div className="schedule-bottom">
    <div className="col-md-6 agileinfo_schedule_bottom_left">
      <img src="/assets/images/mid1.jpg" alt=" " className="img-responsive" />
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
        <a href="women.html">
          <div className="bb-left-agileits-w3layouts-inner grid">
            <figure className="effect-roxy">
              <img src="/assets/images/bb1.jpg" alt=" " className="img-responsive" />
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
        <div className="bb-middle-agileits-w3layouts grid">
          <figure className="effect-roxy">
            <img src="/assets/images/bottom3.jpg" alt=" " className="img-responsive" />
            <figcaption>
              <h3>
                <span>S</span>ale{" "}
              </h3>
              <p>Upto 55%</p>
            </figcaption>
          </figure>
        </div>
        <div className="bb-middle-agileits-w3layouts forth grid">
          <figure className="effect-roxy">
            <img src="/assets/images/bottom4.jpg" alt=" " className="img-responsive" />
            <figcaption>
              <h3>
                <span>S</span>ale{" "}
              </h3>
              <p>Upto 65%</p>
            </figcaption>
          </figure>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </div>
  {/*/grids*/}
  <div className="agile_last_double_sectionw3ls">
    <div className="col-md-6 multi-gd-img multi-gd-text ">
      <a href="womens.html">
        <img src="/assets/images/bot_1.jpg" alt=" " />
        <h4>
          Flat <span>50%</span> offer
        </h4>
      </a>
    </div>
    <div className="col-md-6 multi-gd-img multi-gd-text ">
      <a href="womens.html">
        <img src="/assets/images/bot_2.jpg" alt=" " />
        <h4>
          Flat <span>50%</span> offer
        </h4>
      </a>
    </div>
    <div className="clearfix" />
  </div>
  {/*/grids*/}
  {/* /we-offer */}
  <div className="sale-w3ls">
    <div className="container">
      <h6>
        We Offer Flat <span>40%</span> Discount
      </h6>
      <a className="hvr-outline-out button2" href="single.html">
        Shop Now{" "}
      </a>
    </div>
  </div>
  {/* //we-offer */}
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