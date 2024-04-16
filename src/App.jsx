import { useState } from 'react'
import Timer from './componenets/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex h-[100vh] items-center justify-center'>
      <Timer />
    </div>
  )
}

export default App
