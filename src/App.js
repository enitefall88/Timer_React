import {useEffect, useState} from "react";

function App() {
  let [count, setCount] = useState(3.0)
  let [step, setStep] = useState(0.1)

  useEffect(() => {
    setInterval(() => {
      setCount(count => count - step)
    }, 500)
  }, [step])

  return <div>
    {count.toFixed(2)}
  </div>
}

export default App;
