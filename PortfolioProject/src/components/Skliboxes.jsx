function Skilboxes(props) {
    const {item}=props;
  return (
    <div >
     <img className="box-border h-32 w-32  border-4 bg-auto " src={item.img}></img> 
     {item.name}
     </div>
  )
}

export default Skilboxes
