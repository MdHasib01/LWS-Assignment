import React from 'react';
import { useDispatch } from 'react-redux';
import { allBlogs } from '../redux/filters/actions';

const BlogTop = () => {

    const dispatch=useDispatch();

    const handleAllBlogs=()=>{
        dispatch(allBlogs())
    }

    return (
        <div className="text-center">
            <h2
                className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
            >
                ALL BLOGS ARE HERE
            </h2>
            <p
                className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
            >
                Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Ipsa libero labore natus atque, ducimus sed.
            </p>
            <button onClick={handleAllBlogs} className="mx-5 bg-indigo-100 px-3 py-0.5 rounded-full float-right text-m font-semibold text-indigo-800">All Blogs</button>
        </div>
    );
};

export default BlogTop;