import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { deleteTodo, editTodo } from "./../../features/todos/todoSlice";
import DeleteModal from "./modals/DeleteModal";
import EditModal from "./modals/EditModal";
import Todo from "./Todo";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [deleteItem, setDeleteItem] = useState(null);
  const [editItem, setEditItem] = useState({});

  const handleHideDeleteModal = () => {
    setDeleteItem(null);
    window.toggleModal("deleteModal", false);
  };

  const handleShowDeleteModal = (todo) => {
    setDeleteItem(todo.id);
    window.toggleModal("deleteModal", true);
  };

  const handleDelete = () => {
    // console.log(deleteItem);
    dispatch(deleteTodo({ id: deleteItem }));
    setDeleteItem(null);
    window.toggleModal("deleteModal", false);
  };

  const handleShowEditModal = (todo) => {
    setEditItem(todo);
    window.toggleModal("editModal", true);
  };
  const handleHideEditModal = () => {
    setEditItem({});
    window.toggleModal("editModal", false);
  };

  const handleEdit = (data) => {
    // console.log(data);
    dispatch(editTodo(data));
    setEditItem({});
    window.toggleModal("editModal", false);
  };
  return (
    <div className="text-gray-600 px-2 mb-5 w-full divide-y-2">
      {todos.length > 0 ? (
        <>
          {todos
            .filter((todo) => todo.complated === false)
            .map((todo, index) => (
              <Todo
                key={index}
                todo={todo}
                handleShowDeleteModal={handleShowDeleteModal}
                handleShowEditModal={handleShowEditModal}
              />
            ))}

          <div className="mt-4 text-base py-3 my-2 w-full px-2">
            <div className="">
              <span className="text-gray-600 text-base  pt-1">
                Complated todos
                <span className="m-2 p-1 px-2 bg-green-300 text-white rounded-full">
                  {todos.filter((todo) => todo.complated === true).length}
                </span>
              </span>
            </div>
            {todos
              .filter((todo) => todo.complated === true)
              .map((todo, index) => (
                <Todo
                  key={index}
                  todo={todo}
                  handleShowDeleteModal={handleShowDeleteModal}
                  handleShowEditModal={handleShowEditModal}
                />
              ))}
          </div>
        </>
      ) : (
        <div className="text-md text-blue-700 text-center py-5">
          You dont have any todos for today
        </div>
      )}

      <DeleteModal hide={handleHideDeleteModal} handleDelete={handleDelete} />
      <EditModal
        hide={handleHideEditModal}
        handleEdit={handleEdit}
        todo={editItem}
      />
    </div>
  );
}

export default Todos;
