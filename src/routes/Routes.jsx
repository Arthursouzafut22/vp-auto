import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Header from "../components/Header/Header";
import IsHeader from "../components/Header/IsHeader";
import Footer from "../components/Footer/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <IsHeader/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/imoveis" element={<Imoveis />} />
            <Route path="/imoveis/:id" element={<ImovelInformation />} />
            <Route path="/add" element={<ToAddImoveis />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
