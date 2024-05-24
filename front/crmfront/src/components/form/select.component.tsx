import { FormLabel, Select } from '@chakra-ui/react';
import { SelectValue } from '../../types/UtilTypes.ts';
import { SupportRequestType } from '../../types/SupportRequest.ts';

interface Props {
  options: SelectValue[],
  onChange: (value: SupportRequestType) => void,
  label: string,
  value?: string,
}

const SelectComponent = ({
  options, onChange, label, value,
}: Props) => (
  <>
    <FormLabel>{label}</FormLabel>
    <Select onChange={(e) => onChange(e.target.value as SupportRequestType)} value={value}>
      {options.map((option) => <option key={option.value} value={option.value}>{option.text}</option>)}
    </Select>
  </>

);

export default SelectComponent;
