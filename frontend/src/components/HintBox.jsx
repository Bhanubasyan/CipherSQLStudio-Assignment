import { useState } from "react";

const API_URL = "https://ciphersqlstudio-assignment.onrender.com";

function HintBox({ question }) {

  const [hint, setHint] = useState("");

  const getHint = async () => {

    try {
      const res = await fetch(`${API_URL}/api/hint`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question })
      });

      const data = await res.json();

      setHint(data.hint);

    } catch (err) {
      console.error(err);
      alert("Error fetching hint");
    }

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