import * as React from "react";
import { TodosContext } from "../../todo-context";
import "./todo-results.scss";

export const TodoResults = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [done, setDone] = React.useState(0);

  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
    setDone(todos.filter((item) => item.checked).length);
  };

  React.useEffect(() => {
    calculateChecked();
  }, [todos]);

  return (
    <div className="todo-results">
      Done: {done}
      {/* {calculateChecked()} */}
    </div>
  );
};
