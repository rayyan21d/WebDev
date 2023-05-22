import React from "react";
import Avatar from "./Avatar";
import Detail from "./Details";

function Card(prop) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{prop.name}</h2>
        <Avatar source={prop.source} />
      </div>
      <div className="bottom">
        <Detail detailInfo={prop.phone} />
        <Detail detailInfo={prop.email} />
      </div>
    </div>
  );
}

export default Card;
