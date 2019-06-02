import React from 'react';
import { Container } from './styles';
import { withRouter } from 'react-router-dom';

function Post(props) {
  function inspect() {
    props.history.push(props.url);
  }

  return (
    <Container background={props.background} onClick={() => inspect()}>
      <h2>{props.title}</h2>
      <span>
        por <strong>{props.author}</strong>
      </span>
      <b>{props.date}</b>
    </Container>
  );
}

export default withRouter(Post);
