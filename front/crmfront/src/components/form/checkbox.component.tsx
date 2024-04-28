import { Checkbox } from '@chakra-ui/react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
    display: flex; 
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10px;
    background-color: var(--background-color);
    padding: 10px;
`;

interface Props {
  isChecked: boolean,
  onChange: (value: boolean) => void,
  text: string,
}

const CheckboxComponent = ({ isChecked, onChange, text }: Props) => (
  <CheckboxWrapper>
    <label htmlFor="checkbox">{text}</label>
    <Checkbox name="checkbox" isChecked={isChecked} onChange={(e) => onChange(e.target.checked)} />
  </CheckboxWrapper>
);

export default CheckboxComponent;
