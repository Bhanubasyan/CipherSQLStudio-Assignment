import { useNavigate } from "react-router-dom";

function AssignmentCard({ assignment }) {

  const navigate = useNavigate();

  return (
    <div className="assignment-card">

      <h3>{assignment.title}</h3>

      <p>{assignment.description}</p>

      <span>{assignment.difficulty}</span>

      <button onClick={() => navigate(`/assignment/${assignment.id}`)}>
        Attempt
      </button>

    </div>
  );
}

export default AssignmentCard;