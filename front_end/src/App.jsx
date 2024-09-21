import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Header from "./components/Header"
import CreateServices from "./components/CreateServices"
import AllServices from "./components/AllServices"
import EditServices from "./components/EditServices"
function App() {
  
  return (
      <Router>
      <div className="pb-20">
         <Header/>
      </div>
        
        <Routes>
          <Route path="/" element={<AllServices/>}/>
          <Route path="/create" element={<CreateServices/>}/>
          <Route path="/edit-service" element={<EditServices/>}/>
        </Routes>
      </Router>
  )
}

export default App
