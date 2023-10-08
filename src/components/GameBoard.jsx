import React, {useContext} from 'react'
import { GameContext } from "../context/GameContext";

export default function Board() {
    const { microBoard, setMicroBoard } = useContext(GameContext);
    return (
    <>
    <div className='container-fluid bg-primary'>
    <div className='row'>

      {microBoard.map((square, idx) => {
        if(square.isPlayed){
          if(square.isPlayer1){
            return <h1 key={idx} className='col-4 text-center center'>X</h1>
          }else if(!square.isPlayer1){
            return <h1 key={idx} className='col-4 text-center'>0</h1>

          }
        }else return <h1 key={idx} className='col-4 text-center'  onClick={() => {
              microBoard.map((e, index) => {
                if(idx == index){
                  console.log(idx == index)
                  const copy = [...microBoard]
                  console.log(copy)
                  copy[idx].isPlayed = true
                  console.log(copy)
                  // setMicroBoard([...copy])
                }
              })
            }}>empty</h1>
      })}
    </div>

    </div>
      

    </>
  )
}
