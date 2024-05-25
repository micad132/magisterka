import { Input } from '@chakra-ui/react';

interface Props {
  value: string,
  onChange: (e: any) => void,
  placeholder: string,
  label: string,
}

const DatePickerComponent = ({
  value, onChange, placeholder, label,
}: Props) => (
  <>
    <p>{label}</p>
    <Input placeholder={placeholder} size="md" type="datetime-local" value={value} onChange={onChange} />
  </>
);

export default DatePickerComponent;
