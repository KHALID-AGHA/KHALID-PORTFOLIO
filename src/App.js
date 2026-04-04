import { Analytics } from "@vercel/analytics/react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import {
  About,
  Contact,
  Header,
  Numbers,
  Skills,
  Work,
  AITools,
} from "./container/index";
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
        <AITools />
        <Contact />
      </main>
    </div>
  );
}

export default App;
