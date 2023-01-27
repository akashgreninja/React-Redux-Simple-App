import React from 'react'
import './App.css'
import { useSelector, useDispatch } from "react-redux";
import {Increment,Decrement} from "./actions/index"
const App = () => {
  const mystate=useSelector(state=>state.changeTheNumber )
  const dispatch=useDispatch();
  return (
    
    <>
   <div className="main-div">
      

      <div class="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div class="quantity">
        <a class="quantity__minus" title="Decrement" onClick={() => dispatch(Decrement(5))}><span>-</span></a>
        <input name="quantity" type="text" class="quantity__input" value={mystate} />
        <a class="quantity__plus" title="Increment" onClick={() => dispatch(Increment(5))}><span>+</span></a>
      </div>
  
          </div>
        </div>
    

   
  </>
  
  )
}

export default App