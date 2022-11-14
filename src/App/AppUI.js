import React, { useContext } from "react";
import { CreateTodoButtom } from "../components/CreateTodoButtom";
import { TodoCounter } from "../components/TodoCounter";
import { TodoForm } from "../components/TodoForm";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { TodoContext } from "../context/TodoContext";
import { Modal } from "../modal/Modal";
import "../components/styles/AppUi.css";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeToDos,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
      <div className=" max-w-screen-lg mx-auto p-5 h-screen    mx-auto grid grid-cols-1  lg:grid-cols-2  ">
        <div className="hidden   lg:flex  flex-col mx-auto  h-fit min-w-96 bg-slate-50 rounded-xl shadow-2xl shadow-slate-900  ">
          <div className=" flex justify-center items-center h-20">
            <h1 className=" text-2xl text-center font-bold  w-full ">
              CREATE NEW TASK
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center  items-center">
            
            <TodoForm formTitle={"New Task"} cancelBtn={false} />


            <div className="w-3/6">
              <img className="w-96" src="https://img.freepik.com/vector-gratis/diminuto-hombre-sentado-silla-portatil-fondo-lista-verificacion_74855-20395.jpg?w=826&t=st=1668391151~exp=1668391751~hmac=ccbf5a9c6f9830c471c9688a0bd9fe801a9b380b3766fff74730c0f73dfd3453" alt="" />
            </div>
            
          </div>
        </div>
        <div className="flex flex-col w-96 mx-auto  h-3/6 max-h-max border">
          <TodoCounter />
          <TodoSearch />
          <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeToDos(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          {!!openModal && (
            <Modal>
              <TodoForm formTitle={"create  new task"} cancelBtn={true}/>
            </Modal>
          )}
          <CreateTodoButtom setOpenModal={setOpenModal} openModal={openModal} />
        </div>
      </div>
    </>
  );
}

export { AppUI };
