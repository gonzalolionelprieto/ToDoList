import react, { useEffect } from "react";
import { useState } from "react";

import "../src/index.css";
import { TodoCounter } from "./components/TodoCounter.js";
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoList } from "./components/TodoList.js";
import { TodoItem } from "./components/TodoItem.js";
import { CreateTodoButtom } from "./components/CreateTodoButtom.js";

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true);
  const [item, setitem] = useState(initialValue);
  useEffect(() => {
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItems;
      /* si no hay nada en el storage */
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItems = initialValue;
      } else {
        parsedItems = JSON.parse(localStorageItem);
      }
      setitem(parsedItems);
      setLoading(false);
    }, 1000);
  }, []);

  /* funcion para persistir datos en el local storage */
  const saveitem = (newItem) => {
    const stringifieditem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifieditem);
    setitem(newItem);
  };

  return { item, saveitem, loading };
}

function App() {
  const {
    item: todos,
    saveitem: saveToDos,
    loading,
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
    <react.Fragment>
      <TodoCounter todosCompleted={todosCompleted} totalTodos={totalTodos} />
      <TodoSearch
        search={search}
        setSearch={
          setSearch
        } /* Getter (El valor de nuestro estado, en este caso search) */
        onSearchValueChange={onSearchValueChange}
      />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() =>
              completeToDos(todo.text)
            } /* llamar a la funcion enviandole el texto de ese todo,estamos llamando a la funcion cada vez que le demos click al check */
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButtom />
    </react.Fragment>
  );
}

export default App;
