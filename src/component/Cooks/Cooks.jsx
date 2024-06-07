import Cook from '../Cook/Cook'
import PropTypes from 'prop-types'

const Cooks = ({ cooking }) => {
    return (
        <div className="w-full md:w-2/3 lg:w-1/3 ">

            <h1>Cooks</h1>

            <div className="overflow-x-auto lg:mr-12 xl:mr-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className=''>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>


                </table>
            </div>
            {
                cooking.map((cooking, idx) => <Cook key={idx} cooking={cooking}></Cook>)
            }

        </div>
    );
};

Cooks.propTypes = {
    cooking: PropTypes.array,

}

export default Cooks;