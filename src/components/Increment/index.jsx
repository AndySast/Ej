import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Increment() {
    const dispatch = useDispatch();
    const onHandlerChange = (even)=>{
        dispatch({
            type: 'INCREMENT',
            payload: even.target.value
        })
    }
    const onHandlerClick = (even)=>{

    }
    return (
        <div>
            <label htmlFor = "interval">interval</label> 
            <input type = "number" onChange={onHandlerChange} id="interval" placeholder="Enter Interval"/>
            <br />
            <button type = "button" onClick={onHandlerClick}></button>
        </div>
  )
}

export default Increment