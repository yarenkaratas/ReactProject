import "./App.css";
import "antd/dist/antd.css";
import AnaSayfa from "./components/AnaSayfa";

import React, { useState } from "react";

function App() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const database = [
    {
      username: "dgpays@mail.com",
      password: "123",
    },
  ];
  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "35px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          Login Page
        </h1>
        <div>
          <label style={{ fontSize: "15px" }}>Username :</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div>
          <label style={{ fontSize: "15px" }}>Password :</label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <br></br>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <>
      <div>
        <div>
          {isSubmitted ? (
            <div>
              <AnaSayfa />
            </div>
          ) : (
            renderForm
          )}
        </div>
      </div>
    </>
  );
}

export default App;
