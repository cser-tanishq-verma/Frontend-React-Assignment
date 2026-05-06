import { useState } from 'react'
import RoutingComponent from './Routing/RoutingComponent'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
      <RoutingComponent/>
    </>
  )
}

export default App
