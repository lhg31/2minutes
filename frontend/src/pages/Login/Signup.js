import React, { useState } from 'react';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container } from './styles';
import { MButton, MInput } from 'styles/utils';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  user: Yup.string().required('Usuário obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail obrigatório'),
  password: Yup.string().required('Senha obrigatória'),
  passwordConfirmation: Yup.string()
    .required('Confirmação de senha obrigatória')
    .oneOf([Yup.ref('password'), null], 'Senhas não conferem')
});

export default function Signup(props) {
  const [image, setImage] = useState('assets/images/avatar.svg');

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Form
        schema={schema}
        onSubmit={handleSubmit}
        enctype="multipart/form-data"
      >
        <label for="avatar">
          <img src={image} alt="avatar" />
        </label>

        <input
          id="avatar"
          name="avatar"
          type="file"
          onChange={e => setImage(URL.createObjectURL(e.target.files[0]))}
        />

        <MInput name="name" placeholder="Nome completo *" />
        <MInput name="user" placeholder="Usuário *" />
        <MInput name="email" placeholder="E-mail *" />
        <MInput name="password" placeholder="Senha *" type="password" />
        <MInput
          name="passwordConfirmation"
          placeholder="Confirmar senha *"
          type="password"
        />
        <MButton type="submit">Criar uma conta</MButton>
        <small onClick={() => props.history.push('/')}>
          Já tenho uma conta
        </small>
      </Form>
    </Container>
  );
}
