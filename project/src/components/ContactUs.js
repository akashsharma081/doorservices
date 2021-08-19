import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import  axios from 'axios'; 
import {NavLink, Route , Switch,Link} from 'react-router-dom';
import { baseUrl } from "../config.js";

export default function ContactUs(props) {

    const [client , setClient] = useState([]);

    //some error in useEffect 
    useEffect(() => {
        axios.get(baseUrl+'list-contact').then(
            (res)=>{
                // alert(res.data.data);
                console.log(res.data.data); 
                setClient(res.data.data);
            }
        ) 
       }, [])

    function doAction(id , action){
        if(action === "delete")         
            {    console.log(id);
                axios.get(baseUrl+'delete-contact?id='+id).then(
                        (res)=>{
                            console.log(res.data.data);  // now row has been delete now we will update the row show we again call th list-client ,                             
                            axios.get(baseUrl+'list-contact').then(
                            (res)=>{
                                console.log(res.data.data);  
                                //   alert(res.data.data);
                                setClient(res.data.data);
                                
                                }
                            ) 
                        }
                    )
            }
          
        }
                

    var contactList = client.map((st)=>{
        return <tr key={st._id}>
        <td>{st.name}</td>
        <td>{st.email}</td>
        <td>{st.message}</td>
        <td> <button onClick= {()=>{doAction(st._id,"delete")}}>Delete</button></td>

   </tr> 
    })


    return (
        <div>
             <div >                
                     <h1 class="py-4 ">Users Query</h1>
                     <ol class="breadcrumb mb-4 listofuserhead ">
                         <li class="breadcrumb-item "><Link class="listofusercolor"  to="/Dashboard">Dashboard</Link></li>
                     </ol>

                     <div class="card mb-4">
                    
                         <div class="card-body">
                             <div class="table-responsive">
                                 <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                             <thead>
                                                 <tr>
                                                     <th>Name</th>
                                                     <th>email</th>
                                                     <th>Message</th>
                                                     <th>Delete</th>
                                                 
                                                 </tr>
                                             </thead>
                                             <tfoot>
                                                 <tr>
                                                     <th>Name</th>
                                                     <th>email</th>
                                                     <th>Message</th>
                                                     <th>Delete</th>
                                           
                                                 </tr>
                                             </tfoot>
                                         <tbody>
                                         {contactList}
                                         </tbody>
                                 </table>
                             </div>
                         </div>
                     </div>
                 </div>
        </div>
    )
}
