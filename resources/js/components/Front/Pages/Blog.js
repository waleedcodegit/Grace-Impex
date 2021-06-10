import React, { Component } from 'react';
import Nav from '../NavBar'
import Footer from '../LandingComponents/Footer'

class Blog extends Component {
    render() {
        return (
           <div class="wrapper">
    <div class="preloader">
      <div class="loading"><span></span><span></span><span></span><span></span></div>
    </div>{/*-- /.preloader */}

    {/*-- =========================
        Header
    =========================== */}
    <Nav/>   {/*-- /.Header */}

    {/*-- ========================
       page title 
    =========================== */}
    <section class="page-title page-title-layout7 bg-overlay bg-overlay-2 bg-parallax text-center">
      <div class="bg-img"><img src="assets/images/page-titles/10.jpg" alt="background"/></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <h1 class="pagetitle__heading mb-0">Latest News</h1>
          </div>{/*-- /.col-xl-6 */}
        </div>{/*-- /.row */}
      </div>{/*-- /.container */}
    </section>{/*-- /.page-title */}

    {/*-- ======================
      Blog Grid
    ========================= */}
    <section class="blog-grid">
      <div class="container">
        <div class="row">
          {/*-- Blog Item #1 */}
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="blog-item">
              <div class="blog__img">
                <a href="blog-single-post.html">
                  <img src="assets/images/blog/grid/1.jpg" alt="blog image"/>
                </a>
              </div>{/*-- /.blog-img */}
              <div class="blog__content">
                <div class="blog__meta">
                  <div class="blog__meta-cat">
                    <a href="#">Oil & Gas</a><a href="#">Insights</a>
                  </div>{/*-- /.blog-meta-cat */}
                </div>{/*-- /.blog-meta */}
                <h4 class="blog__title"><a href="#">Importers achieve cost savings through the First Sale rule!</a></h4>
                <span class="blog__meta-date">Jan 20, 2020</span>
                <p class="blog__desc">The trade war currently ensuing between the US and several nations around the
                  globe, most fiercely with China, shows no signs of the first set of tariffs levied against solar...
                </p>
                <a href="blog-single-post.html" class="btn btn__secondary btn__link">
                  <span>Read More</span>
                  <i class="icon-arrow-right"></i>
                </a>
              </div>{/*-- /.blog-content */}
            </div>{/*-- /.blog-item */}
          </div>{/*-- /.col-lg-4 */}
          {/*-- Blog Item #2 */}
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="blog-item">
              <div class="blog__img">
                <a href="blog-single-post.html">
                  <img src="assets/images/blog/grid/2.jpg" alt="blog image"/>
                </a>
              </div>{/*-- /.blog-img */}
              <div class="blog__content">
                <div class="blog__meta">
                  <div class="blog__meta-cat">
                    <a href="#">Industry</a><a href="#">Construction</a>
                  </div>{/*-- /.blog-meta-cat */}
                </div>{/*-- /.blog-meta */}
                <h4 class="blog__title"><a href="#">Cargo flow through better supply chain visibility, control.</a></h4>
                <span class="blog__meta-date">Oct 18, 2020</span>
                <p class="blog__desc">Global provider connected products for consumers, and enterprises worldwide,
                  supply chain control is everything, provide visibility and traceability needed for...</p>
                <a href="blog-single-post.html" class="btn btn__secondary btn__link">
                  <span>Read More</span>
                  <i class="icon-arrow-right"></i>
                </a>
              </div>{/*-- /.blog-content */}
            </div>{/*-- /.blog-item */}
          </div>{/*-- /.col-lg-4 */}
          {/*-- Blog Item #3 */}
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="blog-item">
              <div class="blog__img">
                <a href="blog-single-post.html">
                  <img src="assets/images/blog/grid/3.jpg" alt="blog image"/>
                </a>
              </div>{/*-- /.blog-img */}
              <div class="blog__content">
                <div class="blog__meta">
                  <div class="blog__meta-cat">
                    <a href="#">Engineering</a><a href="#">Distribution</a>
                  </div>{/*-- /.blog-meta-cat */}
                </div>{/*-- /.blog-meta */}
                <h4 class="blog__title"><a href="#">Importance of specialized focus in portfolio, Oil & Gas</a></h4>
                <span class="blog__meta-date">Jan 20, 2020</span>
                <p class="blog__desc">Our team provides highly skilled & experienced portfolio managers who know the
                  intricacies of this vertical and focus on providing innovative solutions in Oil & Gas...</p>
                <a href="blog-single-post.html" class="btn btn__secondary btn__link">
                  <span>Read More</span>
                  <i class="icon-arrow-right"></i>
                </a>
              </div>{/*-- /.blog-content */}
            </div>{/*-- /.blog-item */}
          </div>{/*-- /.col-lg-4 */}
          {/*-- Blog Item #4 */}
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="blog-item">
              <div class="blog__img">
                <a href="blog-single-post.html">
                  <img src="assets/images/blog/grid/4.jpg" alt="blog image"/>
                </a>
              </div>{/*-- /.blog-img */}
              <div class="blog__content">
                <div class="blog__meta">
                  <div class="blog__meta-cat">
                    <a href="#">News</a><a href="#">Industry</a>
                  </div>{/*-- /.blog-meta-cat */}
                </div>{/*-- /.blog-meta */}
                <h4 class="blog__title"><a href="#">Changes to our Trade Credit Policy and Procedures</a></h4>
                <span class="blog__meta-date">Oct 24, 2017</span>
                <p class="blog__desc">The Atradius platform will provide us with a much deeper pool of research to
                  assist with assessment of new credit applications and credit limits...</p>
                <a href="blog-single-post.html" class="btn btn__secondary btn__link">
                  <span>Read More</span>
                  <i class="icon-arrow-right"></i>
                </a>
              </div>{/*-- /.blog-content */}
            </div>{/*-- /.blog-item */}
          </div>{/*-- /.col-lg-4 */}
          {/*-- Blog Item #5 */}
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="blog-item">
              <div class="blog__img">
                <a href="blog-single-post.html">
                  <img src="assets/images/blog/grid/5.jpg" alt="blog image"/>
                </a>
              </div>{/*-- /.blog-img */}
              <div class="blog__content">
                <div class="blog__meta">
                  <div class="blog__meta-cat">
                    <a href="#">Insights</a><a href="#">Industry</a>
                  </div>{/*-- /.blog-meta-cat */}
                </div>{/*-- /.blog-meta */}
                <h4 class="blog__title"><a href="#">New Additions to our great Metro trucks Fleet</a></h4>
                <span class="blog__meta-date">Oct 27, 2017</span>
                <p class="blog__desc">These new vehicles are all extra high body trucks, with a carrying height equal to
                  that of a semi trailer. This allows us to accommodate our clients with high freight...</p>
                <a href="blog-single-post.html" class="btn btn__secondary btn__link">
                  <span>Read More</span>
                  <i class="icon-arrow-right"></i>
                </a>
              </div>{/*-- /.blog-content */}
            </div>{/*-- /.blog-item */}
          </div>{/*-- /.col-lg-4 */}
          {/*-- Blog Item #6 */}
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="blog-item">
              <div class="blog__img">
                <a href="blog-single-post.html">
                  <img src="assets/images/blog/grid/6.jpg" alt="blog image"/>
                </a>
              </div>{/*-- /.blog-img */}
              <div class="blog__content">
                <div class="blog__meta">
                  <div class="blog__meta-cat">
                    <a href="#">News</a><a href="#">Logistics</a>
                  </div>{/*-- /.blog-meta-cat */}
                </div>{/*-- /.blog-meta */}
                <h4 class="blog__title"><a href="#">The new Driver Training & Recruitment Program</a></h4>
                <span class="blog__meta-date">Oct 24, 2017</span>
                <p class="blog__desc">If you know of anyone looking for a bigger opportunity, a fresh start, or just
                  something different, please have them contact our operations team now...</p>
                <a href="blog-single-post.html" class="btn btn__secondary btn__link">
                  <span>Read More</span>
                  <i class="icon-arrow-right"></i>
                </a>
              </div>{/*-- /.blog-content */}
            </div>{/*-- /.blog-item */}
          </div>{/*-- /.col-lg-4 */}
        </div>{/*-- /.row */}
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 text-center">
            <nav class="pagination-area">
              <ul class="pagination justify-content-center">
                <li><a class="current" href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#"><i class="icon-arrow-right"></i></a></li>
              </ul>
            </nav>{/*-- .pagination-area */}
          </div>{/*-- /.col-lg-12 */}
        </div>{/*-- /.row */}
      </div>{/*-- /.container */}
    </section>{/*-- /.blog Grid */}

    
    
    <button id="scrollTopBtn"><i class="fa fa-long-arrow-up"></i></button>
<Footer/>
  </div>
        );
    }
}

export default Blog;