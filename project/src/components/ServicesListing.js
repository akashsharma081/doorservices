import React, { useState,useEffect } from "react";
import { baseUrl } from "../config.js";
import axios from "axios";

var serviceCards=[];


function ServicesListing(props) {
  var category = props.match.params.cat_name;
  const [services, setservices] = useState([]);
  

  useEffect(() => {
    axios
      .post(baseUrl + "get-services-by-category", {
        service_category: category,
      })
      .then((res) => {
         
        setservices(res.data.data);
      });
  }, []);

  useEffect(() => {
    
      if(services.length>0)
      {
            
            serviceCards=services.map((s) => {
                                                   return (
                                                   <div key={Math.random} className="col-md-3">
                                                      {" "}
                                                      <h3>{s.service_title}</h3>
                                                      <p>{s.service_cost}</p>
                                                      <p>{s.service_description}</p>
                                                   </div>
                                                   );
                                                });

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
