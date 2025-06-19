import { createContext, useContext, useState } from "react";

const UseContextForm = createContext();

export const UseGeral = () => {
  const context = useContext(UseContextForm);
  if(!context) throw new Error("erro no provider")
  return context;
};

const ContextGeral = ({ children }) => {
  const [activeModalLogin, setActiveModalLogin] = useState(false);
   const [modalAtivo, setModalAtivo] = useState(false);


  const modalLoginCriar = () => setActiveModalLogin(true);
  const closeModal = () => setActiveModalLogin(false);

  return (
    <UseContextForm.Provider
      value={{
        modalLoginCriar,
        closeModal,
        activeModalLogin,
        modalAtivo,
        setModalAtivo,
      }}
    >
      {children}
    </UseContextForm.Provider>
  );
};

export default ContextGeral;
