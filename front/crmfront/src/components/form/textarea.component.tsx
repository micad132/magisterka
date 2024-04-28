import { Textarea } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  placeholder: string,
  value: string,
  onChange: (value: string) => void,
  label: ReactNode,
}

const TextareaCompononent = ({
  placeholder, onChange, value, label,
}: Props) => (
  <div>
    {label}
    <Textarea
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  </div>
);

export default TextareaCompononent;
