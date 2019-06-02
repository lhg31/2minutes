import React from 'react';
import { Container } from './styles';
import Post from 'components/Post';

const Home = () => (
  <Container>
    <Post
      title="Getting Started with GraphQL: It’s pretty easy!"
      author="Diegod"
      date="25/05/2019"
      background="data:image/png;base64,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"
      url="/details"
    />
    <Post
      title="Using hooks to replace Redux"
      author="Matheus Michels"
      date="23/05/2019"
      background="https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/nodejs-512.png"
      url="/details"
    />
    <Post
      title="Writing Isolated Plain JS Unit Tests for React Custom Hooks"
      author="Juan Petterson"
      background="http://lucasmaiaesilva.com.br/_nuxt/img/react.e0a1fa0.png"
      date="20/05/2019"
      url="/details"
    />
    <Post
      title="How to Build a Web Scraper using JavaScript"
      author="Elon Musk"
      date="15/05/2019"
      background="https://marketplace.atinternet-solutions.com/wp-content/uploads/2018/09/vuejs-1.png"
      url="/details"
    />
  </Container>
);

export default Home;
