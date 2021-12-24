import { About } from "./Component/about/About";
import { Contact } from "./Component/contact/Contact";
import Intro from "./Component/intro/Intro";
import ProductList from "./Component/productLIst/ProductList";

function App() {
  return (
    <div >
     <Intro />
     <About />
     <ProductList />
     <Contact />
    </div>
  );
}

export default App;
