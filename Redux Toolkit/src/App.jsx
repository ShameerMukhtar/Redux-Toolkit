import "bootstrap/dist/css/Bootstrap.min.css" 
import './App.css'
import Header from './Components/Header'
import Holder from "./Components/Holder"
import Content from "./Components/Content"
import Controls from "./Components/Controls"
import Privacy from "./Components/Privacy"
import { useSelector } from "react-redux"
function App() {

  // importing something from store's object
   const privacy= useSelector(store=>store.privacy);

  return (
    <>
    <Holder>
     
      <Header></Header>
     {privacy? <Privacy></Privacy> :<Content></Content> }
      <Controls></Controls>
  
  
  
  
      </Holder>
    </>
  
  
  )
}

export default App
