import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import "./App.scss";
import { client } from "./client";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import {
  About,
  AITools,
  Contact,
  Header,
  Numbers,
  Skills,
  Work,
} from "./container/index";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const query = `{
          "abouts": *[_type=="abouts"],
          "works": *[_type=="works"],
          "skills": *[_type=="skills"] | order(name asc),
          "experience": *[_type=="experience"],
          "brands": *[_type=="brands"],
          "aitools": *[_type=="aitools"]        
        }`;

    client
      .fetch(query)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
 
  return (
    <div className="app">
      <Analytics />
      <main>
        <Navbar />
        <Header />
        {loading || !data ? (
          <Loader />
        ) : (
          <>
            <About data={data.abouts} />
            <Work data={data.works} />
            <Skills data={data.skills} />
            <Numbers experience={data.experience} brands={data.brands} />
            <AITools data={data.aitools} />
            <Contact />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
