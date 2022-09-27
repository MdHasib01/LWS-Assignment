import { useDispatch, useSelector } from 'react-redux';
import { useGetTodosQuery } from '../features/api/apiSlice';
import { colorChanged } from '../features/api/filterSlice';
import { numberOfTodos } from '../utils/functions';

const HeaderTop = () => {
    const filters = useSelector((state) => state.filters);
    const { data: todos, isLoading, isSuccess, isError } = useGetTodosQuery(filters);

    const dispatch = useDispatch()
    const { colors } = filters;

    const handleColorChange = (color) => {
        if (colors.includes(color)) {
            dispatch(colorChanged({ color, changeType: "removed" }));
        } else {
            dispatch(colorChanged({ color, changeType: "added" }));
        }
    };



    let total = 0;
    let todosCompleted = 0;
    let todosRemaining = 0;

    total = todos?.length > 0 && todos.length;
    todosRemaining = todos?.length > 0 && todos.filter((todo) => !todo.completed).length;
    todosCompleted = todos?.length > 0 && todos.filter((todo) => todo.completed).length;

    return (
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white mb-4">
            <div className="flex justify-between text-lg ">
                <p>
                    <span className='rounded px-2 pb-1 bg-gray-700 text-white'> Total <strong>{numberOfTodos(total)}</strong></span>
                    <span className='rounded px-2 pb-1 bg-cyan-600 text-white ml-1'>Completed <strong>{numberOfTodos(todosCompleted)}</strong> </span>
                    <span className='rounded px-2 pb-1 bg-orange-500 text-white ml-1'>Incompleted <strong >{numberOfTodos(todosRemaining)}</strong></span>
                </p>
                <ul className="flex space-x-1 items-center text-xs">

                    <li
                        className={`h-6 w-6 border-4 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes("green") && "bg-green-500"
                            }`}
                        onClick={() => handleColorChange("green")}
                    ></li>
                    <li
                        className={`h-6 w-6 border-4 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes("red") && "bg-red-500"
                            }`}
                        onClick={() => handleColorChange("red")}
                    ></li>
                    <li
                        className={`h-6 w-6 border-4 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes("yellow") && "bg-yellow-500"
                            }`}
                        onClick={() => handleColorChange("yellow")}
                    ></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderTop