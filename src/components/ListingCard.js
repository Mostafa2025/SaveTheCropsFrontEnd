import React from "react";

const ListingCard = (props) => {
  const { title, address, website, phoneNum,postedBy } = props.farm;
  function addBooking() {
    fetch("http://localhost:5000/api/v1/bookings", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
            title: title,
            address: address,
            phoneNum: phoneNum,
            website: website,
            postedBy: postedBy,
            userEmail:"canit43016@httptuan.com"
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      
  }
  function handleClick(e){
    e.preventDefault();
    addBooking();
  }
  return (
    <div class="bg-secondary mr-md-3 pt-3 px-3 pt-md-5 px-md-5  text-white overflow-hidden">
    <div class="my-3 py-3">
      <h4 class="display-5">Farm Name: {title}</h4>
      <p class="lead">Address: {address}<br></br> Website: {website} <br></br> Phone Number: {phoneNum}</p>
      <button onClick={handleClick}>Volunteer</button>
    </div>
    <div class="bg-light box-shadow mx-auto"></div>
  </div>
  );
};

export default ListingCard;
