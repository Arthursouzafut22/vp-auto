import { Link } from "react-router-dom";
import * as S from "./styles";
import { BsSearch } from "react-icons/bs";
import { RiCloseLargeLine } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaRegBell } from "react-icons/fa6";
import { FaRegGrinAlt } from "react-icons/fa";
import { CiDesktopMouse1 } from "react-icons/ci";

const urlBandeira =
  "https://static.vpauto.fr/bundles/vpauto/frontend/images/drapeaux/icon-flag-es.svg?v20250430";

export function MenuMobile(closeMenuMobile) {
  const navigate = useNavigate();

  return (
    <S.ContainerMenuMobile onClick={(event) => event.stopPropagation()} style={{zIndex:"88"}}>
      <S.Container1>
        <Link
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "18px",
            color: "#383b3e",
          }}
        >
          <BsSearch />
          Buscar
        </Link>
        <RiCloseLargeLine
          fontSize={23}
          cursor={"pointer"}
          onClick={closeMenuMobile}
        />
      </S.Container1>

      <S.Container2>
        <S.NavLink>Conectarse</S.NavLink>
        <S.NavLink to={"/inscripcion"}>Crear una cuenta</S.NavLink>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <S.NavLink2 to={"/pro"}>Profesional</S.NavLink2>
          <button>
            <AiOutlineWhatsApp fontSize={20} /> +34 911 98 71 28
          </button>
        </div>
      </S.Container2>

      <S.ContainerButton>
        <button>
          <img src={urlBandeira} width={28} />
          <FaChevronDown />
        </button>
      </S.ContainerButton>

      <S.ContainerLinks>
        <S.Linkk
          to={"/proximas-ventas"}
          onClick={() => navigate("/proximas-ventas")}
        >
          <CiDesktopMouse1 fontSize={24} /> Live
        </S.Linkk>{" "}
        <S.Linkk to={"/login"}>
          <FaRegBell fontSize={24} /> Crear una alerta
        </S.Linkk>{" "}
        <S.Linkk to={"/opiniones-clientes"}>
          <FaRegGrinAlt fontSize={24} /> Opiniones de los clientes
        </S.Linkk>
      </S.ContainerLinks>

      <S.ContainerLinks2>
        <S.NavLink to={"/entender-las-subastas"}>
          Entender las subastas
        </S.NavLink>
        <S.NavLink to={"/compra-en-linea"}>Cómo comprar en línea</S.NavLink>
        <S.NavLink to={"/servicios"}>Nuestros servicios</S.NavLink>
        <S.NavLink to={"/contacto-servicios-clientes"}>
          Contacte con nosotros
        </S.NavLink>
        <S.NavLink to={"/preguntas-frecuentes"}>Preguntas frecuentes</S.NavLink>
        <S.NavLink to={"/l-empresa-vpauto"}>¿Quiénes somos?</S.NavLink>
        <S.NavLink to={"/nuestros-compromisos-calidad"}>
          Nuestros compromisos
        </S.NavLink>
        <S.NavLink to={"/ubicaciones-salas-vpauto"}>
          Nuestros puntos de venta
        </S.NavLink>
        <S.NavLink to={"/procedencia-vehiculo-materiales"}>
          Procedencia de los vehículos
        </S.NavLink>
        <S.NavLink to={"/peritajes-tecnicos-de-los-vehiculos"}>
          Peritajes de los vehículos
        </S.NavLink>
      </S.ContainerLinks2>
    </S.ContainerMenuMobile>
  );
}
