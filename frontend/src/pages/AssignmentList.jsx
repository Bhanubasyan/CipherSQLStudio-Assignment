import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const API_URL = "https://ciphersqlstudio-assignment.onrender.com";

function AssignmentList() {

  const [assignments, setAssignments] = useState([]);

 
  const messages = [
    "Keep solving, you're getting better 🚀",
    "Consistency beats talent 💯",
    "Every query makes you stronger 💻",
    "Practice like a pro 🔥"
  ];
const navigate = useNavigate();
  const [text, setText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
const [solved, setSolved] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/assignments`)
      .then(res => res.json())
      .then(data => setAssignments(data));
  }, []);

  useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("solved")) || [];
  setSolved(saved);
}, []);
 
  useEffect(() => {
    const currentMsg = messages[msgIndex];
    let timeout;

    if (charIndex < currentMsg.length) {
      timeout = setTimeout(() => {
        setText(prev => prev + currentMsg[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setMsgIndex((prev) => (prev + 1) % messages.length);
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, msgIndex]);


  const getStablePercent = (id) => {
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
      hash = id.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash % 100);
  };

  return (
    <div className="database-page">

      {/* LEFT PANEL */}
      <div className="db-left">

        <div className="db-card">

          <div className="db-icon">📘</div>

          <h1>Database</h1>
          <p className="typing-text">{text}</p>
          <p>Bhanu · {assignments.length} questions</p>

          <div className="db-actions">
            <button className="practice-btn">▶ Practice</button>
            <button className="circle-btn">+</button>
            <button className="circle-btn">↗</button>
            <button className="circle-btn">⋯</button>
          </div>

          <div className="progress">
            <div className="progress-circle">
              <h2>{solved.length}/{assignments.length}</h2>
              <span>Solved</span>
            </div>
          </div>

        </div>

        {/* MOTIVATION CARD */}
        <div className="motivation-card">
          <div class="tenor-gif-embed" data-postid="19625091" data-share-method="host" data-aspect-ratio="1" 
          data-width="100%"><a href="https://tenor.com/view/data-datos-data-sellcom-sellcom-solutions-sellcom-gif-19625091">Data Datos Sticker</a>from <a href="https://tenor.com/search/data-stickers">Data Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
          
        </div>

      </div>

      {/* RIGHT PANEL */}
      <div className="db-right">

        <div className="search-bar">
          <input placeholder="Search questions" />
        </div>

        <div className="question-scroll">
          {assignments.map((item) => (
            <div className="question-row" key={item.id} onClick={() => navigate(`/assignment/${item.id}`)}>

              <div className="q-left">
                <span className="percent">
                  {getStablePercent(item.id)}%
                </span>

                <span className="q-title">
                  {item.title}
                </span>
              </div>

              <div className="q-right">
                <span className={`difficulty ${(item.difficulty || "easy").toLowerCase()}`}>
                  {item.difficulty || "Easy"}
                </span>

                <span className="lock">🔒</span>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default AssignmentList;