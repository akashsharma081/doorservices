import React, { useState,useEffect ,} from "react";
import { baseUrl } from "../config.js";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { addProductToCart } from '../actions/DoorServiceActions';

function ServicesListing(props) {
  var category = props.match.params.cat_name;
  const [services, setservices] = useState([]);
  const [serviceCards, setserviceCards] = useState([]);
  const dispatch = useDispatch();

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
    if(user){
      axios.post(baseUrl+"customer-service-request",
      {vendor_id, customer_request:{service_title,customer_id:user._id, customer_email:user.email,status:"pending"}}
      ).then((res)=>{
        alert(JSON.stringify(res.data));
      });
    }
    else{
      props.history.push('/Login');
    }
  }

  function cart(s) {
    dispatch(addProductToCart({ ...s, qty: 1 }));
  }
 
  useEffect(() => {

    // alert("in 24" + JSON.stringify(services));
    
      if(services.length>0)
      {
            
        setserviceCards(services.map((s) => {
                                                   return (
                                                   <div key={Math.random} className="col-lg-8 col-lg-offset-2 centered main2">
                                                      {/* <p>By:-{s.vendor_id}</p> */}
                                                    <div class="row ty">
                                                      <img class="img1" src={baseUrl+s.business_logo} alt="" /> 
                                                      <div class="text-left cmove1 "> 
                                                      <h3>Name: {s.service_title}</h3>
                                                      <h4>Cost: {s.service_cost}</h4>
                                                      <h3>Description : </h3>
                                                      <p>{s.service_description}</p>
                                                      <button onClick={function () { cart(s) }}>Add To Cart</button>
                                                      <button class='btn-primary ' onClick={()=>{sendServiceRequest(s.vendor_id,s.service_title)}}>Send Request</button> 
                                                      
                                                      </div>
                                                    
                                                    </div>
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
