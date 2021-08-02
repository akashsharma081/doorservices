import React,{useState} from 'react';
import {BrowserRouter as Router,Link , NaviLink , Switch , Route} from 'react-router-dom';
import Login from './Login';
export default function SignupVendor() {
    const [Regisration, setRegisration] = useState({
        name:"",
        phone:"",
        expert:"",
        email:"",
        password:"",
        
    });
    
    const handleInput = (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      console.log(name,value);
                                //   how to add the dynamic data so we use [] , name  and target value 
      setRegisration({...Regisration , [name] : value })
    }
    
    const [records, setRecords] = useState([]);
    
    const handleSumit = (e) => {
        e.preventDefault();
    
        // first we create new object then add the all data(setRegisration) in new array and id take unique so we add the date with time 
        const newRecord =  {...Regisration, id:new Date().getTime().toString()}
        console.log(newRecord);
        setRecords([...records, newRecord]);
        console.log(records);
        
        // after click button submit or Regisration than we will clear out the form field again 
        setRegisration({email:"",password:"",name:"",expert:"",phone:""});
    }
        return (
    <div>
       
      <section id="inner-headline">
         <div class="container">
             <div class="row">
                 <div class="col-lg-12">
                     <h2 class="pageTitle">Login and Sign/up</h2>
                 </div>
             </div>
         </div>
      </section>  
    
      <>
                <div class="container ">
                <div class="row">
                 <div class="col-lg-5 text-center side">
                     <div class="card shadow-lg border-0 rounded-lg mt-5">
                         <div class="card-header"><h3 class="text-center font-weight-light my-4">Vendor Sign-up</h3></div>
                         <div class="card-body">
                 <form action="" onSubmit={handleSumit}>
                   <div>
                       <label htmlFor="username">Full Name</label><br/>                                               {/*name is use in function handleinput  */}
                       <input type="text" autoComplete="off"  value={Regisration.username} onChange={handleInput} name="username" id="username" class="btn-block btn-md" placeholder="Enter your name"/>
                   </div>
                   <br />
                   <div>
                       <label htmlFor="phone">Phone</label><br/>
                       <input type="text" autoComplete="off"  value={Regisration.phone} onChange={handleInput} name="phone" id="phone" class="btn-block btn-md" placeholder="Enter your Phone number"/>
                   </div>
                   <br />
                   <div>
                       <label htmlFor="phone">Which Services You Expertise in </label><br/>
                       <input type="text" autoComplete="off"  value={Regisration.expert} onChange={handleInput} name="expert" id="expert" class="btn-block btn-md" placeholder="Enter you are in Expertise in "/>
                   </div>
                   <br />
                   <div>
                       <label htmlFor="email">Email</label><br/>
                       <input type="text" autoComplete="off"  value={Regisration.email} onChange={handleInput} name="email" id="email" class="btn-block btn-md" placeholder="Enter Username or Email "/>
                   </div>
                   <br />
                   <div>
                       <label htmlFor="password">Password</label><br/>
                       <input type="password" autoComplete="off"  value={Regisration.password} onChange={handleInput} name="password" id="username" class="btn-block btn-md " placeholder="Enter Password" />
                   </div>
                   <br />
                   <button type="submit" class='btn-primary btn-md'>Sign up</button>
                   <hr class="bg-dark"/>
                   <Link to='/Login' >
                   <button class='btn-primary btn-lg btn-block'>Login</button>
                   </Link>
            </form>
    
                 </div>
                    
                     </div>
                 </div>
             </div>
         </div>
    
               {/* <div>
                   { 
                    // to show the data we use this in frontend part design 
                   records.map((curElem)=>{
                       const {id,email,password,name,phone,expert} =curElem;
                      return(
                          <div key={id}>
                              <p>{name}</p>
                              <p>{phone}</p>
                              <p>{expert}</p>
                              <p>{email}</p>
                              <p>{password}</p>
                          </div>
                      )
                   })
                 }
               </div> */}
      </>
    
    
      
    </div>
        )
}
