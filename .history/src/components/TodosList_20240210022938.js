import React from "react";

const TodosList = ({ todos, setTodos }) => {
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
                        <button className="button-complete">
                            <i className="fa fa-check-circle"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};
export default TodosList;
