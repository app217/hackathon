const express = require("express");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/sort-ticket", (req, res) => {
  const { ticket_id, message } = req.body;

  const text = (message || "").toLowerCase();

  let case_type = "other";
  let severity = "low";
  let department = "customer_support";

  if (text.includes("wrong number")) {
    case_type = "wrong_transfer";
    severity = "high";
    department = "dispute_resolution";
  } else if (
    text.includes("payment failed") ||
    text.includes("balance deducted")
  ) {
    case_type = "payment_failed";
    severity = "high";
    department = "payments_ops";
  } else if (text.includes("refund")) {
    case_type = "refund_request";
    severity = "low";
    department = "customer_support";
  } else if (
    text.includes("otp") ||
    text.includes("pin") ||
    text.includes("password")
  ) {
    case_type = "phishing_or_social_engineering";
    severity = "critical";
    department = "fraud_risk";
  }

  res.json({
    ticket_id,
    case_type,
    severity,
    department,
    agent_summary: `Customer reported: ${message}`,
    human_review_required:
      severity === "critical" ||
      case_type === "phishing_or_social_engineering",
    confidence: 0.9
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});