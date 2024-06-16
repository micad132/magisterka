// @ts-nocheck
import { useEffect, useState } from 'react';
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
import { addingTaskRequestThunk, fetchTasksThunk, getAllTasks } from '../../store/taskSlice.tsx';
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
      text: 'Oczekująca',
      value: TaskStatus.IN_PROGRESS,
    },
  ],
  taskPriority: TASK_PRIORITY_OPTIONS,
  taskType: TASK_TYPE_OPTIONS,
};

const TaskPageContainer = () => {
  const [addingTask, setAddingTask] = useState<AddingTask>(ADDING_TASK_INITIAL_VALUE);
  const [sortingPriorityTask, setSortingPriorityTask] = useState<string>('ALL');
  const [isOnlyCurrentWorkerTasks, setIsOnlyCurrentWorkerTasks] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasksThunk());
  }, []);

  const toast = useToast();
  const loggedUser = useAppSelector(getUserDetails);
  const tasks = useAppSelector(getAllTasks);
  const loggedUserTasks = tasks.filter((task) => task.userDTOTaskDetailsCreator.creatorUsername === loggedUser.username);
  const onlyLoggedWorkerTasks = tasks.filter((task) => task.userDTOTaskDetailsAssignee.assigneeUsername === loggedUser.username);
  console.log('TASKS', tasks);

  const isLoggedWorker = loggedUser.userRole === RoleType.WORKER;

  const workerClients = loggedUser.userRole === RoleType.WORKER && isOnlyCurrentWorkerTasks
    ? onlyLoggedWorkerTasks
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
      description: `Użytkownik ${loggedUser.username} dodał usługę z typem ${addingTask.taskType}`,
    };
    try {
      dispatch(addingTaskRequestThunk(taskBody));
      dispatch(addHistoryThunk(historyObj));
      toast({
        title: 'Usługa dodana!',
        description: 'Pomyślnie dodałeś usługę!',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
      setAddingTask(ADDING_TASK_INITIAL_VALUE);
    } catch (e) {
      toast({
        title: 'Coś poszło nie tak!',
        description: 'Skontaktuj się z administratorem!',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const modalProps: ModalProps = {
    mainButtonAction: addTaskHandler,
    buttonText: 'Dodaj',
    modalHeader: 'Dodaj usługę',
    modalActionButtonText: 'Dodaj',
    modalBody: <CreatingTaskModalContent selectValues={ALL_SELECT_VALUES} setTaskValues={setTaskValues} taskValues={addingTask} />,
  };

  if (tasks.length === 0) {
    return (
      <PageWrapperComponent>
        <PageHeaderComponent text="Usługi (w formie zadań)" />
        {loggedUser.userRole === RoleType.CLIENT && <ModalComponent modalProps={modalProps} />}
        <MessageComponent message="Nie ma usług w systemie" />
      </PageWrapperComponent>
    );
  }

  const properClientTasks = sortingPriorityTask === 'ALL'
    ? loggedUserTasks
    : loggedUserTasks.filter((task) => task.taskPriority === sortingPriorityTask);

  if (loggedUser.userRole === RoleType.CLIENT) {
    return (
      <PageWrapperComponent>
        <PageHeaderComponent text="USŁUGI (W FORMIE ZADAŃ)" />
        <ModalComponent modalProps={modalProps} />
        <TaskSettingsContainer
          sortingPriorityValue={sortingPriorityTask}
          setSortingPriorityValue={setSortingPriorityTask}
          isWorkerLogged={false}
          isOnlyCurrentWorkerTasks={isOnlyCurrentWorkerTasks}
          setIsOnlyCurrentWorkerTasks={setIsOnlyCurrentWorkerTasks}
        />
        <TaskWrapper tasks={properClientTasks} />
      </PageWrapperComponent>
    );
  }

  const properWorkerTasks = sortingPriorityTask === 'ALL'
    ? workerClients
    : workerClients.filter((task) => task.taskPriority === sortingPriorityTask);

  if (loggedUser.userRole === RoleType.WORKER) {
    return (
      <PageWrapperComponent>
        <PageHeaderComponent text="USŁUGI (W FORMIE ZADAŃ)" />
        <TaskSettingsContainer
          sortingPriorityValue={sortingPriorityTask}
          setSortingPriorityValue={setSortingPriorityTask}
          isWorkerLogged
          isOnlyCurrentWorkerTasks={isOnlyCurrentWorkerTasks}
          setIsOnlyCurrentWorkerTasks={setIsOnlyCurrentWorkerTasks}
        />
        <TaskWrapper tasks={properWorkerTasks} />
      </PageWrapperComponent>
    );
  }

  const properAdminTasks = sortingPriorityTask === 'ALL'
    ? tasks
    : tasks.filter((task) => task.taskPriority === sortingPriorityTask);

  return (
    <PageWrapperComponent>
      <PageHeaderComponent text="USŁUGI (W FORMIE ZADAŃ)" />
      <TaskSettingsContainer
        sortingPriorityValue={sortingPriorityTask}
        setSortingPriorityValue={setSortingPriorityTask}
        isWorkerLogged={isLoggedWorker}
        isOnlyCurrentWorkerTasks={isOnlyCurrentWorkerTasks}
        setIsOnlyCurrentWorkerTasks={setIsOnlyCurrentWorkerTasks}
      />
      <TaskWrapper tasks={properAdminTasks} />
    </PageWrapperComponent>
  );
};

export default TaskPageContainer;
