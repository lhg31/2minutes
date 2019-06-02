import React from 'react';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container } from './styles';
import { MButton, MInput } from 'styles/utils';

const schema = Yup.object().shape({
  user: Yup.string().required('Usuário obrigatório'),
  password: Yup.string().required('Senha obrigatória')
});

export default function Signin(props) {
  function handleSubmit(data) {
    console.log(data);

    props.history.push('/app');
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <img src="assets/images/logo.png" alt="logo" />
        <MInput name="user" placeholder="Usuário *" />
        <MInput name="password" type="password" placeholder="Senha *" />
        <MButton type="submit">Entrar</MButton>
        <small onClick={() => props.history.push('/signup')}>
          Não possui uma conta?
        </small>
      </Form>
    </Container>
  );
}
