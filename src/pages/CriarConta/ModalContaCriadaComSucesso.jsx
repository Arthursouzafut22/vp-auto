import { useNavigate } from "react-router-dom";
import { AuthCriarConta } from "../../context/createCountLogin";
import * as S from "./styles";
import { RiCloseLargeLine } from "react-icons/ri";

export default function ModalContaCriadaComSucesso() {
  const { setActiveCriarConta } = AuthCriarConta();
  const navigate = useNavigate();

  return (
    <S.ContainerSection onClick={() => setActiveCriarConta(false)}>
      <S.Modal onClick={(event) => event.stopPropagation()}>
        <RiCloseLargeLine
          fontSize={30}
          color="#fff"
          style={{
            position: "absolute",
            top: -35,
            right: -5,
            cursor: "pointer",
          }}
          onClick={() => setActiveCriarConta(false)}
        />
        <div className="wrapper-y">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#09d"
            viewBox="0 0 90 90"
            width={70}
            style={{ margin: "0 auto", display: "block" }}
            xmlns:v="https://vecta.io/nano"
          >
            <path d="M45 85.66a40.66 40.66 0 1 1 41-41.25 40.81 40.81 0 0 1-41 41.25zm21-42.29a2.53 2.53 0 0 0 .46-1.77v-.66a3.3 3.3 0 0 0-3.4-3.39H56.6a3.74 3.74 0 0 1-1.08-.24.8.8 0 0 1-.56-.8 8.51 8.51 0 0 1 .1-1.52l.83-3.73a14.06 14.06 0 0 0 .32-5.48 4.09 4.09 0 0 0-3.13-3.71 2.42 2.42 0 0 0-3 1.62c-.1.3-.09.64-.17.95l-1.26 4.51a19.66 19.66 0 0 1-2.19 4.91 13.78 13.78 0 0 1-5.76 4.68 4.84 4.84 0 0 1-1.42.47 2.05 2.05 0 0 0-2 2.17v16.53a1.82 1.82 0 0 0 1 1.73 5.8 5.8 0 0 0 1 .4l5 1.49a27.86 27.86 0 0 0 10.38 1.68l6.61-.45a3.32 3.32 0 0 0 2.95-2.61A5.39 5.39 0 0 0 64 57l.22-.06.2-.06a3.34 3.34 0 0 0 2.25-2.21 5 5 0 0 0 .08-2.47 11.86 11.86 0 0 0-.43-1.36A3 3 0 0 0 68 48.57a9 9 0 0 0 0-2.32 3.92 3.92 0 0 0-2-2.88zm-30.54 6.26v-9a1.85 1.85 0 0 0-1.89-1.91H23.51a1.85 1.85 0 0 0-1.85 1.46 6.18 6.18 0 0 0-.07 1.14v4.49 12.75a1.82 1.82 0 0 0 1.32 1.91 3.84 3.84 0 0 0 1.13.09h9.3a2 2 0 0 0 2.11-2.11l.01-8.82z"></path>
          </svg>

          <h1>¡Enhorabuena!</h1>
        </div>

        <div className="wrapper-x">
          <p>Se ha validado su creación de cuenta.</p>
          <button onClick={() => {
            navigate("/");
            setActiveCriarConta(false)
          }}>Ver las ventas</button>
        </div>
      </S.Modal>
    </S.ContainerSection>
  );
}
