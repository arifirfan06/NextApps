import {buildFeedbackPath, extractFeedback} from './feedback'

function handler(req, res) {
    // if(req.method === "DELETE") {

    // }
    const feedbackId = req.query.feedbackId
    const filePath = buildFeedbackPath();
    const feedbackData = extractFeedback(filePath)
    const selected = feedbackData.find(item => feedbackId === item.id)
    res.status(200).json({feedback: selected})
}

export default handler