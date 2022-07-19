import React from "react";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
// import { useDispatch } from "react-redux/es/exports";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
// import OptionsButtons from "./components/optionsButtons";

// import { showAllTodo } from '../features/todo/todoSlice';
import { showCompletedTodo } from "./features/todo/todoSlice";


function App() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const completedTasks = todos.filter(todo => todo.completed);

  const completedTodos = useSelector((state) => state.todo.completedTodos);
  console.log(completedTodos);
  // console.log(completedTasks);
  // const [completedTodos, setCompletedTodos] = React.useState([]);

  // setCompletedTodos(completedTodos(completedTasks));

  const showCompletedTodoHandler = () => {
    dispatch(showCompletedTodo())
    console.log(dispatch(showCompletedTodo()));
}


    return (
      <section className="background">
        <div className="todo__body">
          <div className="todo__header">
            <h2>ToDo List</h2>
            <Form/>
            <div className="todo__options">
              <div className="todo__counters">
                <p>todo:<span>{[...todos].length}</span></p>
                <p>done:<span>{[...completedTasks].length}</span></p>
              </div>
              {/* <OptionsButtons/> */}
              <div className="todo__options__buttons">
                <button type="button">all</button>
                <button onClick={() => showCompletedTodoHandler()} type="button">done</button>
                <button type="button">todo</button>
              </div>
            </div>
          </div>
          <ul className="todo__list">
            {
              todos?.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                />
              ))
            }
          </ul>
        </div>
      </section>
  )
}

export default App;
