import React from "react";

const Form = ({ input, setInput, todos, setTodos }) => {
    return (
        <form>
            <input
                placeholder="Enter a Todo..."
                className="task-input"
                type="tex"
            />
            <button type="submit" className="button-add">
                Add
            </button>
        </form>
    );
};

export default Form;
