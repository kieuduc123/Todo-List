import React from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({ input, setInput, todos, setTodos }) => {
    const onInputChang = (e) => {
        setInput(e.target.value);
    };
    const onFormSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
        setInput("");
    };
    return (
        <form onSubmit={onFormSubmit}>
            <input
                placeholder="Enter a Todo..."
                className="task-input"
                type="text"
                value={input}
                required
                onChange={onInputChang}
            />
            <button type="submit" className="button-add">
                Add
            </button>
        </form>
    );
};

export default Form;
