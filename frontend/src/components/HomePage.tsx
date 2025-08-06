import React, { useState, useEffect } from 'react';
import {
  Toolbar,
  Tab,
  Main,
  Title,
  Subtitle,
  Button,
  ContentArea,
  LoginButton,
  TabsContainer
} from './HomePage.styles';

const HomePage: React.FC = () => {
  const [statusMessage, setStatusMessage] = useState<string>('Connecting...');
  const [activeTab, setActiveTab] = useState<'recent' | 'distance' | 'analysis'>('recent');

  useEffect(() => {
    fetch('/api/status')
      .then(res => res.json())
      .then(data => {
        setStatusMessage(data.message);
      })
      .catch(() => {
        setStatusMessage('Failed to connect to backend 😢');
      });
  }, []);

  return (
    <>
      {/* <Toolbar>
        <Tab isActive={activeTab === 'recent'} onClick={() => setActiveTab('recent')}>
          Recent Runs
        </Tab>
        <Tab isActive={activeTab === 'distance'} onClick={() => setActiveTab('distance')}>
          Distance Ran
        </Tab>
        <Tab isActive={activeTab === 'analysis'} onClick={() => setActiveTab('analysis')}>
          Performance Analysis
        </Tab>
      </Toolbar> */}
      <Toolbar>
        <TabsContainer>
          <Tab isActive={activeTab === 'recent'} onClick={() => setActiveTab('recent')}>
            Recent Runs
          </Tab>
          <Tab isActive={activeTab === 'distance'} onClick={() => setActiveTab('distance')}>
            Distance Ran
          </Tab>
          <Tab isActive={activeTab === 'analysis'} onClick={() => setActiveTab('analysis')}>
            Performance Analysis
          </Tab>
        </TabsContainer>

        <LoginButton onClick={() => alert('Login clicked!')}>
          Login
        </LoginButton>
      </Toolbar>

      <Main>
        <Title>
          🎉 Welcome to <span>paceMind</span>! 🏃‍♂️
        </Title>
        <Subtitle>
          Track your runs, crush your goals, and celebrate every step with our AI-powered fitness buddy!
        </Subtitle>

        <ContentArea>
          {activeTab === 'recent' && <p>🏃 Your recent runs will appear here.</p>}
          {activeTab === 'distance' && <p>📏 Total distance ran: 42.3 miles</p>}
          {activeTab === 'analysis' && <p>📊 Performance trends will be shown here.</p>}
        </ContentArea>

        <Button onClick={() => alert("Let’s get running! 🚀")}>Let’s Go! 🚀</Button>

        {statusMessage && (
          <p style={{ marginTop: '1rem', fontWeight: 700, color: '#ffd700' }}>
            {statusMessage}
          </p>
        )}
      </Main>
    </>
  );
};

export default HomePage;