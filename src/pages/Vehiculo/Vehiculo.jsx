import { useParams } from "react-router-dom";
import * as S from "./styles";
import { useFetch } from "../../Hooks/useFetch";
import { BsSearch } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { TfiPrinter } from "react-icons/tfi";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { RiCarWashingFill } from "react-icons/ri";
import { GrHostMaintenance } from "react-icons/gr";
import { GiPoliceCar } from "react-icons/gi";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { BsClipboardData } from "react-icons/bs";
import TelPhone from "../../assets/image/tel.png";
import Suporte from "../../assets/image/suporte.png";
import Auto from "../../assets/image/auto.png";
import { FaQuestionCircle } from "react-icons/fa";
import Tecnicas from "../../assets/image/bk.jpg";
import useMedia from "../../Hooks/useMedia";
import { objTecnicas } from "./utils";
import { useEffect, useState } from "react";

export default function Vehiculo() {
  const { id } = useParams();
  const { dados } = useFetch();
  const searchVeiculo = dados.find((item) => item.id === parseInt(id));
  const { mobile } = useMedia("(max-width:1175px)");
  const [indexImg, setIndexImg] = useState(0);

  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    window.scrollTo({ behavior: "auto", top: 0 });
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Função para deixar sempre com dois dígitos
  const format = (num) => String(num).padStart(2, "0");

  const indexImagem = (index) => {
    setIndexImg(index);
  };

  if (searchVeiculo === undefined || searchVeiculo === null) {
    return <p>CARREGANDO......</p>;
  }
  return (
    <S.SectionVehiculo>
      <S.BoxAzul>
        <div className="item-1">
          <h1>{searchVeiculo?.cidade}</h1>
          <span>El 30/06/25</span>
        </div>
        <div className="item-2">
          <p>Exposición en internet e in situ (con cita)</p>
          <p>El directo se abre a las 11:00.</p>
        </div>
        <div className="item-3">
          <button>
            <BsSearch /> Nueva búsqueda
          </button>
          <p></p>
        </div>
      </S.BoxAzul>

      <S.WrapperGlobal>
        <S.BoxInformacoesCarros>
          <h1 className="h1">{searchVeiculo?.nome}</h1>
          <div className="caixa-flex">
            <p style={{ fontWeight: "bold" }}>{searchVeiculo?.km}</p>
            <p>Venta a partir de 13:30</p>
            <p> Ref: {searchVeiculo?.ref}</p>
          </div>

          <S.ContainerDetalhesCarros>
            <S.Box>
              <S.BoxGaleriaImagemCarros>
                <img
                  className="img-1"
                  src={searchVeiculo?.fotos[indexImg]}
                  alt={searchVeiculo?.nome}
                  style={{ maxWidth: "100%" }}
                />
                <S.ControllesImagesButton>
                  <div className="caixa-img">
                    {searchVeiculo?.fotos.map((item, index) => (
                      <img
                        src={item}
                        key={index}
                        width={70}
                        style={{
                          border: indexImg === index ? "1.5px solid #fff" : "",
                        }}
                        onClick={() => indexImagem(index)}
                      />
                    ))}
                  </div>
                </S.ControllesImagesButton>
              </S.BoxGaleriaImagemCarros>

              <S.BoxValoresInformacao>
                <S.ContainerInfo>
                  <div className="caixa-cronometro">
                    <p>Apertura de la venta :</p>
                    <div className="box-cronometro">
                      <div style={{ fontSize: "17px" }}>
                        <p>{format(timeLeft.days)}</p> <b>Días</b>
                      </div>
                      <div>
                        <p>{format(timeLeft.hours)}</p> <b>Horas</b>
                      </div>
                      <div>
                        <p>{format(timeLeft.minutes)}</p> <b>Minutos</b>
                      </div>
                      <div>
                        <p>{format(timeLeft.seconds)}</p> <b>Segundos</b>
                      </div>
                    </div>
                  </div>
                </S.ContainerInfo>
                <S.ContainerValorCarroEbutton>
                  <S.BoxWrraper>
                    <div className="wrapper">
                      <h4>Precio inicial1</h4>
                      <p>{searchVeiculo?.valor}</p>
                      <div className="pai">
                        <form>
                          <input type="number" placeholder="Su oferta máxima" />
                          <button>€</button>
                        </form>
                        <button className="btn-validar">Validar</button>
                      </div>
                    </div>
                  </S.BoxWrraper>
                  <div className="caixa-preco-novo">
                    <span>Precio nuevo3: {searchVeiculo?.preco_novo}</span>
                    <span>IVA: {searchVeiculo?.iva}</span>
                  </div>
                </S.ContainerValorCarroEbutton>
              </S.BoxValoresInformacao>
            </S.Box>
          </S.ContainerDetalhesCarros>

          <S.ContainerSegundaParte>
            <S.Filho1>
              <div className="div">
                <img src={Auto} width={80} />
                <p>
                  El precio mostrado <br /> incluye los gastos de <br /> venta
                </p>
              </div>
              <div className="div">
                <BsClipboardData fontSize={25} color="#354047" />
                <p>Vehículo revisado y probado en carretera</p>
              </div>
              <div className="outra-div">
                <p>
                  <FaQuestionCircle />
                  <S.NavLink>Entender las subastas</S.NavLink>
                </p>{" "}
                <p>
                  <FaQuestionCircle />
                  <S.NavLink>Cómo comprar en línea</S.NavLink>
                </p>
              </div>
            </S.Filho1>

            <S.ContainerInformacoesGerais>
              <h2>Información general</h2>
              <S.BoxFlexInfo>
                <S.Info1>
                  <p>
                    <strong>Tipo :</strong> {searchVeiculo?.tipo}
                  </p>
                  <p>Carrocería :{searchVeiculo?.carrocería}</p>
                  <p>
                    <strong>Puesta en circulación :</strong>{" "}
                    {searchVeiculo?.puesta_en_circulación}
                  </p>
                  <p>
                    <strong>Kilometraje :</strong> {searchVeiculo?.kilometraje}
                  </p>
                  <p>
                    <strong>CV :</strong> {searchVeiculo?.cv}
                  </p>
                  <p>
                    <strong>Ubicación :</strong> {searchVeiculo?.ubicacion}
                  </p>
                </S.Info1>
                <S.Info2>
                  <p>
                    {" "}
                    <strong>Color :</strong> {searchVeiculo?.color}
                  </p>
                  <p>
                    <strong>Carnet de mantenimiento :</strong>{" "}
                    {searchVeiculo?.carnet_de}
                  </p>
                  <p>
                    <strong>Seguimiento de mantenimiento :</strong>{" "}
                    {searchVeiculo?.mantenimiento}
                  </p>
                  <p>
                    <strong>Crit'Air :</strong> {searchVeiculo?.crit_Air}
                  </p>
                  <p>
                    <strong>Potencia :</strong> {searchVeiculo?.potencia}
                  </p>
                  <p>
                    <strong>Tipo de caja de cambios :</strong>{" "}
                    {searchVeiculo?.Tipo_de_caja_de_cambios}
                  </p>
                </S.Info2>
                <S.Info3>
                  <p>
                    <strong>IVA :</strong> {searchVeiculo?.iva}
                  </p>
                  <p>
                    <strong>CO2 (g/km) :</strong>{" "}
                    {searchVeiculo?.Tipo_de_caja_de_cambios}
                  </p>
                  <p>
                    <strong>Norma Euro :</strong> {searchVeiculo?.norma_Euro}
                  </p>
                  <p>
                    {" "}
                    <strong>Energía :</strong> {searchVeiculo?.energia}
                  </p>
                  <p>
                    <strong>Desplazamiento :</strong>{" "}
                    {searchVeiculo?.desplazamiento}
                  </p>
                </S.Info3>
              </S.BoxFlexInfo>

              <S.BoxObservacoes>
                <h1>Observaciones</h1>
                <p> {searchVeiculo?.observaciones}</p>
              </S.BoxObservacoes>

              <S.BoxEquipamentos>
                <h2>Equipamientos / Opciones</h2>
                <ul>
                  {searchVeiculo?.equipamientos?.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </S.BoxEquipamentos>

              <S.BoxEstadoDoVeiculo>
                <h1>Estado del vehículo</h1>
                <div className="dt">
                  <GiPoliceCar fontSize={24} />
                  <S.NavLink>
                    {searchVeiculo?.Estado_del_vehiculo?.um}
                  </S.NavLink>
                </div>
                <div className="dt">
                  <BsClipboardData fontSize={24} />
                  <S.NavLink>
                    {searchVeiculo?.Estado_del_vehiculo?.dois}
                  </S.NavLink>
                </div>
              </S.BoxEstadoDoVeiculo>

              <S.BoxTecnicasDoCarro>
                <img src={Tecnicas} style={{ maxWidth: "100%" }} />
                <div>
                  {objTecnicas.map((item, i) => (
                    <div key={i} className="caixa-tecnica">
                      <div style={{ backgroundColor: item.color }}> </div>
                      <p>{item.nome}</p>
                    </div>
                  ))}
                </div>
              </S.BoxTecnicasDoCarro>

              <S.BoxCaracteristicasTecnicas>
                <h1>Características técnicas</h1>
                <S.WrapperCaracteristicas>
                  <S.Caracteristicas1>
                    <p>
                      <strong>Carrocería :</strong>{" "}
                      {searchVeiculo?.caracteristicas_tecnicas?.carroceria}
                    </p>
                    <p>
                      <strong>Tipo de caja de cambios :</strong>{" "}
                      {
                        searchVeiculo?.caracteristicas_tecnicas
                          ?.tipo_de_caja_de_cambios
                      }
                    </p>
                    <p>
                      <strong> Cantidade de plazas :</strong>{" "}
                      {
                        searchVeiculo?.caracteristicas_tecnicas
                          ?.cantidade_de_plazas
                      }
                    </p>
                  </S.Caracteristicas1>
                  <S.Caracteristicas1>
                    <p>
                      <strong>Número de puertas :</strong>{" "}
                      {
                        searchVeiculo?.caracteristicas_tecnicas
                          ?.numero_de_puertas
                      }
                    </p>
                    <p>
                      <strong>Anchura :</strong>{" "}
                      {searchVeiculo?.caracteristicas_tecnicas?.anchura}
                    </p>
                    <p>
                      {" "}
                      <strong>Altura (cm) :</strong>{" "}
                      {searchVeiculo?.caracteristicas_tecnicas?.altura}
                    </p>
                  </S.Caracteristicas1>
                  <S.Caracteristicas1>
                    <p>
                      <strong>Número de velocidades :</strong>{" "}
                      {
                        searchVeiculo?.caracteristicas_tecnicas
                          ?.numero_de_velocidades
                      }
                    </p>
                    <p>
                      {" "}
                      <strong>Longitud (cm) :</strong>{" "}
                      {searchVeiculo?.caracteristicas_tecnicas?.longitud_cm}
                    </p>
                  </S.Caracteristicas1>
                </S.WrapperCaracteristicas>
                <p
                  style={{
                    marginTop: "80px",
                    fontSize: "12px",
                    maxWidth: "500px",
                  }}
                >
                  (1) Los gastos de la venta por subasta están incluidos en el
                  precio mostrado. Hay que añadir 150 € de gastos de expediente
                  (3) Referencia Codex con la fecha de salida o factura origina
                </p>
              </S.BoxCaracteristicasTecnicas>
            </S.ContainerInformacoesGerais>
          </S.ContainerSegundaParte>
        </S.BoxInformacoesCarros>

        <S.BoxContato style={{ display: mobile && "none" }}>
          <S.CaixaRedeSociais>
            <TfiEmail fontSize={25} color="#354047" />
            <TfiPrinter fontSize={25} color="#354047" />
            <ImFacebook2 fontSize={25} color="#354047" />
            <FaTwitterSquare fontSize={25} color="#354047" />
          </S.CaixaRedeSociais>

          <S.ContainerLinks>
            <div>
              <RiCarWashingFill fontSize={25} color="#354047" />
              <S.NavLink>Bilan Experto</S.NavLink>
            </div>
            <div>
              <BsClipboardData fontSize={25} color="#354047" />
              <S.NavLink>Seguimiento de mantenimiento</S.NavLink>
            </div>
            <div>
              <GrHostMaintenance fontSize={25} color="#354047" />
              <S.NavLink>Equipamientos / Opciones</S.NavLink>
            </div>
            <div>
              <GiPoliceCar fontSize={25} color="#354047" />
              <S.NavLink>Estado del vehículo</S.NavLink>
            </div>
            <div>
              <LiaFileInvoiceSolid fontSize={25} color="#354047" />
              <S.NavLink>Características técnicas</S.NavLink>
            </div>
          </S.ContainerLinks>

          <S.ContainerTelPhone>
            <img src={TelPhone} alt="phone" width={65} />
            <p>
              Servicio de atención <br /> al cliente <br /> +34 911 98 71 28
            </p>
          </S.ContainerTelPhone>

          <S.ContainerSuporte>
            <S.NavLink style={{ fontWeight: "bold", textAlign: "center" }}>
              Envíenos un correo electrónico
            </S.NavLink>
            <div className="card-suporte">
              <img src={Suporte} />
              <strong>
                ¿Necesitas ayuda?
                <br /> ¡Te llamamos!
              </strong>
              <button>Pedir cita</button>
            </div>
          </S.ContainerSuporte>
        </S.BoxContato>
      </S.WrapperGlobal>
    </S.SectionVehiculo>
  );
}
