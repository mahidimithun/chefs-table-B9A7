import PropTypes from 'prop-types';

const Cook = ({ cooking, handleToPrepareCooking }) => {

    const { id, food_name, cooking_time, calories } = cooking;
    return (
        <div className='w-1/12 md:w-1/6'>

            <div className="col-span-3">
                <table className="table table-auto">
                    {/* head */}

                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td>{food_name}</td>
                            <td>{cooking_time} minutes</td>
                            <td>{calories}</td>
                            <td>
                                <button onClick={() => handleToPrepareCooking(id)}
                                    className="btn bg-[#0BE58A] w-10 md:w-16 lg:w-5/6 xl:w-20 xl:ml-3 md:px-10 lg:px-3">
                                    Preparing
                                </button>


                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>





        </div>
    );
};

Cook.propTypes = {
    cooking: PropTypes.object,
    handleToPrepareCooking: PropTypes.func
}


export default Cook;