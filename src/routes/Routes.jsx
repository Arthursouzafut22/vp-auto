import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import IsHeader from "../components/Header/IsHeader";
import Footer from "../components/Footer/Footer";
import Vehiculo from "../pages/Vehiculo/Vehiculo";
import Teste from "../pages/Teste";
import ModalCriarContaeLogar from "../components/CriarConta/ModalCriarContaeLogar";
import { UseGeral } from "../context/geralContext";
import CriarConta from "../pages/CriarConta/CriarConta";
import ContextCriarConta from "../context/createCountLogin";
import ContextFazerLogin from "../context/contextLogin";

const Router = ({ children }) => {
  const { activeModalLogin } = UseGeral();
  return (
    <BrowserRouter>
      <ContextFazerLogin>
        <ContextCriarConta>
          <IsHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehiculo/:id" element={<Vehiculo />} />
            <Route path="/teste" element={<Teste />} />
            <Route path="/inscripcion" element={<CriarConta />} />
          </Routes>
          {activeModalLogin && <ModalCriarContaeLogar />}
          {children}
          <Footer />
        </ContextCriarConta>
      </ContextFazerLogin>
    </BrowserRouter>
  );
};

export default Router;
