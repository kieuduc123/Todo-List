import React from "react";

const TodosList = ({ todos, setTodos, setEditTodo }) => {
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const handleComplete = (todos) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todos.id) {
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
        <div className="mt-3 ">
            {todos.map((todo) => (
                <li
                    className="todo-list d-flex justify-content-center align-items-center"
                    key={todo.id}
                >
                    <input
                        className={`list ${todo.completed ? "completed" : ""}`}
                        type="text"
                        value={todo.title}
                        onChange={(e) => e.preventDefault()}
                    />
                    <div>
                        <button
                            className="mx-2"
                            onClick={() => handleComplete(todos)}
                        >
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button
                            className="button-edit mx-2"
                            onClick={() => handleEdit(todo)}
                        >
                            <i className="fa fa-edit"></i>
                        </button>
                        <button
                            className="button-delete mx-2"
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
