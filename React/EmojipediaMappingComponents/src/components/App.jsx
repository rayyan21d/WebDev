import React from "react";
import Header from "./Header";
import Entry from "./Entry";
import emojipedia from "./../emojipedia";

function App() {
  return (
    <div>
      <Header />
      <dl className="dictionary">
        {emojipedia.map((element) => (
          <Entry
            key={element.id}
            emoji={element.emoji}
            name={element.name}
            meaning={element.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
