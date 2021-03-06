import React from "react";

const AppointmentCard = (props) => {
  const { title, address, website, bookingPhoneNum } = props.transaction;
  return (
    <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5  text-white overflow-hidden">
    <div class="my-3 py-3">
      <h2 class="display-5">Farm Name: {title}</h2>
      <p class="lead">Address: {address}<br></br> Website: {website} <br></br> Phone Number: {bookingPhoneNum}</p>
    </div>
    <div class="bg-light box-shadow mx-auto"></div>
  </div>
  );
};

export default AppointmentCard;
