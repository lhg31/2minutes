import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Post = props => (
  <Container>
    <h2>{props.title}</h2>
    <span>
      por <Link to="/">{props.author}</Link>
    </span>
    <b>{props.date}</b>
  </Container>
);

export default Post;
