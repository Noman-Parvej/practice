import './App.css'
import Counter from './counter';
import Friend from './Friend';
import Friends from './Friends';


function App() {
  function eventhandler(){
    alert("Hey there");
  }
  const clickhandler =()=>{
    alert('hi there');
  }
  return (
   
    <>
      <h3>React Core Concept 2 </h3>
      <Friends/>
      <Counter/>
      <button onClick={eventhandler}>Click me</button>
      <button onClick={clickhandler}>click me 2</button>
      </>

  )
}



export default App
