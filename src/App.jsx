import { useState } from 'react'
import './App.css'
// import Header from './components/Header/Header'
import Header from './component/Header/Header'
import Firstsection from './component/Firstsection/Firstsection'
import Blogs from './component/Blogs/Blogs'
import Cooks from './component/Cooks/Cooks'


function App() {
  const [cooking, setCooking] = useState([]);
  const [newCookingId, setnewCookingId] = useState(0)

  const [cookingTime, setCookingTime] = useState(0)


  const [calculateCalories, setCalculateCalories] = useState(0)


  const [preparedCookingList, setPreparedCookingList] = useState([]);

  const handleAddToCooking = blog => {
    const newCooking = [...cooking, blog];
    setCooking(newCooking);
  }



  const handleToPrepareCooking = (id, cooking_time, calories) => {

    const prepareCookingId = id;
    setnewCookingId(prepareCookingId);




    const prepareCooking = cooking.filter(cooking => cooking.id !== id);
    setCooking(prepareCooking);

    const prepareCookingFood = cooking.filter(cooking => cooking.id === id);

    const prepareCookingArray = [...preparedCookingList, prepareCookingFood];
    setPreparedCookingList(prepareCookingArray);

    // calculate cooking time and calories

    const newCookingTime = cookingTime + cooking_time;
    setCookingTime(newCookingTime);

    const newCalories = calculateCalories + calories;
    setCalculateCalories(newCalories);




  }


  return (
    <>

      <div className='my-4 mx-1 md:mx-10'>
        <Header></Header>
        <Firstsection></Firstsection>
        <div className='md:flex'>
          <Blogs handleAddToCooking={handleAddToCooking}  ></Blogs>
          <Cooks
            cooking={cooking}
            handleToPrepareCooking={handleToPrepareCooking}
            newCookingId={newCookingId}
            preparedCookingList={preparedCookingList}
            cookingTime={cookingTime}
            calculateCalories={calculateCalories}
          ></Cooks>

        </div>

      </div>






    </>
  )
}

export default App
