import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import './LogInSignIn.css';

function LogInSignInWithLocalStorage() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const [nameError,setNameError] = useState("");
  const [emailError,setEmailError] = useState("");
  const [passwordError,setPasswordError] = useState("");
  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const localName = localStorage.getItem("name");

  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  }, [localSignUp, localEmail]);

  const isValidName = (name) => {
    return name.length<4;
  };
  const isValidEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  };
  const isValidPassword = (password) => {
    const passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}/;
    const strongPassword = passwordPattern.test(password);
    return strongPassword;
  };

  const handleClick = () => {
    const enteredName = name.current.value;
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    
    setNameError("");
    setEmailError("");
    setPasswordError("");

    if (enteredName && enteredEmail && enteredPassword) {
      
      if (isValidName(enteredName)) {
        setNameError("Please Full Name");

      } if (!isValidEmail(enteredEmail)) {
        setEmailError("Please enter a valid email address");

      } if (!isValidPassword(enteredPassword)) {
        setPasswordError("Password must be with special characters");
      }
      if (
        isValidName(enteredName) ||
        !isValidEmail(enteredEmail) ||
        !isValidPassword(enteredPassword)
      ){

      }
      else {
        localStorage.setItem("name", enteredName);
        localStorage.setItem("email", enteredEmail);
        localStorage.setItem("password", enteredPassword);
        localStorage.setItem("signUp", enteredEmail);
        alert("Account created successfully!");
        window.location.reload();
    } 
  }
    else {
      if (!enteredName) {
        setNameError("Name is required");
      }
      if (!enteredEmail) {
        setEmailError("Email is required");
      }
      if (!enteredPassword) {
        setPasswordError("Password is required");
      }
     
    }
  };

  const handleLogIn = () => {
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    if (enteredEmail === localEmail && enteredPassword === localPassword) {
      localStorage.setItem("signUp", enteredEmail);
      setEmailError("");
      setPasswordError("");
      window.location.reload();
    } 
    else {
      setEmailError('Invalid email or password')
    }
  };
//   const signup=()=>{ 
//     localStorage.clear()
//     window.location.reload()
// }
//   const login=()=>{
//     localStorage.removeItem("signUp")
//     window.location.reload()
// }

  return (
    <div className="don">
      {showHome ? (
        <Home />
      ) : show ? (
        <div className="container1">
            {/* <button onClick={signup} className="signup">Sign Up</button> */}
          <h4>Hello {localName}!</h4>
          <div className="error1"> {emailError}</div>
          <div className="input_space">
            <input placeholder="Email" type="text" ref={email} />
          </div>
          <div className="input_space">
            <input placeholder="Password" type="password" ref={password} />
          </div>
          <button onClick={handleLogIn} className="login">Log In</button>
        </div>
      ) : (
        <div className="container2">
            {/* <button onClick={login} className="login">Log In</button> */}
          <h4>Create an Account</h4>
          <div className="input_space">
            <p className="name">Name</p>
            <input placeholder="Name" type="text" ref={name} />
            <div className="error"> {nameError}</div>
          </div>
          <div className="input_space">
          <p className="name">Email</p>
            <input placeholder="Email" type="text" ref={email} />
            <div className="error"> {emailError}</div>
          </div>
          <div className="input_space">
          <p className="name">Password</p>
            <input placeholder="Password" type="password" ref={password} />
            <div className="error"> {passwordError}</div>
          </div>
          <button onClick={handleClick}>Sign Up</button>
        </div>
      )}
    </div>
  );
}

export default LogInSignInWithLocalStorage;


 