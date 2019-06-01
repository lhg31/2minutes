import React from 'react';
import { Container } from './styles';
import { Input, Button } from '../../styles/utils';

export default function Signin(props) {
  function login(e) {
    e.preventDefault();

    props.history.push('/app');
  }

  return (
    <Container right>
      <form id="login" onSubmit={login}>
        <span>entrar</span>
        <Input placeholder="Usuário" />
        <Input placeholder="Senha" type="password" />
        <small right onClick={() => props.history.push('/signup')}>
          Não possui uma conta?
        </small>
        <Button form="login">Entrar</Button>
      </form>
    </Container>
  );
}
