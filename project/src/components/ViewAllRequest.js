import React from 'react'
import {BrowserRouter as Router,Link , NaviLink , Switch , Route} from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import {useSelector} from 'react-redux';
import  axios from 'axios'; 
import { baseUrl } from "../config.js";
function ViewAllRequest() {
    
    const user = useSelector(state => state.user)
   
    const [request, setrequest] = useState([]);

    useEffect(() => {
        axios.post(baseUrl+"history2").then((res)=>{
            // alert(JSON.stringify(res.data));
            setrequest(res.data.data);
        })
    }, [])

   
    var requestLists = request.map((st)=>{
        return <tr >
              <td>{st.service_title}</td>
              <td>{st.customer_email}</td>
              <td>{st.vendor_name}</td>
              <td>{st.vendor_email}</td>
              <td>{st.vendor_phone}</td>
              <td>{st.status}</td>
           </tr> 
     })




    return (
    <div>
        <h1 class="py-4 ">List of Users</h1>
                   <ol class="breadcrumb mb-4 listofuserhead ">
                       <li class="breadcrumb-item "><Link class="listofusercolor"  to="/Dashboard">Dashboard</Link></li>
                       <li class="breadcrumb-item active listofusercolor1"><a class="listofusercolor1"> (Customer & Vendor)</a></li>
                   </ol>
                 
                   <div class="card mb-4">
                      
                       <div class="card-body">
                           <div class="table-responsive">
                               <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                   <thead>
                                       <tr>
                                           <th>Service title</th>
                                           <th>Cutomer Email</th>
                                           <th>Vendor Name</th>
                                           <th>Vendor Email</th>
                                           <th>Vendor Contact</th>
                                           <th>Status</th>
                                       </tr>
                                   </thead>
                                   <tfoot>
                                   <tr>
                                           <th>Service title</th>
                                           <th>Cutomer Email</th>
                                           <th>Vendor Name</th>
                                           <th>Vendor Email</th>
                                           <th>Vendor Contact</th>
                                           <th>Status</th>
                                       </tr>
                                   </tfoot>
                               <tbody>
                                       {requestLists}
                               </tbody>
                               </table>
                           </div>
                       </div>
                   </div>
   </div>
    )
}

export default ViewAllRequest
