import React, { useState, useEffect } from "react";
import { NavLink, Route, Switch, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { baseUrl } from "../config.js";
import axios from "axios";

function BusinessDetails(props) {

  const user = useSelector((state) => state.user);

  const [business_name, setbusiness_name] = useState("");
  const [business_phone, setbusiness_phone] = useState("");
  const [business_address, setbusiness_address] = useState("");

  const [uploadPercentage, setuploadPercentage] = useState("")

  var stId = props.match.params.id;

  var businessLogo;

  useEffect(() => {
    if (stId) {
      // here we fetch new api with which have id register and match with id
      // remember always the stId exist if you dont apply than this calling no sense
      axios.get(baseUrl+"users-by-id?id=" + stId).then((res) => {
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
    e.target.name == "Business_Logo" && (businessLogo=e.target.files[0]);
  }
// function use when we send the data text and any file format 
  function sendData() {
      
        var formData = new FormData();

        formData.append("business_details",  JSON.stringify({ business_name, business_phone, business_address }) );
        formData.append("user", JSON.stringify(user) );
        formData.append("business_logo",businessLogo );

        console.log(formData);

              axios.post(baseUrl+"add-business-details",formData,{
              headers:{
                  'Content-type': 'multipart/form-data'
              },
              onUploadProgress:function (progressEvent) {
                  console.log("file upload progress: " + progressEvent);
                  setuploadPercentage(parseInt(Math.round((progressEvent.loaded/progressEvent.total)*100)));
              }
            }).then((res)=>{
                alert("Upload formData success");
            }).catch((err)=>{
                alert("Upload formData error");
            })

  }
      // this function is use to send when text to send 
  // function sendData() {
    
  //   var s = {
  //     business_details: { business_name, business_phone, business_address },
  //     user: user,
  //   };

  //   alert(JSON.stringify(s));

  //   if (stId) {
  //     s._id = stId;
  //     axios.post("http://localhost:3001/update-users", s).then((res) => {
  //       console.log(res.data);
  //       alert(res.data);
  //     });
  //   } else {
  //     console.log(s);
  //     axios
  //       .post("http://localhost:3001/add-business-details", s)
  //       .then((res) => {
  //         console.log(res.data);
  //         alert(res.data);
  //       });
  //   }
  // }

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


                  <div>
                    <label for="inputaddress">Business Logo</label>
                    <br />
                    <input
                      type="file"                      
                      onChange={(e) => {
                        setValue(e);
                      }}
                      name="Business_Logo"                     
                      class="btn-block btn-md"                      
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

                      {uploadPercentage}%

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
