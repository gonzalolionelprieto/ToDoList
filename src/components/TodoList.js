import React from 'react';
import '../components/styles/TodoList.css'
import { useAutoAnimate } from '@formkit/auto-animate/react'

function TodoList(props) {
  const [parent] = useAutoAnimate(/* optional config */)
  return (
    <section>
      <ul ref={parent}>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };
