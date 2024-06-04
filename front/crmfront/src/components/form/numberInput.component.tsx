import {
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';

interface Props {
  defaultValue: number,
  minValue: number,
  maxValue: number,
  value: number,
  onChange: (stringValue: string, value: number) => void,
  step: number,
  label: string,
}

const NumberInputComponent = ({
  defaultValue, minValue, maxValue, value, onChange, step, label,
}: Props) => (
  <>
    <FormLabel>{label}</FormLabel>
    <NumberInput defaultValue={defaultValue} min={minValue} max={maxValue} value={value} onChange={onChange} step={step}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  </>

);

export default NumberInputComponent;
