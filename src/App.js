import { useContext } from "react";
import { About } from "./Component/about/About";
import { Contact } from "./Component/contact/Contact";
import Intro from "./Component/intro/Intro";
import ProductList from "./Component/productLIst/ProductList";
import Toggle from "./Component/toggle/Toggle";
import { ThemeContext } from "./context";

function App() {

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

  return (
    <div style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}>
      <Toggle />
     <Intro />
     <About />
     <ProductList />
     <Contact />
    </div>
  );
}

export default App;
