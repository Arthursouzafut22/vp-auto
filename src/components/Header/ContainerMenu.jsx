import * as S from "./styles";
import { FaBars } from "react-icons/fa";

export default function ContainerMenu({ openModalMenu, mobile }) {
  return (
    <S.WrapperMenu
      onClick={openModalMenu}
      style={{ flexDirection: mobile && "column", gap: mobile && "0px" }}
    >
      <FaBars fontSize={20} />
      <span>Menú</span>
    </S.WrapperMenu>
  );
}
