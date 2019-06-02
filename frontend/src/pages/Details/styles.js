import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;

  > article {
    display: flex;
    width: 70%;
    max-width: 900px;
    flex-direction: column;
    align-items: center;
    background: url('https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/nodejs-512.png');
    color: white;

    > div {
      background-color: cornflowerblue;
      flex: 1;
      padding: 20px;
      width: 100%;
    }

    footer {
      display: flex;
      align-items: center;
      height: 50px;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;
