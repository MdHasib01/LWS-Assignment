import { useEffect, useState } from "react";
import cancelIcon from "../assets/images/cancel.png";
import updateIcon from "../assets/images/updateCheck.svg";
import { useEditTodoMutation } from "../features/api/apiSlice";

const UpdateForm = ({ updateItem, setIsUpdate }) => {
  const [input, setInput] = useState("");
  const [
    editTodo,
    {
      isLoading: editIsLoading,
      isError: editIsError,
      isSuccess: editIsSuccess,
    },
  ] = useEditTodoMutation();
  const { id, text } = updateItem;

  useEffect(() => {
    setInput(text);
  }, []);
  // Cancel Update
  const cancelUpdate = () => {
    setInput("");
    setIsUpdate({});
  };

  // Submit Action
  const submitHandler = (e) => {
    e.preventDefault();
    // Throwing to middleware
    editTodo({ id, data: { text: input } });
    // Clear Input
    setInput("");
    // Clear Update State
    setIsUpdate({});
  };
  // On Change Handler
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <form
      className="flex items-center bg-white-100 border-cyan-500  border-2  rounded-md  "
      onSubmit={submitHandler}
    >
      <input
        type="text"
        placeholder="Type your todo"
        className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        value={input}
        onChange={handleInput}
      />
      <button
        type="submit"
        className={`appearance-none w-8 h-8 bg-[url('${updateIcon}')] bg-no-repeat bg-contain `}
      ></button>

      <button
        type="button"
        onClick={cancelUpdate}
        className={`appearance-none w-7 h-7 bg-[url('${cancelIcon}')] bg-no-repeat bg-contain `}
        title="Cancel Update"
      ></button>
    </form>
  );
};

export default UpdateForm;
