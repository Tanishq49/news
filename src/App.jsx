import Index from "./components/index";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index key="genreal"/>} />
          <Route exact path="/country" element={<Index country="us" category="general" key="country"/>} />
          <Route exact path="/sports" element={<Index category="sports"  key="sports"/>} />
          <Route exact path="/technology" element={<Index category="technology" key="technology"/>} />
          <Route exact path="/science" element={<Index category="science" key="science"/>} />
          <Route exact path="/health" element={<Index category="health" key="health"/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
