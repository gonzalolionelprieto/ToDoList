import React from "react";

import "../components/styles/TodoSearch.css";

function TodoSearch({search,onSearchValueChange}) {
  
  
  return (
    <>
      <input
        className="TodoSearch"
        placeholder="Cebolla"
        value={search}
        onChange={onSearchValueChange}
      />
      <p>{search}</p>
    </>
  );
}

export { TodoSearch };
