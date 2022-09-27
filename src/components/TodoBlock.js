import { useSelector } from "react-redux";

import { useGetTodosQuery } from "../features/api/apiSlice";
import Footer from "./Footer";
import HeaderForm from "./HeaderForm";
import LoaderText from "./shared/LoaderText";
import TodoList from "./TodoList";

const TodoBlock = () => {
  const filters = useSelector((state) => state.filters);
  const { data: todos, isLoading, isError } = useGetTodosQuery(filters);

  // const todoCount = todos.filter((todo) => todo.completed === completed).length;
  return (
    <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white mb-4">
      <HeaderForm />
      <hr className="mt-4" />
      {isLoading ? <LoaderText /> : <TodoList />}

      <hr className="mt-4" />
      <Footer todoCount={todos?.length} />
    </div>
  );
};

export default TodoBlock;
