import React, {useState} from "react";
import {Form,Col,Button,InputGroup } from "react-bootstrap";
import { Redirect } from "react-router";
import LandingPage from "./LandingPage";

function Forms () {
  const [validated, setValidated] = useState(false);
  const [fullName,setFullName]=useState("");
  const [phoneNum,setPhoneNum]=useState("");
  const [title,setTitle]=useState("");
  const [website,setWebsite]=useState("");
  const [address,setAddress]=useState("");
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    fetch("http://localhost:5000/api/v1/farms", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
      },
      body: JSON.stringify({
        title: title,
        address:address,
        website: website,
        postedBy:fullName,
        phoneNum:phoneNum
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

      })
      .catch((err) => {
        console.log(err);
      });

  };

  return (
    <div class="container">

      <div class="py-5 text-center">
        <img
          class="d-block mx-auto mb-4"
          src="https://cdn.britannica.com/24/191624-131-817E2227/Feed-corn-harvest-field-Kings-Hill-County.jpg"
          alt=""
          width="72"
          height="72"
        />
        <h2>Farm Listing Form</h2>
        <p class="lead">
          Welcome! You are free to input all the details relating to your farm in the form below so that a listing can be created!
        </p>
      </div>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>

      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Full name"
            onChange={e=>setFullName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="111-222-3333"
            onChange={e=>setPhoneNum(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Farm Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Farm name"
            onChange={e=>setTitle(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Website (Leave as NA if no site)</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="NA"
            defaultvalue="NA"
            onChange={e=>setWebsite(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

      </Form.Row>

      <Form.Row>

        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" required onChange={e=>setAddress(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Address.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <br></br>
      <Button type="submit">Submit form</Button>
    </Form>
{validated? <Redirect to="/" /> : ""}
    </div>
  );
}

export default Forms;
