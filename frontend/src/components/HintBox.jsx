import { useState } from "react";

function HintBox({ question }) {

  const [hint, setHint] = useState("");

  const getHint = async () => {

    const res = await fetch("http://localhost:5000/api/hint", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({ question })

    });

    const data = await res.json();

    setHint(data.hint);

  };

  return (

    <div>

      <button onClick={getHint}>
        Get Hint
      </button>

      <p>{hint}</p>

    </div>

  );

}

export default HintBox;