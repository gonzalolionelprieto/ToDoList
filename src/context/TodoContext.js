import React, { createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";

const TodoContext = createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveitem: saveToDos,
    loading,
    error,
  } = useLocalStorage(`TODOS_V1`, []);

  const todosCompleted = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const [search, setSearch] = useState(""); /* state del search declarado */

  /* Setter del search (La función que se ocupa de actualizar nuestro estado) */
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
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

  /* esta funcion cada vez que reciba un texto va a buscar cual de los items de todos cumple con esa condicion */
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
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}


export {TodoContext,TodoProvider};