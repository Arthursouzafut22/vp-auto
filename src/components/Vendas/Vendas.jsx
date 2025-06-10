import { useEffect, useState } from "react";
import * as S from "./styles";
import { CardVenda } from "./CardVenda";
import { useNavigate } from "react-router-dom";

export default function Vendas() {
  const [dados, setDados] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    (async () => {
      const response = await fetch("/data/cardsVendas.json");
      const json = await response.json();
      setDados(json);
      console.log(json);
    })();
  }, []);

  return (
    <S.ContainerVendas>
      <h1>Las ventas</h1>

      <div className="caixa">
        {dados.map((item) => (
          <CardVenda key={item.id} item={item} />
        ))}
      </div>

      <button onClick={() => navigate("/vehiculo")}>Todos los vehiculos</button>
    </S.ContainerVendas>
  );
}
