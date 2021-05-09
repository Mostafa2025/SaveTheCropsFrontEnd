import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../styles/PaginatedStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppointmentCard from "./AppointmentCard";
import fireb from "./Fire";

function Dash(props) {
  const numPerPage = 2;
  const [currentPage, setCurrentPage] = useState(0);
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState([]);

  function getData() {
    fetch(`http://localhost:5000/api/v1/bookings?userEmail=canit43016@httptuan.com`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setBookings(response.bookings);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  useEffect(() => {
    getData();
  }, []);

  const totalVisited = currentPage * numPerPage;

  const display = bookings.slice(totalVisited, totalVisited + 3).map((farm) => {
    return (
      <div>
        <ul>
          <AppointmentCard key={farm} transaction={farm} />
        </ul>
      </div>
    );
  });

  const numOfPages = Math.ceil(bookings.length / 2);

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <span class="navbar-brand col-md-3 col-lg-2 me-0 px-3">Dashboard</span>
        <span
          class="navbar-brand col-md-3 col-lg-2 me-0 px-3"
          onClick={props.handleLogOut}
        >
          Logout
        </span>
      </header>

      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active">
                    <span data-feather="home"></span>
                    Contact Details
                  </a>
                </li>
                <img
                  src="https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png"
                  width="200"
                  height="200"
                ></img>
                <li class="nav-item">
                  <a class="nav-link">Name: John Doe</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link">Email: canit43016@httptuan.com</a>
                </li>
              </ul>
              <br></br> <br></br>
              <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Want to Volunteer?</span>

                <a class="d-flex align-items-center text-muted"> </a>
              </h6>
              <ul class="nav flex-column mb-2">
                <br></br>
                <li class="nav-item">
                  <button class="btn btn-outline-primary"  onClick={(e) => {
      e.preventDefault();
      window.location.href='http://localhost:3000/listing';
      }}>
                    View Listings
                  </button>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 class="h2">Your Appointments</h1>
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

export default Dash;
