import React, { useContext } from "react";

import { TodoContext } from "../context/TodoContext";

function TodoCounter() {
  const { totalTodos, todosCompleted } = useContext(TodoContext);

  return (
    <> 
      <div className="py-5 h-52 flex flex-row justify-around align-middle mx-auto  px-5">
        <div className="flex flex-col">
          <h2 className="text-4xl text-start pt-5 font-bold uppercase ">Hello Person !</h2>
        <h5 className="text-2xl text-start pb-5 ">
         Today you have {totalTodos}  task.
        </h5>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
}

export { TodoCounter };
