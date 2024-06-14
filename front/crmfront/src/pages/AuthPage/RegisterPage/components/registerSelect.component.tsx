import { FormLabel, Select } from '@chakra-ui/react';
import { SelectValue } from '../../../../types/UtilTypes.ts';

interface Props {
  options: SelectValue[],
  onChange: (value: string) => void,
  label: string,
  value?: string,
}

const RegisterSelectComponent = ({
  options, onChange, label, value,
}: Props) => (
  <>
    <FormLabel>{label}</FormLabel>
    <Select
      onChange={(e) => onChange(e.target.value)}
      value={value}
      sx={{
        option: {
          backgroundColor: 'lightcyan',
          color: 'black',
        },
      }}
    >
      {options.map((option) => <option key={option.value} value={option.value}>{option.text}</option>)}
    </Select>
  </>
);

export default RegisterSelectComponent;
