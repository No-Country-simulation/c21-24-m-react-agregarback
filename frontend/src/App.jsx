import "./App.css";
import Inicio from "./views/Inicio/Inicio";
import Navbar from "./components/Navbar/Navbar";
import Registro from "./views/Registro/Registro";
import Login from "./views/Login/Login";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <section>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
