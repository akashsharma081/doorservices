import react from 'react';
// import $ from 'jquery';
import {NavLink, Route , Switch,Link} from 'react-router-dom';
import SignupCustomer from './SignupCustomer';
import ListofUser from './ListofUser';
import { useSelector, useDispatch } from 'react-redux';
import  BusinessDetails  from './BusinessDetails';
import './Dashboard.css';
import ContactUs from './ContactUs';
import React from 'react'
import VendorService from './VendorService';

export default function Dashboard(props) {
    const user = useSelector(state => state.user);
    // if(user && user.role=="Customer")
    // {
    //     props.history.push("/Services");
    // }
        return (
            // <h1>Hello world </h1>
    <>
         

            <div className="container contentArea">
                <div className="row ">
                    <div className="col-md-3">
                        <div className="list-group mgtop100">

                           
                           
                        {user && user.role=="Admin" && <div className="list-group-item">
                            <NavLink className="nav-link dip subheading1" to="/Dashboard/ListofUser">
                                <div className="sb-nav-link-icon iconspace"><i class="fas fa-table move1"></i></div>
                                List of User
                            </NavLink>
                            </div>}
                        {user && user.role=="Admin" && <div className="list-group-item">
                             <NavLink className="nav-link dip subheading1" to="/Dashboard/ContactUs">
                                <div className="sb-nav-link-icon iconspace"><i class="fas fa-table move1"></i></div>
                              User Message 
                            </NavLink>
                            </div>
                            }
                            
                            {user && user.role=="Vendor" && <div className="list-group-item"> <NavLink className="nav-link dip subheading1" to="/Dashboard/BusinessDetails">
                                <div className="sb-nav-link-icon iconspace"><i class="fas fa-table move1"></i></div>
                                Set Business Details
                            </NavLink></div>}
                            {user && user.role=="Vendor" && <div className="list-group-item"> <NavLink className="nav-link dip subheading1" to="/Dashboard/VendorService">
                                <div className="sb-nav-link-icon iconspace"><i class="fas fa-table move1"></i></div>
                                Set service Details
                            </NavLink></div>}
                            
                        </div>
                    </div>
                    <div className="col-md-9">
                            <Switch>
                            {/* here id will get in create student dyanmically  */}
                            
                            <Route path="/Dashboard/SignupCustomer/:id" exact component= {SignupCustomer} />
                            <Route path="/Dashboard/BusinessDetails" exact component= {BusinessDetails} />
                            <Route path="/Dashboard/ListofUser" component= {ListofUser} />
                            <Route path="/Dashboard/ContactUs" component= {ContactUs} />
                            <Route path="/Dashboard/VendorService" component= {VendorService} />
                        </Switch>
                    </div>
                </div>
            </div>


    </>  
          
        )
}

