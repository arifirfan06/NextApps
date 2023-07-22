import { useRef, useState } from "react";

function HomePage() {
  const emailInput = useRef();
  const fbInput = useRef();

  const [feedback, setFbData] = useState([])

  function submitFormHandler(ev) {
    ev.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredFb = fbInput.current.value;

    const reqBody = {
      email: enteredEmail,
      feedback: enteredFb,
    };

    // this / in /api lead to absolute path of the domain
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function loadData() {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => setFbData(data.feedback));
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" ref={emailInput} />
        </div>
        <div>
          <label htmlFor="feedback">Enter Feedback</label>
          <textarea type="feedback" id="feedback" rows={4} ref={fbInput} />
        </div>
        <button>Send Feedback</button>
      </form>
      <hr/>
      <button onClick={loadData}>Load Feedback</button>
      <ul>
        {feedback.map(item => <li key={item.id}>{item.feedback}</li>)}
      </ul>
    </div>
  );
}

export default HomePage;
