import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const API_URL = "https://ciphersqlstudio-assignment.onrender.com";

function Sidebar() {

  const [assignments, setAssignments] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/api/assignments`)
      .then(res => res.json())
      .then(data => setAssignments(data));
  }, []);

  return (
    <div className="sidebar">

      <h2 className="sidebar-title">Questions</h2>

      <div className="question-list">
        {assignments.map((item, index) => {

          const isActive = location.pathname.includes(item._id);

          return (
            <div
              key={item._id}
              className={`question-item ${isActive ? "active" : ""}`}
              onClick={() => navigate(`/assignment/${item._id}`)}
            >
              <span className="number">{index + 1}.</span>

              <span className="title">
                {item.title || "SQL Problem"}
              </span>

              <span className={`difficulty ${(item.difficulty || "easy").toLowerCase()}`}>
                {item.difficulty || "Easy"}
              </span>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default Sidebar;