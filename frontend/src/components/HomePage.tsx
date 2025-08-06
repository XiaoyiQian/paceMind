import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const Main = styled.main`
  font-family: 'Comic Sans MS', cursive, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: radial-gradient(circle at center, #ff8a00, #e52e71);
  color: #fff;
  padding: 0 20px;
  text-align: center;
  user-select: none;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);

  span {
    color: #ffd700;
  }

  @media (max-width: 600px) {
    font-size: 2.8rem;
  }

  @media (max-width: 400px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  margin-bottom: 2.5rem;
  font-weight: 600;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 600px) {
    font-size: 1.1rem;
    max-width: 90%;
  }
`;

export default function HomePage() {
  const [statusMessage, setStatusMessage] = useState("Connecting...");

  useEffect(() => {
    fetch('/api/status')
    .then(res => {
      console.log("Fetch response status:", res.status);
      return res.json();
    })
    .then(data => {
      console.log("Fetch data:", data);
      setStatusMessage(data.message);
    })
    .catch(err => {
      console.error("Fetch error:", err);
      setStatusMessage("Failed to connect to backend 😢");
    });
  }, []);
  return (
    <Main>
      <Title>
        🎉 Welcome to <span>paceMind</span>! 🏃‍♂️
      </Title>
      <Subtitle>
        Track your runs, crush your goals, and celebrate every step with our AI-powered fitness buddy!
      </Subtitle>
      <Button onClick={() => alert("Let’s get running! 🚀")}>Let’s Go! 🚀</Button>
      {statusMessage && (
        <p style={{ marginTop: "1rem", fontWeight: "700", color: "#ffd700" }}>
          {statusMessage}
        </p>
      )}
    </Main>
  );
}
