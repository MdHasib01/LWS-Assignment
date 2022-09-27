import { useState } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.svg";
import {
  useAddTodoMutation,
  useEditTodoMutation,
  useGetTodosQuery,
} from "../features/api/apiSlice";

export default function HeaderForm() {
  const [addTodo, { isLoading }] = useAddTodoMutation();
  const filters = useSelector((state) => state.filters);
  const { data: todos } = useGetTodosQuery(filters);
  const [editTodo] = useEditTodoMutation();
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      const payload = {
        text: input,
        completed: false,
      };
      addTodo(payload);
      setInput("");
    } else {
      toast("Please fillup todo");
    }
  };

  const handleCompleteIncomplete = (isCompleted) => {
    todos?.map((item, index) => {
      if (item.completed !== isCompleted) {
        editTodo({ id: item.id, data: { completed: isCompleted } });
      }
      return item;
    });
  };

  return (
    <div>
      <ToastContainer />
      <form
        className="flex items-center bg-gray-100 px-4 py-2 rounded-md"
        onSubmit={submitHandler}
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handleInput}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`appearance-none w-12 h-12 bg-[url('${plusImage}')] bg-no-repeat bg-contain `}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          className="flex space-x-1 cursor-pointer"
          onClick={() => handleCompleteIncomplete(true)}
        >
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li
          className="cursor-pointer"
          onClick={() => handleCompleteIncomplete(false)}
        >
          Clear completed
        </li>
      </ul>
    </div>
  );
}
