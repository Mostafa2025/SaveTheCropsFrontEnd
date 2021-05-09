import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "../styles/PaginatedStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListingCard from "./ListingCard";

const data = [
  {
    title: "some randome park",
    address: "some random address",
    website: "www.abc.com",
    phoneNum: "+12345678",
  },
  {
    title: "some  park",
    address: "some  address",
    website: "www.dbc.com",
    phoneNum: "+12345678",
  },
  {
    title: "randome park",
    address: "random address",
    website: "www.efg.com",
    phoneNum: "+12345678",
  },
  {
    title: "randome park",
    address: "random address",
    website: "www.boo.com",
    phoneNum: "+12345678",
  },
  {
    title: "randome parasdak",
    address: "random address",
    website: "www.boo.com",
    phoneNum: "+12345678",
  },
];

function Listings(props) {
  const numPerPage = 2;
  const [currentPage, setCurrentPage] = useState(0);

  const totalVisited = currentPage * numPerPage;

  const display = data
    .slice(totalVisited, totalVisited + 3)
    .map((farm) => {
      return (
        <div>
          <ul>
            <ListingCard key={farm} transaction={farm} />
          </ul>
        </div>
      );
    });

  const numOfPages = Math.ceil(data.length / 2);

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <span class="navbar-brand col-md-3 col-lg-2 me-0 px-3">Listings</span>
        <span class="navbar-brand col-md-3 col-lg-2 me-0 px-3" onClick={props.handleLogOut} >Logout</span>
      </header>

      <div class="container-fluid">
        <div class="row">

          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 class="h2">Volunteer Opportunities</h1>
            </div>

            <div
              class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3"
              style={{ justifyContent: "center" }}
            >   
              {display}
            </div>

            <div class="container">
              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={numOfPages}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
              />
              </div>
          </main>
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
  );
}

export default Listings;
