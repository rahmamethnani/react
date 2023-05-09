import { useState } from 'react'
import './counter.css'

function  Counter(){
    const [counter,setCounter]= useState(0)
    const incriment=()=>{
        setCounter(counter+1)
    }
    const decrement=()=>{
        setCounter(counter-1)
    }
    const reset=()=>{
        setCounter(0)
    }

    return(
        <>
       <div className='text-center'>
       <h1>{counter} </h1>
        <button className="btn" onClick={incriment}>plus</button>
        <button className="btn" onClick={decrement}>moin</button>
        <button className="btn" onClick={reset}>reset</button>
       </div>

        </>
    )
    }

export default Counter