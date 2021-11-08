import React, {VFC, useState} from 'react'

const PopUp: VFC = () => {
  const [plus, setPlus] = useState<number>(0);
  return (
    <div>
      <h1>React TypeScript Boiler Template</h1>
      <button onClick={() => setPlus(plus + 1)}>{plus}</button>
    </div>
  )
}

export default PopUp;