import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Principal from "./paginas/Principal";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Styles/Principal.css"; 
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta raíz redirigida a principal */}
        <Route path="/" element={<Navigate to="/principal" />} />
        <Route path="/principal" element={<Principal />} />
      </Routes>
    </Router>
  );
}

export default App
