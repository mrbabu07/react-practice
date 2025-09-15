import './App.css'

function App() {
  

  function handleClick() {
    alert('clicked')
  }
  
  return (
   <>
    <button onClick={handleClick}>click me</button>
    </>
    
  )
}




export default App