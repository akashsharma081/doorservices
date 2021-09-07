import React from 'react';
import { useEffect,useState } from 'react';
import  axios from 'axios'; 
import { baseUrl } from "../config.js";
import {NavLink, Route , Switch,Link} from 'react-router-dom';
function Allbusinessdetails() {
   
    const [vend, setVend] = useState([]);
    useEffect(() => {
        axios.get(baseUrl+'list-users').then(
            (res)=>{
                console.log(res.data.data); 
                var res=res.data.data;
                var result = res.filter(elitem => elitem.role == "Vendor");
                console.log(result);
                setVend(result);
            }
        ) 
       }, []);
   
      


// var details= vend.map(
//     (s) => { 
//         return (
//             <li>{s.business_name}</li>
//             // <li>{s.business_address}</li>                                
//             );
          
//     }
//  )

var details = vend.map((s) => {

    return <tr key={s._id}>
                <td>{s.name}</td>
                <td>{s.business_name}</td>
                <td>{s.business_phone}</td>
                <td>{s.business_address}</td>         
            </tr>
});
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
                                <th>Name of Vendor</th>
                                <th>Business_Name</th>
                                <th>Business_Phone</th>
                                <th>Business_Address</th>
                            </tr>
                        </thead>

                       <tfoot>
                       <tr>
                                <th>Name of Vendor</th>
                                <th>Business_Name</th>
                                <th>Business_Phone</th>
                                <th>Business_Address</th>
                               
                            </tr>
                       </tfoot>
                      
                    <tbody>
                     {details}          
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Allbusinessdetails
