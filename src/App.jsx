import { useState } from 'react'
import './App.css'
// import Header from './components/Header/Header'
import Header from './component/Header/Header'
import Firstsection from './component/Firstsection/Firstsection'
import Blogs from './component/Blogs/Blogs'
import Cooks from './component/Cooks/Cooks'


function App() {
  const [cooking, setCooking] = useState([]);

  const handleAddToCooking = blog => {
    const newCooking = [...cooking, blog];
    setCooking(newCooking);
  }


  return (
    <>

      <div className='my-4 mx-1 md:mx-10'>
        <Header></Header>
        <Firstsection></Firstsection>
        <div className='md:flex'>
          <Blogs handleAddToCooking={handleAddToCooking}></Blogs>
          <Cooks cooking={cooking}></Cooks>

        </div>

      </div>






    </>
  )
}

export default App
