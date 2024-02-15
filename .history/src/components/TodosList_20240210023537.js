import React from "react";

const TodosList = ({ todos, setTodos }) => {
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
        <div>
            {todos.map((todo) => (
                <li className="todo-list " key={todo.id}>
                    <input
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
                        <button className="button-edit">
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
