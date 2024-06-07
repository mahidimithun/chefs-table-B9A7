import PropTypes from 'prop-types';

const Cook = ({ cooking }) => {

    const { food_name, cooking_time, calories } = cooking;
    return (
        <div className='w-1/12 md:w-1/6'>

            <div className="col-span-3">
                <table className="table table-auto">
                    {/* head */}

                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>{food_name}</td>
                            <td>{cooking_time} minutes</td>
                            <td>{calories}</td>
                            <td>
                                <button className="btn bg-[#0BE58A] lg:w-16 xl:w-20 xl:ml-3">Preparing</button>


                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>



        </div>
    );
};

Cook.propTypes = {
    cooking: PropTypes.object
}


export default Cook;