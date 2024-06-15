import { FormLabel, Select } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { SelectValue } from '../../../../types/UtilTypes.ts';

interface Props {
  options: SelectValue[],
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void,
  label: string,
  value?: string,
  name: string,
}

const RegisterSelectComponent = ({
  options, onChange, label, value, name,
}: Props) => (
  <>
    <FormLabel>{label}</FormLabel>
    <Select
      onChange={onChange}
      value={value}
      name={name}
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
