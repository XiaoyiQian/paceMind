import styled from 'styled-components';

export const Main = styled.main`
  font-family: 'Comic Sans MS', cursive, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background: radial-gradient(circle at center, #ff8a00, #e52e71);
  color: #fff;
  padding: 40px 20px;
  text-align: center;
  box-sizing: border-box;
`;

export const Title = styled.h1`
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

export const Subtitle = styled.p`
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

// export const Toolbar = styled.div`
//   display: flex;
//   gap: 1rem;
//   justify-content: center;
//   margin-bottom: 2rem;
//   flex-wrap: wrap;
// `;
export const Toolbar = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;  /* changed from center */
  margin-bottom: 2rem;
  flex-wrap: wrap;
  align-items: center; /* vertically center items */
  padding: 0 1rem; /* optional horizontal padding */
`;
export const TabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
export const LoginButton = styled.button`
  background-color: #fff;
  color: #e52e71;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;


export const Tab = styled.button<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? '#ffd700' : '#fff')};
  color: ${({ isActive }) => (isActive ? '#000' : '#e52e71')};
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);

  &:hover {
    transform: scale(1.05);
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #ffd700;
  color: #000;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);

  &:hover {
    background-color: #ffc300;
    transform: scale(1.05);
  }
`;

export const ContentArea = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 15px;
  margin-bottom: 2rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
`;