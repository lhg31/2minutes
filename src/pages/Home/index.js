import React from 'react';
import { Container } from './styles';
import Post from '../../components/Post';

const Home = () => (
  <Container>
    <Post
      title="Getting Started with GraphQL: It’s pretty easy!"
      author="Diegod"
      date="25/05/2019"
    />
    <Post
      title="Using hooks to replace Redux"
      author="Matheus Michels"
      date="23/05/2019"
    />
    <Post
      title="Writing Isolated Plain JS Unit Tests for React Custom Hooks"
      author="Juan Petterson"
      date="20/05/2019"
    />
    <Post
      title="How to Build a Web Scraper using JavaScript"
      author="Xandjs"
      date="15/05/2019"
    />
  </Container>
);

export default Home;
