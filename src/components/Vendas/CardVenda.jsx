import * as S from "./styles";
import { FaCar } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";

export function CardVenda({ item }) {
  return (
    <S.CardVendas>
      <img src={item.fotos[0]} alt="car" />
      <b>
        <FaRegCirclePlay fontSize={20} />
        {item.online}
      </b>
      <S.BoxDetalhes>
        <h2>
          {item.data} <br /> <strong style={{color:"#fff"}}>{item.cidade}</strong>
        </h2>
        {/* <p>{item.cidade}</p> */}
      </S.BoxDetalhes>

      <S.BoxCard>
        <div className="caixa-1">
          <p>
            Desde <strong style={{ fontSize: "28px" }}>{item.desde}</strong>
          </p>
          <p
            style={{
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            {item.numero} <FaCar />
          </p>
        </div>
        <span>{item.oportunidad}</span>
        <strong style={{color: "#ff4c00",fontSize:"20px"}}>Consultar la venta</strong>
      </S.BoxCard>
    </S.CardVendas>
  );
}
