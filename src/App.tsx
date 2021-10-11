import "./App.css";
import Todo from "./Components/Parts/Todo";
import TodoRedux from "./Components/Parts/TodoRedux";

function App() {
  return (
    <div className="App">
      <Todo
        onClickAddButton={(todo: string): void => {
          console.log(todo);
        }}
      />
      <TodoRedux
        todos={["foo", "bar"]}
        onClickAddButton={(todo: string): void => {
          console.log(todo);
        }}
      />
    </div>
  );
}

export default App;
