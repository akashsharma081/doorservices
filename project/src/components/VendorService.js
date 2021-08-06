import React, { useState, useEffect } from "react";
import { NavLink, Route, Switch, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
function VendorService(props) {
    const user = useSelector((state) => state.user);

    const [service_title, setservice_title] = useState("");
    const [service_cost, setservice_cost] = useState("");
    const [service_description, setservice_description] = useState("");
    const [service_category, setservice_category] = useState("");
  
    var stId = props.match.params.id;
  
    useEffect(() => {
      if (stId) {
        // here we fetch new api with which have id register and match with id
        // remember always the stId exist if you dont apply than this calling no sense
        axios.get("http://localhost:3001/users-by-id?id=" + stId).then((res) => {
          // console.log(res.data.data);
          // setname(res.data.data[0].name);
          // setphone(res.data.data[0].phone);
          // setaddress(res.data.data[0].address);
          // setemail(res.data.data[0].email);
          // setpassword(res.data.data[0].password);
          // setrole(res.data.data[0].role);
        });
      }
    }, []);
  
    function setValue(e) {
      e.target.name == "service_title" && setservice_title(e.target.value);
      e.target.name == "service_cost" && setservice_cost(e.target.value);
      e.target.name == "service_description" && setservice_description(e.target.value);
      e.target.name == "service_cat" && setservice_category(e.target.value);
    }
  
    function sendData() {
      
      var s = {
        service_details: { service_category,service_title, service_cost, service_description },
        user: user,
      };
  
      alert(JSON.stringify(s));
  
      if (stId) {
        s._id = stId;
        axios.post("http://localhost:3001/update-users", s).then((res) => {
          console.log(res.data);
          alert(res.data);
        });
      } else {
        console.log(s);
        axios
          .post("http://localhost:3001/add-vendor-service", s)
          .then((res) => {
            console.log(res.data);
            alert(res.data);
          });
      }
    }
  
    return (
      <>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 text-center">
              <div class="card shadow-lg border-0 rounded-lg mt-5">
                <div class="card-header">
                  <h3 class="text-center font-weight-light ">
                    {stId
                      ? "Update Users Regisration "
                      : "Sign-up Or Regisration "}
                  </h3>
                </div>
                <div class="card-body">
                  {/* <form action=""> */}
                    users id is {stId};

                     <div>
                     <label for="inputrole">Service Category</label>
                                <select name="service_cat" value={service_category} onChange={(e)=>{setValue(e);}} class="btn-block btn-md " id="inputrole" required>
                                    <option value=" ">Select Category</option>
                                    <option value="Hair Cut">Hair Cut</option>
                                    <option value="Plumber">Plumber</option>
                                </select> 
                     </div>


                    <div>
                      <label for="inputname">Business Name</label>
                      <br /> {/*name is use in function handleinput  */}
                      <input
                        type="text"
                        value={service_title}
                        onChange={(e) => {
                          setValue(e);
                        }}
                        name="service_title"
                        id="inputname"
                        class="btn-block btn-md"
                        placeholder="Enter your Business name"
                      />
                    </div>
                    <br />
                    <div>
                      <label for="inputphone">Business Phone</label>
                      <br />
                      <input
                        type="text"
                        value={service_cost}
                        onChange={(e) => {
                          setValue(e);
                        }}
                        name="service_cost"
                        id="inputphone"
                        class="btn-block btn-md"
                        placeholder="Enter your Business Phone number"
                      />
                    </div>
                    <br />
                    <div>
                      <label for="inputaddress">Business Address</label>
                      <br />
                      <input
                        type="text"
                        value={service_description}
                        onChange={(e) => {
                          setValue(e);
                        }}
                        name="service_description"
                        id="inputaddress"
                        class="btn-block btn-md"
                        placeholder="Enter your Business Address"
                      />
                    </div>
                    <br />
                    <button
                      type="submit"
                      class="btn-primary btn-md"
                      onClick={sendData}
                    >
                      {stId ? "Update Users Details " : "Sign up"}
                    </button>
                    <hr class="bg-dark" />
                    
                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default VendorService
