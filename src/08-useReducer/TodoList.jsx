import { TodoItem } from "./TodoItem";

export const TodoList = () => {
    return (
        <>
            <ul className="list-group">
                {todos.map((todo) => (
                    <TodoItem />
                ))}
            </ul>
        </>
    );
};
