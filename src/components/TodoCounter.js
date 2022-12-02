import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import avatar from "../components/img/astronaut.png"

function TodoCounter() {
  const { totalTodos } = useContext(TodoContext);

  return (
    <>
      <div className="w-full py-5  flex flex-row  justify-center items-center mx-auto  px-5">
        <div className="flex justify-around items-center">
          <div className="flex flex-col w-full">
            <h2 className="text-4xl text-start pt-5 font-black  ">
              Hello Ender!
            </h2>

            <h5 className="text-2xl text-start pb-5 tracking-wider">
              Today you have {totalTodos} task.
            </h5>
          </div>
          <div className="w-2/5 md:w-1/5">
            <div className=" w-full">
              <img className="w-96 rounded-full ring-2 ring-white bg-white" src={avatar} alt="" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export { TodoCounter };
