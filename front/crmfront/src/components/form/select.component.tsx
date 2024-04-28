import { Select } from '@chakra-ui/react';
import { SelectValue } from '../../types/UtilTypes.ts';
import { SupportRequestType } from '../../types/SupportRequest.ts';

interface Props {
  options: SelectValue[],
  onChange: (value: SupportRequestType) => void,
}

const SelectComponent = ({ options, onChange }: Props) => (
  <Select onChange={(e) => onChange(e.target.value as SupportRequestType)}>
    {options.map(({ value, text }) => <option key={value} value={value}>{text}</option>)}
  </Select>
);

export default SelectComponent;
