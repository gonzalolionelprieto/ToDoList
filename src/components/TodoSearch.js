import React from "react";
import { useContext } from "react";

import { TodoContext } from "../context/TodoContext";

function TodoSearch() {
  const { search, onSearchValueChange } = useContext(TodoContext);

  return (
    <>
      <div className="flex justify-center  my-1 lg:my-5  mx-auto  w-full max-w-screen-sm ">
        <input
          className="grow h-14 bg-slate-50 rounded-xl shadow-xl shadow-slate-900/50 placeholder-black pl-5 placeholder-opacity-50"
          placeholder="Search task"
          value={search}
          onChange={onSearchValueChange}
        />
        
      </div>
    </>
  );
}

export { TodoSearch };
