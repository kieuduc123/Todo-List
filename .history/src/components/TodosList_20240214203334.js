import React from "react";

const TodosList = ({ todos, setTodos, setEditTodo }) => {
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const handleComplete = (todo) => {
        setTodos(
            todo.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };
    return (
        <div className="d-flex justify-content-center align-items-center ">
            {todos.map((todo) => (
                <li
                    className="todo-list d-flex justify-content-center align-items-center "
                    key={todo.id}
                >
                    <input
                        className={`list ${todo.completed ? "complete" : ""}`}
                        type="text"
                        value={todo.title}
                        onChange={(e) => e.preventDefault()}
                    />
                    <div>
                        <button
                            className="button-complete"
                            onClick={() => handleComplete(todo)}
                        >
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button
                            className="button-edit"
                            onClick={() => handleEdit(todo)}
                        >
                            <i className="fa fa-edit"></i>
                        </button>
                        <button
                            className="button-delete"
                            onClick={() => handleDelete(todo)}
                        >
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};
export default TodosList;
