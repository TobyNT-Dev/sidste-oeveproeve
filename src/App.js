import { AppRouter } from "./Components/AppRouter/AppRouter";
import { NavBar } from "./Components/NavBar/NavBar";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <>
    <GlobalStyles />
    <NavBar />
    <AppRouter/>
    </>
  );
}

export default App;
