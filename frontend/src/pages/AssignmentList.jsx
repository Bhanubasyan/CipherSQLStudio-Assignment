import { useEffect, useState } from "react";
import AssignmentCard from "../components/AssignmentCard";
const API_URL = "https://ciphersqlstudio-assignment.onrender.com";

function AssignmentList() {

  const [assignments, setAssignments] = useState([]);

  useEffect(() => {

  fetch(`${API_URL}/api/assignments`)
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        setAssignments(data.data.assignments);
      }
    })
    .catch((err) => console.error(err));

}, []);

  return (
    <div className="assignments-page">

      <h1 className="page-title">SQL Assignments</h1>

      {assignments.length === 0 ? (
        <p>Loading assignments...</p>
      ) : (

        <div className="assignments-grid">

          {assignments.map((item) => (
            <AssignmentCard key={item.id} assignment={item} />
          ))}

        </div>

      )}

    </div>
  );
}

export default AssignmentList;