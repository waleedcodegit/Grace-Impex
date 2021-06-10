import React, { Component } from 'react';
import Nav from '../NavBar'
import Footer from '../LandingComponents/Footer'

class Process extends Component {
    render() {
        return (
            <div class="wrapper">
    <div class="preloader">
      <div class="loading"><span></span><span></span><span></span><span></span></div>
    </div>{/*-- /.preloader */}

    {/*-- =========================
        Header
    =========================== */}
    <Nav/>{/*-- /.Header */}

    {/*-- ========================
       page title 
    =========================== */}
    <section class="page-title page-title-layout1 bg-overlay bg-overlay-3 bg-parallax text-center">
      <div class="bg-img"><img src="assets/images/page-titles/4.jpg" alt="background"/></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-3">
            <nav>
              <ol class="breadcrumb justify-content-center mb-20">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item"><a href="about-us.html">Company</a></li>
                <li class="breadcrumb-item active" aria-current="page">Process</li>
              </ol>
            </nav>
          </div>{/*-- /.col-xl-6 */}
        </div>{/*-- /.row */}
      </div>{/*-- /.container */}
    </section>{/*-- /.page-title */}

    {/*-- =========================
      fancybox-layout1 
      =========================== */}
    <section class="fancybox-layout1 pt-10 pb-70">
      <div class="container">
      <div class="row">
      <h2 class="heading__title">Process</h2>
      <div class="col-sm-6 col-md-8 col-lg-12">
      <p class="heading__desc mb-30 mt-20">Perhaps the most important of the plastic materials that may be oriented to improve physical properties is "PET", the abbreviation for Polyethylene Terephthalate. The familiar PET carbonated soft drink bottle, which has become an indispensable part of our lives, is made by the stretch blow molding process. In fact ASB stands for Aoki Stretch Blow, after the founder of the company. The superb properties of PET make it ideal for packaging a whole host of products ranging from beverages and food products to pharmaceuticals and cosmetics.</p>
      <p class="heading__desc mb-30 mt-20">The high strength and creep resistance of PET makes it ideal for packaging carbonated soft drinks, while the crystal clarity emphasizes the purity of bottled water. PET containers have many other advantages too and are now used not only for beverages but also for food and household products, cosmetics, pharmaceuticals and agricultural chemicals.</p>
      </div>
      </div>
        <div class="row">
          {/*-- fancybox item #1 */}
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="fancybox-item">
              <div class="fancybox__content">
                <h4 class="fancybox__title">Crystal clear</h4>
                <p class="fancybox__desc">Products look good, pure and healthy. Sparkling PET bottles attract attention.</p>
              </div>{/*-- /.fancybox-content */}
            </div>{/*-- /.fancybox-item */}
          </div>{/*-- /.col-lg-3 */}
          {/*-- fancybox item #2 */}
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="fancybox-item">
              <div class="fancybox__content">
                <h4 class="fancybox__title">Pure</h4>
                <p class="fancybox__desc">Products taste good. PET complies with international food contact regulations.</p>
              </div>{/*-- /.fancybox-content */}
            </div>{/*-- /.fancybox-item */}
          </div>{/*-- /.col-lg-3 */}
          {/*-- fancybox item #3 */}
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="fancybox-item">
              <div class="fancybox__content">
                <h4 class="fancybox__title">Safe</h4>
                <p class="fancybox__desc">PET bottles are tough and virtually unbreakable. If they do fail, they split, not shatter. Their high impact and tensile strength makes them ideal for carbonated products.</p>
              </div>{/*-- /.fancybox-content */}
            </div>{/*-- /.fancybox-item */}
          </div>{/*-- /.col-lg-3 */}
          {/*-- fancybox item #4 */}
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="fancybox-item">
              <div class="fancybox__content">
                <h4 class="fancybox__title">Good barrier</h4>
                <p class="fancybox__desc">The low permeability of PET to oxygen, carbon dioxide and water means that it protects and maintains the integrity of products giving a good shelf life. PET also has good chemical resistance.</p>
              </div>{/*-- /.fancybox-content */}
            </div>{/*-- /.fancybox-item */}
          </div>{/*-- /.col-lg-3 */}
        </div>
        <div class="row">
          {/*-- fancybox item #1 */}
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="fancybox-item">
              <div class="fancybox__content">
                <h4 class="fancybox__title">Lightweight</h4>
                <p class="fancybox__desc">One tenth the weight of an equivalent glass pack, PET bottles reduce shipping costs, and because the material in the wall is thinner, shelf utilization is improved by 25% on volume compared to glass. High strength, low weight PET bottles can be stacked as high as glass.</p>
              </div>{/*-- /.fancybox-content */}
            </div>{/*-- /.fancybox-item */}
          </div>{/*-- /.col-lg-3 */}
          {/*-- fancybox item #2 */}
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="fancybox-item">
              <div class="fancybox__content">
                <h4 class="fancybox__title">No leakage</h4>
                <p class="fancybox__desc">Absolute closure integrity is possible because of the injection molded neck finish. The absence of a weld line in the base means that PET bottles don't leak.</p>
              </div>{/*-- /.fancybox-content */}
            </div>{/*-- /.fancybox-item */}
          </div>{/*-- /.col-lg-3 */}
          {/*-- fancybox item #3 */}
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="fancybox-item">
              <div class="fancybox__content">
                <h4 class="fancybox__title">Design flexibility</h4>
                <p class="fancybox__desc">Suitable for containers of all shapes, sizes, neck finishes, designs and colors.</p>
              </div>{/*-- /.fancybox-content */}
            </div>{/*-- /.fancybox-item */}
          </div>{/*-- /.col-lg-3 */}
          {/*-- fancybox item #4 */}
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="fancybox-item">
              <div class="fancybox__content">
                <h4 class="fancybox__title">Recyclable</h4>
                <p class="fancybox__desc">Used PET bottles can be washed, granulated into flakes and reshaped as PET bottles or employed as material for strapping, carpeting, fiber filling, etc. Specially designed thick-wall bottles can be washed, refilled and reused. PET is made from the same three elements (carbon, oxygen, and hydrogen) as paper, and contains no toxic substances. When burned, it produces carbon dioxide gas and water, leaving no toxic residues.</p>
              </div>{/*-- /.fancybox-content */}
            </div>{/*-- /.fancybox-item */}
          </div>{/*-- /.col-lg-3 */}
        </div>
        <div class="row">
        	<div class="col-sm-12">
                    <h4 class="contact__panel-title">How PET Bottles Are Made</h4>
                    <p class="contact__panel-desc mb-40">Six essential steps to stretch blow molding a PET bottle.</p>
                  </div>
        </div>
        <div class="row">
          {/*-- fancybox item #1 */}
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="fancybox-item">
              <div class="fancybox__content">
                <h4 class="fancybox__title">Drying the PET</h4>
                <p class="fancybox__desc">PET absorbs moisture from the atmosphere. This must be removed by a dehumidifying drying before processing.</p>
              </div>{/*-- /.fancybox-content */}
            </div>{/*-- /.fancybox-item */}
          </div>{/*-- /.col-lg-3 */}
          {/*-- fancybox item #2 */}
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="fancybox-item">
              <div class="fancybox__content">
                <h4 class="fancybox__title">Plasticizing the PET</h4>
                <p class="fancybox__desc">Dried PET pellets are compressed and melted by a rotating screw.</p>
              </div>{/*-- /.fancybox-content */}
            </div>{/*-- /.fancybox-item */}
          </div>{/*-- /.col-lg-3 */}
          {/*-- fancybox item #3 */}
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="fancybox-item">
              <div class="fancybox__icon">
                <img src="assets/images/process/3.gif"/>
              </div>{/*-- /.fancybox-icon */}
              <div class="fancybox__content">
                <h4 class="fancybox__title">Injection molding the perform</h4>
                <p class="fancybox__desc">Molten PET is injected into the injection cavity and cooled rapidly to form a "preform". (The test-tube-like form from which bottles are blown is known as a preform) </p>
              </div>{/*-- /.fancybox-content */}
            </div>{/*-- /.fancybox-item */}
          </div>{/*-- /.col-lg-3 */}
          {/*-- fancybox item #4 */}
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="fancybox-item">
              <div class="fancybox__icon">
                <img src="assets/images/process/4.gif"/>
              </div>{/*-- /.fancybox-icon */}
              <div class="fancybox__content">
                <h4 class="fancybox__title">Optimizing the preform temperature</h4>
                <p class="fancybox__desc">The temperature of the preform is adjusted to the correct profile for blowing. </p>
              </div>{/*-- /.fancybox-content */}
            </div>{/*-- /.fancybox-item */}
          </div>{/*-- /.col-lg-3 */}
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="fancybox-item">
              <div class="fancybox__icon">
                <img src="assets/images/process/5.gif"/>
              </div>{/*-- /.fancybox-icon */}
              <div class="fancybox__content">
                <h4 class="fancybox__title">Stretch blow molding the container</h4>
                <p class="fancybox__desc">The hot preform is simultaneously stretched and blown (thereby orienting the crystals of and strengthening the PET*) into a shaped blow mold to form a tough, lightweight container.</p>
              </div>{/*-- /.fancybox-content */}
            </div>{/*-- /.fancybox-item */}
          </div>
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="fancybox-item">
              <div class="fancybox__icon">
                <img src="assets/images/process/6.gif"/>
              </div>{/*-- /.fancybox-icon */}
              <div class="fancybox__content">
                <h4 class="fancybox__title">Container ejection</h4>
                <p class="fancybox__desc">The finished container is ejected.</p>
              </div>{/*-- /.fancybox-content */}
            </div>{/*-- /.fancybox-item */}
          </div>
        </div>{/*-- /.row */}
        <div class="row">
        <p class="heading__desc mb-30 mt-20">How are the physical properties of PET improved by stretching? PET that is heated to a temperature where its chain-like molecules are sufficiently mobile to uncoil instead of breaking when extended, can be oriented by stretching. Stretching applied from two directions at right angles, as in stretch blow molding, gives biaxial orientation. Oriented PET contains closely packed chains aligned in the directions of stretch. The material is stronger because the molecules act together instead of individually. The tensile strength of oriented PET is several times that of the unstretched material and the impact strength, barrier and chemical resistance are also significantly improved, so bottles can be lighter without sacrificing performance. </p>
        <p class="heading__desc mb-30 mt-20">The process starts with the raw granules of PET (looking like grains of rice) which must be properly dried before they are melted and injection molded to form the preform. Once the PET has cooled slightly and hardened, the injection cavity is opened, and while still held by the neck, the hot preforms are moved to the Conditioning Station where slight temperature adjustments can be made to ensure they blow correctly.</p>
        <p class="heading__desc mb-30 mt-20">The hot preforms are moved between the open blow molds. Once the molds have closed, the Stretch Rods stretch the preform to the length of the mold, and at the same time, high-pressure air inflates the preform like a balloon. Once the hot PET touches the inside of the blow mold, it is transformed into a rigid, sparkling bottle with a high-precision injection-molded neck-finish. This process is known as the One-Step Process, and was developed by ASB. The One-Step Process is extremely versatile and can be used to make a wide variety of container shapes and sizes.</p>
        <p class="heading__desc mb-30 mt-20">Conventional One-Step machines have one blow cavity for each injection cavity, but this means that the blow molds are under-utilized, as the injection molding stage takes longer than the blowing process. Also, as machines are designed with more and more cavities to produce higher outputs, the machines had to become larger and larger and it was not long before the practical limit on size was reached.</p>
        <p class="heading__desc mb-30 mt-20">Two-Step systems avoid this problem by pairing injection molding and reheat blow machines having similar preform and bottle outputs.</p>
        
        </div>
        <div class="row">
      <h2 class="heading__title">TYPES OF MACHINES FOR THE MANUFACTURING OF P.E.T. BOTTLES</h2>
      
      <div class="col-sm-4 col-md-6 col-lg-8">
      
      <p class="heading__desc mb-30 mt-20">Until very recently there were considered to be only two types of stretch blow molding system: One-Step and Two-Step. With the first, all processes are completed on one integrated machine. This means the injection-molded preform is withdrawn from the injection cavity while still hot enough to be stretch blown to form the bottle. No extra heating is required, and since preforms are not stockpiled to be blown at a later date, but are freshly molded every time, there is no risk of surface damage from preforms knocking together during storage or transportation.</p>
      
      </div>
      <div class="col-sm-4 col-md-6 col-lg-4"><img src="assets/images/process/photo_1step.jpg"/></div>
      <div class="col-sm-4 col-md-6 col-lg-12">
      <p class="heading__desc mb-30 mt-20">In contrast, the Two-Step system uses two separate machines: an injection molding machine for making the preforms, and a reheat blow molding machine to reheat the preforms from cold and blow the bottles. The requirement for a preform heating system means the Two-Step process has a lower thermal efficiency.</p>
      </div>
      </div>
      </div>{/*-- /.container */}
    </section>{/*-- /.fancybox-layout1  */}

    {/*-- ========================
      Footer
    ========================== */}
    {/*-- /.Footer */}
    <button id="scrollTopBtn"><i class="fa fa-long-arrow-up"></i></button>
<Footer/>
  </div>
        );
    }
}

export default Process;