import {useEffect, useState} from "react";

function App() {

  let [counter, setCounter] = useState(0)

  useEffect(_=> {
    document.title = "Anton`s App"
    console.log("applied")
  }, [])

  return <div>
<button onClick={_ => {setCounter(counter - 1 )}}> - </button>
    {" "}
    {counter}
<button onClick={_ => {setCounter(counter + 1 )}}> + </button>
  </div>
}

export default App;
