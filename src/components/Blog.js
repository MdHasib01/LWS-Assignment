import React from 'react';
import { useDispatch } from 'react-redux';
import { sameAuthor, sameCategory } from '../redux/filters/actions';

const Blog = ({blog}) => {
    const{title,category,img,author,publishedTime,date,authorImg}=blog
    const dispatch=useDispatch();

    const handleCategory=(category)=>{
        dispatch(sameCategory(category));
    }

    const handleAuthor=(author)=>{
        dispatch(sameAuthor(author));
    }
    return (
        <div
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
            <div className="flex-shrink-0">
                <img
                    className="h-48 w-full object-cover"
                    src={img}
                    alt=""
                />
            </div>

            <div
                className="flex-1 bg-white p-6 flex flex-col justify-between"
            >
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        <span
                            onClick={()=>handleCategory(category)}
                            className="inline-flex items-center cursor-pointer px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                        >
                            {category}
                        </span>
                    </p>
                    <a href="#" className="block mt-1">
                        <p
                            className="text-xl font-semibold text-gray-900"
                        >
                            {title}
                        </p>
                    </a>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <img
                            onClick={()=>handleAuthor(author)}
                            className="h-10 w-10 rounded-full cursor-pointer"
                            src={authorImg}
                            alt=""
                        />
                    </div>
                    <div className="ml-3">
                        <p
                            onClick={()=>handleAuthor(author)}
                            className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
                        >
                            {author}
                        </p>
                        <div
                            className="flex space-x-1 text-sm text-gray-500"
                        >
                            <time datetime="2020-03-16"
                                >{date}
                            </time>
                            <span aria-hidden="true">
                                &middot;
                            </span>
                            <span> {publishedTime} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blog;