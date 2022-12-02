import React from "react";
import "../components/styles/TodoItem.css";

import { AiOutlineCheckCircle } from "react-icons/ai";

import { AiOutlineCloseCircle } from "react-icons/ai";


function TodoItem(props) {
  
  return (
   

      <li className="flex justify-evenly items-center bg-slate-50  rounded-xl my-5 shadow-lg shadow-slate-900/50  ">
        
        
        <span
          className={`Icon-check w-20 text-center ml-2 p-1 rounded  ${
            props.completed && "Icon-check--active"
          }`}
          onClick={props.onComplete}
        >
         <AiOutlineCheckCircle size={"1.7em"}/>
        </span>

        <div className="  w-64">
          <p
          className={`break-all p-5 text-center  ${props.completed && "line-through"}`}
        >
          {props.text}
        </p>
        </div>  
        




        <span className="w-20 text-center Icon-delete " onClick={props.onDelete} >
          <AiOutlineCloseCircle size={"1.6em"} />
        </span>
      </li>
    
  );
}

export { TodoItem };
