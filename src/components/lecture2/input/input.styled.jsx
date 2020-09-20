import styled from 'styled-components';

export const LabeledInput = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  color: #000;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 0.5rem 0;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 0.9rem;
  &:focus {
    border-bottom: 1px solid #e7a498;
  }
`;
