import styled from 'styled-components';
import { useState } from 'react';
import SelectComponent from '../../../../components/form/select.component.tsx';
import { SelectValue } from '../../../../types/UtilTypes.ts';
import CheckboxComponent from '../../../../components/form/checkbox.component.tsx';

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
    value: 'minor',
  },
  {
    text: 'Major',
    value: 'major',
  },
  {
    text: 'Critical',
    value: 'critical',
  },
];

const TaskSettingsContainer = () => {
  const [sortingTasks, setSortingTasks] = useState('');
  const [sortingPriorityTask, setSortingPriorityTask] = useState('');
  const [isOnlyCurrentWorkerTasks, setIsOnlyCurrentWorkerTasks] = useState<boolean>(false);
  return (
    <SettingsContainerWrapper>
      Sort tasks by
      <SelectComponent
        options={SORTING_OPTIONS}
        onChange={setSortingTasks}
        label="Sort tasks by"
      />
      Select only tasks with priority
      <SelectComponent
        options={SORTING_TASKS_OPTIONS}
        onChange={setSortingPriorityTask}
        label="Select only task with priority"
      />
      <CheckboxComponent isChecked={isOnlyCurrentWorkerTasks} onChange={setIsOnlyCurrentWorkerTasks} text="Preview only logged worker tasks" />
    </SettingsContainerWrapper>
  );
};

export default TaskSettingsContainer;
