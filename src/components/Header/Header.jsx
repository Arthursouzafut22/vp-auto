import Logo from "../../assets/image/logo.webp";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronDown, FaBars } from "react-icons/fa";
import * as S from "./styles";
import { useCallback, useEffect, useState } from "react";
import ModalMenu from "../ModalMenu/ModalMenu";
import useMedia from "../../Hooks/useMedia";
import { MenuMobile } from "../ModalMenu/MenuMobile";
import { ContainerLogin } from "./ContainerLogin";
import ContainerMenu from "./ContainerMenu";
import { UseGeral } from "../../context/geralContext";

const urlBandeira =
  "https://static.vpauto.fr/bundles/vpauto/frontend/images/drapeaux/icon-flag-es.svg?v20250430";

export default function Header() {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);
  const { mobile } = useMedia("(max-width:1150px)");
  const navigate = useNavigate();
  const { modalAtivo, setModalAtivo } = UseGeral();

  useEffect(() => {
    function closeModalGlobal() {
      setModalAtivo(false);
      setMenuMobile(false);
      setMenuAtivo(false);
    }

    document.addEventListener("click", closeModalGlobal);

    return () => {
      document.removeEventListener("click", closeModalGlobal);
    };
  }, [setModalAtivo]);

  const openModal = useCallback(
    (event) => {
      event.stopPropagation();
      if (event.currentTarget === event.currentTarget) {
        setModalAtivo((prev) => !prev);
      }
    },
    [setModalAtivo]
  );

  const openModalMenu = useCallback(
    (event) => {
      event.stopPropagation();

      if (mobile === true) {
        setMenuAtivo(false);
        setMenuMobile((prev) => !prev);
      }

      setMenuAtivo((prev) => !prev);
    },
    [mobile]
  );

  const closeMenuMobile = useCallback(() => {
    setMenuMobile(false);
  }, []);

  return (
    <S.Header>
      <S.Wrapper1>
        <img
          src={Logo}
          alt="vp-auto"
          width={90}
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        />

        <ContainerMenu openModalMenu={openModalMenu} />
        {!mobile && (
          <S.NavLink style={{ color: " #383b3e" }} to={"/vehicule"}>
            Comprar
          </S.NavLink>
        )}
      </S.Wrapper1>

      <S.Wrapper2>
        {!mobile && (
          <S.ContainerRadio>
            <S.RadioButton>
              <div></div>
            </S.RadioButton>
            <Link to={"/pro"} style={{ color: " #383b3e", lineHeight: "20px" }}>
              <strong>Particular</strong> <br /> Profesional
            </Link>
          </S.ContainerRadio>
        )}
        <ContainerLogin modalAtivo={modalAtivo} openModal={openModal} />

        <S.NavLink
          style={{ color: " #383b3e" }}
          to={"/contact-services-clients"}
        >
          Contáctenos
        </S.NavLink>
        <S.ContainerContato>
          <button>
            <img src={urlBandeira} width={30} />
            <FaChevronDown />
          </button>
        </S.ContainerContato>
      </S.Wrapper2>
      {menuAtivo && <ModalMenu />}
      {menuMobile && <MenuMobile closeMenuMobile={closeMenuMobile} />}
    </S.Header>
  );
}
