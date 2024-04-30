import { useState } from 'react'
import FormDesign from './form/Application_Form';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
   <FormDesign></FormDesign>
   </div>
  )
}

export default App
