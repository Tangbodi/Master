import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStock from "./stocks/AddStock"
import EditStock from "./stocks/EditStock";

function App() {
  
  return (
    
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addstock" element={<AddStock />} />
        <Route exact path="/editstock/:id" element={<EditStock />} />
      </Routes>
    </Router>
  </div>
);
}

export default App;
