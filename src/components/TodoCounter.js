import React from 'react';
import '../components/styles/TodoCounter.css';

function TodoCounter({totalTodos,todosCompleted}) {
  return (
    <h2 className="TodoCounter">Has completado {todosCompleted} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };