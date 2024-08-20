import { useSelector } from "react-redux";

const Content=()=>{

  const {counterVal}=useSelector(store=>store.counter)


  // const counterobj=useSelector(store=>store.counter)
  // const counter=counterobj.counterVal;


return <>
<div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Counter Current value:{counterVal} </p>
      
    </div>


</>
}
export default Content;