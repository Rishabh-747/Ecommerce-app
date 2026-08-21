import { Outlet, Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 "><Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
