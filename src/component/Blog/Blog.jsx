import PropTypes from 'prop-types';

import { IoTimeOutline } from "react-icons/io5";
import { PiFireSimpleLight } from "react-icons/pi";


const Blog = ({ blog, handleAddToCooking }) => {

    const { food_name, food_img, description_food, ingredients, cooking_time, calories } = blog;


    return (




        <div className='grid grid-cols-1 lg:grid-cols-2' >

            <div className="card card-compact w-[307px] md:max-w-72 lg:max-w-60 xl:max-w-96 bg-base-100 shadow-xl mt-5 rounded-md">
                <img className='h-48 rounded-md' src={food_img} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">{food_name}</h2>
                    <p> {description_food} </p>
                    <p className=''>
                        <span className='text-xl font-semibold'>Ingredients: </span>

                        {
                            ingredients.map((hash, idx) => <li className='pl-2' key={idx}> {hash}</li>)
                        }


                    </p>
                    <div className='flex justify-between'>
                        <div className='flex justify-between gap-1 lg:gap-2'>
                            <span className='mt-1'>
                                <IoTimeOutline />
                            </span>


                            <h1>
                                {cooking_time} minutes
                            </h1>

                        </div>
                        <div className='flex justify-between gap-1 lg:gap-2'>

                            <span className='mt-1'>
                                <PiFireSimpleLight />


                            </span>


                            <h1>
                                {calories} calories
                            </h1>

                        </div>
                    </div>

                    <div className="card-actions justify-start rounded-lg">
                        <button
                            onClick={() => handleAddToCooking(blog)}

                            className="btn bg-[#0BE58A]">Want to cook
                        </button>
                    </div>

                </div>
            </div>


        </div>




    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToCooking: PropTypes.func
}

export default Blog;