import React, { Component } from 'react';
import Nav from '../NavBar';
import Footer from '../LandingComponents/Footer';


class newclients extends Component {
    render() {
        return (
            <div>
                <div class="wrapper">
                    <div class="preloader">
                        <div class="loading"><span></span><span></span><span></span><span></span></div>
                    </div>
                    <Nav />

                    {/*-- ========================page title=========================== -*/}
                    <section class="page-title page-title-layout1 bg-overlay bg-overlay-2 bg-parallax">
                        <div class="bg-img"><img src="assets/images/page-titles/page_title_new.jpg" alt="background" /></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                                    <span class="pagetitle__subheading">Grace Impex</span>
                                    <h1 class="pagetitle__heading">Our Clients</h1>
                                </div>{/*-- /.col-xl-6 -*/}
                            </div>{/*-- /.row -*/}
                        </div>{/*-- /.container -*/}
                    </section>{/*-- /.page-title -*/}

                    <div className="container">
                        {/* <h2 className="pagetitle__heading">Our  Partners</h2> */}
                        <div class="row align-items-center mt-5">
                            <div class="col-sm-12 col-md-12 col-lg-12">
                                <h1 class="heading__title text-center mt-3">Agro Chemicals</h1>
                            </div>
                        </div>
                        <section className="customer-logos slider mb-5">
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Agrica Chemicals.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Agricom International.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Agrofena (PVT) LTD.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Agrow Limited.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/AMB Agro Pesticide.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Arrow International.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Crop Solution Sciences.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Engro Fertilizers.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Fast Agro Chemicals.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Four Brother Agri Services.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Friends Environmental Solutions.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/GreenLet International.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Hextar Chemicals.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/ICI Pakistan.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Imperial Crop Sciences (PVT) Ltd.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/JMG CM CO (SMC-PVT) Limited.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Khushal Agro.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Kissan Agro.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Marflex Chemicals.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Orange Protecion (PVt) Limited.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Proface Chemicals.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/RASF Chemicals.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Rudolf Life Sciences (PVT) Limitd.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Sanabel Venture (PVT) LTD.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Sayban Seed Corporation.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Star Agro.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Star Industries Private Limited.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Sun Crop Pesticide.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Swat Agro Chemicals.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Tara Crop Sciences (PVt) Ltd.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Tara Imperial Industries (PVT) Ltd.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Tricon Agro Chemicals.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Unifoster.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Ventage Chemicals.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Ventus Agro (PVT) Limited.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Welldone International.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/Zhengbang Agriculter Pakistan (PVT) Limited.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/AgroChemical/ZR Engineering (Pest Control).jpg" /></div>
                        </section>
                    </div>
                    <div className="container">
                        <div class="row align-items-center mt-5">
                            <div class="col-sm-12 col-md-12 col-lg-12">
                                <h1 class="heading__title text-center mt-3">Cosmetics</h1>
                            </div>
                        </div>
                        <section className="customer-logos slider mb-5">
                            <div className="slide"><img src="/assets/images/logo/Cosmetics/Adore Cosmetics.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Cosmetics/Aura Crafts.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Cosmetics/Berg Amla.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Cosmetics/Biocos Cosmetics.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Cosmetics/BMA Pharma.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Cosmetics/Body & Blast.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Cosmetics/Bristol Mayer Biotech Pakistan.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Cosmetics/CoNatural Beauty (PVT) LTD.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Cosmetics/DZ Cosmetics.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Cosmetics/English Pharma.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Cosmetics/Evyol Group.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Cosmetics/Hira Plastic.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Cosmetics/Marhaba.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Cosmetics/Maya Cosmetics.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Cosmetics/Organiks Plus.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Cosmetics/Venus Aesthetics.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Cosmetics/Waleed Tech (PVT) Limited.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Cosmetics/Wilshire Labs (Pvt) LTD.jpg" /></div>
                        </section>
                    </div>
                    <div className="container">
                        <div class="row align-items-center mt-5">
                            <div class="col-sm-12 col-md-12 col-lg-12">
                                <h1 class="heading__title text-center mt-3">FMCG</h1>
                            </div>
                        </div>
                        <section className="customer-logos slider mb-5">
                            <div className="slide"><img src="/assets/images/logo/FMCG/Focus & Rulz Pharma.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/FMCG/ICI Pakistan.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/FMCG/Qarshi Industries.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/FMCG/Sharooq Pharmaceuticals.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/FMCG/Shezan International.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/FMCG/SRC (PVT.) Limited.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/FMCG/Waleed Tech (PVT) Limited.jpg" /></div>
                        </section>
                    </div>
                    <div className="container">
                        <div class="row align-items-center mt-5">
                            <div class="col-sm-12 col-md-12 col-lg-12">
                                <h1 class="heading__title text-center mt-3">Pharmaceuticals</h1>
                            </div>
                        </div>
                        <section className="customer-logos slider mb-5">
                            <div className="slide"><img src="/assets/images/logo/Pharmaceuticals/AM International.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Pharmaceuticals/Bell More Aromatics.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Pharmaceuticals/Faisons-Meilleur.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Pharmaceuticals/Flavia International.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Pharmaceuticals/Focus & Rulz Pharma.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Pharmaceuticals/Laraib Enterpriser.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Pharmaceuticals/Synarome (PVT) Limited.jpg" /></div>
                        </section>
                    </div>
                    <div className="container">
                        <div class="row align-items-center mt-5">
                            <div class="col-sm-12 col-md-12 col-lg-12">
                                <h1 class="heading__title text-center mt-3">PreForms</h1>
                            </div>
                        </div>
                        <section className="customer-logos slider mb-5">
                            <div className="slide"><img src="/assets/images/logo/Preforms/Engi Plastic Industries (PVT) LTD.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Preforms/Hira Plastic.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Preforms/Millat Industries (PVT) Limited.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Preforms/Mughal Techno Plas.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Preforms/Natioal Precission Platic.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Preforms/Pak Pet Closures.jpg" /></div>
                            <div className="slide"><img src="/assets/images/logo/Preforms/Unipet (PVT.) LTD.jpg" /></div>
                        </section>
                    </div>



                    {/*-- ========================Footer========================== -*/}
                    <Footer />

                    <button id="scrollTopBtn"><i class="fa fa-long-arrow-up"></i></button>

                </div>

            </div>
        );
    }
}

export default newclients;