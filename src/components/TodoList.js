import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react'

function TodoList(props) {
  const [parent] = useAutoAnimate(/* optional config */)
  return (
    <section className="flex justify-center items-center w-full max-w-screen-sm py- mx-auto ">
      <ul ref={parent} className=" w-full max-w-screen-sm max-h-80 mx-auto overflow-y-auto  ">
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };
