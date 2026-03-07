import Editor from "@monaco-editor/react";
import { useState } from "react";
const API_URL = "https://ciphersqlstudio-backend.onrender.com";
function SQLEditor({ setResult }) {

  const [query, setQuery] = useState("SELECT * FROM employees;");

const runQuery = async () => {

  try {

   const res = await fetch(`${API_URL}/api/execute`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query })
    });

    const data = await res.json();

    if(data.error){
      alert(data.error);
      return;
    }

    setResult(data.rows);

  } catch(err){
    alert("Server error");
  }

};

  return (
    <div>

      <Editor
        height="200px"
        language="sql"
        value={query}
        onChange={(value) => setQuery(value)}
      />

      <button onClick={runQuery}>
        Execute Query
      </button>

    </div>
  );
}

export default SQLEditor;