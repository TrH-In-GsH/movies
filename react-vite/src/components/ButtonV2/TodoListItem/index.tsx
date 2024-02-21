type TTodoListItem = {
    text: string;

  };
const TodoListItem = ({ text }:TTodoListItem) =>{
    return <li>{text}</li>
  }

export default TodoListItem