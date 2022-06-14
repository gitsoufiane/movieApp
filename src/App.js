import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>;
    </BrowserRouter>
  );
}

export default App;
