import { useState } from "react";

import deleteIcon from "../assets/images/delete.svg";
import updateImage from "../assets/images/update.svg";
import {
  useDeleteTodoMutation,
  useEditTodoMutation,
} from "../features/api/apiSlice";
import UpdateForm from "./UpdateForm";

export default function Todo({ todo }) {
  const [isUpdate, setIsUpdate] = useState({});
  const [deleteTodo] = useDeleteTodoMutation();
  const [editTodo] = useEditTodoMutation();
  const [deleteLoader, setDeleteLoader] = useState(false);

  const { text, id, completed, color } = todo;

  const handleStatusChange = (id) => {
    editTodo({ id, data: { completed: !completed } });
  };

  const handleColorChange = (id, color) => {
    editTodo({ id, data: { color: color } });
  };

  const handleDelete = (id) => {
    setDeleteLoader(true);
    deleteTodo(id);
  };
  let updateIcon = "";
  if (!completed) {
    if (isUpdate?.id) {
      updateIcon = "";
    } else {
      updateIcon = updateIcon = (
        <img
          src={updateImage}
          className="flex-shrink-0 w-5 h-5 ml-2 cursor-pointer"
          alt="Cancel"
          onClick={() =>
            setIsUpdate(isUpdate?.id ? {} : { id: id, text: text })
          }
          title="Update"
        />
      );
    }
  }

  return (
    <div
      className={`flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0 ${
        deleteLoader ? "opacity-10" : "opacity-100"
      }`}
    >
      <div
        className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleStatusChange(id)}
          className="opacity-0 absolute rounded-full"
        />
        {completed && (
          <svg
            className="fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      {completed ? (
        <div className="select-none flex-1 ">{text}</div>
      ) : (
        <div className="select-none flex-1 ">
          {isUpdate?.id === id && !completed ? (
            <UpdateForm updateItem={isUpdate} setIsUpdate={setIsUpdate} />
          ) : (
            <span
              title="Double Click to update"
              style={{ display: "block" }}
              onDoubleClick={() => setIsUpdate({ id: id, text: text })}
            >
              {text}
            </span>
          )}
        </div>
      )}

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${
          color === "green" && "bg-green-500"
        }`}
        onClick={() => handleColorChange(id, "green")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${
          color === "yellow" && "bg-yellow-500"
        }`}
        onClick={() => handleColorChange(id, "yellow")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${
          color === "red" && "bg-red-500"
        }`}
        onClick={() => handleColorChange(id, "red")}
      ></div>

      {/* Delete Button */}
      {!completed && (
        <img
          src={deleteIcon}
          className="flex-shrink-0 w-5 h-5 ml-2 cursor-pointer"
          alt="Cancel"
          onClick={() => handleDelete(id)}
          title="Remove this Item"
        />
      )}

      {/* Update Icon */}
      {updateIcon}
    </div>
  );
}
