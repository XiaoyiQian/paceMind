# Fitness App Scaffold

A monorepo scaffold for a fitness app that tracks performance from Strava and Apple Watch, and is ready for AI/ML prediction features.

## Structure

- `frontend/` – Next.js frontend
- `backend/` – Node.js Express API
- `ai/` – Python (Flask) placeholder for future ML/AI service

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run start
```

### AI Service

```bash
cd ai
pip install flask
python app.py
```

## TODO

- Implement Strava OAuth and data fetching
- Integrate Apple HealthKit API (may require native mobile component)
- Build UI for performance dashboard
- Add AI/ML model for predictions
