import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [catFact, setCatFact] = useState("");

  const apiFetch = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => { // if we use this hook, it will generate fact without being clicked on  the button for the first time when the page loads up in the webpage.
    apiFetch();
  }, []);

  return (
    <div className="App">
      <button onClick={apiFetch}>Generate Cat Fact</button>
      <h1>{catFact}</h1>
    </div>
  );
}

export default App;
