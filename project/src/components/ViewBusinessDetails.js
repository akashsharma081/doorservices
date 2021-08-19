import React from 'react'
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import  axios from 'axios'; 
import { baseUrl } from "../config.js";
import {NavLink, Route , Switch,Link} from 'react-router-dom';

export default function ViewBusinessDetails(props) {

    const user = useSelector(state => state.user);
    const businessname= user.business_name;
    const businessphone= user.business_phone;
    const businessaddress= user.business_address;
    const [users, setUsers] = useState([]);
    
        
        // useEffect(() => {
        //        axios.get('http://localhost:3001/list-users').then(
        //         (res)=>{
        //             console.log(res.data.data); 
        //             setUsers(res.data.data);
        //         }
        //     )          
        //   }, [])
    
    function doAction(id , action){
            if(action === "delete")         
            {    console.log(id);
                axios.get(baseUrl+'delete-users?id='+id).then(
                    (res)=>{
                        console.log(res.data.data); 
                            axios.get(baseUrl+'list-users').then(
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
                    props.history.push("/Dashboard/BusinessDetails/"+id);
            }
    }
   
    // var usersList =users.map((st)=>{
    //     return <tr >
    //           <td>{businessname}</td>
    //           <td>{businessphone}</td>
    //           <td>{businessaddress}</td>
    //           {/* <td> <button onClick= {()=>{doAction(st._id,"delete")}}>Delete</button></td>
    //          <td> <button onClick= {()=>{doAction(st._id,"update")}}>Update </button></td>  */}
    //       </tr> 
    //  })

    return (
    <div >
          
                    <h1 class="py-4 ">Business detials</h1>
                    <ol class="breadcrumb mb-4 listofuserhead ">
                        <li class="breadcrumb-item "><Link class="listofusercolor"  to="/Dashboard">Dashboard</Link></li>
                        {/* <li class="breadcrumb-item active listofusercolor1"><a class="listofusercolor1"> (Customer & Vendor)</a></li> */}
                    </ol>
                  
                    <div class="card mb-4">
                       
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Business_Name</th>
                                            <th>Business_Phone</th>
                                            <th>Business_Address</th>
                                            {/* <th>Delete</th> */}
                                            {/* <th>Update</th> */}
                                        </tr>
                                    </thead>

                                    <tr >
                                        <td>{businessname}</td>
                                        <td>{businessphone}</td>
                                        <td>{businessaddress}</td>
                                    </tr> 
                                  
                                <tbody>
                                                 
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
)
}
