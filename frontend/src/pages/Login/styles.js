import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #fff;
  text-shadow: 1px solid black;

  img {
    border-radius: 50%;
    cursor: pointer;
    height: 128px;
    width: 128px;
    margin-bottom: 10px;
  }

  form {
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
    flex-flow: column;
    height: 70%;
    width: 90%;
    max-width: 450px;
    margin: 10px;
  }

  input#avatar {
    display: none;
  }

  strong {
    font-size: 36px;
  }

  button {
    margin: 10px 0;
  }

  small {
    margin: 15px 0;
    font-size: 16px;
    align-self: ${props => (props.right ? 'flex-end' : 'center')};
    cursor: pointer;
  }

  input {
    height: 50px;
    max-width: 450px;
  }

  @media (max-width: 600px) {
    overflow: auto;
    flex-flow: column;
  }
`;

export const Input = styled.input``;
