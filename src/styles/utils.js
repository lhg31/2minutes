import styled from 'styled-components';

export const Input = styled.input`
  margin: 5px 0;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: all 0.3s ease;

  &:focus {
    box-shadow: 0 0 10px #7ab9fb;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 18px;
  padding: 15px;
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
