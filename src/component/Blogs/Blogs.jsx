import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import Cook from "../Cook/Cook";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (

        <div className="grid grid-cols-1 md:grid-cols-5">
            <div className='grid grid-cols-1 md:grid-cols-1 lg:gap-10 xl:gap-1 lg:grid-cols-2 mt-10 md:mx-10 col-span-3'>

                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}

                    ></Blog>)
                }


            </div>

            <div className='col-span-2'>
                <Cook></Cook>
            </div>

        </div>









    );
};

export default Blogs;