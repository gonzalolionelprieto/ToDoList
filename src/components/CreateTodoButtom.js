import React from "react";
import '../components/styles/CreateTodoButton.css';
function CreateTodoButtom(props){
    const onClickButton = () => {
        if (props.openModal) {
            props.setOpenModal(false);
          } else {
            props.setOpenModal(true);
          }
      };

    return(
        <button className="CreateTodoButton  flex justify-center items-center lg:hidden " onClick={onClickButton}>+</button>
    );
}

export { CreateTodoButtom};