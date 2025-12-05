import React, { useState } from "react";

type Role = "none" | "manager" | "intern";

type Page =
  | "dashboard"
  | "profiles"
  | "profileDetail"
  | "guides"
  | "guideBestPractices"
  | "guideFeedback"
  | "tasks"
  | "account"
  | "helpdesk"
  | "managerTraining";

interface ManagerPortalProps {
  onBack: () => void;
}

interface InternPortalProps {
  onBack: () => void;
}

const App: React.FC = () => {
  const [role, setRole] = useState<Role>("none");

  return (
    <div className="app-root">
      {role === "none" && (
        <div className="landing page-grid">
          <h1 className="page-title">Barclays Early Careers Portal</h1>
          <section className="card">
            <p className="card-label-muted">
              Select your experience to access tailored tools, resources, and
              support for the internship and graduate program.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "16px",
                flexWrap: "wrap",
              }}
            >
              <button
                className="primary-button"
                onClick={() => setRole("manager")}
              >
                I&apos;m a Manager
              </button>
              <button
                className="primary-button"
                onClick={() => setRole("intern")}
              >
                I&apos;m an Intern / Graduate
              </button>
            </div>
          </section>
        </div>
      )}

      {role === "manager" && <ManagerPortal onBack={() => setRole("none")} />}

      {role === "intern" && <InternPortal onBack={() => setRole("none")} />}
    </div>
  );
};

/* ============================
   MANAGER PORTAL
   ============================ */

