import { useState } from "react";
import Description from "./components/Description";
import Price from "./components/Price";
import Registration from "./components/Registration";

function App() {
  return (
    <>
      <div className="min-[1440px]:flex items-center gap-[45px]">
        <div>
          <Description />
        </div>
        <div>
          <Price />
          <Registration />
        </div>
      </div>
    </>
  );
}

export default App;
