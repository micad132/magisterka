import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import ModalComponent from '../../components/modal.component.tsx';
import { ModalProps, SelectValue } from '../../types/UtilTypes.ts';
import CreatingTaskModalContent from './components/task/creatingTaskModalContent.component.tsx';
import TaskWrapper from './components/task/taskWrapper.component.tsx';
import TaskSettingsContainer from './components/taskSettings/taskSettings.container.tsx';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import { ADDING_TASK_INITIAL_VALUE, AddingTask } from '../../types/TaskType.ts';
import {
  AllSelectValue, TASK_PRIORITY_OPTIONS, TASK_STATUS_OPTIONS, TASK_TYPE_OPTIONS,
} from '../../utils/consts.ts';

const ALL_SELECT_VALUES: AllSelectValue = {
  initialStasuses: TASK_STATUS_OPTIONS,
  taskPriority: TASK_PRIORITY_OPTIONS,
  taskType: TASK_TYPE_OPTIONS,
};

const TaskPageContainer = () => {
  const [addingTask, setAddingTask] = useState<AddingTask>(ADDING_TASK_INITIAL_VALUE);

  const setTaskValues = (value: string | Dayjs, key: string) => {
    setAddingTask((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const modalProps: ModalProps = {
    mainButtonAction: () => {},
    buttonText: 'Create Task',
    modalHeader: 'Adding Task',
    modalActionButtonText: 'Create',
    modalBody: <CreatingTaskModalContent selectValues={ALL_SELECT_VALUES} setTaskValues={setTaskValues} taskValues={addingTask} />,
  };

  return (
    <PageWrapperComponent>
      TASKS
      {/* <CreateTaskButton /> */}
      <ModalComponent modalProps={modalProps} />
      <TaskSettingsContainer />
      <TaskWrapper />
    </PageWrapperComponent>
  );
};

export default TaskPageContainer;
