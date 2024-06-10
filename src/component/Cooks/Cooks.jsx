import Cook from '../Cook/Cook'
import PropTypes from 'prop-types'
import PrepareCooking from '../PrepareCooking/PrepareCooking'
import Calculate from '../Calculate/Calculate';

const Cooks = ({ cooking, handleToPrepareCooking, newCookingId, preparedCookingList, cookingTime, calculateCalories }) => {


    return (
        <div className="w-full md:w-2/3 lg:w-1/3 mt-8  md:mt-14 lg:mt-12 xl:mt-14">

            <h1 className='font-medium text-2xl text-center'>Want to cook: {cooking.length} </h1>

            <div className="overflow-x-auto lg:mr-12 xl:mr-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className=''>

                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>


                </table>
            </div>
            {
                cooking.map((cooking, idx) => <Cook key={idx} cooking={cooking} handleToPrepareCooking={handleToPrepareCooking} ></Cook>)
            }

            <div className='my-6'>

                <h2 className='font-medium text-2xl text-center'>Currently cooking: {preparedCookingList.length} </h2>

                <div className='grid grid-cols-7 gap-3 my-2'>
                    <div className='col-span-3'>
                        <h1>Name</h1>
                    </div>
                    <div className='col-span-2'>
                        <h1>Time</h1>
                    </div>
                    <div className='col-span-2'>
                        <h1>Calories</h1>
                    </div>
                </div>



                {
                    preparedCookingList.map((preparedCookingList, idx) => <PrepareCooking key={idx} preparedCookingList={preparedCookingList} cooking={cooking} newCookingId={newCookingId} ></PrepareCooking>)
                }

                <Calculate
                    cookingTime={cookingTime}
                    calculateCalories={calculateCalories}

                >

                </Calculate>




            </div>



        </div>




    );
};

Cooks.propTypes = {
    cooking: PropTypes.array,
    handleToPrepareCooking: PropTypes.func,
    newCookingId: PropTypes.number,
    preparedCookingList: PropTypes.array,
    cookingTime: PropTypes.number,
    calculateCalories: PropTypes.number

}

export default Cooks;