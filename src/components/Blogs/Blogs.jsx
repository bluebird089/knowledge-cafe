import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, [])

    return (
        <div className="md:w-2/3">
            <h4>Blogs: {blogs.length}</h4>
        </div>
    );
};

export default Blogs;