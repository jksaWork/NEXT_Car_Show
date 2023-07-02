"use client";
import { useState } from "react";

import { SerachMenuFactor } from "./";
function SearchBar() {
  const [manuFactor, setManuFactor] = useState("");
  return (
    <form onSubmit={() => "asd"} className="searchbar">
      {/*  */}
      <div className="searchbar__item">
        <SerachMenuFactor
          manuFactor={manuFactor}
          setManuFactor={setManuFactor}
        />{" "}
      </div>
      {/*  */}
    </form>
  );
}

export default SearchBar;
