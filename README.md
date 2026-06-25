# QueueStorm Warmup - Ticket Sorter API

A simple rule-based ticket classification service for the SUST CSE Carnival 2026 Mock Preliminary Round.

## Run Locally

```bash
git clone https://github.com/app217/hackathon.git
cd hackathon
npm install
node index.js
```

## API Endpoints

### Health Check

GET /health

### Classify Ticket

POST /sort-ticket

## Sample Request

```json
{
  "ticket_id": "T-001",
  "message": "Someone called asking for my OTP"
}
```

## Sample Response

```json
{
  "ticket_id": "T-001",
  "case_type": "phishing_or_social_engineering",
  "severity": "critical",
  "department": "fraud_risk",
  "agent_summary": "Customer reports a suspicious caller requesting OTP information.",
  "human_review_required": true,
  "confidence": 0.95
}
```

## Deployment

Live API:
https://ticket-sorter.onrender.com

Platform: Render

## LLM Usage

No (Rule-Based Solution)
