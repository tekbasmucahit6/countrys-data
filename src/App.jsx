import { BrowserRouter as Router,
  Routes,
  Route } 
  from "react-router-dom"
  
import Main from "./pages/Main"
import Singlecountrys from "./pages/Singlecountrys"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/country/:countryName" element={<Singlecountrys />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
