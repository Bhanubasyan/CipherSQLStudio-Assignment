import Editor from "@monaco-editor/react";
import { useState } from "react";

const API_URL = "https://ciphersqlstudio-backend.onrender.com";

function SQLEditor({ setResult }) {

  const [query, setQuery] = useState("SELECT * FROM employees;");
  const [loading, setLoading] = useState(false);

  const runQuery = async () => {
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/execute`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query })
      });

      const data = await res.json();

      if (data.error) {
        alert(data.error);
        setLoading(false);
        return;
      }

      setResult(data.rows);
    } catch (err) {
      alert("Server error");
    }

const solved = JSON.parse(localStorage.getItem("solved")) || [];

if (!solved.includes(window.location.pathname)) {
  solved.push(window.location.pathname);
  localStorage.setItem("solved", JSON.stringify(solved));
}
    setLoading(false);
  
  };

  return (
    <div className="sql-editor-container">

      {/* TOP BAR */}
      <div className="editor-header">

        <div className="left">
          <span className="db">MySQL</span>
          <span className="status">Auto</span>
        </div>

        <div className="right">
          <button className="run-btn" onClick={runQuery}>
            {loading ? "Running..." : "Run"}
          </button>

          <button className="submit-btn">
            Submit
          </button>
        </div>

      </div>

      {/* EDITOR */}
      <Editor
        height="100%"
        theme="vs-dark"
        language="sql"
        value={query}
        onChange={(value) => setQuery(value)}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
        }}
      />

    </div>
  );
}

export default SQLEditor;