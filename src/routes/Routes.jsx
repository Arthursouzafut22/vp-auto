import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import IsHeader from "../components/Header/IsHeader";
import Footer from "../components/Footer/Footer";
import Vehiculo from "../pages/Vehiculo/Vehiculo";
import Teste from "../pages/Teste";
import ModalCriarContaeLogar from "../components/CriarConta/ModalCriarContaeLogar";
import { UseGeral } from "../context/geralContext";
import CriarConta from "../pages/CriarConta/CriarConta";

const Router = () => {
  const { activeModalLogin } = UseGeral();
  return (
    <BrowserRouter>
      <IsHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehiculo/:id" element={<Vehiculo />} />
        <Route path="/teste" element={<Teste />} />
        <Route path="/inscripcion" element={<CriarConta/>} />
      </Routes>
      {activeModalLogin && <ModalCriarContaeLogar />}
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
