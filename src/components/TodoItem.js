import React from "react";
import "../components/styles/TodoItem.css";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";


function TodoItem(props) {
  
  return (
   

      <li className="flex justify-evenly items-center bg-slate-50  rounded-xl my-5 shadow-2xl  ">
        
        
        <span
          className={` w-10 text-center ml-2 p-1 rounded ${
            props.completed && "Icon-check--active"
          }`}
          onClick={props.onComplete}
        >
         <BsFillCheckSquareFill width={"1.5em"} height={"1.5em"}/>
        </span>

        <div className="  w-64">
          <p
          className={`break-all p-5 text-center  ${props.completed && "line-through"}`}
        >
          {props.text}
        </p>
        </div>  
        




        <span className="w-8 text-center Icon-delete" onClick={props.onDelete}>
          <ImCross className="w-full"/>
        </span>
      </li>
    
  );
}

export { TodoItem };
