import { Input } from '@chakra-ui/react';
import SelectComponent from '../../../../components/form/select.component.tsx';
import InputComponent from '../../../../components/form/input.component.tsx';
import { SelectValue } from '../../../../types/UtilTypes.ts';

interface Props {
  options: {
    assigneeOptions: SelectValue[],
    priorityOptions: SelectValue[],
  }
}

const EditTaskPreviewComponent = ({ options }: Props) => (
  <div>
    <SelectComponent
      options={options.assigneeOptions}
      onChange={() => {}}
      label="Select task assignee"
    />
    <SelectComponent
      options={options.priorityOptions}
      onChange={() => {}}
      label="Select task priority"
    />
    <InputComponent
      name="totalHoursSpent"
      value={12}
      onChange={() => {}}
      placeholder="Hours"
      label="Total hours spent"
      type="number"
      isInvalid={false}
    />
    <Input placeholder="Select Date and Time" size="md" type="datetime-local" />
  </div>
);

export default EditTaskPreviewComponent;
