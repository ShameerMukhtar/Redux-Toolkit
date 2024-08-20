import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../../store";

const Controls=()=>{

// useRef
const inputElement=useRef();

const dispatch =useDispatch();




const handleIncrement=()=>{
 // console.log("called");
 dispatch(counterActions.increment());
  
}


const handleDecrement=()=>{
  dispatch(counterActions.decrement());
//  console.log("called");
}
// to add user number
const handleAdd=()=>{
  
 
  if(inputElement.current.value){
  dispatch(counterActions.add(inputElement.current.value))
inputElement.current.value=""

  }
}

// to substract user input

const handleSubstraction=()=>{
  let value=inputElement.current.value;
 
  if(inputElement.current.value){
    dispatch(counterActions.subtract(inputElement.current.value))
inputElement.current.value=""

  }
}
// Handle Privacy Toggle Button
const privacyToggle=()=>{
dispatch({type:"PRIVACY_TOGGLE"})
}


return<>
 <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
 


 <button className="btn btn-success rounded-pill px-3" type="button" onClick={handleIncrement}>+1</button>
 <button className="btn btn-danger rounded-pill px-3" type="button"onClick={handleDecrement}>-1</button> 
 <button className="btn btn-warning rounded-pill px-3" type="button" onClick={privacyToggle}>Privacy Toggle</button>
 
 </div> 

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center secondDiv">
 


 <input className="numberInput" ref={inputElement} type="text" placeholder="Enter a Number"/>
 <button className="btn btn-success rounded-pill px-3" type="button" onClick={handleAdd}>Add</button>
 <button className="btn btn-danger rounded-pill px-3" type="button" onClick={handleSubstraction}>Substract</button>
  </div> 
  
  </>
}
export default Controls;