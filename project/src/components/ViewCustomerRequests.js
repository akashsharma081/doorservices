import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { baseUrl } from '../config'
import {NavLink, Route , Switch,Link} from 'react-router-dom';

function ViewCustomerRequests(props) {

    const user = useSelector(state => state.user)
    const [request, setrequest] = useState([]);

    useEffect(() => {
        axios.post(baseUrl+"get-service-requests",{vendor_id:user._id}).then((res)=>{
            // alert(JSON.stringify(res.data));
            setrequest(res.data.data);
            
        })
    }, [])

    function doAction(params) {
        
    }

    var requestList = request.map((st)=>{
        return <tr >
              <td>{st.service_title}</td>
              <td>{st.customer_email}</td>
              <td>{st.status}</td>
              <td> <button onClick= {()=>{doAction(st._id,"decline")}}>Decline</button></td>
             <td> <button onClick= {()=>{doAction(st._id,"accept")}}>Accept </button></td> 
          </tr> 
     })


    return (
         <> 
             
             <h1 class="py-4 ">List of Users</h1>
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
                                            <th>Service title</th>
                                            <th>Cutomer Email</th>
                                            <th>Status</th>
                                            <th>Decline</th>
                                            <th>Accept</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Service title</th>
                                            <th>Cutomer Email</th>
                                            <th>Status</th>
                                            <th>Decline</th>
                                            <th>Accept</th>
                                        </tr>
                                    </tfoot>
                                <tbody>
                                   {requestList}
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
         </>
    )
}

export default ViewCustomerRequests
