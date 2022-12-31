import React from "react";
import { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoForm({ formTitle, cancelBtn }) {
  // Creamos un estado para nuestro nuevo TODO
  const [newTodoValue, setNewTodoValue] = useState("");
  // Desestructuramos las funciones que necesitamos para añadir un TODO y cerrar nuestro modal
  const { addTodo, setOpenModal } = useContext(TodoContext);

  // Creamos una función para actualizar el estado de nuestro nuevo TODO
  const onWrite = (event) => {
    setNewTodoValue(event.target.value);
  };

  // Función para cerrar el modal
  const onCancel = () => {
    setOpenModal(false);
  };

  // Función para agregar nuestro nuevo TODO
  const onSubmit = (event) => {
    // prevent default para evitar recargar la página
    event.preventDefault();
    // Utilizamos nuestra función para añadir nuestro TODO
    addTodo(newTodoValue);
    // Cerramos nuestro modal
    setOpenModal(false);
    //  resetear nuestro formulario
    setNewTodoValue("");
  };

  return (
    <div className="container w-full mx-auto h-full flex flex-lg-none justify-center items-center ">
      <form
        onSubmit={onSubmit}
        className=" py-4 flex flex-col justify-center items-center mx-auto  w-72"
      >
        <label className="flex font-bold  w-full my-3">{formTitle}</label>
        <textarea
          value={newTodoValue}
          maxLength="500"
          onChange={onWrite}
          placeholder="New task.."
          className="rounded-lg drop-shadow-xl w-full h-11/12 text-left p-3 resize-none text-slate-900 focus-visible:outline-none    "
          
          rows="6"
        />
        <div className=" flex justify-start w-full  ">
          {cancelBtn ? (
            <button
              type="button"
              className="px-5 py-2 bg-red-400 my-4 rounded-lg text-lg font-bold mx-5"
              onClick={onCancel}
            >
              Cancel
            </button>
          ) : (
            ""
          )}

          <button
            type="submit"
            className="px-5 py-2 bg-yellow my-4 rounded-lg text-sm font-bold"
          >
            Create task
          </button>
        </div>
      </form>
    </div>
  );
}

export { TodoForm };
