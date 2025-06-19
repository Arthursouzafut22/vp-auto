import { UseGeral } from "../../context/geralContext";
import useMedia from "../../Hooks/useMedia";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const urlImage1 =
  "https://static.vpauto.fr/bundles/vpauto/frontend/images/icone30.svg?v20250430";

const urlImage2 =
  "https://static.vpauto.fr/bundles/vpauto/frontend/images/icone29.svg?v20250430";

export default function ModalLogin() {
  const navigate = useNavigate();
  const { mobile } = useMedia("(max-width:767px)");
  const { modalLoginCriar } = UseGeral();

  return (
    <S.ContainerModal
      onClick={(event) => event.stopPropagation()}
      style={{
        maxWidth: mobile && "initial",
        width: mobile && "95%",
      }}
    >
      <S.Wrapper1 onClick={modalLoginCriar}>
        <div className="caixa-1">
          <img src={urlImage1} width={50} />
          <div style={{ borderBottom: "0.5px solid #0F4D71" }}>
            <p style={{ color: "#0F4D71", fontWeight: "bold" }}>
              Soy un particular o una empresa
            </p>
            <span
              style={{
                fontSize: "12px",
                lineHeight: "20px",
                color: "#989898",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Empresas: Paisajista, Albañil, Pintor...
            </span>
          </div>
        </div>
      </S.Wrapper1>

      <S.Wrapper2 onClick={() => navigate("/")}>
        <div className="caixa-2">
          <img src={urlImage2} width={50} />
          <div>
            <p style={{ color: "#FF4C00", fontWeight: "bold" }}>
              Soy un profesional del auto
            </p>
            <span
              style={{
                fontSize: "12px",
                lineHeight: "20px",
                color: "#989898",
                display: "block",
              }}
            >
              Profesionales del automóvil: Concesionarios, Agentes,
              Comerciantes... Contáctenos
            </span>
          </div>
        </div>
      </S.Wrapper2>
    </S.ContainerModal>
  );
}
