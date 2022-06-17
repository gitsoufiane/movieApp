import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Content } from './components/Content';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Content />
    </BrowserRouter>
  );
}

export default App;
