import React, { Component } from "react";

export class Customer extends Component {

render() {
    return (
        <div id="customer" className="text-center">
        <div className="container">
          <div className="section-title text-center">
<<<<<<< HEAD
<<<<<<< HEAD
              <h2>Customer Login</h2>
          <form name="sentMessage" id="contactForm" novalidate>
=======
              <h2>Customer Login</h2>
          <form name="sentMessage" id="contactForm" noValidate>
>>>>>>> bc8497cc37c22076938b92c8ace31f524cdf66ee
                <div className="row">

                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" id="name" className="form-control" placeholder="Email" required="required" />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  </div>
                  <div className="row">

              <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" id="email" className="form-control" placeholder="Password" required="required" />
                    </div>
                  </div>
                  </div>

                  </form> 
<<<<<<< HEAD
                  <button type="submit" class="btn btn-custom btn-lg" href="./AccountHome.js">Login</button>                
                   </div>
=======
            <h2>Customer Portal</h2>
            <p>Login Form should go here</p>
        </div>
>>>>>>> cbb8bf2e2a9a0d2720bd63128689dce0f65ad068
=======
                  <button type="submit" class="btn btn-custom btn-lg">Login</button>                
                   </div>
>>>>>>> bc8497cc37c22076938b92c8ace31f524cdf66ee
        </div>
        </div>
    )
}
}

export default Customer;