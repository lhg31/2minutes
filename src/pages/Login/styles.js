import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-shadow: 1px solid black;

  form {
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
    flex-flow: column;
    height: 70%;
    width: 45%;
    max-width: 450px;
    margin: 10px;
  }

  span {
    font-size: 36px;
  }

  small {
    margin: 5px 0;
    font-size: 14px;
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

    form {
      width: 100%;
    }
  }
`;

export const Input = styled.input``;
