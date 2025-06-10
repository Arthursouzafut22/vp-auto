import * as S from "./styles";

const um =
  "https://static.vpauto.fr/bundles/vpauto/frontend/images/icone04-gris.svg?v20250430";
const dois =
  "https://static.vpauto.fr/bundles/vpauto/frontend/images/icone05-gris.svg?v20250430";

const tres =
  "https://static.vpauto.fr/bundles/vpauto/frontend/images/icone06-gris.svg?v20250430";

const quatro =
  "https://static.vpauto.fr/bundles/vpauto/frontend/images/icone07-gris.svg?v20250430";

const cinco =
  "https://static.vpauto.fr/bundles/vpauto/frontend/images/icone08-gris.svg?v20250430";

const seis =
  "https://static.vpauto.fr/bundles/vpauto/frontend/images/services10-gris.svg?v20250430";

export default function Garantia() {
  return (
    <S.ContainerGarantia>
      <h1>Garantías y servicios</h1>

      <S.BoxGarantia>
        <S.CardGarantia>
          <img src={um} onClick={() => {}} />
          <p>Garantizar</p>
        </S.CardGarantia>
        <S.CardGarantia>
          <img src={dois} onClick={() => {}} />
          <p>Seguro</p>
        </S.CardGarantia>
        <S.CardGarantia>
          <img src={tres} onClick={() => {}} />
          <p>Transporte</p>
        </S.CardGarantia>{" "}
        <S.CardGarantia>
          <img src={quatro} onClick={() => {}} />
          <p>Reventa de su vehículo</p>
        </S.CardGarantia>
        <S.CardGarantia>
          <img src={cinco} onClick={() => {}} />
          <p>Visita con cita previa</p>
        </S.CardGarantia>
        <S.CardGarantia>
          <img src={seis} onClick={() => {}} />
          <p>Tarjeta de registro – reinscripción</p>
        </S.CardGarantia>
      </S.BoxGarantia>
    </S.ContainerGarantia>
  );
}
