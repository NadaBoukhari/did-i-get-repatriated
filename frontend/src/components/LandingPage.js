import React, { Fragment, useState } from "react";
import ListUpdates from "./ListUpdates";
import authenticate from "../authentification/authenticate";

const LandingPage = (props) => {
  const [password, setPassword] = useState("");
  const handleClick = () => {
    const password = prompt("Password ?");
    if(password ==="password"){
      authenticate.login(() =>{
        props.history.push("/complain")
      })
    }
    setPassword(password)
  };

  return (
    <Fragment>
      <div className="container">
        <button
          className="btn btn-warning"
          onClick={()=> handleClick()}
        >
          login
        </button>
        <h1 className="text-center mt-5">
          Did Nada get repatried from the USA ?
        </h1>
        <br />

        <ListUpdates />
      </div>
      <div className="footer">
        <p>I</p>
        <p>Am</p>
        <p>Exhausted.</p>
      </div>
    </Fragment>
  );
};

export default LandingPage;
