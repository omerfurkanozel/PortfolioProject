import Skilboxes from "./Skliboxes"
import { boxes } from "../data"

function Skils() {
  return (
    <div>
        
      Skills
      <div>
        {boxes.map((item,index)=>(<Skilboxes key ={index} item={item}/>))}
      </div>
     
    </div>
  )
}

export default Skils
