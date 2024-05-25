import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useToast } from '@chakra-ui/react';
import ModalComponent from '../../components/modal.component.tsx';
import { ModalProps, SelectValue } from '../../types/UtilTypes.ts';
import CreatingTaskModalContent from './components/task/creatingTaskModalContent.component.tsx';
import TaskWrapper from './components/task/taskWrapper.component.tsx';
import TaskSettingsContainer from './components/taskSettings/taskSettings.container.tsx';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import { ADDING_TASK_INITIAL_VALUE, AddingTask, AddingTaskRequest } from '../../types/TaskType.ts';
import {
  AllSelectValue, TASK_PRIORITY_OPTIONS, TASK_STATUS_OPTIONS, TASK_TYPE_OPTIONS,
} from '../../utils/consts.ts';
import { addingTaskRequestThunk } from '../../store/taskSlice.tsx';
import { useAppDispatch, useAppSelector } from '../../utils/hooks.ts';
import { getUserDetails } from '../../store/userSlice.tsx';

const ALL_SELECT_VALUES: AllSelectValue = {
  initialStasuses: TASK_STATUS_OPTIONS,
  taskPriority: TASK_PRIORITY_OPTIONS,
  taskType: TASK_TYPE_OPTIONS,
};

const TaskPageContainer = () => {
  const [addingTask, setAddingTask] = useState<AddingTask>(ADDING_TASK_INITIAL_VALUE);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const loggedUser = useAppSelector(getUserDetails);

  const setTaskValues = (value: string, key: string) => {
    console.log('VALUE', value, key);
    setAddingTask((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const addTaskHandler = () => {
    console.log('ADDING TASK', addingTask);
    const test: AddingTaskRequest = {
      estimatedFinishTime: String(addingTask.estimatedFinishTime),
      estimatedCost: Number(addingTask.estimatedCost),
      description: addingTask.description,
      taskStatus: 'PENDING',
      taskPriority: 'MINOR',
      taskType: 'LOGISTIC',
      creatorId: loggedUser.id,
    };
    try {
      dispatch(addingTaskRequestThunk(test));
      toast({
        title: 'Task added!',
        description: 'You have successfully added task!',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'bottom-right',
      });
    } catch (e) {
      toast({
        title: 'Something went wrong!',
        description: 'Contant your admin!',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'bottom-right',
      });
    }
  };

  const modalProps: ModalProps = {
    mainButtonAction: addTaskHandler,
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
