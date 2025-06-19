import Router from "./routes/Routes";
import { GlobalStyles } from "./Styles/GlobalStyles";
import ContextGeral, { UseGeral } from "./context/geralContext";
import CriarConta from "./components/CriarConta/ModalCriarContaeLogar";

function App() {
  // const { activeModalLogin } = UseGeral();
  return (
    <>
      <ContextGeral>
        <GlobalStyles />
        <Router/>
          {/* {activeModalLogin && <CriarConta />} */}
        
      </ContextGeral>
    </>
  );
}

export default App;
