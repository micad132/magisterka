import styled from 'styled-components';
import TextareaComponent from '../../../../components/form/textarea.component.tsx';
import { AllSelectValue } from '../../../../utils/consts.ts';
import SelectComponent from '../../../../components/form/select.component.tsx';
import { AddingTask } from '../../../../types/TaskType.ts';
import DatePickerComponent from '../../../../components/form/datePicker.component.tsx';
import InputComponent from '../../../../components/form/input.component.tsx';

const CreatingTaskWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

interface Props {
  selectValues: AllSelectValue,
  setTaskValues: (value: string, key: string) => void,
  taskValues: AddingTask,
}

const CreatingTaskModalContent = ({ selectValues, setTaskValues, taskValues }: Props) => {
  const g = 4;
  return (
    <CreatingTaskWrapper>
      <SelectComponent
        options={selectValues.taskType}
        onChange={(e) => setTaskValues(e, 'taskType')}
        label="Select task type"
        value={taskValues.taskType}
      />
      <SelectComponent
        options={selectValues.taskPriority}
        onChange={(e) => setTaskValues(e, 'taskPriority')}
        label="Select task priority"
        value={taskValues.taskPriority}
      />
      <SelectComponent
        options={selectValues.initialStasuses}
        onChange={(e) => setTaskValues(e, 'taskStatus')}
        label="Select task status"
        value={taskValues.taskStatus}
      />
      <TextareaComponent
        placeholder="Task description"
        value={taskValues.description}
        onChange={(e) => setTaskValues(e, 'description')}
        label="Task description"
      />
      <DatePickerComponent
        label="Select estimated finish time"
        onChange={(e) => setTaskValues(e.target.value, 'estimatedFinishTime')}
        value={taskValues.estimatedFinishTime}
        placeholder="Finish time"
      />
      <InputComponent
        name="estimatedCost"
        value={taskValues.estimatedCost}
        onChange={(e) => setTaskValues(e.target.value, 'estimatedCost')}
        placeholder="Cost"
        label="Estimated cost"
        type="number"
        isInvalid={false}
      />

    </CreatingTaskWrapper>
  );
};

export default CreatingTaskModalContent;
