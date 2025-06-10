import * as S from "./styles";
import { CiDesktopMouse1 } from "react-icons/ci";
import { FaRegGrinAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { TbMessagePlus } from "react-icons/tb";
import useMedia from "../../Hooks/useMedia";

export default function ModalMenu() {
  const navigate = useNavigate();
  const { mobile } = useMedia("(max-width:1150px)");

  return (
    <S.ContainerModalMenu
      style={{ display: mobile ? "none" : "flex" }}
      onClick={(event) => event.stopPropagation()}
    >
      <S.WrapperNavs1>
        <S.NavLink to={"/entender-las-subastas"}>
          Entender las subastas
        </S.NavLink>
        <S.NavLink to={"/compra-en-linea"}>Cómo comprar en línea</S.NavLink>
        <S.NavLink to={"/servicios"}>Nuestros servicios</S.NavLink>
        <S.NavLink to={"/contacto-servicios-clientes"}>
          Contacte con nosotros
        </S.NavLink>
        <S.NavLink to={"/preguntas-frecuentes"}>Preguntas frecuentes</S.NavLink>
      </S.WrapperNavs1>

      <S.WrapperNavs2>
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
      </S.WrapperNavs2>

      <S.Wrapper1>
        <button
          onClick={() => navigate("/proximas-ventas")}
          style={{ marginBottom: "35px" }}
        >
          <CiDesktopMouse1 fontSize={24} /> Live
        </button>

        <button onClick={() => navigate("/opiniones-clientes")}>
          <FaRegGrinAlt fontSize={24} /> Opiniones de los clientes
        </button>
      </S.Wrapper1>

      <S.Wrapper2>
        <button onClick={() => navigate("/vehiculo")}>
          <BsSearch fontSize={24} /> Buscar
        </button>
      </S.Wrapper2>

      <S.Wrapper3>
        <button>
          <TbMessagePlus fontSize={30} />
          Servicio de atención al cliente
        </button>
        <S.NavLink to={"/fr"}>Condiciones de venta</S.NavLink>
      </S.Wrapper3>
    </S.ContainerModalMenu>
  );
}
