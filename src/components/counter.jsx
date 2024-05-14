import React,{useState} from 'react'
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
export default function Counter(){
    const [count,setCount]=useState(0);
    function handleIncrement(){
        setCount(count +1)
    }
    function handleDecrement(){
        setCount(count -1)
    }
    function handleReset(){
        setCount(0)
    }
  return (
    <div>
      <h2>Counter App</h2>
   
        <h1>{count}</h1>
        <div className="d-grid gap-2">
        <Button  variant="success" size ='lg' onClick={handleIncrement}>Increment</Button>
        <Button variant="warning" size='lg' onClick={handleReset}>Reset</Button>
        <Button variant="danger" size='lg' onClick={handleDecrement}>Decrement</Button>
        
        </div>
    </div>
  )
}