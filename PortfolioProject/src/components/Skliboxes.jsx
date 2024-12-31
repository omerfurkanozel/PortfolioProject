function Skilboxes(props) {
    const {item}=props;
  return (
    <div className="flex flex-col">
    <div className="w-16">
    <img className="box-border h-16 w-16  border-4 bg-auto p-0 m-0 flex  justify-start" src={item.img}/>   
    </div>
    <i>{item.name}</i>
     </div>
  )
}

export default Skilboxes
