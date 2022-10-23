// import react from "react";
import Todo from './Todo'

  const TodoList =({items, handleEdit, handleDelete})=>{
  const renderItem =items.map((item) => {
    return (
      <ul className="list-group my-2" key={items.id}>
      <Todo
        item={item}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      </ul>
      )})
  return(
    <div>{renderItem}</div>
  )}
  export default TodoList
