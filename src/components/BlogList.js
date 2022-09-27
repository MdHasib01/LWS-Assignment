import React from 'react';
import { useSelector} from 'react-redux';
import Blog from './Blog';

const BlogList = () => {
    const state=useSelector(state=>state);
    const{filters,blogs}=state;

    const sameCategoryBlogs=blog=>{

        switch (filters.category) {
            case blog.category:
                return true;
            case 'all':
                return true;
            default:
                return false;
        }
    }

    const sameAuthorBlogs=blog=>{

        switch (filters.author) {
            case blog.author:
                return true;
            case 'all':
                return true;
            default:
                return false;
        }
    }
    
    const searchBlogs=blog=>{
        if(filters.query===''){
            return true
            
        }else{
            if(blog.title.toLowerCase().includes(filters.query.toLowerCase())){
                return true;
            }
            else{
                return false;
            }
        }
    }

    return (
        <>
            {
                blogs
                .filter(searchBlogs)
                .filter(sameCategoryBlogs)
                .filter(sameAuthorBlogs)
                .map(blog=><Blog blog={blog} key={blog.id}/>)
            }
        </>
    );
};

export default BlogList;