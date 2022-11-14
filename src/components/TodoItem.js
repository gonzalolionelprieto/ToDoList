import React from "react";
import "../components/styles/TodoItem.css";

function TodoItem(props) {
  return (
   

      <li className="flex justify-evenly items-center bg-slate-50  rounded-xl my-5 shadow-2xl  ">
        <span
          className={`border-2 border-yellow-400 w-10 text-center ml-2 p-1 rounded ${
            props.completed && "Icon-check--active"
          }`}
          onClick={props.onComplete}
        >
          V
        </span>

        <div className="  w-64">
          <p
          className={`break-all p-5 text-center  ${props.completed && "line-through"}`}
        >
          {props.text}
        </p>
        </div>  
        




        <span className="w-10 text-center " onClick={props.onDelete}>
          X
        </span>
      </li>
    
  );
}

export { TodoItem };
