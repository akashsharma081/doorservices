import React from 'react'
import {BrowserRouter as Router,Link , NaviLink , Switch , Route} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT_USER } from '../actions/DoorServiceActions';
import './Header.css';


export default function Header(props) {

    const user = useSelector(state => state.user);
                const dispatch = useDispatch();
    function logout()
    {
        dispatch(LOGOUT_USER());
        // browserHistory.push("/Login");
        // props.history.push('/');
    }

    return (
        <>
         <header>
            <div class="navbar navbar-default navbar-static-top">
                <div class="container-fluid pe-5">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index.html"><img src="img/logo.png" alt="logo"/></a>
                    </div>
                    <div class="navbar-collapse collapse mypadding">
                        <ul class="nav navbar-nav">
                            {!user && <li class="active"><Link to='/'>Home</Link></li> }
                                 
                            {!user && <li class="dropdown"><Link to='/About' data-toggle="dropdown" class="dropdown-toggle">About Us <b class="caret"></b></Link>
                            <ul class="dropdown-menu">
                                <li><a href="about.html">Company</a></li>
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">News</a></li> 
                                <li><a href="#">Investors</a></li>
                            </ul>
                        </li>}
                          
                            <li><Link to='/Services'>Services</Link></li>
                            {!user && <li><Link to='/Portfolio'>Portfolio</Link></li>}
                            {!user && <li><Link to='/Pricing'>Pricing</Link></li>}
                            <li><Link to='/Contact'>Contact</Link></li>
                            {user && user.role=="Customer" && <li><Link to='/Contact'>Contact</Link></li>}
                            {user && user.role=="Vendor" && <li><Link to='/Contact'>Contact</Link></li>}

                            {!user && <li ><Link to='/Login'>Login</Link></li>}     
                            {user && <li><Link to='/Dashboard'>Dashboard</Link></li>   }
                            {user && <li><Link to='/Login' onClick={logout} >Logout</Link></li>   }
                            {user && <li> <Link > {user.name}</Link>  </li>}
                           
                        </ul>
                    </div>
                </div>
            </div>
        </header>   
        </>
    )
}
