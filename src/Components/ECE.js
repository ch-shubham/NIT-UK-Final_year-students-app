import React from "react";
import Card from "./Cardcomponents/Card";
import contacts from "../contacts";

function Students() {
  return (
    <div>
      <h1 className="heading">NITUK 17-21 BATCH</h1>
      {/* <div> */}
        {contacts.map(contactNo => (
          <Card
            key={contactNo.id}
            name={contactNo.name}
            img={contactNo.imgURL}
            tel={contactNo.phone}
            email={contactNo.email}
          />
        ))}
      {/* </div> */}
    </div>
  );
}

export default Students;