import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import Footer from "./Footer";
import contacts from "./../contacts";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      email={contact.email}
      phone={contact.phone}
      source={contact.imgURL}
    />
  );
}

function App() {
  return (
    <div>
      <Heading />

      {contacts.map(createCard)}

      <Footer />
    </div>
  );
}

export default App;
