import React from 'react'
import {BrowserRouter as Router,Link , NaviLink , Switch , Route} from 'react-router-dom';
export default function Header() {
    return (
        <>
         <header>
            <div class="navbar navbar-default navbar-static-top">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index.html"><img src="img/logo.png" alt="logo"/></a>
                    </div>
                    <div class="navbar-collapse collapse ">
                        <ul class="nav navbar-nav">
                            <li class="active"><Link to='/'>Home</Link></li> 
                                 <li class="dropdown">
                            <Link to='/About' data-toggle="dropdown" class="dropdown-toggle">About Us <b class="caret"></b></Link>
                            <ul class="dropdown-menu">
                                <li><a href="about.html">Company</a></li>
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">News</a></li> 
                                <li><a href="#">Investors</a></li>
                            </ul>
                        </li>
                          
                            <li><Link to='/Services'>Services</Link></li>
                            <li><Link to='/Portfolio'>Portfolio</Link></li>
                            <li><Link to='/Pricing'>Pricing</Link></li>
                            <li><Link to='/Contact'>Contact</Link></li>
                            <li class="dropdown"><Link data-toggle="dropdown" class="dropdown-toggle" >Login <b class="caret"></b> </Link>
                              <ul class="dropdown-menu">
                                <li><Link to='/Login'>Customer/Vendor</Link></li>
                                <li><Link to='/Dashboard'>Dashboard</Link></li> 
                              </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </header>   
        </>
    )
}
