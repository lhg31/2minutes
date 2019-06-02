import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  width: 300px;
  min-width: 250px;
  background: ${props => `url(${props.background}) no-repeat top center`};
  background-size: 100% 100%;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  text-shadow: 5px 5px 10px black;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 26px;
    margin: 15px;
  }

  span {
    font-size: 16px;
  }

  strong {
    color: white;
    font-size: 18px;
    font-weight: bold;
  }

  b {
    font-size: 18px;
    align-self: flex-end;
  }

  &:hover {
    filter: brightness(0.9);
    transform: scale(0.95);
  }
`;
