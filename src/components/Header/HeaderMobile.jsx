import ContainerMenu from "./ContainerMenu";
import Logo from "../../assets/image/logo.webp";
import * as S from "./styles";
import { ContainerLogin } from "./ContainerLogin";
import { useCallback, useEffect, useState } from "react";
import useMedia from "../../Hooks/useMedia";
import { MenuMobile } from "../ModalMenu/MenuMobile";
import ModalMenu from "../ModalMenu/ModalMenu";

export default function HeaderMobile() {
  const [modalAtivo, setModalAtivo] = useState(false);
  const [menuAtivo, setMenuAtivo] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);
  const { mobile } = useMedia("(max-width:767px)");

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
  }, []);

  const openModal = useCallback((event) => {
    event.stopPropagation();
    if (event.currentTarget === event.currentTarget) {
      setModalAtivo((prev) => !prev);
    }
  }, []);

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
    <S.HeaderMobile>
      <ContainerMenu openModalMenu={openModalMenu} mobile={mobile} />
      <img src={Logo} alt="vp-auto" width={90} />
      <ContainerLogin
        modalAtivo={modalAtivo}
        openModal={openModal}
        mobile={mobile}
      />
      {menuAtivo && <ModalMenu />}
      {menuMobile && <MenuMobile closeMenuMobile={closeMenuMobile} />}
    </S.HeaderMobile>
  );
}
