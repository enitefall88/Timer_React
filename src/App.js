import {useEffect, useState} from "react";

function App() {
  let [timeLeft, setTimeLeft] = useState(3)
  let [running, setRunning] = useState(false)


  useEffect(() => {
    let interval
    if(running) {
     interval = setInterval(() => {
      setTimeLeft(count => count - 0.1)
    }, 500)
      return () => {
      clearInterval(interval)
      }
  }}, [running])

  useEffect(_ => {
    if (timeLeft <= 0) {
      setRunning(false)
    }
  })


  function toggleRunning() {
    setRunning(running => !running)
  }

  function reset() {
    setTimeLeft(3)
  }

  return <div className="p-3">
    <h1 className="h3">Pomodoro Timer</h1>
    <div className="mt-4" style={{maxWidth: "20rem"}}>
      Seconds Left: <span className="badge badge-dark text-monospace">{timeLeft.toFixed(1)}</span>
      <span className="ml-4">Running: <span className="badge badge-dark">{running ? "true" : "false"}</span></span>
      <hr/>
      <button onClick={toggleRunning} className="btn btn-outline-primary">
        {running ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>}
      </button>
      <button onClick={reset} className="btn btn-outline-dark ml-2">
        <i className="fa fa-stop"></i>
      </button>
    </div>
  </div>
}

export default App;
