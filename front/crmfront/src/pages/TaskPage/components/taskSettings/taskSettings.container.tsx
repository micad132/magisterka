// @ts-nocheck
import styled from 'styled-components';
import { useState } from 'react';
import SelectComponent from '../../../../components/form/select.component.tsx';
import { SelectValue } from '../../../../types/UtilTypes.ts';
import CheckboxComponent from '../../../../components/form/checkbox.component.tsx';
import { TaskPriority } from '../../../../types/TaskType.ts';

const SettingsContainerWrapper = styled.div`
    color: var(--font-color);
  width: 400px;
  margin: 10px auto 0 auto;
`;

const SORTING_OPTIONS: SelectValue[] = [
  {
    text: 'By estimate date',
    value: 'date',
  },
  {
    text: 'By assignee',
    value: 'assignee',
  },
  {
    text: 'By task priority',
    value: 'taskPriority',
  },
];

const SORTING_TASKS_OPTIONS: SelectValue[] = [
  {
    text: 'Niski',
    value: TaskPriority.MINOR,
  },
  {
    text: 'Poważny',
    value: TaskPriority.MAJOR,
  },
  {
    text: 'Krytyczny',
    value: TaskPriority.CRITICAL,
  },
  {
    text: 'Wszystkie',
    value: 'ALL',
  },
];

interface Props {
  sortingPriorityValue: string,
  setSortingPriorityValue: (value: string) => void,
  isWorkerLogged: boolean,
  isOnlyCurrentWorkerTasks: boolean,
  setIsOnlyCurrentWorkerTasks: (value: boolean) => void,
}

const TaskSettingsContainer = ({
  sortingPriorityValue, setSortingPriorityValue, isWorkerLogged, setIsOnlyCurrentWorkerTasks, isOnlyCurrentWorkerTasks,
}: Props) => {
  const [sortingTasks, setSortingTasks] = useState('');
  return (
    <SettingsContainerWrapper>
      {/* <SelectComponent */}
      {/*  options={SORTING_OPTIONS} */}
      {/*  onChange={setSortingTasks} */}
      {/*  label="Sort tasks by" */}
      {/* /> */}
      <SelectComponent
        options={SORTING_TASKS_OPTIONS}
        onChange={setSortingPriorityValue}
        value={sortingPriorityValue}
        label="Wyświetl jedynie usługi z priorytetem"
      />
      {isWorkerLogged && <CheckboxComponent isChecked={isOnlyCurrentWorkerTasks} onChange={setIsOnlyCurrentWorkerTasks} text="Wyświetl jedynie usługi zalogowanego pracownika" />}
    </SettingsContainerWrapper>
  );
};

export default TaskSettingsContainer;
