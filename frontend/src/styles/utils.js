import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

export const MInput = styled(Input)`
  margin: 5px 0;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.45rem;
  transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;

  &:focus {
    border: 2px solid #7ab9fb;
    box-shadow: 0 0 20px #7ab9fb;
  }
`;

export const MButton = styled.button`
  cursor: pointer;
  font-size: 18px;
  min-height: 50px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  transition: all 0.3s ease;
  background-color: #3adb76;
  box-shadow: 0 0 10px #28ef20;
  color: #fff;

  &:hover {
    background-color: #2fad5e;
  }
`;
