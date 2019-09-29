import React from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form>
        <input type="text" />

        <SubmitButton disabled>
          <FaPlus color="#fff" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default Main;
