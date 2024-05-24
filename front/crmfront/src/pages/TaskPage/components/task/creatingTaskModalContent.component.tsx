import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import TextareaComponent from '../../../../components/form/textarea.component.tsx';
import { AllSelectValue } from '../../../../utils/consts.ts';
import SelectComponent from '../../../../components/form/select.component.tsx';
import { AddingTask } from '../../../../types/TaskType.ts';

const DateTimePickerWrapper = styled.div`
  padding: 10px;
  border-radius: 5px;
  width: max-content;
  border: 1px solid #E2E8F0;
`;

const CreatingTaskWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

interface Props {
  selectValues: AllSelectValue,
  setTaskValues: (value: string | Date, key: string) => void,
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
      <DateTimePickerWrapper>
        <DatePicker
          selected={taskValues.estimatedFinishTime}
          onChange={(date) => setTaskValues(date!, 'estimatedFinishTime')}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </DateTimePickerWrapper>

    </CreatingTaskWrapper>
  );
};

export default CreatingTaskModalContent;
