import { useState } from 'react';
import Demo from "./Demp"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>this is a react project</h1>
      <hr />
      <Demo/>
      <hr />
      <Demo/>
    </div>
  )
}

export default App
