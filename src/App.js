import react from "react";
import { useState } from "react";

import "../src/index.css";
import { TodoCounter } from "./components/TodoCounter.js";
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoList } from "./components/TodoList.js";
import { TodoItem } from "./components/TodoItem.js";
import { CreateTodoButtom } from "./components/CreateTodoButtom.js";

/* array con los todos harcodeados */
const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tormar el curso de intro a react", completed: true },
  { text: "Llorar con la llorona", completed: false },
];

function App() {
  /* los estados no se pueden poner arriba de la funcion componente , se escribe arriba del return */
  const [todos, setTodos] = useState(defaultTodos);

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
          />
        ))}
      </TodoList>

      <CreateTodoButtom />
    </react.Fragment>
  );
}

export default App;
