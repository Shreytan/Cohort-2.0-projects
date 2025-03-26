function Todos({todos}){
    return (
        <div>
            <div>{todos.title}</div>
            <div>{todos.description}</div>
            <button>
            {todos.completed == true ? "Completed" : "Mark as complete"}
            </button>

        </div>
    )
}

export default Todos;