import express from "express";

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("PaceMind Backend API");
});

// Placeholder route for Strava sync
app.get("/api/strava/sync", (req, res) => {
  // TODO: Implement Strava OAuth and data fetch
  res.send("Sync with Strava not yet implemented");
});

// Placeholder route for Apple sync
app.get("/api/apple/sync", (req, res) => {
  // TODO: Implement Apple HealthKit integration
  res.send("Sync with Apple HealthKit not yet implemented");
});

app.listen(port, () => {
  console.log(`Backend API listening on port ${port}`);
});