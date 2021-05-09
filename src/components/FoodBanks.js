import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router";

function FoodBanks() {
  return (
    <div>

      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <span class="navbar-brand col-md-3 col-lg-2 me-0 px-3"  onClick={(e) => {
      e.preventDefault();
      window.location.href='http://localhost:3000/';
      }}>Food Banks</span>
      </header>

      <main role="main">
        <section class="jumbotron text-center">
          <div class="container">
            <br></br>
            <h1 class="jumbotron-heading">Food Banks</h1>
            <p class="lead text-muted">
              Potential Food Banks to donate extra produce to!
            </p>
          </div>
        </section>

        <div class="row">

            <div class="col-md-4">
              <br></br>
              <div class="card mb-4 box-shadow">
              <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Food_Banks_Canada_logo.svg/800px-Food_Banks_Canada_logo.svg.png" width ="250"  height="250"  alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">Name: Food Banks Canada <br></br> Address (HQ): 5090 Explorer Dr #203, Mississauga, ON L4W 4T9 <br></br> <a href="https://www.foodbankscanada.ca/"> More Information</a> </p>
                  
                  <div class="d-flex justify-content-between align-items-center">
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <br></br>
              <div class="card mb-4 box-shadow">
              <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/en/3/36/Second_Harvest_Toronto_logo.png" width ="250" height="250" alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">Name: Second Harvest Food Rescue <br></br> Address: 1450 Lodestar Rd, North York, ON M3J 3C1 <br></br> <a href="https://secondharvest.ca/"> More Information</a> </p>
                  
                  <div class="d-flex justify-content-between align-items-center">
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <br></br>
              <div class="card mb-4 box-shadow">
              <img class="card-img-top" src="https://salvationarmy.ca/wp-content/themes/sa2017/images/SA_GHT_red_hrz_72.png" width ="250"  height="250"  alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">Name: The Salvation Army <br></br> Address: 2021 Lawrence Ave E, Scarborough, ON M1R 2Z2 <br></br> <a href="https://salvationarmy.ca/what-we-do/food-services/"> More Information</a> </p>
                  
                  <div class="d-flex justify-content-between align-items-center">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <br></br>
              <div class="card mb-4 box-shadow">
              <img class="card-img-top" src="https://canadianfeedthechildren.ca/wp-content/uploads/2017/05/CFTC_Logo_RGB.svg" width ="250"  height="250"  alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">Name: Canadian Feed The Children <br></br> Address: 2 Lansing Square #901, North York, ON M2J 4P8 <br></br> <a href="https://canadianfeedthechildren.ca/"> More Information</a> </p>
                  
                  <div class="d-flex justify-content-between align-items-center">
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <br></br>
              <div class="card mb-4 box-shadow">
              <img class="card-img-top" src="data:image/png;base64,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" width ="500" height="250" alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">Name: Humanity First Canada <br></br> Address: 600 Bowes Rd, Concord, ON L4K 4A3<br></br> <a href="https://www.humanityfirstcanada.ca/"> More Information</a> </p>
                  
                  <div class="d-flex justify-content-between align-items-center">
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <br></br>
              <div class="card mb-4 box-shadow">
              <img class="card-img-top" src="https://mma.prnewswire.com/media/1334436/Daily_Bread_Food_Bank_COVID_19_Food_Insecurity_Crisis_Predicted.jpg?p=publish" width ="250"  height="250"  alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">Name: Daily Bread Food Bank <br></br> Address: 191 New Toronto St, Etobicoke, ON M8V 2E7 <br></br> <a href="https://www.dailybread.ca/"> More Information</a> </p>
                  
                  <div class="d-flex justify-content-between align-items-center">
                  </div>
                </div>
              </div>
            </div>
            </div>

      </main>
      
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
  );
}

export default FoodBanks;