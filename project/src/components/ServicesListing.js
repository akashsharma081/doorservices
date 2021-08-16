import React, { useState,useEffect } from "react";
import { baseUrl } from "../config.js";
import axios from "axios";
import { useSelector } from "react-redux";

function ServicesListing(props) {
  var category = props.match.params.cat_name;
  const [services, setservices] = useState([]);
  const [serviceCards, setserviceCards] = useState([]);

  const user = useSelector(state => state.user)
  
  useEffect(() => {
    axios
      .post(baseUrl + "get-services-by-category", {
        service_category: category,
      })
      .then((res) => {
          // alert(JSON.stringify(res.data.data))
          setservices(res.data.data);
      });
  }, []);

  function sendServiceRequest(vendor_id, service_title){
      axios.post(baseUrl+"customer-service-request",
      {vendor_id, customer_request:{service_title,customer_id:user._id, customer_email:user.email,status:"pending"}}
      ).then((res)=>{
        alert(JSON.stringify(res.data));
      });
  }

 
  useEffect(() => {

    // alert("in 24" + JSON.stringify(services));
    
      if(services.length>0)
      {
            
        setserviceCards(services.map((s) => {
                                                   return (
                                                   <div key={Math.random} className="col-md-12">
                                                      {" "}
                                                      <h1>By:-{s.vendor_id}</h1>
                                                      <img src={baseUrl+s.business_logo} alt="" />
                                                      <h3>{s.service_title}</h3>
                                                      <p>{s.service_cost}</p>
                                                      <p>{s.service_description}</p>
                                                      <button onClick={()=>{sendServiceRequest(s.vendor_id,s.service_title)}}>send Request</button>
                                                      <hr/>
                                                   </div>                                                   
                                                   );
                                                }));
         }
  }, [services]);

  return (
    <>
    <h1>{category}</h1>
      <div className="container">
        <div className="row">{serviceCards}</div>            
      </div>
    </>
  );
}

export default ServicesListing;
