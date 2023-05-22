import React from "react";

function List() {
  const image = "https://picsum.photos/200/300";

  return (
    <div className="gallery">
      <ul>
        <li>
          <img src="https://images.unsplash.com/photo-1683600503806-904a719b2a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        </li>
        <li>
          <img src="https://images.unsplash.com/photo-1682847842653-a881916772b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" />
        </li>
        <li>
          <img src="https://images.unsplash.com/photo-1682917265562-139c5aa7070c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        </li>
        <li>
          <img src={image} />
        </li>
      </ul>
    </div>
  );
}

export default List;
