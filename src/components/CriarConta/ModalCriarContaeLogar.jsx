import { UseGeral } from "../../context/geralContext";
import useMedia from "../../Hooks/useMedia";
import * as S from "./styles";
import { RiCloseLargeLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthLogin } from "../../context/contextLogin";

const ur1Family =
  "https://static.vpauto.fr/bundles/vpauto/frontend/images/particuliers.svg?v20250612";
const ur2Predios =
  "https://static.vpauto.fr/bundles/vpauto/frontend/images/societes.svg?v20250612";
const ur3 =
  "https://static.vpauto.fr/bundles/vpauto/frontend/images/pros_2_auto.svg?v20250612";

const imgSino =
  "https://static.vpauto.fr/bundles/vpauto/frontend/images/ring.svg";
const imgLove =
  "https://static.vpauto.fr/bundles/vpauto/frontend/images/coeur.svg";
const imgSuporte =
  "https://static.vpauto.fr/bundles/vpauto/frontend/images/call.svg";

export default function ModalCriarContaeLogar() {
  const { mobile } = useMedia("(max-width:600px)");
  const { closeModal, setModalAtivo } = UseGeral();
  const { enviarDadosLogin } = AuthLogin();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function redirectRouter(){
    closeModal();
    setModalAtivo(false);
    navigate("/inscripcion");
  }

  return (
    <S.Section onClick={closeModal}>
      <div
        className="wrapper-geral"
        style={{ marginTop: mobile && "220px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <RiCloseLargeLine
          color="#fff"
          fontSize={26}
          style={{
            position: "absolute",
            top: mobile ? -40 : 0,
            right: mobile ? 18 : 0,
            cursor: "pointer",
          }}
          onClick={closeModal}
        />

        <S.Form onSubmit={handleSubmit(enviarDadosLogin)}>
          <S.BoxDetalhesForm>
            <div
              className="filho blue"
              style={{ flexDirection: mobile && "column" }}
            >
              <img src={ur1Family} />
              <span
                style={{
                  fontSize: "14px",
                  display: "block",
                  color: "#0099DD",
                }}
              >
                Individuos
              </span>
            </div>
            <div
              className="filho blue"
              style={{ flexDirection: mobile && "column" }}
            >
              <img src={ur2Predios} />
              <span
                style={{
                  fontSize: "14px",
                  display: "block",
                  color: "#0099DD",
                }}
              >
                Compañías
              </span>
            </div>
            <div
              className="filho red"
              style={{ flexDirection: mobile && "column" }}
            >
              <img src={ur3} />
              <span
                style={{ fontSize: "14px", display: "block", color: "#fff" }}
              >
                {" "}
                Profesionales
                <br />{" "}
                <b style={{ fontWeight: "normal", display: mobile && "none" }}>
                  del automóvil
                </b>
              </span>
            </div>
          </S.BoxDetalhesForm>

          <fieldset>
            <h1>¿Dispone de una cuenta?</h1>
            {(errors.email || errors.password) && (
              <p style={{ color: "red", fontSize: "13px" }}>
                Identificador e/ou senha(s) incorreta(s)
              </p>
            )}
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Correo electrónico"
              style={{ marginBottom: "14px" }}
            />
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Contraseña"
            />

            <div className="container-check">
              <input type="checkbox" />
              <span>Recordar mis datos</span>
            </div>

            <button>conectarse</button>
          </fieldset>
        </S.Form>

        <S.Box2>
          <h1>¿Aún no eres cliente?</h1>
          <p>Una cuenta le permite:</p>

          <span>
            <img src={imgSino} />
            Crear alertas de búsqueda
          </span>
          <span>
            <img src={imgLove} />
            Siga sus productos favoritos y reciba actualizaciones de
          </span>
          <span>
            <img src={imgSuporte} />
            Participar en la venta en la habitación y en línea
          </span>

          <button onClick={redirectRouter}>
            Crear una cuenta
          </button>
        </S.Box2>
      </div>
    </S.Section>
  );
}
