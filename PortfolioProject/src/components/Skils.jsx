import Skilboxes from "./Skliboxes"
import { boxes } from "../data"

function Skils() {
  return (
    <div>
        
      <h1 className="font-inter  text-[##0A0A14] w-12 p-0 " >Skils</h1>
      <div>
        {boxes.map((item,index)=>(<Skilboxes key ={index} item={item}/>))}
      </div>
     
    </div>
  )
}

export default Skils
