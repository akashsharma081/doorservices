import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Link , NaviLink , Switch , Route} from 'react-router-dom';

export default function Contact(props) {


   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   var stId = props.match.params.id;

//    useEffect(() => {
// 	if(stId){
// 	 // here we fetch new api with which have id register and match with id 
// 	 // remember always the stId exist if you dont apply than this calling no sense 
// 	  axios.get('http://localhost:3001/contact-by-id?id='+stId).then(
// 		  (res)=>{
// 			  console.log(res.data.data); 
// 			  setName(res.data.data[0].name);
// 			  setEmail(res.data.data[0].email);
// 			  setMessage(res.data.data[0].message);

// 		  }
// 	  )} 
// 	 }, [])



   function setValue(e){
	e.target.name=="Name" && setName(e.target.value);
	e.target.name=="Email" && setEmail(e.target.value);
	e.target.name=="Message" && setMessage(e.target.value);
	}


	function sendData(){
		// alert(name);
        // alert(email);
        // alert(message);
		alert("We will Contact you soon");

		var s={
		name,email,message
		}
	
		if(s)
		{  s.id=stId;
			console.log(s)
            axios.post('http://localhost:3001/update-contact',s).then((res)=>{
			console.log(res.data);
			// alert(res.data);
			})
		}
		else
        {
			    axios.post('http://localhost:3001/contact-users',s).then((res)=>{
				console.log(res.data); 
				alert(res.data);
				})
        }

	}

	return (
<>
      <section id="inner-headline">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<h2 class="pageTitle">Contact</h2>
					</div>
				</div>
			</div>
	  </section>

		<section id="content">
	
			<div class="container ">
					<div class="row">
								<div class="col-md-5">
									<form novalidate>
										<h3>Contact me</h3>
										<div class="control-group">
											<div class="controls">
												<input type="text" name="Name" value={name}  onChange={(e)=>{setValue(e)}} class="form-control" placeholder="Full Name" id="name" required data-validation-required-message="Please enter your name" />
												<p class="help-block"></p>
											</div>
										</div> 	
										
										<div class="control-group">
											<div class="controls">
												<input type="email" name="Email" value={email}  onChange={(e)=>{setValue(e)}} class="form-control" placeholder="Email" id="email" required data-validation-required-message="Please enter your email" />
											    <br/>
											</div>
										</div> 	
						
										<div class="control-group">
											<div class="controls">
												<textarea rows="10" name="Message" value={message}  onChange={(e)=>{setValue(e)}} cols="100" class="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter your message" minlength="5" data-validation-minlength-message="Min 5 characters"  maxlength="999" ></textarea>
												
											</div>
										</div> 		

										    <div id="success"> </div> 
											<button type="submit" class="btn btn-primary pull-right" onClick={sendData} >Send</button><br />
								</form>		
								
								</div>			
								
						
					</div>		
			</div>

		</section>
</>
	)
}
