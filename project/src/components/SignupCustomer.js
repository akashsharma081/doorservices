// verify phone number we need install the package npm i react-phone-number-input --save
import React,{useState,useEffect} from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import {BrowserRouter as Router,Link , NaviLink , Switch , Route} from 'react-router-dom';
import Login from './Login';
import axios from 'axios';
import { baseUrl } from "../config.js";
export default function SignupCustomer(props) {


    // const inputpassword1 = document.querySelector("#inputpassword1");
    // const inputpassword2 = document.querySelector("#inputpassword2");
    // const errorText = document.querySelector(".error-text");
    // const button = document.querySelector(".button");


    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [address, setaddress] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const [isError, setisError] = useState("");
    
    const [role, setrole] = useState("");

    var stId = props.match.params.id;
   

    useEffect(() => {
      if(stId){
       // here we fetch new api with which have id register and match with id 
       // remember always the stId exist if you dont apply than this calling no sense 
        axios.get(baseUrl+'users-by-id?id='+stId).then(
            (res)=>{
                console.log(res.data.data); 
                setname(res.data.data[0].name);
                setphone(res.data.data[0].phone);
                setaddress(res.data.data[0].address);
                setemail(res.data.data[0].email);
                setpassword(res.data.data[0].password);
                setcpassword(res.data.data[0].cpassword);
                setrole(res.data.data[0].role);
            }
        )} 
       }, [])


    function setValue(e){
          e.target.name=="Name" && setname(e.target.value);
          e.target.name=="Phone" && setphone(e.target.value);
          e.target.name=="Address" && setaddress(e.target.value);
          e.target.name=="Email" && setemail(e.target.value);
          e.target.name == "Password" && setpassword(e.target.value);
          e.target.name == "CPassword" && setcpassword(e.target.value);
          e.target.name== "Role" && setrole(e.target.value);
       
    }
  

    function sendData() {
        var unRegex = /^[a-z0-9_-]{3,8}$/
        var usernameV = document.getElementById('inputname').value

        // var passRegex = /(?=(.[0-9]))(?=.[\!@#$%^&()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.[a-z])(?=(.[A-Z]))(?=(.)).{5,}/
        var passRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
        var passwordV = document.getElementById('inputpassword').value

        var emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/
        var emailV = document.getElementById('inputemail').value

        if (name.length < 3) {
            alert("username must be 3 char")
        }
        // else if (!passRegex.test(passwordV)) {
        //     alert("Password Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long")
        // }
        else if (!emailRegex.test(emailV)) {
            alert("wrong email id")
        }
        else if (phone.length != 10) {
            alert("mobile number is incorrect")
        }
        else if (password != cpassword) {
            setisError("Password don't match");
        }

        else {
            setisError("");   
             var s={
                       name,phone,address,email,password,role, vendor_services:[], customer_requests:[]
                    }                 
                    if(stId)
                    {   s._id=stId;
                        axios.post(baseUrl+'update-users',s).then((res)=>{
                        console.log(res.data); 
                        alert(res.data);
                        })
                    }
                    else
                    {
                        console.log(s)
                        axios.post(baseUrl+'create-users',s).then((res)=>{
                          console.log(res.data);
                          alert(res.data);
                        })
                    }
                }
        
    }
   

    return (
<>

            <div class="container ">
            <div class="row ">
             <div class="col-lg-5 text-center side">
                 <div class="card shadow-lg border-0 rounded-lg mt-5">
                     <div class="card-header"><h3 class="text-center font-weight-light ">{stId?"Update Users Regisration ":"Sign-up Or Regisration "}</h3></div>
                     <div class="card-body">
           <form action="">
               <div>
                   <label for="inputname">Full Name</label><br/>                                               {/*name is use in function handleinput  */}
                   <input type="text"  value={name} onChange={(e)=>{setValue(e)}} name="Name" id="inputname" class="btn-block btn-md" placeholder="Enter your name"/>
                  
               </div>
               <br />
               <div>
                   <label for="inputphone">Phone</label><br/> 
                   <PhoneInput class="phonestyle" type="text"  value={phone} onChange={setphone} name="Phone" id="inputphone" class="btn-block btn-md" placeholder="Enter your Phone number"/>
                   {phone}
               </div>
               <br />
               <div>
                   <label for="inputaddress">Address</label><br/>
                   <input type="text"  value={address} onChange={(e)=>{setValue(e)}} name="Address" id="inputaddress" class="btn-block btn-md" placeholder="Enter your Home Address"/>
               </div>
               <br />
               <div>
                   <label for="inputemail">Email</label><br/>
                   <input type="text"  value={email} onChange={(e)=>{setValue(e)}} name="Email" id="inputemail" class="btn-block btn-md" placeholder="Enter Username or Email "/>
               </div>
               <br />
              
               <div>
                   <label for="inputpassword1">Password</label><br/>
                   <input type="text"  value={password} onChange={(e)=>{setValue(e)}} name="Password" id="inputpassword1" class="btn-block btn-md " placeholder="Enter Password" />
               </div>   <br />
                <div>
                   <label for="inputpassword2">Confirm Password</label><br/>
                    <input type="text"  value={cpassword} onChange={(e)=>{setValue(e)}} name="CPassword" id="inputpassword2" class="btn-block btn-md " placeholder="Enter confirm Password" />             
                    {/* <div className="text-danger">{confirm_password}</div> */}
                   {isError}
      
                </div> 
               <label for="inputrole">Role</label>
                                <select name="Role" value={role} onChange={(e)=>{setValue(e);}} class="btn-block btn-md " id="inputrole" required>
                                    <option value=" ">Select role</option>
                                    <option value="Customer">Customer</option>
                                    <option value="Vendor">Vendor</option>
                                </select> 
               <br />
               <button type="submit" class='btn-primary btn-md' onClick={sendData}>{stId?"Update Users Details ":"Sign up"}</button>
            

        </form>

             </div>
                
                 </div>
             </div>
         </div>
     </div>
  

  </>
 

    )
}


