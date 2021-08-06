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
// import SignupVendor from './components/SignupVendor';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import ListofUser from './components/ListofUser';
import Electrician from './components/Electrician';
import Mechanic from './components/Mechanic';
import Plumber from './components/Plumber';
import Haircut from './components/Haircut';

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
              {/* <Route  path='/SignupVendor' component={SignupVendor} /> */}
              <Route  path='/ListofUser' component={ListofUser} /> 
              <Route path='/Electrician ' exact component={Electrician} />
              <Route path='/Mechanic ' exact component={Mechanic} />
              <Route path='/Plumber ' exact component={Plumber} />
              <Route path='/Haircut ' exact component={Haircut} />
            
              


          </Switch> 
          <Footer/>
          </div>
      </Router>
  );
}

export default App;
