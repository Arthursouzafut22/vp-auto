import ModalLogin from "../ModalLogin/ModalLogin";
import * as S from "./styles";

const urlSvg =
  "https://static.vpauto.fr/bundles/vpauto/frontend/images/pro/icon-menu-14.svg?v20250430";

export function ContainerLogin({ openModal, modalAtivo, mobile }) {
  return (
    <S.ContainerLogin
      onClick={openModal}
      style={{
        flexDirection: mobile ? "column" : "row",
        gap: mobile && "1px",
        fontSize: mobile && "13px",
      }}
    >
      <img src={urlSvg} alt="imagem" width={35} />
      <p>
        {mobile ? (
          "Conectarse"
        ) : (
          <>
            <strong> Mi cuenta</strong> <br />{" "}
            <span style={{ fontSize: "12px" }}>Registro, Iniciar sesión</span>
          </>
        )}
      </p>
      {modalAtivo && <ModalLogin />}
    </S.ContainerLogin>
  );
}
