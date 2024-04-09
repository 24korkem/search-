import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Products from "./components/Products";

function App() {
  const [night, setNight]= useState(false);
  return (
  <div className={night? "App night": "App"}>
  <button onClick={()=>setNight(!night)}>night</button>
    <Cards/>
  <Products />


  </div>  
  )
}

export default App;
