import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export default function CardCarrosel({ item }) {
  const navigate = useNavigate();

  return (
    <S.Card onClick={() => navigate(`/vehiculo/${item.id}`)}>
      <img src={item.fotos[0]} alt="car" />
      <p style={{ marginTop: "8px", fontSize: "15px", lineHeight: "20px" }}>
        {item.nome}
      </p>
      <p style={{ fontWeight: "bold", marginTop: "4px" }}>
        {String(item.energia)}
      </p>
      <p style={{ fontSize: "14px" }}>{item.km}</p>
      <span>Ver vehículo</span>
    </S.Card>
  );
}
