import { useSelector } from "react-redux";
import { useGetTodosQuery } from "../features/api/apiSlice";
import Todo from "./Todo";

export default function TodoList() {
  const filters = useSelector((state) => state.filters);
  const { data: todos } = useGetTodosQuery(filters);
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos?.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
