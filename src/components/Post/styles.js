import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  width: 300px;
  min-width: 250px;
  background-color: #2c9382;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 30px;
    margin: 15px;
  }

  span {
    font-size: 16px;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }

  b {
    font-size: 18px;
    align-self: flex-end;
  }

  &&:hover {
    transform: scale(1.05);
  }
`;
