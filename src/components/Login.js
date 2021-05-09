import React from "react";
import fireb from "./Fire";
//import ServiceCrop from "../services/saveTheCrops";
function Login(props) {
  const {
    fullname,
    setFullname,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailErr,
    passwordErr,
  } = props;
  function handleClick(e) {
    setHasAccount(!hasAccount);
   
  }
  
  return (
    <div>
    <h1 style={{ color:"purple", textAlign:"center"}}>Save The Crops Credentials!</h1>
    <section className="login">
      <div className="loginContainer">
        <label>Full Name</label>
        <input
          type="text"
          autoFocus
          required
          value={fullname}
          onChange={(event) => setFullname(event.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <p className="error message">{emailErr}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <p className="error message">{passwordErr}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign In</button>
              <p>
                Don't have an account?
                <span onClick={handleClick}> Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignUp}>Sign Up</button>
              <p>
                Have an account?
                <span onClick={handleClick}> Sign In</span>
              </p>
            </>
          )}
         
        </div>
      </div>
    </section>
    </div>
  );
}
export default Login;
