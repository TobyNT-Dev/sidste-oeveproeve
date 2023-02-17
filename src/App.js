import { AppRouter } from "./Components/AppRouter/AppRouter";
import { Footer } from "./Components/Footer/Footer";
import { NavBar } from "./Components/NavBar/NavBar";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <>
    <GlobalStyles />
    <NavBar />
    <AppRouter/>
    <Footer />
    </>
  );
}

export default App;
