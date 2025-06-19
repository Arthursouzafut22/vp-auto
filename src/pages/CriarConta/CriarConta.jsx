import CardSuporte from "./CardSuporte";
import * as S from "./styles";
import { paises, vpAuto } from "./utils";

export default function CriarConta() {
  return (
    <S.Section>
      <S.ContainerBanner>
        <h1>
          Inscríbase <br />{" "}
          <span style={{ fontWeight: "normal", fontSize: "28px" }}>
            para ahorra tiempo
          </span>
        </h1>
      </S.ContainerBanner>

      <S.ContainerFormulario>
        <h2>Inscripción</h2>
        <p style={{ marginBlock: "10px" }}>
          Para ahorrar tiempo durante su próxima venta, le invitamos a crear su
          cuenta en línea
        </p>
        <p style={{ marginBottom: "15px" }}>
          Esta información será utilizada por nuestros servicios para establecer
          el certificado de venta y realizar la declaración SIV de su compra.
        </p>

        <S.Formulario>
          <S.WrapperInputs>
            <fieldset>
              <label htmlFor="Apellidos*">Apellidos*</label>
              <input type="text" />
            </fieldset>{" "}
            <fieldset>
              <label htmlFor="Nombre*">Nombre*</label>
              <input type="text" />
            </fieldset>{" "}
            <fieldset>
              <label htmlFor="Correo electrónico*">Correo electrónico*</label>
              <input type="email" />
            </fieldset>
            <fieldset>
              <label htmlFor="Contraseña*">Contraseña*</label>
              <input type="password" />
            </fieldset>
            <fieldset>
              <label htmlFor="País*">País*</label>
              <select name="País*" id="">
                {paises.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset>
              <label htmlFor="¿Cómo descubrió VPauto?">
                ¿Cómo descubrió VPauto?
              </label>
              <select name="¿Cómo descubrió VPauto?" id="">
                {vpAuto.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </fieldset>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <input type="checkbox" />
              <p>
                Deseo estar informado de las noticias de VPauto por correo
                electrónico
              </p>
            </div>
          </S.WrapperInputs>
          <S.ContainerTexto>
            <p>*Campos obligatorios</p>
            <p>
              Al hacer clic en el botón “Validar”, usted acepta que la
              información recogida en el formulario anterior sea registrada por
              VPAuto en un servidor de archivos y en una base de datos
              protegida. Estos datos y documentos son tratados en el interés
              legítimo de VPAuto con el objetivo de asegurar su cuenta en el
              marco de futuras subastas y compras.
            </p>
            <p>
              El servicio de atención al cliente de VPAuto podrá ponerse en
              contacto con usted para completar o confirmar su registro.
            </p>
            <p>
              En el caso de que su registro no tenga éxito, a más tardar un mes
              después de su solicitud o sin ninguna respuesta por su parte tras
              la intervención del servicio de atención al cliente, estos datos y
              su registro serán automáticamente eliminados de los sistemas de
              VPAuto. La supresión se realiza el primer día del mes siguiente.
            </p>
            <p>
              De conformidad con el reglamento europeo de protección de datos
              (Reglamento (UE) 2016/679, conocido como “RGPD”), puede ejercer su
              derecho de acceso a los datos que le conciernen, rectificarlos o
              incluso oponerse en ciertos casos a su tratamiento poniéndose en
              contacto con info@vpauto.fr
            </p>
            <p>
              Para más información sobre el tratamiento de los datos de carácter
              personal llevado a cabo por VPAuto, consulte la política de
              privacidad.
            </p>
            <div style={{width:"100%",display:"flex",justifyContent:"end"}}>
              <S.ButtonValidar>Validar</S.ButtonValidar>
            </div>
          </S.ContainerTexto>
        </S.Formulario>
      <CardSuporte/>
      </S.ContainerFormulario>
    </S.Section>
  );
}
