import './index.css';
import Todo from './components/Todo.jsx';

function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <ul 
        role="list"
        clasName="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
          <Todo name="Learn React" />
          <Todo name="Build React" />
      </ul>
    </div>
  );
}

export default App;
