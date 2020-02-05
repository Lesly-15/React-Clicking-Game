import React from "react";
import navbar from "./components/navbar";
import instructions from "./components/instructions";
import cardcontainers from "./components/cardscontainer";


function App() {
  return (
      <div>
        <navbar />
        <instructions />
        <cardcontainers />
      </div>
  );
}

export default App;