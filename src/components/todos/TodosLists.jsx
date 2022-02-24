import TodoList from "./TodoList";
import NewTodoListForm from "./NewTodoListForm";

function TodosLists() {
  return (
    <div className="container mx-auto h-full">
      <div className="columns-1  h-10 flex flex-row justify-center items-center bg-sky-50 text-sky-500 shadow-md">
        <p className="font-bold text-center w-100">
          Todo List with React & Redux
        </p>
      </div>

      <div className="container">
        <div className="mt-10 columns-1">
          <TodoList />
        </div>
        <NewTodoListForm />
      </div>


    </div>
  );
}
export default TodosLists;
