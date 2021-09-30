import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link , NaviLink , Switch , Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Login from './components/Login';
import SignupCustomer from './components/SignupCustomer';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import ListofUser from './components/ListofUser';
import Electrician from './components/Electrician';
import Mechanic from './components/Mechanic';
import Plumber from './components/Plumber';
import Haircut from './components/Haircut';
import ContactUs from './/components/ContactUs';
import ServicesListing from './components/ServicesListing';
import ForgotPassword from './components/ForgotPassword';
import Allbusinessdetails from './components/Allbusinessdetails';
import ViewAllRequest from './components/ViewAllRequest';
import Cart from './components/Cart';


function App() {
  return (
      <Router>
          <div className="App">
          <Header/>
          <Switch> 
              
              <Route  path='/' exact component={Home} />
              <Route  path='/About' component={About} />
              <Route  path='/Contact' component={Contact} />
              <Route  path='/Services' component={Services} />
              <Route  path='/Pricing' component={Pricing} />
              <Route  path='/Portfolio' component={Portfolio} />
              <Route  path='/Login' component={Login} />
              <Route  path='/SignupCustomer' component={SignupCustomer} />
              <Route  path='/Dashboard' component={Dashboard} /> 
             <Route  path='/ListofUser' component={ListofUser} /> 
              <Route  path='/ServicesListing/:cat_name' component={ServicesListing} /> 
              <Route path='/ContactUs' exact component={ContactUs} />
              <Route path='/ForgotPassword' exact component={ForgotPassword} />
              <Route path='/Allbusinessdetails' exact component={Allbusinessdetails} />
              <Route path='/ViewAllRequest' exact component={ViewAllRequest} />
              <Route path='/Cart' exact component={Cart} />
           


          </Switch> 
          {/* <Footer/> */}
          </div>
      </Router>
  );
}

export default App;
