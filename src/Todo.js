const todoItems = [
  
]

function Todo() {
  return (
    <div>
      <h2>Todo list</h2>
      <ul>
        {
          todoItems.map(todo =>
            <li>
              {todo}
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Todo;