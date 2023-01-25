import React from 'react';
import AdminSidebar from './Admin/Admin_Sidebar'
import { Switch,BrowserRouter,Route} from 'react-router-dom';
import Index from './Front/Index'
import Shop from './Front/Products/Shop'
import Product from './Front/Products/Product'
import CustomerAccount from './Front/User/CustomerAccount';
import Cart from './Front/Products/Cart';
import Checkout from './Front/Products/Checkout';
import Faq from './Front/Pages/Faq'
import PrivacyPolicy from './Front/Pages/PrivacyPolicy'
import Termsandcon from './Front/Pages/TermsandConditions'
import AdminLogin from './Admin/Login'
import AboutUs from './Front/Pages/AboutUs'
import Footer from './Front/LandingComponents/Footer'
import Process from './Front/Pages/Process'
import Blog from './Front/Pages/Blog'
import Enquiry from './Front/Pages/Enquiry'
import Contactus from './Front/Pages/ContactUs'
import Products from './Front/Pages/Products'
import Clients from './Front/Pages/Clients'
import PetBottels from './Front/LandingComponents/PetBottels';
import PlasticCaps from './Front/LandingComponents/PlasticCaps';
import ProductsPage from './Front/Products/ProductsPage';
import ecatalogue from './Front/Pages/ecatalogue';
import newclients from './Front/Pages/newclients';
import exhibits from './Front/Pages/exhibits';
import exhibits_ from './Front/Pages/exhibits_';
function App(props) {
  return (
    <BrowserRouter  >
      <div className="main_div">
        <Switch>
          <Route  path="/adminpanel"  component={AdminSidebar}/>  
          <Route  exact path="/"  component={Index}/>
          <Route  exact path="/products"  component={Products}/>
          <Route   path="/Product/:id"  component={Product}/>
          <Route  exact path="/Aboutus"  component={AboutUs}/>
          <Route  exact path="/process"  component={Process}/>
          <Route  exact path="/enquiry"  component={Enquiry}/>
          <Route  exact path="/Contactus"  component={Contactus}/>
          <Route  exact path="/blogs"  component={Blog}/>
          <Route  exact path="/Shop"  component={Shop}/>
          <Route  exact path="/faqs"  component={Faq}/>
          <Route  exact path="/PrivacyPolicy"  component={PrivacyPolicy}/>
          <Route  exact path="/TermsAndconditions"  component={Termsandcon}/>
          <Route  exact path="/CustomerAccount"  component={CustomerAccount}/>
          <Route  exact path="/Cart"  component={Cart}/>
          <Route  exact path="/Checkout"  component={Checkout}/>
          <Route  exact path="/AdminLogin"  component={AdminLogin}/>
          <Route  exact path="/Clients"  component={Clients}/>
          <Route  exact path="/pet-bottels"  component={PetBottels}/>
          <Route  exact path="/plastic-caps"  component={PlasticCaps}/>
          <Route  exact path="/products/:slug"  component={ProductsPage}/>
          <Route  exact path="/ecatalogue"  component={ecatalogue}/>
          <Route exact path="/newclients" component={newclients}/>
          <Route exact path="/exhibits" component={exhibits}/>
          <Route exact path="/exhibits_" component={exhibits_}/>


        </Switch> 
      </div>
    </BrowserRouter>
  );
}

export default App;