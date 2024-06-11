import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useToast } from '@chakra-ui/react';
import ModalComponent from '../../components/modals/modal.component.tsx';
import { ModalProps, SelectValue } from '../../types/UtilTypes.ts';
import CreatingTaskModalContent from './components/task/creatingTaskModalContent.component.tsx';
import TaskWrapper from './components/task/taskWrapper.component.tsx';
import TaskSettingsContainer from './components/taskSettings/taskSettings.container.tsx';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import {
  ADDING_TASK_INITIAL_VALUE, AddingTask, AddingTaskRequest, TaskOrigin, TaskStatus,
} from '../../types/TaskType.ts';
import {
  AllSelectValue, TASK_PRIORITY_OPTIONS, TASK_TYPE_OPTIONS,
} from '../../utils/consts.ts';
import { addingTaskRequestThunk, getAllTasks } from '../../store/taskSlice.tsx';
import { useAppDispatch, useAppSelector } from '../../utils/hooks.ts';
import { getUserDetails } from '../../store/userSlice.tsx';
import MessageComponent from '../../components/message.component.tsx';
import PageHeaderComponent from '../../components/pageHeader.component.tsx';
import { ActionType, AddHistory } from '../../types/HistoryType.ts';
import { RoleType } from '../../types/UserType.ts';
import { sanitizeInput } from '../../utils/utilFunctions.ts';
import { addHistoryThunk } from '../../store/historySlice.tsx';

const ALL_SELECT_VALUES: AllSelectValue = {
  initialStasuses: [
    {
      text: 'In progress',
      value: TaskStatus.IN_PROGRESS,
    },
  ],
  taskPriority: TASK_PRIORITY_OPTIONS,
  taskType: TASK_TYPE_OPTIONS,
};

const TaskPageContainer = () => {
  const [addingTask, setAddingTask] = useState<AddingTask>(ADDING_TASK_INITIAL_VALUE);
  const [sortingPriorityTask, setSortingPriorityTask] = useState<string>('ALL');
  const dispatch = useAppDispatch();
  const toast = useToast();
  const loggedUser = useAppSelector(getUserDetails);
  const tasks = useAppSelector(getAllTasks);
  const loggedUserTasks = tasks.filter((task) => task.userDTOTaskDetailsCreator.creatorUsername === loggedUser.username);
  console.log('TASKS', tasks);

  const isLoggedWorker = loggedUser.userRole === RoleType.WORKER;

  const properUserTasks = loggedUser.userRole === RoleType.CLIENT
    ? loggedUserTasks
    : tasks;

  const setTaskValues = (value: string, key: string) => {
    if (key === 'description') {
      console.log('WBILEM');
      setAddingTask((prevState) => ({
        ...prevState,
        description: sanitizeInput(value),
      }));
    } else {
      setAddingTask((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    }
  };

  const addTaskHandler = () => {
    console.log('ADDING TASK', addingTask);

    const taskBody: AddingTaskRequest = {
      estimatedFinishTime: String(addingTask.estimatedFinishTime),
      estimatedCost: Number(addingTask.estimatedCost),
      description: addingTask.description,
      taskStatus: TaskStatus.PENDING,
      taskPriority: addingTask.taskPriority,
      taskType: addingTask.taskType,
      creatorId: loggedUser.id,
      taskOrigin: TaskOrigin.CREATED,
      assigneeId: null,
    };
    const historyObj: AddHistory = {
      performerId: loggedUser.id,
      historyActionType: ActionType.TASK,
      description: `User ${loggedUser.username} created a task with type ${addingTask.taskType}`,
    };
    try {
      dispatch(addingTaskRequestThunk(taskBody));
      dispatch(addHistoryThunk(historyObj));
      toast({
        title: 'Task added!',
        description: 'You have successfully added task!',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'bottom-right',
      });
      setAddingTask(ADDING_TASK_INITIAL_VALUE);
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

  if (tasks.length === 0) {
    return (
      <PageWrapperComponent>
        <PageHeaderComponent text="TASKS" />
        {loggedUser.userRole === RoleType.CLIENT && <ModalComponent modalProps={modalProps} />}
        <MessageComponent message="There are no tasks in the system" />
      </PageWrapperComponent>
    );
  }

  const properTasks = sortingPriorityTask === 'ALL'
    ? properUserTasks
    : properUserTasks.filter((task) => task.taskPriority === sortingPriorityTask);

  console.log('PROPER TASKS', properTasks);

  return (
    <PageWrapperComponent>
      <PageHeaderComponent text="SERVICES (AS TASKS)" />
      {/* <CreateTaskButton /> */}
      {loggedUser.userRole === RoleType.CLIENT && <ModalComponent modalProps={modalProps} />}
      <TaskSettingsContainer sortingPriorityValue={sortingPriorityTask} setSortingPriorityValue={setSortingPriorityTask} isWorkerLogged={isLoggedWorker} />
      <TaskWrapper tasks={properTasks} />
    </PageWrapperComponent>
  );
};

export default TaskPageContainer;
