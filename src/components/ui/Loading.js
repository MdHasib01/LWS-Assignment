import { FaSpinner } from "react-icons/fa";
export default function Loading() {
    return <div className="col-span-12 h-full flex justify-center align-center text-3xl ">
        <FaSpinner className="animate-spin" /></div>;
}
