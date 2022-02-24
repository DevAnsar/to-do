import { useDispatch } from "react-redux";
import { toggleComplateTodo } from "./../../features/todos/todoSlice";
import { Icon } from "@iconify/react";

function Todo({ todo, handleShowDeleteModal, handleShowEditModal }) {
  const dispatch = useDispatch();
  const handleToggleComplated = () => {
    dispatch(toggleComplateTodo({ id: todo.id, complated: !todo.complated }));
  };
  return (
    <div className="text-base px-3 py-2 my-2 w-full ">
      <div className="columns-2 flex">
        <span className="flex justify-center items-start ">
          <Icon
            onClick={handleToggleComplated}
            className="hover:cursor-pointer rounded-full hover:bg-gray-100 mx-auto p-1"
            icon={
              todo.complated
                ? "mdi:checkbox-blank-circle"
                : "mdi:checkbox-blank-circle-outline"
            }
            style={{ fontSize: "36px" }}
          />
        </span>
        <div className="grow flex flex-col px-2">
          <span
            className={`text-gray-800 text-base  pt-1 ${
              todo.complated ? "" : "font-bold"
            }`}
            style={{ textDecoration: todo.complated ? "line-through" : "none" }}
          >
            {todo.title}
          </span>
          <span
            className="text-gray-500"
            style={{ textDecoration: todo.complated ? "line-through" : "none" }}
          >
            {todo.description}
          </span>
        </div>
        <span className="flex justify-center items-start ">
          <Icon
            onClick={() => handleShowDeleteModal(todo)}
            className="hover:cursor-pointer rounded-full hover:bg-gray-100 mx-auto p-1"
            icon="mdi:delete"
            style={{ fontSize: "36px" }}
          />
        </span>
        <span className="flex justify-center items-start  ml-2">
          <Icon
            onClick={() => handleShowEditModal(todo)}
            className="hover:cursor-pointer rounded-full hover:bg-gray-100 mx-auto p-1"
            icon="mdi:pencil"
            style={{ fontSize: "36px" }}
          />
        </span>
      </div>
    </div>
  );
}
export default Todo;
