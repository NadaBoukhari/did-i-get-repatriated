import React, { Fragment, useState } from "react";
import authenticate from "../authentification/authenticate";

const InputUpdates = (props) => {
  const [update_text, setUpdateText] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { update_text };
      const response = await fetch("http://localhost:5000/updates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/"; //refresh and show changes
    } catch (err) {
      console.error(err.message);
    }
  };
  if (authenticate.isAuthenticated()) {
    return (
      <Fragment>
        <form className="d-flex mt-5 mb-3" onSubmit={onSubmitForm}>
          <input
            type="text"
            className="form-control"
            value={update_text}
            onChange={(e) => setUpdateText(e.target.value)}
          />
          <button className="btn btn-success">Complain</button>
          <div className="">
            <button
              className="btn btn-primary"
              onClick={() => {
                authenticate.logout(() => {
                  props.history.push("/");
                });
              }}
            >
              Logout
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
  else{
    return(
      <h1>Sorry :/</h1>
    )
  }
};

export default InputUpdates;
