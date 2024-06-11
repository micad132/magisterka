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
    text: 'Minor',
    value: TaskPriority.MINOR,
  },
  {
    text: 'Major',
    value: TaskPriority.MAJOR,
  },
  {
    text: 'Critical',
    value: TaskPriority.CRITICAL,
  },
  {
    text: 'All',
    value: 'ALL',
  },
];

interface Props {
  sortingPriorityValue: string,
  setSortingPriorityValue: (value: string) => void,
  isWorkerLogged: boolean,
}

const TaskSettingsContainer = ({ sortingPriorityValue, setSortingPriorityValue, isWorkerLogged }: Props) => {
  const [sortingTasks, setSortingTasks] = useState('');

  const [isOnlyCurrentWorkerTasks, setIsOnlyCurrentWorkerTasks] = useState<boolean>(false);
  return (
    <SettingsContainerWrapper>
      <SelectComponent
        options={SORTING_OPTIONS}
        onChange={setSortingTasks}
        label="Sort tasks by"
      />
      <SelectComponent
        options={SORTING_TASKS_OPTIONS}
        onChange={setSortingPriorityValue}
        value={sortingPriorityValue}
        label="Select only task with priority"
      />
      {isWorkerLogged && <CheckboxComponent isChecked={isOnlyCurrentWorkerTasks} onChange={setIsOnlyCurrentWorkerTasks} text="Preview only logged worker tasks" />}
    </SettingsContainerWrapper>
  );
};

export default TaskSettingsContainer;
