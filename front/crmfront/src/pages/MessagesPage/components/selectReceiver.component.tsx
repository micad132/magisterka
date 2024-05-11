import styled from 'styled-components';
import SelectComponent from '../../../components/form/select.component.tsx';
import { SelectValue } from '../../../types/UtilTypes.ts';

const SelectReceiverWrapper = styled.div`
      width: 300px;
      margin: 10px auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
`;

interface Props {
  options: SelectValue[],
  onChange: (value: string) => void,
}

const SelectReceiverComponent = ({ options, onChange }: Props) => (
  <SelectReceiverWrapper>
    <p>Filter messages by user</p>
    <SelectComponent
      options={options}
      onChange={onChange}
      label="Filter messages by user"
    />
  </SelectReceiverWrapper>
);

export default SelectReceiverComponent;
