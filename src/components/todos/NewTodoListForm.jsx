import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todos/todoSlice";

function NewTodoListForm() {
  const dispatch = useDispatch();
  const [body, setBody] = useState("");
  const handleAddNewTodo = () => {
    if (body.length > 0) {
      dispatch(addTodo({ title: body }));
      setBody("");
    }
  };
  return (
    <div className="container px-2 max-w-lg mx-auto mt-3 mb-10">
      <div className="flex flex-row  grow h-10">
        <input
          placeholder="add new todo..."
          className="rounded shadow-inner text-base grow px-2 text-slate-900"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button
          onClick={handleAddNewTodo}
          disabled={body.length < 0}
          className="rounded shadow bg-cyan-500 hover:bg-cyan-600 text-white text-base h-100 px-2 ml-2 flex flex-col justify-center"
        >
          add
        </button>
      </div>
    </div>
  );
}

export default NewTodoListForm;
