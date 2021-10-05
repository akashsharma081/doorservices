import React from 'react'
// import '../css/Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { aCTR, dCTR, increaseCTR } from '../actions/DoorServiceActions';

function Cart() {

   const user = useSelector(state => state.user);
   const loading = useSelector(state => state.loading)
   const cart = useSelector(state => state.cart);
   const dispatch = useDispatch()
   console.log("cart is", cart);

   function fun(pid) {
      dispatch(increaseCTR(pid));
   }
   function fun2(pid) {
      dispatch(dCTR(pid));
   }
   function fun3(pid) {
      dispatch(aCTR(pid));
   }
   console.warn(cart);
   var cart_items = cart.map(function (c) {
      return <div key={c.vendor_id}>
         <h4>{c.service_title} </h4>
         <h3>{c.service_cost} </h3>
         <div >
            <div className="ss">
               <button onClick={function () { fun2(c.vendor_id) }}>-</button>
               <p>
                  {c.qty}
               </p>
               <h4 className=""> ₹ {c.service_cost * c.qty}</h4><br />
               {/* <button onClick={fun}>+</button> */}
               <button onClick={function () { fun(c.vendor_id) }}>+</button>
               <h6> <Link onClick={function () { fun3(c.vendor_id) }}>Remove</Link></h6>
            </div>
         </div>
         <hr />
      </div>
   });
   return (
      <div className="cart">
         {!user && <div>
            <h4>Missing Cart items?</h4>
            <p>Login to see the items you added previously</p>
         </div>}
         {user && cart_items}
         {!user && <Link exact to="/Login" className="login_btn2">Log In </Link>}
      </div>
   )

}
export default Cart