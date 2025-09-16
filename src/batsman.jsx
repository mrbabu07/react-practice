import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  {
    runs > 100 && <h4>congratulations! you have scored a century</h4>;
  }
  const [six, setSixes] = useState(0);

  const handleSingle = () => setRuns(runs + 1);
  const handleFour = () => setRuns(runs + 4);
  const handleSix = () => {
    setRuns(runs + 6);
    const newSixes = six + 1;
    setSixes(newSixes);
  };

  return (
    <div>
      <h3>Batsman: T. Tamim</h3>
      {runs > 100 && <h4>congratulations! you have scored a century</h4>}
      <p>
        <small>Six: {six}</small>
      </p>
      <h1>Score: {runs}</h1>
      <button onClick={handleSingle}>Single</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
