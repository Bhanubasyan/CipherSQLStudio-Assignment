import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import SQLEditor from "../components/SQLEditor";
import ResultTable from "../components/ResultTable";
import SampleTable from "../components/SampleTable";
import HintBox from "../components/HintBox";
import Sidebar from "../components/Sidebar";

const API_URL = "https://ciphersqlstudio-assignment.onrender.com";
function AssignmentAttempt(){

  const { id } = useParams();

  const [assignment,setAssignment] = useState({});
  const [result,setResult] = useState([]);

  useEffect(()=>{

    fetch(`${API_URL}/api/assignments/${id}`)
      .then(res=>res.json())
      .then(data=>setAssignment(data));

  },[id]);

  return(

   <div className="main-layout">

  <Sidebar />
  <div className="assignment-container">

    {/* LEFT PANEL */}
    <div className="left-panel">

      <div className="tabs">
        <span className="active">Description</span>
        <span>Solutions</span>
        <span>Submissions</span>
      </div>

      <div className="question-section">
        <h2>{assignment.title || "SQL Problem"}</h2>
        <p>{assignment.question}</p>
      </div>

      <div className="sample-section">
        <SampleTable />
      </div>

    </div>

    {/* RIGHT PANEL */}
    <div className="right-panel">

      <div className="editor-section">
        <SQLEditor setResult={setResult} />

        <div className="editor-footer">
          <HintBox question={assignment.question} />
        </div>
      </div>

      <div className="result-section">
        <ResultTable result={result} />
      </div>

    </div>

  </div>
  </div>
);


}

export default AssignmentAttempt;