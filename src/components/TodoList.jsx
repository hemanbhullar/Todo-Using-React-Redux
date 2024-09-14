import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
    const todos = useSelector(state => state.todoState.todos); //useSelector hook is used to get access of the store
    return (
        <div>
            Todo List: <br />
            {todos.map(
                todoItem => {
                    return (
                        <TodoItem key={todoItem.id} text={todoItem.text} isCompleted={todoItem.completed} />
                    )
                }
            )}
        </div>
    )
}

export default TodoList;