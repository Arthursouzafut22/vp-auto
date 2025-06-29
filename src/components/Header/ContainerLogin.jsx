// import { useEffect, useState } from "react";
import ModalLogin from "../ModalLogin/ModalLogin";
import * as S from "./styles";

const urlSvg =
  "https://static.vpauto.fr/bundles/vpauto/frontend/images/pro/icon-menu-14.svg?v20250430";

export function ContainerLogin({ openModal, modalAtivo, mobile, token }) {
  
  const fazNada = function(){
    return;
  }

  return (
    <S.ContainerLogin
      onClick={token ? fazNada : openModal}
      style={{
        flexDirection: mobile ? "column" : "row",
        gap: mobile && "1px",
        fontSize: mobile && "13px",
      }}
    >
      <img src={urlSvg} alt="imagem" width={35} />
      <p>
        {mobile ? (
          token ? (
            <span
              style={
                token
                  ? {
                      background: "#FF4C00",
                      borderRadius: "10px",
                      padding: "0 5px 0 8px",
                      color: "#fff",
                      fontSize: "12px",
                    }
                  : { fontSize: "12px" }
              }
            >
              {token ? "CONECTADO" : "Conectarse"}
            </span>
          ) : (
            "Conectarse"
          )
        ) : (
          <>
            <strong> Mi cuenta</strong> <br />{" "}
            <span
              style={
                token
                  ? {
                      background: "#FF4C00",
                      borderRadius: "10px",
                      padding: "0 5px 0 8px",
                      color: "#fff",
                      fontSize: "12px",
                    }
                  : { fontSize: "12px" }
              }
            >
              {token ? "CONECTADO" : "Registro, Iniciar sesión"}
            </span>
          </>
        )}
      </p>
      {modalAtivo && <ModalLogin />}
    </S.ContainerLogin>
  );
}
