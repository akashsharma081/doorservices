import react from 'react';
// import $ from 'jquery';
import {NavLink, Route , Switch,Link} from 'react-router-dom';
import SignupCustomer from './SignupCustomer';
import ListofUser from './ListofUser';

import React from 'react'

export default function Dashboard() {
   
 
        return (
            // <h1>Hello world </h1>
    <>
        <header class="head">
            <div class="navbar navbar-default navbar-static-top " class="head">
                <div class="container">
                    <a class="navbar-brand text-align-center headline" href="index.html">Services Management</a>
                    <div class="navbar-collapse collapse ">
                        <ul class="nav navbar-nav nav-right">
                        
                                <form class="input-group search1">
                                    <input class="form-control" type="text" placeholder="Search for..." />
                                    <button class="btn btn-primary" type="button"></button>
                                </form>
                            
                                {/* <div class="dropdown ">
                                    <button class="btn btn-primary dropdown-toggle"  data-toggle="dropdown"  ><span class="caret"></span></button>       
                                    <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                                        <li class="dropdown-item" >Settings</li>
                                        <li class="dropdown-item" >Activity Log</li>
                                        <li class="dropdown-item" >Logout</li>
                                    </ul>
                                </div> */}

                        </ul>
                    </div>
                </div>
            </div>
        </header>  

        <section class="sidebar">
           <div class="sb-sidenav-menu-heading heading">Actions</div>
           <NavLink className="nav-link dip subheading" to="/SignupCustomer">
                   <div className="sb-nav-link-icon iconspace"><i class="fas fa-chart-area move1"></i></div>  
                   Create User
               </NavLink>
               <NavLink className="nav-link dip subheading1" to="/ListofUser">
                   <div className="sb-nav-link-icon iconspace"><i class="fas fa-table move1"></i></div>
                   List of User
               </NavLink>

             <main>
                <Switch>
                    {/* here id will get in create student dyanmically  */}
                    
                    <Route path="/Dashboard/SignupCustomer/:id" exact component= {SignupCustomer} />
                  
                    <Route path="/ListofUser" component= {ListofUser} />
                </Switch>
             </main>
        </section>

    </>  
          
        )
}

