import { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

function FeedbackPage(props) {
    const [dataDetail, setDetail] = useState(null)

    function loadDetail(id) {
        fetch('/api/' + id).then(res => res.json()).then(res => setDetail(res.feedback))
    }
  return (
    <>
    {dataDetail && <p>{dataDetail.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>{item.feedback} <button onClick={loadDetail.bind(this, item.id)}>Show Detail</button></li>
        ))}
      </ul>
    </>
  );
}

export default FeedbackPage;

export async function getStaticProps() {
    const filePath = buildFeedbackPath()
    const data = extractFeedback(filePath)
    return {
        props: {
            feedbackItems: data
        }
    }
}
