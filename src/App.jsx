import Router from "./routes/Routes";
import { GlobalStyles } from "./Styles/GlobalStyles";
import ContextGeral from "./context/geralContext";

function App() {
  return (
    <>
      <ContextGeral>
        <GlobalStyles />
        <Router />
      </ContextGeral>
    </>
  );
}

export default App;
