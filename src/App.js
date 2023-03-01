import './App.css';
// to require the state from global store
import { useSelector,useDispatch } from 'react-redux';

import { incNumber,decNumber } from './actions';

function App() {
  const myState = useSelector((state)=>state.changeNumber);
  
  //becuse with the help of store, we passed the root reducer , which itself has
  // hcangeNumber function passed into it.

  const dispatch =useDispatch()
  //dispatch triggers the action
  return (
    <div className="App">
      <h1>increment/decrement counter</h1>
      <h2><em>using REDUX</em></h2>
      <button title='decrement' style={{fontSize:'50px'}} onClick={()=>dispatch(decNumber())}>-</button>
      <input type="text" style={{fontSize:'50px',width:'50px'}}  value={myState}/>
      <button title='increment' style={{fontSize:'50px'}} onClick={()=>dispatch(incNumber(5))}>+</button>
    </div>
  );
}

export default App;
