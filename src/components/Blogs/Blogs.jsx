import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleAddBookmark, handleMarkedRead }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    return (
        <div className="md:w-2/3 space-y-3">
            {
                blogs.map(blog => <Blog
                    handleAddBookmark={handleAddBookmark}
                    handleMarkedRead={handleMarkedRead}
                    key={blog.id}
                    blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmark: PropTypes.func.isRequired,
    handleMarkedRead: PropTypes.func.isRequired
}

export default Blogs;