import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LandingPage()
{
 
  function handleClick(e){
    e.preventDefault();
    alert("Signed Up!" );
  }
return (
    <div>
      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <span class="navbar-brand col-md-3 col-lg-2 me-0 px-3">Save The Crops</span>
      </header>

      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-4 font-weight-normal">Save The Crops</h1>
      <p class="lead font-weight-normal">Our mission is to connect individuals with farms so that they can assist them in harvesting the crops as there is a shortage of labour due to COVID-19, and thus to stop the crops from rotting away which leads to more climate change and a negative impact on the food supply chain, volunteers are needed!</p>
      <a class="btn btn-outline-secondary" href="#">Volunteer Today!</a>
    </div>
    <div class="product-device box-shadow d-none d-md-block"></div>
    <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
  </div>

  <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3"style={{justifyContent:"center"}}>
    <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden" >
      <div class="my-3 py-3">
        <h2 class="display-5">Add a Farm Listing</h2>
        <button onClick={handleClick}>Submit Form</button>
      </div>
      <div class="bg-light box-shadow mx-auto" ></div>
    </div>
    <div class="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 p-3">
        <h2 class="display-5">View Food Banks</h2>
        <button onClick={handleClick}>View Now</button>
      </div>
      <div class="bg-dark box-shadow mx-auto" ></div>
    </div>
  </div>

  <footer class="container py-5">
    <div class="row">
      
      <div class="col-6 col-md">
        <h5>TOHacks 2021 Submission</h5>
        <ul class="list-unstyled text-small">
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
        <li><a class="text-muted">ReactJS</a></li>
          <li><a class="text-muted">MongoDB</a></li>
          <li><a class="text-muted">FireBase</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>More Resources</h5>
        <ul class="list-unstyled text-small">
         <li><a class="text-muted">Express</a></li>
          <li><a class="text-muted">Node.js</a></li>
          <li><a class="text-muted">Courier </a></li>
          <li><a class="text-muted">SendGrid </a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>About Team</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted">Backend Lead: Shakhzoda</a></li>
          <li><a class="text-muted">Frontend Lead: Mostafa</a></li>
        </ul>
      </div>
    </div>
  </footer>
  </div>
)
}



export default LandingPage;