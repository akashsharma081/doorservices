import React, { Component } from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {BrowserRouter as Router,Link , NaviLink , Switch , Route} from 'react-router-dom';
import SignupCustomer from './SignupCustomer';
import axios from 'axios';
import { setUser } from '../actions/DoorServiceActions';
export default function Login(props) {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    function auth(e){
        e.target.name== "Email" && setEmail(e.target.value);
        e.target.name== "Password" && setPassword(e.target.value);
    }

    function logincheck(){
        // alert(email);
        // alert(password);
        axios.post('http://localhost:3001/login-users',{email,password}).then((res)=>{
            // console.log(res.data);
            // setEmail(res.data.data);  // res.data.data is store in redux
            // setPassword(res.data.data);
           
            if(res.data.status=="ok")
            {   
                // alert("dashboard")
                // alert(res.data.data);
                dispatch(setUser(res.data.data));
                // props.history.push('/Dashboard');
                if(user.role=="Vendor")
                {
                    props.history.push('/Dashboard');
                }
                else if(user.role=="Admin")
                {
                    props.history.push('/Dashboard');
                }
                else if(user.role=="Customer")
                {
                    props.history.push('/Services');
                }
            }
            else{
                alert("Invalid credentials")
            }
          
        })
        .catch(
            (err)=>{console.log(err);}
        )
    }
    
        return (
        <>
            <section id="inner-headline">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2 class="pageTitle">Login and Sign/up</h2>
                        </div>
                    </div>
                </div>
            </section>  

           <div class="container ">
           <div class="row side">
            <div class="col-lg-5 text-center ">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                    <div class="card-body">
            {/* <form > */}
              <div>
                  <label for="email">Email</label><br/>
                  <input type="text" autoComplete="off"  value={email} onChange={(e)=>{auth(e)}}  name="Email" id="email" class="btn-block btn-md" placeholder="Enter Username or Email "/>
              </div>
              <br />
              <div>
                  <label for="password">Password</label><br/>
                  <input type="password" autoComplete="off"  value={password} onChange={(e)=>{auth(e)}}  name="Password" id="password" class="btn-block btn-md " placeholder="Enter Password" />
              </div>
              <br />
              <button class='btn-primary btn-md' onClick={logincheck}>Login </button>
              <hr class="bg-dark"/>
              <Link to='/SignupCustomer' >
              <button class='btn-primary btn-lg '>Sign-up </button>
              </Link>
              <br/>
            
            {/* </form> */}

            </div>
                
                </div>
            </div>
        </div>
    </div>



  
</>
        )
    }





