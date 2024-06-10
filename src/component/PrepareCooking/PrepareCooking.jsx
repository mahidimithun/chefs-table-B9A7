import PropTypes from 'prop-types'


const PrepareCooking = ({ preparedCookingList }) => {


    return (
        <div className='bg-[#28282808] rounded-lg'>

            <div className='grid grid-cols-7 gap-4 py-2'>


                <div className='col-span-3'>
                    <h1>{preparedCookingList[0].food_name}</h1>
                </div>
                <div className='col-span-2'>
                    <h1>

                        {preparedCookingList[0].cooking_time}

                    </h1>
                </div>
                <div className='col-span-2'>
                    <h1>
                        {preparedCookingList[0].calories}
                    </h1>
                </div>




            </div>



        </div>

    );
};

PrepareCooking.propTypes = {
    newCookingId: PropTypes.number,
    preparedCookingList: PropTypes.array


}

export default PrepareCooking;