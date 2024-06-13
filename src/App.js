import React, { useEffect, useState } from "react";
import { filterData , apiUrl} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Fliter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
// import Toast from 'react-toastify';

function App() {

  const [courses , setcourses ] = useState([]);
  const [loading , setloading ] = useState(true );

  
  async function fetchdata(){
    setloading(true);
    try{
      const responce = await fetch(apiUrl);
      const output = await responce.json();
      
      setcourses( output.data);
    }
    catch(e){
        // Toast.error("error in conneting");
      }
    setloading(false);
  }

  useEffect( () => {
    fetchdata();
  },[])

  const [ category , setcategory ] = useState(filterData[0].title);
  
  return (
    <div className=" w-[100vw] h-[100vh] overflow-x-hidden  bg-slate-600 ">
        <div>
            <Navbar></Navbar>
        </div>
        <div>
            <Filter filterData = {filterData} category={category} setcategory={setcategory} ></Filter>
        </div>
        <div>
          {
            loading ? ( <Spinner className=""></Spinner>): (<Cards courses={courses} category={category}></Cards>)
          }
        </div>
    </div>
  );
};

export default App;
