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
        label="Wybierz typ usługi"
        value={taskValues.taskType}
      />
      <SelectComponent
        options={selectValues.taskPriority}
        onChange={(e) => setTaskValues(e, 'taskPriority')}
        label="Wybierz priorytet usługi"
        value={taskValues.taskPriority}
      />
      <SelectComponent
        options={selectValues.initialStasuses}
        onChange={(e) => setTaskValues(e, 'taskStatus')}
        label="Wybierz status usługi"
        value={taskValues.taskStatus}
      />
      <TextareaComponent
        placeholder="Opis usługi"
        value={taskValues.description}
        onChange={(e) => setTaskValues(e, 'description')}
        label="Opis usługi"
      />
      <DatePickerComponent
        label="Wybierz przewidywalna date zakończenia"
        onChange={(e) => setTaskValues(e.target.value, 'estimatedFinishTime')}
        value={taskValues.estimatedFinishTime}
        placeholder="Czas zakończenia(h)"
      />
      <InputComponent
        name="estimatedCost"
        value={taskValues.estimatedCost}
        onChange={(e) => setTaskValues(e.target.value, 'estimatedCost')}
        placeholder="Koszt"
        label="Przewidywalny koszt(zł)"
        type="number"
        isInvalid={false}
      />

    </CreatingTaskWrapper>
  );
};

export default CreatingTaskModalContent;
