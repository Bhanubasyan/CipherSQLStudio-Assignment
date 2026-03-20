import { useNavigate } from "react-router-dom";

function AssignmentCard({ assignment }) {

  const navigate = useNavigate();

  return (
    <div className="assignment-card">

      <div className="card-header">
        <h3>{assignment.title}</h3>
      </div>

      <p className="card-desc">{assignment.description}</p>

      <div className="card-footer">

        <span className={`difficulty ${(assignment.difficulty || "easy").toLowerCase()}`}>
          {assignment.difficulty}
        </span>

        <button onClick={() => navigate(`/assignment/${assignment.id}`)}>
          Attempt
        </button>

      </div>

    </div>
  );
}

export default AssignmentCard;