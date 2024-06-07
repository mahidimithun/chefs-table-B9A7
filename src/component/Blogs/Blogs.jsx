import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

import PropTypes from 'prop-types';



const Blogs = ({ handleAddToCooking }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        // grid grid-cols-1 md:grid-cols-5

        <div className="md:w-2/3">
            <div className='grid grid-cols-1 md:grid-cols-1 lg:gap-10 xl:gap-1 lg:grid-cols-2 mt-10 md:mx-10 col-span-3'>

                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddToCooking={handleAddToCooking}

                    ></Blog>)
                }


            </div>



        </div>









    );
};

Blogs.propTypes = {
    handleAddToCooking: PropTypes.func
}

export default Blogs;