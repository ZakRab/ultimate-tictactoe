import React, {useContext} from 'react'
import { GameContext } from "../context/GameContext";

export default function Board() {
    const { microBoard, setMicroBoard, isPlayer1, setIsPlayer1 } = useContext(GameContext);
    return (
    <>
    <div className='container-fluid bg-primary'>
    <div className='row'>

      {microBoard.map((square, idx) => {
        if(square.isPlayed){
          if(square.isPlayer1){
            return <h1 key={idx} className='col-4 text-center center p-5 mb-0 border border-5 border-black'>X</h1>
          }else if(!square.isPlayer1){
            return <h1 key={idx} className='col-4 text-center p-5 mb-0 border border-5 border-black'>0</h1>

          }
        }else return <h1 key={idx} className='col-4 text-center p-5 mb-0 border border-5 border-black text-primary'  onClick={() => {
              microBoard.map((e, index) => {
                if(idx == index){
                  console.log(idx == index)
                  const copy = [...microBoard]
                  copy[idx].isPlayed = true
                  setMicroBoard([...copy])
                }
              })
            }}>0</h1>
      })}
    </div>

    </div>
      

    </>
  )
}
