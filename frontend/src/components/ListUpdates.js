import React, { Fragment, useEffect, useState } from "react";
import Panel from "./Panel";
const moment = require("moment");

const ListUpdates = () => {
  const [updates, setUpdates] = useState([]);
  //delete update
  const deleteUpdate = async (ID) => {
    try {
      const deleteUpdate = await fetch(`http://localhost:5000/updates/${ID}`, {
        method: "DELETE",
      });
      setUpdates(updates.filter((update) => update.id !== ID));
      window.location ="/"
      console.log(deleteUpdate);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getUpdates = async () => {
    try {
      const response = await fetch("http://localhost:5000/updates");
      var jsonData = await response.json();

      for (var i = 0; i < jsonData.length; i++) {
        var formatted = jsonData[i].update_date;
        jsonData[i].update_date = moment(formatted).format("MMMM D, YYYY");
      }
      setUpdates(jsonData.reverse());
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUpdates();
  }, []);



  return (
    <Fragment>
      {""}
      <div>
        {updates.map((update) => (
          <Panel key={update.id} pass={update}/>
        ))}
      </div>
      {updates.map((update) => (
        <button key={update.id}
          className="btn btn-danger float-right mr-2"
          onClick={() => deleteUpdate(update.id)}
        >
          Delete
        </button>
      ))}
    </Fragment>
  );
};

export default ListUpdates;
