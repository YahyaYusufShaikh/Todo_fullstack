/* eslint-disable react/prop-types */
export function Todos({todos}) {

    return <div>
        {todos.map(function(todo) {
            // eslint-disable-next-line react/jsx-key
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.Completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}
