import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Link , NaviLink , Switch , Route} from 'react-router-dom';
import Login from './Login';
import axios from 'axios';
export default function SignupCustomer(props) {

    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [address, setaddress] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [role, setrole] = useState("");

    var stId = props.match.params.id;
   

    useEffect(() => {
      if(stId){
       // here we fetch new api with which have id register and match with id 
       // remember always the stId exist if you dont apply than this calling no sense 
        axios.get('http://localhost:3001/users-by-id?id='+stId).then(
            (res)=>{
                console.log(res.data.data); 
                setname(res.data.data[0].name);
                setphone(res.data.data[0].phone);
                setaddress(res.data.data[0].address);
                setemail(res.data.data[0].email);
                setpassword(res.data.data[0].password);
                setrole(res.data.data[0].role);
            }
        )} 
       }, [])

    function setValue(e){
          e.target.name=="Name" && setname(e.target.value);
          e.target.name=="Phone" && setphone(e.target.value);
          e.target.name=="Address" && setaddress(e.target.value);
          e.target.name=="Email" && setemail(e.target.value);
          e.target.name== "Password" && setpassword(e.target.value);
          e.target.name== "Role" && setrole(e.target.value);
    }
  
    function sendData(){
        // alert(name);
        // alert(phone);
        // alert(address);
        // alert(email);
        // alert(password);
        var s={
           name,phone,address,email,password,role, vendor_services:[], customer_requests:[]
        }
       
        if(stId)
        {   s._id=stId;
            axios.post('http://localhost:3001/update-users',s).then((res)=>{
            console.log(res.data); 
            alert(res.data);
            })
        }
        else
        {
            console.log(s)
            axios.post('http://localhost:3001/create-users',s).then((res)=>{
              console.log(res.data);
              alert(res.data);
            })
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
                   <input type="text"  value={phone} onChange={(e)=>{setValue(e)}} name="Phone" id="inputphone" class="btn-block btn-md" placeholder="Enter your Phone number"/>
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
                   <label for="inputpassword">Password</label><br/>
                   <input type="password"  value={password} onChange={(e)=>{setValue(e)}} name="Password" id="inputpassword" class="btn-block btn-md " placeholder="Enter Password" />
               </div>   <br />
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

