import * as S from "./styles";

export default function ContainerInputs() {
  return (
    <S.WrraperInputs>
      <div className="caixa-1">
        <input type="text" placeholder="Km máx." style={{ width: "25%" }} />
        <input
          type="text"
          placeholder="Precio máximo"
          style={{ width: "25%" }}
        />
      </div>
      <select name="" id="" style={{ flex: "1" }}>
        <option value="Todas nuestras ventas">Todas nuestras ventas</option>
        <option value="Marseille-Miramas ">
          Marseille-Miramas - 06/06/2025
        </option>
        <option value=" LYON "> LYON - 06/06/2025</option>
        <option value=" Lorient "> Lorient - 09/06/2025</option>
        <option value=" LParis"> Paris - 13/06/2025</option>
        <option value=" Bordeaux"> Bordeaux - 13/06/2025</option>
        <option value=" Lille "> Lille - 13/06/2025</option>
        <option value=" Nantes "> Nantes - 16/06/2025</option>
      </select>
    </S.WrraperInputs>
  );
}
