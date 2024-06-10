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

  const [preparedCookingList, setPreparedCookingList] = useState([]);

  const handleAddToCooking = blog => {
    const newCooking = [...cooking, blog];
    setCooking(newCooking);
  }



  const handleToPrepareCooking = (id) => {

    const prepareCookingId = id;
    setnewCookingId(prepareCookingId);




    const prepareCooking = cooking.filter(cooking => cooking.id !== id);
    setCooking(prepareCooking);

    // show food in prepare section
    const prepareCookingFood = cooking.filter(cooking => cooking.id === id);
    // console.log('add list', prepareCookingFood);
    const prepareCookingArray = [...preparedCookingList, prepareCookingFood];
    setPreparedCookingList(prepareCookingArray);
    // console.log('my food array', prepareCookingArray);



  }


  return (
    <>

      <div className='my-4 mx-1 md:mx-10'>
        <Header></Header>
        <Firstsection></Firstsection>
        <div className='md:flex'>
          <Blogs handleAddToCooking={handleAddToCooking}  ></Blogs>
          <Cooks cooking={cooking} handleToPrepareCooking={handleToPrepareCooking} newCookingId={newCookingId} preparedCookingList={preparedCookingList} ></Cooks>

        </div>

      </div>






    </>
  )
}

export default App
