import './index.css';
import Todo from './Todo.jsx';

function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <ul 
        role="list"
        clasName="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
          <Todo />
      </ul>
    </div>
  );
}

export default App;
