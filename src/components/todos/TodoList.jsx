// import { useState, useRef } from "react";
// import { useDispatch ,useSelector} from "react-redux";
// import { Icon } from "@iconify/react";
// import { editTodoListTitle } from "./../../features/todos/todoSlice";
import Todos from "./Todos";

function TodoList() {
  // const dispatch = useDispatch();
  // const inputRef = useRef(null);
  // const [hasEdit, setHasEdit] = useState(false);
  // const [inputValue, setInputValue] = useState(title);

  // const handleEditShow = () => {
  //   // inputRef.current.focus();
  //   setHasEdit(true);
  // };

  // const handleChangeTodoListTitle = (e) => setInputValue(e.target.value);
  // const handleCancle = () => setHasEdit(false);

  // const handleEdit = () => {
  //   dispatch(editTodoListTitle({ id, title: inputValue }));
  //   setHasEdit(false);
  // };
  return (
    <div className="text-gray-600 px-2 mb-5 w-full">
      <div className="bg-white rounded-md">
        <div className="text-base px-3 py-1 w-full divide-y">
          <div className={`hover:cursor-pointer`}>
            <div className="columns-1 flex  h-10">
              <span className="grow flex items-center justify-center">My today Todos</span>
              {/* <span className="flex justify-center items-center ">
                <Icon
                  className="hover:cursor-pointer rounded-full hover:bg-gray-100 mx-auto p-1"
                  icon="mdi-light:pencil"
                  style={{ fontSize: "24px" }}
                />
              </span> */}
            </div>
          </div>
        </div>

        <Todos />
      </div>
    </div>
  );
}

export default TodoList;
