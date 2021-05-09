import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LandingPage()
{
  
return (
    <div>
    <nav class="site-header sticky-top py-1">
    <div class="container d-flex flex-column flex-md-row justify-content-between">
      <a class="py-2 d-none d-md-inline-block" href="#">Tour</a>
      <a class="py-2 d-none d-md-inline-block" href="#">Product</a>
      <a class="py-2 d-none d-md-inline-block" href="#">Features</a>
      <a class="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
      <a class="py-2 d-none d-md-inline-block" href="#">Support</a>
      <a class="py-2 d-none d-md-inline-block" href="#">Pricing</a>
      <a class="py-2 d-none d-md-inline-block" href="#">Cart</a>
    </div>
  </nav>

      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-4 font-weight-normal">Save The Crops</h1>
      <p class="lead font-weight-normal">Our mission is to connect individuals with farms so that they can assist them in harvesting the crops as there is a shortage of labour due to COVID-19, and thus to stop the crops from rotting and causing more climate change, volunteers are needed!</p>
      <a class="btn btn-outline-secondary" href="#">Coming soon</a>
    </div>
    <div class="product-device box-shadow d-none d-md-block"></div>
    <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
  </div>

  <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3"style={{justifyContent:"center"}}>
    <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden" >
      <div class="my-3 py-3">
        <h2 class="display-5">Another headline</h2>
        <p class="lead">And an even wittier subheading.</p>
      </div>
      <div class="bg-light box-shadow mx-auto" ></div>
    </div>
    <div class="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 p-3">
        <h2 class="display-5">Another headline</h2>
        <p class="lead">And an even wittier subheading.</p>
      </div>
      <div class="bg-dark box-shadow mx-auto" ></div>
    </div>
  </div>

  <footer class="container py-5">
    <div class="row">
      
      <div class="col-6 col-md">
        <h5>Created Using</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="#">ReactJS</a></li>
          <li><a class="text-muted" href="#">MongoDB</a></li>
          <li><a class="text-muted" href="#">FireBase</a></li>
          <li><a class="text-muted" href="#">Express</a></li>
          <li><a class="text-muted" href="#">Node.js</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="#">Resource</a></li>
          <li><a class="text-muted" href="#">Resource name</a></li>
          <li><a class="text-muted" href="#">Another resource</a></li>
          <li><a class="text-muted" href="#">Final resource</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="#">Business</a></li>
          <li><a class="text-muted" href="#">Education</a></li>
          <li><a class="text-muted" href="#">Government</a></li>
          <li><a class="text-muted" href="#">Gaming</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>About</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="#">Team</a></li>
          <li><a class="text-muted" href="#">Locations</a></li>
          <li><a class="text-muted" href="#">Privacy</a></li>
          <li><a class="text-muted" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
  </div>
)
}



export default LandingPage;