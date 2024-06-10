import PropTypes from 'prop-types'


const Calculate = ({ cookingTime, calculateCalories }) => {
    return (
        <div className='mt-3 flex justify-end gap-3 md:gap-7 lg:gap-12'>

            <h1>Total Time =  {cookingTime}</h1>
            <h1>Total Calories = {calculateCalories}</h1>

        </div>
    );
};

Calculate.propTypes = {
    cookingTime: PropTypes.number,
    calculateCalories: PropTypes.number

}

export default Calculate;