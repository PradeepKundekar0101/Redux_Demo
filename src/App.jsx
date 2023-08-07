import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './actions/index';
const App = () => {
  const val = useSelector((state)=> state.changeNumber  );
  const dispatch = useDispatch();
  return (
    <>
    <h1>Redux Demo</h1>
        <div>
            <button onClick={()=>{dispatch(decNumber())}} >-</button>
            <input type="text" value={val}  name="" id="" />
            <button onClick={()=>{dispatch(incNumber())}}>+</button>
        </div>
    </>
  )
}

export default App