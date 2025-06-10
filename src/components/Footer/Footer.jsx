import * as S from "./styles";
import { Link } from "react-router-dom";
import Peugeot from "../../assets/image/peugeot.webp";
import Renault from "../../assets/image/renault.webp";
import Citroen from "../../assets/image/citroen.webp";
import Opel from "../../assets/image/opel.webp";
import Volkswa from "../../assets/image/volkswagen.webp";
import Bmw from "../../assets/image/bmw.webp";
import Ford from "../../assets/image/ford.webp";
import Audi from "../../assets/image/audi.webp";

export default function Footer() {
  const arr = [
    "208 (51)",
    "3008 (51)",
    "CLIO V (34)",
    "C3 (50)",
    "308 (30)",
    "2008 (45)",
    "CAPTUR (25)",
    "C4 (22)",
    "EXPERT FOURGON (33)",
    "5008 (19)",
    " Presupuesto reducido",
    "Cajas de cambio automáticas",
    "Vehículos híbridos",
  ];

  const primiraColuna = arr.slice(0, 5);
  const SegundaColuna = arr.slice(5, 10);
  const TerceiraColuna = arr.slice(10, 13);

  const marcasCarros = [
    {
      img: Peugeot,
      nome: "Peugeot",
    },
    {
      img: Renault,
      nome: "Renault",
    },
    {
      img: Citroen,
      nome: "Citroen",
    },
    {
      img: Opel,
      nome: "Opel",
    },
    {
      img: Volkswa,
      nome: "Volkswa",
    },
    {
      img: Bmw,
      nome: "Bmw",
    },
    {
      img: Ford,
      nome: "Ford",
    },
    {
      img: Audi,
      nome: "Audi",
    },
  ];

  return (
    <S.Footer>
      <S.BoxDetalhes>
        <S.NavLink to={"/preguntas-frecuentes"}>Preguntas frecuentes</S.NavLink>
        <S.NavLink to={"/recruitment"}>Contratación</S.NavLink>
        <S.NavLink to={"/boletin-informativo"}>
          {" "}
          Inscripción al boletín informativo
        </S.NavLink>
        <S.NavLink to={"/ubicaciones-salas-vpauto"}>
          {" "}
          Plan de acceso / Horarios
        </S.NavLink>
      </S.BoxDetalhes>

      <S.BoxDetalhes2>
        <div className="caixa-1">
          <S.NavLink to={"/marcas-representadas"}>
            Las marcas en nuestras ventas
          </S.NavLink>
          <S.NavLink to={"/vehiculo"}>Nuestros resultados de ventas</S.NavLink>
        </div>

        <S.WrapperGlobal>
          <S.ContainerMarcasCarros>
            {/* <h3>Mejores marcas en nuestras ventas</h3> */}
            <div className="one-1">
              {marcasCarros.slice(0, 4).map((item, index) => (
                <div key={index} className="um">
                  <img src={item.img} alt={item.nome} />
                  <p>{item.nome}</p>
                </div>
              ))}
            </div>

            <div className="one-2">
              {marcasCarros.slice(4, 8).map((item, index) => (
                <div key={index} className="um">
                  <img src={item.img} alt={item.nome} />
                  <p>{item.nome}</p>
                </div>
              ))}
            </div>
          </S.ContainerMarcasCarros>
          <S.ContainerModelos>
            {/* <h3>ContainerModelos</h3> */}

            <div className="box-1">
              {primiraColuna.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </div>
            <div>
              {SegundaColuna.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </div>
            <div>
              <h1 style={{color:"#fff",fontSize:"20px"}}>Acceso directo</h1>
              {TerceiraColuna.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </div>
          </S.ContainerModelos>
        </S.WrapperGlobal>
      </S.BoxDetalhes2>
    </S.Footer>
  );
}
