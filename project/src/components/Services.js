import React from 'react';
import {Link , Switch , Route} from 'react-router-dom';

export default function Services() {
    return (
        <>
            	<section id="inner-headline">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<h2 class="pageTitle">Services</h2>
			</div>
		</div>
	</div>
	</section>

<section id="content">
		<div class="container content">	
            <div class="row">
                    <div class="col-md-12 text-center">
                        <div><h2>Select Services</h2></div>
                        <br/>
                    </div>
            </div>		

            <div class="row service-v1 margin-bottom-40">
                <Link exact to='/Electrician'>
                    <div class="col-md-4 md-margin-bottom-40">
                        <img class="img-responsive" src="img/eletric.jpg" alt="" />   
                        <h3 class="text-center">Electrician </h3>
                        <p>Hire the Expert services of experienced electrician online with a rating 4,5+ in accorss India, within 90 minutes of your booking with a 30-days post-services guarantee and protection against damage upto INR 5000, Book the best class eletician services at your favourable time slot without giving any eletical shock to your wallet, service door company    </p>        
                    </div>
                </Link>
                <Link exact to='/Plumber'>
                    <div class="col-md-4">
                        <img class="img-responsive" src="img/Plumber.jpg" alt="" />            
                        <h3 class="text-center">Plumber</h3>
                        <p>Hire the Expert services of experienced Plumber online with a rating 4,5+ in accorss India, within 90 minutes of your booking with a 30-days post-services guarantee and protection against damage upto INR 5000, Book the best class plumber services at your favourable time slot without giving any plumber shock to your wallet, service door company    </p>        
                    </div>
                </Link>
                <Link to='/Haircut'>
                    <div class="col-md-4 md-margin-bottom-40">
                    <img class="img-responsive" src="img/haircut.jpg" alt="" />  
                        <h3 class="text-center">Haircut</h3>
                        <p>Hire the Expert services of experienced Haircut online with a rating 4,5+ in accorss India, within 90 minutes of your booking with a 30-days post-services guarantee and protection against damage upto INR 5000, Book the best class haircut services at your favourable time slot without giving any haircut shock to your wallet, service door company    </p>        
                    </div>
                </Link>
            </div>
  

            <hr class="margin-bottom-50" />

            <Link to='/Mechanic'>
                <div class="col-md-4 md-margin-bottom-40">
                        <img class="img-responsive" src="img/Mechanic.jpg" alt="" />  
                        <h3 class="text-center">Mechanic</h3>
                        <p>Hire the Expert services of experienced Mechanic online with a rating 4,5+ in accorss India, within 90 minutes of your booking with a 30-days post-services guarantee and protection against damage upto INR 5000, Book the best class mechanic services at your favourable time slot without giving any mechanic shock to your wallet, service door company    </p>        
                </div> 
            </Link>
        

        </div>
</section>
        </>
    )
}
