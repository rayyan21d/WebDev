import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function HandleNameChange(event) {
    const { value: newValue, name: inputName } = event.target;

    //Instead of passing an object or a string we pass a function
    setContact((prevValue) => {
      //Using the spread operator
      return { ...prevValue, [inputName]: newValue };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          onChange={HandleNameChange}
          placeholder="First Name"
        />
        <input
          name="lName"
          onChange={HandleNameChange}
          placeholder="Last Name"
        />
        <input name="email" onChange={HandleNameChange} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
