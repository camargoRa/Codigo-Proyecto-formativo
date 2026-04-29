import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Paginiciotaller from './Pages/Paginiciotaller';
import InfoCuentaTaller from './Pages/InfoCuentaTaller';
import Maquinas from './Pages/Maquinas';
import NavbarMaquinas from './Components/NavbarMaquinas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Paginiciotaller" element={<Paginiciotaller/>} />
        <Route path="/InfoCuentaTaller" element={<InfoCuentaTaller/>}/>
        <Route path="/Maquinas" element={<Maquinas/>}/>
        <Route path="/RegistrarMaquina" element={<NavbarMaquinas/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;