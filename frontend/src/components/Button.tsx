import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const StyledButton = styled.button`
  background-color: #ffd700;
  border: none;
  border-radius: 40px;
  padding: 18px 50px;
  font-size: 1.3rem;
  font-weight: 700;
  color: #e52e71;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.6);
  animation: ${bounce} 2s infinite;
  user-select: none;
  outline: none;
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(255, 215, 0, 0.9);
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    padding: 14px 40px;
    font-size: 1.1rem;
  }

  @media (max-width: 400px) {
    padding: 12px 30px;
    font-size: 1rem;
  }
`;

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: Props) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
