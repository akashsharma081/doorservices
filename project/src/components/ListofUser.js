import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import  axios from 'axios'; 
import {NavLink, Route , Switch,Link} from 'react-router-dom';

export default function ListofUser(props) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
     axios.get('http://localhost:3001/list-users').then(
         (res)=>{
             console.log(res.data.data); 
             setUsers(res.data.data);
         }
     ) 
    }, [])

    function doAction(id , action){
        if(action === "delete")
         
       {    console.log(id);
           axios.get('http://localhost:3001/delete-users?id='+id).then(
                (res)=>{
                    console.log(res.data.data);  // now row has been delete now we will update the row show we again call th list-users 
                    
                     axios.get('http://localhost:3001/list-users').then(
                       (res)=>{
                          console.log(res.data.data);  
                        //   alert(res.data.data);
                          setUsers(res.data.data);
                          
                        }
                     ) 
                }
            )
       }
       else if(action==="update")
       {
             props.history.push("/SignupCustomer/"+id);
       }
    }

    var usersList = users.map((st)=>{
       return <tr key={st._id}>
             <td>{st.name}</td>
             <td>{st.phone}</td>
             <td>{st.address}</td>
             <td>{st.email}</td>
             <td>{st.password}</td>
             <td>{st.role}</td>
             <td> <button onClick= {()=>{doAction(st._id,"delete")}}>Delete</button></td>
             <td> <button onClick= {()=>{doAction(st._id,"update")}}>Update </button></td> 
        </tr> 
    })



    return (

        
        <div >

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
                                                <th>Name</th>
                                                <th>Phone</th>
                                                <th>Address</th>
                                                <th>Email</th>
                                                <th>Password</th>
                                                <th>Role</th>
                                                <th>Delete</th>
                                                <th>Update</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Name</th>
                                                <th>Phone</th>
                                                <th>Address</th>
                                                <th>Email</th>
                                                <th>Password</th>
                                                <th>Role</th>
                                                <th>Delete</th>
                                                <th>Update</th>
                                            </tr>
                                        </tfoot>
                                    <tbody>
                                       {usersList}
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

