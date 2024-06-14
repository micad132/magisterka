import styled from 'styled-components';
import SelectComponent from '../../../components/form/select.component.tsx';
import { SelectValue } from '../../../types/UtilTypes.ts';

const SelectReceiverWrapper = styled.div`
      width: 350px;
      margin: 10px auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
`;

interface Props {
  options: SelectValue[],
  onChange: (value: string) => void,
  value?: string,
}

const SelectReceiverComponent = ({ options, onChange, value }: Props) => (
  <SelectReceiverWrapper>
    <SelectComponent
      options={options}
      onChange={onChange}
      label="Przefiltruj wiadomości według odbiorcy"
      value={value ?? undefined}
    />
  </SelectReceiverWrapper>
);

export default SelectReceiverComponent;
