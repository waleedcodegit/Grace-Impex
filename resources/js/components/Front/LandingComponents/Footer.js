import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
     <footer class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-3 col-xl-4 footer__widget footer__widget-about">
              <div class="footer__widget-content">
                <img src="assets/images/logo/logo-footer.png" alt="logo" class="mb-30"/>
                <p class="mb-20" style={{color:"white"}}>M/S GRACE IMPEX was established over a decade ago with an main aim of producing P.E.T. Bottles to be used for packaging purposes.</p>
                <ul class="social__icons list-unstyled">
                  <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer__widget footer__widget-nav">
              <h6 class="footer__widget-title">Products</h6>
              <div class="footer__widget-content">
                <nav>
                  <ul class="list-unstyled">
                    <li><a href="#">P.E.T. Bottles</a></li>
                    <li><a href="#">Containers</a></li>
                    <li><a href="#">Caps for P.E.T. Bottles</a></li>
                    <li><a href="#">Measuring Cups</a></li>
                    <li><a href="#">Stopper Seals</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer__widget footer__widget-nav">
              <h6 class="footer__widget-title">Grace Impex</h6>
              <div class="footer__widget-content">
                <nav>
                  <ul class="list-unstyled">
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="leadership-team.html">Meet Our Team</a></li>
                    <li><a href="blog.html">News & Media</a></li>
                    <li><a href="projects-grid.html">Products</a></li>
                    <li><a href="contacs.html">Contacts</a></li>
                    <li><a href="careers.html">Careers</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 footer__widget footer__widget-newsletter">
              <h6 class="footer__widget-title">Newsletter</h6>
              <div class="footer__widget-content">
                <p style={{color:"white"}}>Sign up for industry alerts, our latest news, thoughts, and insights from Grace Impex.</p>
                <form class="widget__newsletter-form">
                  <div class="form-group mb-0">
                    <input type="text" class="form-control" placeholder="Your Email Address"/>
                    <button type="submit" class="btn btn__primary">
                      <i class="icon-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
              <p class="text-right footer__more-info mt-20 mb-0" style={{color:"white"}}>Have a question? <a href="#">Click here</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-12 col-md-12 col-lg-12 d-flex flex-wrap justify-content-between">
              <nav>
                {/* <!--<ul class="footer__copyright-links list-unstyled d-flex flex-wrap mb-0">
                  <li><a href="#">Terms & Conditions </a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Sitemap</a></li>
                </ul>--> */}
              </nav>
              <p class="mb-0 color-white"> © 2020 Grace Impex. Powered by
                <a href="https://www.wangardinternational.com/" target="_blank">wangard international</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
  }
}
