import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookMark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);

    return (
        <div className="lg:w-2/3 border p-5">
            <h2>Blogs:{blogs.length}</h2>
            {
                blogs.map(blog => <Blog 
                                        key={blog.id} 
                                        blog={blog} 
                                        handleAddToBookMark={handleAddToBookMark}
                                        handleMarkAsRead={handleMarkAsRead}
                                  ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookMark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}

export default Blogs;