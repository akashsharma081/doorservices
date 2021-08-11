import React, { useState, useEffect } from "react";
import { NavLink, Route, Switch, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
function VendorService(props) {
    const user = useSelector((state) => state.user);
    const username= user.name;  // for use previous field name like name in another file we use like that line no. 7 nd 112

    const [service_title, setservice_title] = useState("");
    const [service_cost, setservice_cost] = useState("");
    const [service_description, setservice_description] = useState("");
    const [service_category, setservice_category] = useState("");
    const [ProductImg, setProductImg] = useState("");
    const [error,setError]=useState('');

    const types=['image/png', 'image/jpg'];
    const productImgHandler =(e)=>{
      let selectedfiles = e.target.files[0];
      if(selectedfiles && types.includes(selectedfiles.type)){
        setProductImg(selectedfiles);
        setError('');
      }
      else{
        setProductImg(null);
        setError('please select a valid image type png and jpg ');
      }
    }
  
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
      e.target.name == "ProductImg" && setProductImg(e.target.value);
    }
  
    function sendData() {
      
      var s = {
        service_details: { service_category,service_title, service_cost, service_description ,ProductImg},
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
                     Fill other detials 
                  </h3>
                </div>
                <div class="card-body">
                  {/* <form action=""> */}

                     <div>
                     <label for="inputrole">Service Category</label>
                                <select name="service_cat" value={service_category} onChange={(e)=>{setValue(e);}} class="btn-block btn-md " id="inputrole" required>
                                    <option value=" ">Select Category</option>
                                    <option value="Hair Cut">HairCut</option>
                                    <option value="Plumber">Plumber</option>
                                    <option value="Electricain">Electricain</option>
                                    <option value="Mechanic">Mechanic</option>
                                </select> 
                     </div>


                    <div>
                      <label for="inputname">Name</label>
                      <br /> {/*name is use in function handleinput  */}
                      <input
                        type="text"
                        value={username}
                        name="service_title"
                        id="inputname"
                        class="btn-block btn-md"
                        placeholder="Enter your Name"
                      />
                    </div>
                    <br />
                    <div>
                      <label for="inputphone">Price</label>
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
                        placeholder="Enter your Price"
                      />
                    </div>
                    <br />
                    <div>
                      <label for="inputaddress">Business Description</label>
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
                        placeholder="Enter your Business Description"
                      />
                    </div>
                    <br />
                    <label for="inputimg">Image</label>           
                    {/* onChange={(e)=>{productImgHandler}} */}
                    <input type="file" name="ProductImg" onClick={(e)=>{setValue(e);}} class="btn-block btn-md" id="inputimg" />
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

export default VendorService
