import React, { useState, useEffect } from "react";
import { NavLink, Route, Switch, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function BusinessDetails(props) {

  const user = useSelector((state) => state.user);

  const [business_name, setbusiness_name] = useState("");
  const [business_phone, setbusiness_phone] = useState("");
  const [business_address, setbusiness_address] = useState("");

  var stId = props.match.params.id;

  useEffect(() => {
    if (stId) {
      // here we fetch new api with which have id register and match with id
      // remember always the stId exist if you dont apply than this calling no sense
      axios.get("http://localhost:3001/users-by-id?id=" + stId).then((res) => {
        // console.log(res.data.data);
        setbusiness_name(res.data.data[0].business_name);
        setbusiness_phone(res.data.data[0].business_name);
        setbusiness_address(res.data.data[0].business_address);
   
      });
    }
  }, []);

  function setValue(e) {
    e.target.name == "Business_Name" && setbusiness_name(e.target.value);
    e.target.name == "Business_Phone" && setbusiness_phone(e.target.value);
    e.target.name == "Business_Address" && setbusiness_address(e.target.value);
  }

  function sendData() {
    
    var s = {
      business_details: { business_name, business_phone, business_address },
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
        .post("http://localhost:3001/add-business-details", s)
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
            <div class="card shadow-lg border-0 rounded-lg mt-1">
              <div class="card-header">
                <h3 class="text-center font-weight-light ">{stId?"Update Business Details":"Enter Business Details "}</h3>
              </div>
              <div class="card-body">
                {/* <form action=""> */}
                  <div>
                    <label for="inputname">Business Name</label>
                    <br /> {/*name is use in function handleinput  */}
                    <input
                      type="text"
                      value={business_name}
                      onChange={(e) => {
                        setValue(e);
                      }}
                      name="Business_Name"
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
                      value={business_phone}
                      onChange={(e) => {
                        setValue(e);
                      }}
                      name="Business_Phone"
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
                      value={business_address}
                      onChange={(e) => {
                        setValue(e);
                      }}
                      name="Business_Address"
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
                    Submit
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

export default BusinessDetails;
