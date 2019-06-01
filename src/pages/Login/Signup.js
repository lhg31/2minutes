import React from 'react';
import { Container } from './styles';
import { Input, Button } from '../../styles/utils';

export default function Signup(props) {
  function register(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <form id="register" onSubmit={register}>
        <span>cadastro</span>
        <Input placeholder="Nome completo" />
        <Input placeholder="Usuário" />
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" type="password" />
        <Input placeholder="Confirmar senha" type="password" />
        <Button form="register">Criar uma conta</Button>
        <small onClick={() => props.history.push('/')}>
          Já tenho uma conta
        </small>
      </form>
    </Container>
  );
}
