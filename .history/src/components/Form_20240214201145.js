import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    };

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    }, [setInput, editTodo]);

    const onInputChang = (e) => {
        setInput(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!editTodo) {
            setTodos([
                ...todos,
                { id: uuidv4(), title: input, completed: false },
            ]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed);
        }
    };
    return (
        <form
            onSubmit={onFormSubmit}
            className="d-flex justify-content-center align-items-center "
        >
            <input
                placeholder="Enter a Todo..."
                className="mr-2 "
                type="text"
                value={input}
                required
                onChange={onInputChang}
            />
            <button type="submit" className=" bg-primary text-white border-0 p">
                {editTodo ? "OK" : " Add"}
            </button>
        </form>
    );
};

export default Form;
