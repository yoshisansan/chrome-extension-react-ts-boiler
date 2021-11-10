import React, {VFC, useState} from 'react'

const PopUp: VFC = () => {
  const [plus, setPlus] = useState<number>(0);
  return (
    <div>
      <h1>ReactTS Boilerplate</h1>
      <h2>カウンター</h2>
      <button onClick={() => setPlus(plus + 1)}>{plus}</button>
    </div>
  )
}

export default PopUp;