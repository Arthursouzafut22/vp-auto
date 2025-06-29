import * as S from "./styles";
import { BsSearch } from "react-icons/bs";
import useMedia from "../../Hooks/useMedia";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import ContainerInputs from "./ContainerInputs";
import Carrosel from "../../components/Carrosel/Carrosel";
import ModalContaCriadaComSucesso from "../CriarConta/ModalContaCriadaComSucesso";
import { AuthCriarConta } from "../../context/createCountLogin";


export default function Home() {
  const { mobile } = useMedia("(max-width:970px)");
  const [inputsAtivo, setInputsAtivo] = useState(false);
  const { activeCriarConta } = AuthCriarConta();

  return (
    <S.Home>
      <S.ContainerGlobal style={{ height: inputsAtivo && "550px" }}>
        <div>
          <h1>Ventas por subasta de vehículos usados</h1>
          <p>revisados y garantizados</p>
          <S.WrapperFormulario>
            <span style={{ textAlign: mobile && "center" }}>
              Buscar entre <strong style={{ color: "#F08D72" }}>1294</strong>{" "}
              vehículos
            </span>
            <form style={{ flexDirection: mobile && "column" }}>
              <input
                type="text"
                placeholder="Ex : Kia Rio Gazole 100000km"
                style={{ flex: "3", width: mobile && "100%" }}
              />
              {inputsAtivo && mobile && <ContainerInputs />}
              {!mobile && (
                <>
                  {" "}
                  <input
                    type="text"
                    placeholder="Km máx."
                    style={{ width: "25%" }}
                  />
                  <input
                    type="text"
                    placeholder="Precio máximo"
                    style={{ width: "25%" }}
                  />
                  <select name="" id="" style={{ flex: "1" }}>
                    <option value="Todas nuestras ventas">
                      Todas nuestras ventas
                    </option>
                    <option value="Marseille-Miramas ">
                      Marseille-Miramas - 06/06/2025
                    </option>
                    <option value=" LYON "> LYON - 06/06/2025</option>
                    <option value=" Lorient "> Lorient - 09/06/2025</option>
                    <option value=" LParis"> Paris - 13/06/2025</option>
                    <option value=" Bordeaux"> Bordeaux - 13/06/2025</option>
                    <option value=" Lille "> Lille - 13/06/2025</option>
                    <option value=" Nantes "> Nantes - 16/06/2025</option>
                  </select>
                </>
              )}
              <button>
                {" "}
                <BsSearch fontWeight={"bold"} />
                Buscar
              </button>
            </form>
            {mobile && (
              <button
                onClick={() => setInputsAtivo((prev) => !prev)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "10px auto auto",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                {inputsAtivo ? (
                  <>
                    {" "}
                    Menos filtros
                    <FaChevronUp />
                  </>
                ) : (
                  <>
                    Más filtros <FaChevronDown />
                  </>
                )}
              </button>
            )}
          </S.WrapperFormulario>
        </div>
      </S.ContainerGlobal>
      <Carrosel />
      {activeCriarConta && <ModalContaCriadaComSucesso />}
    </S.Home>
  );
}
