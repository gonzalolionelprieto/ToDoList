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
      <div className=" max-w-screen-lg  p-5 h-screen    mx-auto grid grid-cols-1  lg:grid-cols-2  md:items-center   md:content-center ">
        <div className="hidden   lg:flex  flex-col mx-auto  h-fit  bg-slate-50 rounded-xl shadow-2xl shadow-slate-900  items-center">
          

          <div className="flex flex-col items-center justify-center  items-center">
            
            <TodoForm formTitle={""} cancelBtn={false} />


            <div className="w-5/6 pb-10">
              <img className="w-96" src="https://img.freepik.com/vector-gratis/diminuto-hombre-sentado-silla-portatil-fondo-lista-verificacion_74855-20395.jpg?w=826&t=st=1668391151~exp=1668391751~hmac=ccbf5a9c6f9830c471c9688a0bd9fe801a9b380b3766fff74730c0f73dfd3453" alt="" />
            </div>
            
          </div>
        </div>
        <div className="flex flex-col items-start w-full mx-auto  h-full ">
          <TodoCounter />
          
          <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {!loading && !searchedTodos.length && <p className="my-5 ">¡Create your first TODO!</p>}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeToDos(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
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
