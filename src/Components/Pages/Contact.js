export default function Contact(){
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
        C<span>ontact Us </span>
      </h3>
      {/*/w3_short*/}
      <div className="services-breadcrumb">
        <div className="agile_inner_breadcrumb">
          <ul className="w3_short">
            <li>
              <a href="index.html">Home</a>
              <i>|</i>
            </li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      {/*//w3_short*/}
    </div>
  </div>
  {/*/contact*/}
  <div className="banner_bottom_agile_info">
    <div className="container">
      <div className="contact-grid-agile-w3s">
        <div className="col-md-4 contact-grid-agile-w3">
          <div className="contact-grid-agile-w31">
            <i className="fa fa-map-marker" aria-hidden="true" />
            <h4>Address</h4>
            <p>
              12K Street, 45 Building Road <span>California, USA.</span>
            </p>
          </div>
        </div>
        <div className="col-md-4 contact-grid-agile-w3">
          <div className="contact-grid-agile-w32">
            <i className="fa fa-phone" aria-hidden="true" />
            <h4>Call Us</h4>
            <p>
              +1234 758 839<span>+1273 748 730</span>
            </p>
          </div>
        </div>
        <div className="col-md-4 contact-grid-agile-w3">
          <div className="contact-grid-agile-w33">
            <i className="fa fa-envelope-o" aria-hidden="true" />
            <h4>Email</h4>
            <p>
              <a href="mailto:info@example.com">info@example1.com</a>
              <span>
                <a href="mailto:info@example.com">info@example2.com</a>
              </span>
            </p>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
  <div className="contact-w3-agile1 map" data-aos="flip-right">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100949.24429313939!2d-122.44206553967531!3d37.75102885910819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1472190196783"
      className="map"
      style={{ border: 0 }}
      allowFullScreen=""
    />
  </div>
  <div className="banner_bottom_agile_info">
    <div className="container">
      <div className="agile-contact-grids">
        <div className="agile-contact-left">
          <div className="col-md-6 address-grid">
            <h4>
              For More <span>Information</span>
            </h4>
            <div className="mail-agileits-w3layouts">
              <i className="fa fa-volume-control-phone" aria-hidden="true" />
              <div className="contact-right">
                <p>Telephone </p>
                <span>+1 (100)222-23-33</span>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="mail-agileits-w3layouts">
              <i className="fa fa-envelope-o" aria-hidden="true" />
              <div className="contact-right">
                <p>Mail </p>
                <a href="mailto:info@example.com">info@example.com</a>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="mail-agileits-w3layouts">
              <i className="fa fa-map-marker" aria-hidden="true" />
              <div className="contact-right">
                <p>Location</p>
                <span>7784 Diamonds street, California, US.</span>
              </div>
              <div className="clearfix"> </div>
            </div>
            <ul className="social-nav model-3d-0 footer-social w3_agile_social two contact">
              <li className="share">SHARE ON : </li>
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
          <div className="col-md-6 contact-form">
            <h4 className="white-w3ls">
              Contact <span>Form</span>
            </h4>
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
                <input type="text" name="Subject" required="" />
                <label>Subject</label>
                <span />
              </div>
              <div className="styled-input">
                <textarea name="Message" required="" defaultValue={""} />
                <label>Message</label>
                <span />
              </div>
              <input type="submit" defaultValue="SEND" />
            </form>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
  {/*//contact*/}
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