import "./App.css";
import Batsman from "./batsman";

function App() {
  function handleClick() {
    alert("clicked");
  }

  const handleClick3 = () => {
    alert("clicked 3");
  };

  // function add5
  function handleAdd5(num) {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    
    
    <>
    <Batsman></Batsman>
      <button onClick={handleClick}>click me</button>
      <button
        onClick={function handleClick2() {
          alert("clicked 2");
        }}
      >
        Click Me 2
      </button>
      <button onClick={handleClick3}>click me 3</button>

      <button onClick={() => handleAdd5(10)}>Click add 5</button>
    </>
  );
}

export default App;
