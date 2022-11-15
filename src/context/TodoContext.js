import React, { createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";

const TodoContext = createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage(`TODOS_V1`, []);

  const todosCompleted = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const [search, setSearch] = useState(""); /* state del search declarado */
  const [openModal,setOpenModal]=useState(false)/*state del modal declarado */

  /* Setter del search (La función que se ocupa de actualizar nuestro estado) */
  const onSearchValueChange = (event) => {
    setSearch(event.target.value);
  };

  let searchedTodos = [];

  if (!search.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  // Función para añadir un nuevo TODO
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveToDos(newTodos);
  };


  const completeToDos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos]; /*estamos clonando nuestra lista de todos */
    newTodos[
      todoIndex
    ].completed = true; /* estamos marcando al toDo que cumple con la condicion de tener el mismo texto Y marcamos la propiedad completed del toDo como true  */
    saveToDos(
      newTodos
    ); /* actualizamos nuestro estado para re-renderizar la app */
  };

  function deleteTodo(text) {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveToDos(newTodos);
  }

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completeToDos,
        search,
        onSearchValueChange,
        searchedTodos,
        todosCompleted,
        addTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}


export {TodoContext,TodoProvider};