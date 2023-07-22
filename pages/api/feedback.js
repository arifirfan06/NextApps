import fs from "fs";
import path from "path";

export function buildFeedbackPath() {
  return path.join(process.cwd(), "dataFeedback", "feedback.json");
}

export function extractFeedback(filePath) {
    const fileData = fs.readFileSync(filePath);
    const fbData = JSON.parse(fileData);
    return fbData
}

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.feedback;

    const newFB = {
      id: new Date().toISOString(),
      email: email,
      feedback: feedback,
    };

    //    console.log(req.body.email)

    const filePath = buildFeedbackPath();
    //    fs.writeFile(filePath,)
    const fbData = extractFeedback(filePath)
    fbData.push(newFB);
    fs.writeFileSync(filePath, JSON.stringify(fbData));
    res.status(201).json({ message: "success", feedback: newFB });
  } else {
    const filePath = buildFeedbackPath();
    const fbData = extractFeedback(filePath)
    res.status(200).json({ message: "This works", feedback: fbData });
  }
}

export default handler;
