import { useState } from "react";
import Description from "./components/Description";
import Price from "./components/Price";
import Registration from "./components/Registration";

function App() {
  return (
    <>
      <div className="description-container">
        <Description />
      </div>
      <Price />
      <Registration />
    </>
  );
}

export default App;
