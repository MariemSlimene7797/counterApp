import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/counter';
function App() {
  return (
<div className='container my-5'>
  <div className='card text-center my-5'>
   <div className='card-body'>
  <Counter></Counter>
  </div>
  </div>
  </div>
  )
  
}

export default App;