const ManagerPortal: React.FC<ManagerPortalProps> = ({ onBack }) => {
  const [page, setPage] = useState<Page>("dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (nextPage: Page) => {
    setPage(nextPage);
    setMenuOpen(false);
  };

  return (
    <>
      {/* TOP BAR */}
      <header className="top-bar">
        {/* Logo / Title */}
        <div className="logo">Barclays LeadPortal</div>

        {/* Right-side tabs */}
        <div className="top-tabs">
          <button className="text-tab" onClick={onBack}>
            Switch Role
          </button>

          <button className="text-tab" onClick={() => goTo("account")}>
            Account
          </button>

          <button className="text-tab" onClick={() => goTo("helpdesk")}>
            Helpdesk
          </button>

          {/* MENU DROPDOWN */}
          <div className="menu-wrapper">
            <button
              className="menu-button"
              onClick={() => setMenuOpen((open) => !open)}
            >
              Menu ▾
            </button>

            {menuOpen && (
              <div className="menu-dropdown">
                <button className="menu-item" onClick={() => goTo("dashboard")}>
                  Dashboard
                </button>
                <button className="menu-item" onClick={() => goTo("profiles")}>
                  Intern Profiles
                </button>
                <button className="menu-item" onClick={() => goTo("guides")}>
                  Guides
                </button>
                <button className="menu-item" onClick={() => goTo("tasks")}>
                  Tasks / Planner
                </button>
                <button
                  className="menu-item"
                  onClick={() => goTo("managerTraining")}
                >
                  Manager Training
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="main">
        {/* DASHBOARD */}
        {page === "dashboard" && (
          <div className="page-grid">
            <h1 className="page-title">Dashboard</h1>

            <section className="card">
              <h2 className="card-title">Quick Actions</h2>
              <ul className="list">
                <li>Review Mentor Checklist</li>
                <li>Submit Weekly Feedback</li>
                <li>See Upcoming Intern Projects</li>
              </ul>
            </section>

            <section className="card">
              <h2 className="card-title">Alerts</h2>
              <ul className="list">
                <li>2 interns awaiting feedback</li>
                <li>Workshop this Friday: “Effective Mentorship”</li>
              </ul>
            </section>
          </div>
        )}

        {/* INTERN PROFILES LIST */}
        {page === "profiles" && (
          <div className="page-grid">
            <h1 className="page-title">Intern Profiles</h1>

            <div
              className="card clickable"
              onClick={() => setPage("profileDetail")}
            >
              <p className="card-label-strong">Intern: Chad P.</p>
              <p className="card-label-muted">Click to view progress & notes</p>
            </div>

            <div className="card muted">
              <p className="card-label-strong">Intern: Angeli C.</p>
              <p className="card-label-muted">(Example placeholder profile)</p>
            </div>
          </div>
        )}

        {/* INDIVIDUAL INTERN PROFILE */}
        {page === "profileDetail" && (
          <div className="page-grid">
            <button className="back-link" onClick={() => setPage("profiles")}>
              ← Back to Intern Profiles
            </button>

            <h1 className="page-title">Intern: Chad P.</h1>

            <section className="card">
              <h2 className="card-title">Resume</h2>
            </section>

            <section className="card">
              <h2 className="card-title">Progress Overview</h2>
              <p>Project Status: ● ● ○ ○ ○</p>
              <p>Skills Developing: Excel, Data Analysis</p>
            </section>

            <section className="card">
              <h2 className="card-title">E-Learning Tracker</h2>
              <p>Status: ● ● ● ● ○</p>
              <p>
                Missing Assignment: See What It Takes: Delivering Solutions That
                Matter. Missing Assignment: The Barclays Way – Respect,
                Integrity, Service, Excellence, and Stewardship.
              </p>
            </section>

            <section className="card">
              <h2 className="card-title">Daily Check-In</h2>
              <textarea
                rows={3}
                placeholder="Manager notes..."
                className="textarea"
              />
              <button className="primary-button">Submit Feedback</button>
            </section>
          </div>
        )}

        {/* GUIDES – MAIN MENU */}
        {page === "guides" && (
          <div className="page-grid">
            <h1 className="page-title">Guides & Resources</h1>

            <section
              className="card clickable"
              onClick={() => goTo("guideBestPractices")}
            >
              <h2 className="card-title">
                Best Practices for Managing Interns
              </h2>
              <p className="card-label-muted">
                Click to view a checklist you can use across teams and cohorts.
              </p>
            </section>

            <section
              className="card clickable"
              onClick={() => goTo("guideFeedback")}
            >
              <h2 className="card-title">Feedback Template (SBI Model)</h2>
              <p className="card-label-muted">
                A simple structure for giving clear, consistent feedback in 1:1s
                and evaluations.
              </p>
            </section>

            <section className="card">
              <h2 className="card-title">Conversation & Email Templates</h2>
              <p className="card-label-muted">
                Coming soon: scripts for first-week expectations, midpoint
                check-ins, and program close-out.
              </p>
            </section>
          </div>
        )}

        {/* GUIDE DETAIL – BEST PRACTICES */}
        {page === "guideBestPractices" && (
          <div className="page-grid">
            <button className="back-link" onClick={() => goTo("guides")}>
              ← Back to Guides & Resources
            </button>

            <h1 className="page-title">Best Practices for Managing Interns</h1>

            <section className="card">
              <ul className="list">
                <li>
                  <strong>Set expectations early:</strong> In week one, agree on
                  goals, deliverables, and how you’ll communicate (Slack, email,
                  weekly 1:1s).
                </li>
                <li>
                  <strong>Connect tasks to the bigger picture:</strong> Explain
                  how each project supports the team, clients, or long-term
                  initiatives so interns see the “why,” not just the “what.”
                </li>
                <li>
                  <strong>Use a consistent structure for check-ins:</strong>{" "}
                  Start with wins, then roadblocks, then next steps. This keeps
                  check-ins efficient and predictable.
                </li>
                <li>
                  <strong>Balance challenge and support:</strong> Give interns
                  real responsibility, but pair it with guidance, examples, and
                  feedback.
                </li>
                <li>
                  <strong>Document key moments:</strong> Capture highlights and
                  growth areas during the 10 weeks so end-of-program decisions
                  and referrals are easier and more fair.
                </li>
              </ul>
            </section>
          </div>
        )}

        {/* GUIDE DETAIL – FEEDBACK TEMPLATE */}
        {page === "guideFeedback" && (
          <div className="page-grid">
            <button className="back-link" onClick={() => goTo("guides")}>
              ← Back to Guides & Resources
            </button>

            <h1 className="page-title">Feedback Template (SBI Model)</h1>

            <section className="card">
              <p>
                Use the <strong>SBI model</strong> to keep feedback specific,
                fair, and easy to understand:
              </p>
              <ul className="list">
                <li>
                  <strong>Situation</strong> – When and where did this happen?
                </li>
                <li>
                  <strong>Behavior</strong> – What did the intern do or say
                  (facts, not labels)?
                </li>
                <li>
                  <strong>Impact</strong> – How did it affect the team, client,
                  or project?
                </li>
              </ul>
            </section>

            <section className="card">
              <h2 className="card-title">Example – Positive Feedback</h2>
              <p>
                “In yesterday’s client call <strong>(Situation)</strong>, when
                you walked through the data clearly and paused for questions{" "}
                <strong>(Behavior)</strong>, it helped the client understand our
                recommendations and made the team look very prepared{" "}
                <strong>(Impact)</strong>.”
              </p>
            </section>

            <section className="card">
              <h2 className="card-title">Example – Coaching Feedback</h2>
              <p>
                “In Monday’s team meeting <strong>(Situation)</strong>, when you
                spoke very quickly and skipped a few key findings{" "}
                <strong>(Behavior)</strong>, it was hard for the group to follow
                the story <strong>(Impact)</strong>. Next time, let’s slow down
                and use the slide titles as your guide.”
              </p>
            </section>
          </div>
        )}

        {/* TASKS / PLANNER */}
        {page === "tasks" && (
          <div className="page-grid">
            <h1 className="page-title">Tasks / Planner</h1>

            <section className="card">
              <ul className="list">
                <li>[ ] Review weekly intern reports</li>
                <li>[ ] Complete mentorship survey</li>
                <li>[ ] Approve intern project plan</li>
              </ul>
              <button className="primary-button">+ Add Task</button>
            </section>
          </div>
        )}

        {/* ACCOUNT PAGE */}
        {page === "account" && (
          <div className="page-grid">
            <h1 className="page-title">Profile</h1>
            <section className="card">
              <p>Manager Name: Jane Doe</p>
              <p>Role: Internship Program Manager</p>
              <p>Effective Date: August 19th, 2007</p>
              <p>Email Address: jane.doe07@barclays.com</p>
              <p>Contact: (123)-456-7890</p>
              <p>Department: Early Careers / Campus Programs</p>
            </section>
          </div>
        )}

        {/* HELPDESK PAGE */}
        {page === "helpdesk" && (
          <div className="page-grid">
            <h1 className="page-title">Helpdesk</h1>

            <section className="card">
              <p>
                Need support with mentoring or the portal? Use the resources
                below:
              </p>
              <ul className="list">
                <li>FAQ: “How do I give interns feedback?”</li>
                <li>Contact: pleasehelp@barclays.com</li>
                <li>Chat hours: Mon–Fri, 9AM–5PM</li>
                <li>Slack Channel</li>
                <li>Teams</li>
                <li>Privacy Policy</li>
              </ul>
            </section>

            <section className="card">
              <h2 className="card-title">Ask an Anonymous Question</h2>
              <p style={{ marginBottom: "8px" }}>
                Not sure who to ask? Submit a question anonymously and our Early
                Careers team will review it.
              </p>
              <textarea
                rows={3}
                className="textarea"
                placeholder="Type your anonymous question here..."
              />
              <button className="primary-button" style={{ marginTop: "8px" }}>
                Submit Question
              </button>
            </section>
          </div>
        )}

        {/* MANAGER TRAINING PAGE */}
        {page === "managerTraining" && <ManagerTraining />}
      </main>
    </>
  );
};

const ManagerTraining: React.FC = () => {
  const questions = [
    {
      question:
        "Which of the following best reflects a core principle of Barclays-style leadership?",
      options: [
        "Focus only on short-term performance targets.",
        "Create a culture of integrity, respect, and transparency.",
        "Avoid giving feedback to avoid conflict.",
        "Prioritize individual success over team development.",
      ],
      correctIndex: 1,
    },
    {
      question:
        "As a mentor, what is the MOST effective way to support a new intern?",
      options: [
        "Give them tasks with no context so they learn by guessing.",
        "Check in once at the start of the internship and then step back.",
        "Set clear expectations, provide context, and schedule regular check-ins.",
        "Do all of their work so they can watch and learn.",
      ],
      correctIndex: 2,
    },
    {
      question:
        "If an intern makes a mistake, what is the best mentoring response?",
      options: [
        "Publicly call it out so they don't repeat it.",
        "Ignore it so you don't hurt their feelings.",
        "Use it as a coaching moment: review what happened, why, and how to improve.",
        "Take the task away from them permanently.",
      ],
      correctIndex: 2,
    },
    {
      question:
        "What is an example of inclusive leadership in a mentoring relationship?",
      options: [
        "Only inviting your top-performing intern to meetings.",
        "Asking your intern for their perspective and making space for their questions.",
        "Speaking for your intern in every meeting so they don’t feel nervous.",
        "Giving feedback only at the very end of the internship.",
      ],
      correctIndex: 1,
    },
  ];

  // QUIZ STATE
  const [selected, setSelected] = useState<number[]>(
    Array(questions.length).fill(-1)
  );
  const [submitted, setSubmitted] = useState(false);

  // SURVEY STATE
  const [enjoyment, setEnjoyment] = useState("");
  const [confidence, setConfidence] = useState("");
  const [fitFuture, setFitFuture] = useState("");
  const [comments, setComments] = useState("");
  const [surveySubmitted, setSurveySubmitted] = useState(false);

  const handleSelect = (qIndex: number, optionIndex: number) => {
    setSubmitted(false); // reset results if they change answers
    setSelected((prev) => {
      const next = [...prev];
      next[qIndex] = optionIndex;
      return next;
    });
  };

  const handleSubmitQuiz = () => {
    setSubmitted(true);
  };

  const score = selected.reduce((acc, val, i) => {
    if (val === questions[i].correctIndex) return acc + 1;
    return acc;
  }, 0);

  const handleSubmitSurvey = () => {
    setSurveySubmitted(true);
  };

  const quizAllAnswered = selected.every((v) => v !== -1);

  return (
    <div className="page-grid">
      <h1 className="page-title">
        Manager Training: Core Principles & Mentoring Quiz
      </h1>

      <section className="card">
        <p>
          This short quiz helps managers reflect on how well they understand
          Barclays’ core leadership principles and effective mentoring for
          interns. Use it as a learning tool, not a test.
        </p>
      </section>

      {/* QUIZ QUESTIONS */}
      {questions.map((q, qIndex) => (
        <section key={qIndex} className="card">
          <h2 className="card-title">Question {qIndex + 1}</h2>
          <p className="card-label-muted" style={{ marginBottom: "8px" }}>
            {q.question}
          </p>

          <ul className="list">
            {q.options.map((option, optionIndex) => {
              const isSelected = selected[qIndex] === optionIndex;
              const isCorrect = submitted && optionIndex === q.correctIndex;
              const isIncorrect =
                submitted && isSelected && optionIndex !== q.correctIndex;

              return (
                <li key={optionIndex}>
                  <button
                    type="button"
                    onClick={() => handleSelect(qIndex, optionIndex)}
                    className={[
                      "option-button",
                      isSelected ? "selected-option" : "",
                      isCorrect ? "correct-option" : "",
                      isIncorrect ? "incorrect-option" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      marginTop: "4px",
                    }}
                  >
                    {option}
                  </button>
                </li>
              );
            })}
          </ul>

          {submitted && (
            <p className="card-label-muted" style={{ marginTop: "8px" }}>
              {qIndex === 0 &&
                "Barclays-style leadership emphasizes integrity, respect, and transparency—not just hitting targets."}
              {qIndex === 1 &&
                "Strong mentors set clear expectations, provide context, and show up consistently in check-ins."}
              {qIndex === 2 &&
                "Mistakes are coaching moments: walk through what happened and co-create a plan to improve."}
              {qIndex === 3 &&
                "Inclusive leaders actively invite interns’ perspectives and make space for their questions and ideas."}
            </p>
          )}
        </section>
      ))}

      {/* QUIZ SUBMIT / SCORE */}
      <section className="card">
        <button
          type="button"
          className="primary-button"
          onClick={handleSubmitQuiz}
          disabled={!quizAllAnswered}
        >
          Submit Quiz
        </button>

        {!quizAllAnswered && (
          <p className="card-label-muted" style={{ marginTop: "8px" }}>
            Answer all questions to see your results.
          </p>
        )}

        {submitted && (
          <div style={{ marginTop: "12px" }}>
            <h2 className="card-title">
              Score: {score} / {questions.length}
            </h2>
            <p className="card-label-muted">
              Use this as a reflection prompt: What’s one mentoring habit you
              want to strengthen for your next intern cohort?
            </p>
          </div>
        )}
      </section>

      {/* MENTORSHIP REFLECTION SURVEY */}
      <section className="card">
        <h2 className="card-title">Mentorship Reflection Survey</h2>
        <p className="card-label-muted" style={{ marginBottom: "8px" }}>
          We want to ensure managers feel supported, heard, and set up for
          success. Share how mentoring feels for you and whether this program is
          the right fit going forward.
        </p>

        <div className="form-group" style={{ marginBottom: "10px" }}>
          <label className="card-label-strong">
            1. Overall, how are you enjoying being a mentor this cycle?
          </label>
          <select
            className="select"
            value={enjoyment}
            onChange={(e) => setEnjoyment(e.target.value)}
          >
            <option value="">Select one</option>
            <option value="loving-it">I’m really enjoying it</option>
            <option value="mostly-positive">
              Mostly positive, with a few challenges
            </option>
            <option value="neutral">Neutral / mixed</option>
            <option value="struggling">
              I’m finding it difficult and need more support
            </option>
          </select>
        </div>

        <div className="form-group" style={{ marginBottom: "10px" }}>
          <label className="card-label-strong">
            2. How confident do you feel in your mentoring skills?
          </label>
          <select
            className="select"
            value={confidence}
            onChange={(e) => setConfidence(e.target.value)}
          >
            <option value="">Select one</option>
            <option value="very-confident">Very confident</option>
            <option value="somewhat-confident">Somewhat confident</option>
            <option value="building-confidence">
              Still building confidence
            </option>
            <option value="not-confident">Not confident yet</option>
          </select>
        </div>

        <div className="form-group" style={{ marginBottom: "10px" }}>
          <label className="card-label-strong">
            3. Do you feel you’re a good fit to continue as a mentor in future
            years?
          </label>
          <select
            className="select"
            value={fitFuture}
            onChange={(e) => setFitFuture(e.target.value)}
          >
            <option value="">Select one</option>
            <option value="yes">Yes, I’d like to mentor again</option>
            <option value="maybe">
              Maybe, with additional training/support
            </option>
            <option value="no">
              I’m not sure mentoring is the right fit for me long-term
            </option>
          </select>
        </div>

        <div className="form-group" style={{ marginBottom: "10px" }}>
          <label className="card-label-strong">
            4. Is there anything Barclays could change or add to make mentoring
            easier or more rewarding for you?
          </label>
          <textarea
            className="textarea"
            rows={4}
            placeholder="Share ideas, support you wish you had, or anything that would improve your experience as a mentor."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="primary-button"
          onClick={handleSubmitSurvey}
        >
          Submit Survey
        </button>

        {surveySubmitted && (
          <p className="card-label-muted" style={{ marginTop: "10px" }}>
            Thank you for your honesty. Your responses help us decide how to
            support you and who is the best fit to mentor future cohorts.
          </p>
        )}
      </section>
    </div>
  );
};

/* ============================
   INTERN / GRADUATE PORTAL
   ============================ */

const InternPortal: React.FC<InternPortalProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<
    "tracker" | "community" | "questions" | "survey"
  >("tracker");

  // Community board state
  const [communityName, setCommunityName] = useState("");
  const [communityMessage, setCommunityMessage] = useState("");
  const [communityPosts, setCommunityPosts] = useState<
    { id: number; name: string; text: string }[]
  >([]);

  // Questions state
  const [questionText, setQuestionText] = useState("");
  const [submittedQuestions, setSubmittedQuestions] = useState<string[]>([]);

  // Program survey state
  const [programSatisfaction, setProgramSatisfaction] = useState("");
  const [programImpact, setProgramImpact] = useState("");
  const [programFeedback, setProgramFeedback] = useState("");
  const [programSurveySubmitted, setProgramSurveySubmitted] = useState(false);

  const handleAddPost = () => {
    if (!communityMessage.trim()) return;
    setCommunityPosts((prev) => [
      {
        id: Date.now(),
        name: communityName.trim() || "Anonymous intern",
        text: communityMessage.trim(),
      },
      ...prev,
    ]);
    setCommunityMessage("");
  };

  const handleSubmitQuestion = () => {
    if (!questionText.trim()) return;
    setSubmittedQuestions((prev) => [questionText.trim(), ...prev]);
    setQuestionText("");
  };

  const handleSubmitProgramSurvey = () => {
    setProgramSurveySubmitted(true);
  };

  return (
    <>
      {/* TOP BAR */}
      <header className="top-bar">
        <div className="logo">Barclays InternHub</div>

        <div className="top-tabs">
          <button className="text-tab" onClick={onBack}>
            Switch Role
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="main">
        <div className="page-grid">
          <h1 className="page-title">Intern & Graduate Portal</h1>

          {/* Tab buttons */}
          <section className="card">
            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                marginBottom: "8px",
              }}
            >
              <button
                className="text-tab"
                onClick={() => setActiveTab("tracker")}
              >
                E-Learning & Progress
              </button>
              <button
                className="text-tab"
                onClick={() => setActiveTab("community")}
              >
                Community Board
              </button>
              <button
                className="text-tab"
                onClick={() => setActiveTab("questions")}
              >
                Ask a Question
              </button>
              <button
                className="text-tab"
                onClick={() => setActiveTab("survey")}
              >
                Program Survey
              </button>
            </div>
            <p className="card-label-muted">
              Use this space to track your learning, connect with peers, and
              share how the program is working for you.
            </p>
          </section>

          {/* TAB CONTENTS */}

          {activeTab === "tracker" && (
            <>
              <section className="card">
                <h2 className="card-title">E-Learning Tracker</h2>
                <p className="card-label-muted" style={{ marginBottom: "8px" }}>
                  View your current status across required modules. This is a
                  read-only snapshot for now.
                </p>
                <ul className="list">
                  <li>
                    <strong>Onboarding: Welcome to Barclays</strong> – Complete
                    (● ● ● ● ●)
                  </li>
                  <li>
                    <strong>The Barclays Way: Values & Culture</strong> –
                    In-progress (● ● ● ○ ○)
                  </li>
                  <li>
                    <strong>Professional Skills: Communication</strong> –
                    In-progress (● ● ○ ○ ○)
                  </li>
                  <li>
                    <strong>Technical Foundations (Role-Specific)</strong> – Not
                    started (○ ○ ○ ○ ○)
                  </li>
                </ul>
              </section>

              <section className="card">
                <h2 className="card-title">Your Progress & Performance</h2>
                <p className="card-label-muted">
                  These are example indicators to help interns understand how
                  they’re doing.
                </p>
                <ul className="list">
                  <li>Attendance: 90% of sessions attended</li>
                  <li>Assignments: 4 / 5 submitted on time</li>
                  <li>
                    Manager Feedback: “Strong collaboration, growing confidence
                    in presentations.”
                  </li>
                  <li>
                    Next Focus Area: Time management and meeting preparation
                  </li>
                </ul>
              </section>
            </>
          )}

          {activeTab === "community" && (
            <>
              <section className="card">
                <h2 className="card-title">Community Board</h2>
                <p className="card-label-muted" style={{ marginBottom: "8px" }}>
                  Start a conversation with fellow interns and graduates. Share
                  tips, wins, or questions about the experience.
                </p>

                <div className="form-group" style={{ marginBottom: "8px" }}>
                  <label className="card-label-strong">
                    Name (optional – you can leave this blank)
                  </label>
                  <input
                    className="input"
                    value={communityName}
                    onChange={(e) => setCommunityName(e.target.value)}
                    placeholder="Your name or 'Anonymous intern'"
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "8px" }}>
                  <label className="card-label-strong">Message</label>
                  <textarea
                    className="textarea"
                    rows={3}
                    value={communityMessage}
                    onChange={(e) => setCommunityMessage(e.target.value)}
                    placeholder="Share a tip, question, or reflection with the group."
                  />
                </div>

                <button
                  type="button"
                  className="primary-button"
                  onClick={handleAddPost}
                >
                  Post to Community
                </button>
              </section>

              <section className="card">
                <h2 className="card-title">Recent Posts</h2>
                {communityPosts.length === 0 ? (
                  <p className="card-label-muted">
                    No posts yet. Be the first to start the conversation.
                  </p>
                ) : (
                  <ul className="list">
                    {communityPosts.map((post) => (
                      <li key={post.id}>
                        <strong>{post.name}</strong>: {post.text}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </>
          )}

          {activeTab === "questions" && (
            <>
              <section className="card">
                <h2 className="card-title">Ask a Question</h2>
                <p className="card-label-muted" style={{ marginBottom: "8px" }}>
                  Use this space to ask questions about the program, your
                  projects, or your next steps. In a real implementation, these
                  would go to the Early Careers team.
                </p>

                <textarea
                  className="textarea"
                  rows={4}
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  placeholder="Type your question here..."
                />
                <button
                  type="button"
                  className="primary-button"
                  style={{ marginTop: "8px" }}
                  onClick={handleSubmitQuestion}
                >
                  Submit Question
                </button>
              </section>

              <section className="card">
                <h2 className="card-title">Previously Submitted Questions</h2>
                {submittedQuestions.length === 0 ? (
                  <p className="card-label-muted">
                    Your submitted questions will appear here for your records.
                  </p>
                ) : (
                  <ul className="list">
                    {submittedQuestions.map((q, idx) => (
                      <li key={idx}>{q}</li>
                    ))}
                  </ul>
                )}
              </section>
            </>
          )}

          {activeTab === "survey" && (
            <>
              <section className="card">
                <h2 className="card-title">Program Experience Survey</h2>
                <p className="card-label-muted" style={{ marginBottom: "8px" }}>
                  Help us understand how the internship/graduate program is
                  landing for you so we can improve it for future cohorts.
                </p>

                <div className="form-group" style={{ marginBottom: "10px" }}>
                  <label className="card-label-strong">
                    1. Overall, how satisfied are you with the program so far?
                  </label>
                  <select
                    className="select"
                    value={programSatisfaction}
                    onChange={(e) => setProgramSatisfaction(e.target.value)}
                  >
                    <option value="">Select one</option>
                    <option value="very-satisfied">Very satisfied</option>
                    <option value="satisfied">Satisfied</option>
                    <option value="neutral">Neutral</option>
                    <option value="dissatisfied">Dissatisfied</option>
                    <option value="very-dissatisfied">Very dissatisfied</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: "10px" }}>
                  <label className="card-label-strong">
                    2. How much is this program helping you grow (skills,
                    confidence, career clarity)?
                  </label>
                  <select
                    className="select"
                    value={programImpact}
                    onChange={(e) => setProgramImpact(e.target.value)}
                  >
                    <option value="">Select one</option>
                    <option value="a-lot">A lot</option>
                    <option value="some">Some</option>
                    <option value="a-little">A little</option>
                    <option value="not-much">Not much</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: "10px" }}>
                  <label className="card-label-strong">
                    3. What’s one thing we could change or add to make this
                    program more successful for you?
                  </label>
                  <textarea
                    className="textarea"
                    rows={4}
                    value={programFeedback}
                    onChange={(e) => setProgramFeedback(e.target.value)}
                    placeholder="Share any ideas around structure, content, mentoring, projects, or support."
                  />
                </div>

                <button
                  type="button"
                  className="primary-button"
                  onClick={handleSubmitProgramSurvey}
                >
                  Submit Survey
                </button>

                {programSurveySubmitted && (
                  <p className="card-label-muted" style={{ marginTop: "10px" }}>
                    Thank you for your feedback. Your responses help us measure
                    how successful the program is and where to improve it for
                    future interns and graduates.
                  </p>
                )}
              </section>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default App;
