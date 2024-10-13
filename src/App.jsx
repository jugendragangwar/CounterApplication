import { useState } from 'react'

function App() {

  let [counter, setCounter] = useState(0)


  const addValue = () => {
    let increase = counter + 1
    if (increase <= 20) {
      setCounter(increase)
    }
    else{
      alert("Number is eqqual to 20")
    }
  }

  const removeValue = () => {
    let decrease = counter - 1
    if (decrease >= 0) {
      setCounter(decrease)
    }
    else{
      alert("Number is eqqual to 0")
    }
  }

  return (
    <>
    

      <h2 className='bg-green'>Counter Value :{counter}</h2>


      <button onClick={addValue}>Add value</button>
     
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
