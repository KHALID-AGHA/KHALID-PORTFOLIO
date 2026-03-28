import {
  About,
  Skills,
  Header,
  Work,
  Numbers,
  Contact,
} from "./container/index";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <div className="app">
      <Analytics />
      <main>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Numbers />
        <Contact />
      </main>
    </div>
  );
}

export default App;
