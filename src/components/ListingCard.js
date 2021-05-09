import React from "react";

const ListingCard = (props) => {
  const { title, address, website, phoneNum } = props.transaction;
  function handleClick(e){
    e.preventDefault();
    alert("Signed Up!" );
  }
  return (
    <div class="bg-secondary mr-md-3 pt-3 px-3 pt-md-5 px-md-5  text-white overflow-hidden">
    <div class="my-3 py-3">
      <h2 class="display-5">Farm Name: {title}</h2>
      <p class="lead">Address: {address}<br></br> Website: {website} <br></br> Phone Number: {phoneNum}</p>
      <button onClick={handleClick}>Volunteer</button>
    </div>
    <div class="bg-light box-shadow mx-auto"></div>
  </div>
  );
};

export default ListingCard;
