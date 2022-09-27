import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../features/api/filterSlice";
import { numberOfTodos } from "../utils/functions";


export default function Footer({ todoCount }) {
    const { status, colors } = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const handleStatusChange = (status) => {
        dispatch(statusChanged(status));
    };
    const handleColorChange = (color) => {
        if (colors.includes(color)) {
            dispatch(colorChanged({ color, changeType: "removed" }));
        } else {
            dispatch(colorChanged({ color, changeType: "added" }));
        }
    };
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(todoCount)}  </p>
            <ul className="flex space-x-1 items-center text-xs">
                <li
                    className={`cursor-pointer ${status === "all" && "font-bold"}`}
                    onClick={() => handleStatusChange("all")}
                >
                    All
                </li>
                <li>|</li>
                <li
                    className={`cursor-pointer ${status === false && "font-bold"
                        }`}
                    onClick={() => handleStatusChange(false)}
                >
                    Incomplete
                </li>
                <li>|</li>
                <li
                    className={`cursor-pointer ${status === true && "font-bold"
                        }`}
                    onClick={() => handleStatusChange(true)}
                >
                    Complete
                </li>
                <li></li>
                <li></li>
                <li
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes("green") && "bg-green-500"
                        }`}
                    onClick={() => handleColorChange("green")}
                ></li>
                <li
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes("red") && "bg-red-500"
                        }`}
                    onClick={() => handleColorChange("red")}
                ></li>
                <li
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes("yellow") && "bg-yellow-500"
                        }`}
                    onClick={() => handleColorChange("yellow")}
                ></li>
            </ul>
        </div>
    );
}
