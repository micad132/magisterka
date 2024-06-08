import styled from 'styled-components';
import TextareaComponent from '../../../components/form/textarea.component.tsx';
import { AddingTask } from '../../../types/TaskType.ts';
import SelectComponent from '../../../components/form/select.component.tsx';
import { TASK_PRIORITY_OPTIONS, TASK_STATUS_OPTIONS, TASK_TYPE_OPTIONS } from '../../../utils/consts.ts';
import InputComponent from '../../../components/form/input.component.tsx';
import { SelectValue } from '../../../types/UtilTypes.ts';
import DatePickerComponent from '../../../components/form/datePicker.component.tsx';

const CreatingTaskWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

interface Props {
  values: AddingTask,
  setState: (key: string, value: string | number) => void,
  selectUsers: SelectValue[],
}

const ConvertingToTaskContentComponent = ({ values, setState, selectUsers }: Props) => (

  <CreatingTaskWrapper>
    <SelectComponent
      options={selectUsers}
      onChange={(value) => setState('assigneeId', value)}
      label="Assignee"
    />
    <SelectComponent
      options={TASK_TYPE_OPTIONS}
      onChange={(value) => setState('taskType', value)}
      label="Task type"
    />
    <SelectComponent
      options={TASK_STATUS_OPTIONS}
      onChange={(value) => setState('taskStatus', value)}
      label="Task status"
    />
    <SelectComponent
      options={TASK_PRIORITY_OPTIONS}
      onChange={(value) => setState('taskPriority', value)}
      label="Task priority"
    />
    <TextareaComponent
      placeholder="Task description"
      value={values.description}
      onChange={(value) => setState('description', value)}
      label="Task description"
    />
    <DatePickerComponent
      label="Select estimated finish time"
      onChange={(e) => setState('estimatedFinishTime', e.target.value)}
      value={values.estimatedFinishTime}
      placeholder="Finish time"
    />
    <InputComponent
      name="estimatedCost"
      value={values.estimatedCost}
      onChange={(value) => setState('estimatedCost', value.target.value)}
      placeholder="Estimated cost"
      label="Estimated cost"
      type="number"
      isInvalid={false}
    />
  </CreatingTaskWrapper>
);

export default ConvertingToTaskContentComponent;
