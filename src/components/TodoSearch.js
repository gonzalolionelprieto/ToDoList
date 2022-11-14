import React from "react";
import { useContext } from "react";
import "../components/styles/TodoSearch.css";
import { TodoContext } from "../context/TodoContext";

function TodoSearch() {
  const { search, onSearchValueChange } = useContext(TodoContext);

  return (
    <>
      <div className="flex justify-center  my-5  mx-auto  w-96">
        <input
          className="grow h-14 bg-slate-50 rounded-xl shadow-xl placeholder-black pl-5 placeholder-opacity-50"
          placeholder="Search task"
          value={search}
          onChange={onSearchValueChange}
        />
        
      </div>
    </>
  );
}

export { TodoSearch };
