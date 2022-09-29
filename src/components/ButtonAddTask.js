import { ToDoContext } from "./ToDoContext";

function ButtonAddTask({ click }) {
  return (
    <ToDoContext.Consumer>
      {({ clickAddTask, counterId, increaseCounterId }) => (
        <button
          onClick={() => click(clickAddTask, counterId, increaseCounterId)}
        >
          DODAJ
        </button>
      )}
    </ToDoContext.Consumer>
  );
}

export default ButtonAddTask;
