// import { useState } from "react"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4 m bg-amber-100">This is a E commerce site, under process...</main>
      <Footer />
    </div>
  );
}

export default App;
