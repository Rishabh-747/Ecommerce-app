import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen font-instrument flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
