import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import SQLEditor from "../components/SQLEditor";
import ResultTable from "../components/ResultTable";
import SampleTable from "../components/SampleTable";
import HintBox from "../components/HintBox";
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

    <div className="assignment-page">

     
      <div className="question">
        <h2>Question</h2>
        <p>{assignment.question}</p>
      </div>


      <div className="workspace">

       
        <div className="sample">
          <SampleTable/>
        </div>


      
        <div className="editor">

          <SQLEditor setResult={setResult}/>

          <div className="editor-buttons">
            <HintBox question={assignment.question}/>
          </div>

        </div>

      </div>


      <div className="results">
        <ResultTable result={result}/>
      </div>

    </div>

  )

}

export default AssignmentAttempt;