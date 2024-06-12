import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EditIcon from '@mui/icons-material/Edit';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Tooltip, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { DeleteIcon } from '@chakra-ui/icons';
import TaskTypeBadge from '../../../../components/taskTypeBadge.component.tsx';
import {
  EditTaskPreview,
  PREVIEW_TASK_INITIAL_VALUES,
  PreviewTask,
  TaskPreview, TaskStatusType,
} from '../../../../types/TaskType.ts';
import AssigneField from '../task/taskPreviewDetails/assigneField.component.tsx';
import TaskPriorityComponent from '../task/taskPreviewDetails/taskPriority.component.tsx';
import EstimateFinishTimeComponent from '../task/taskPreviewDetails/estimateFinishTime.component.tsx';
import TaskColumnPreviewWrapperComponent from './taskColumnPreviewWrapper.component.tsx';
import { ModalProps, SelectValue } from '../../../../types/UtilTypes.ts';
import ModalComponent from '../../../../components/modals/modal.component.tsx';
import EditTaskPreviewComponent from './editTaskPreview.component.tsx';
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks.ts';
import { getAllUsers, getUserDetails } from '../../../../store/userSlice.tsx';
import { TASK_PRIORITY_OPTIONS, TASK_STATUS_OPTIONS } from '../../../../utils/consts.ts';
import { RoleType, User } from '../../../../types/UserType.ts';
import TotalHoursSpentComponent from '../task/taskPreviewDetails/totalHoursSpent.component.tsx';
import EstimatedCostComponent from '../task/taskPreviewDetails/estimatedCost.component.tsx';
import RowInfoWrapperComponent from '../task/taskPreviewDetails/rowInfoWrapper.component.tsx';
import CreatedByComponent from '../task/taskPreviewDetails/createdBy.component.tsx';
import ActualCostComponent from '../task/taskPreviewDetails/actualCost.component.tsx';
import { deleteTaskThunk, editTaskPreviewThunk } from '../../../../store/taskSlice.tsx';
import { ActionType, AddHistory } from '../../../../types/HistoryType.ts';
import { addHistoryThunk } from '../../../../store/historySlice.tsx';

interface Props {
  taskPreview: TaskPreview,
  taskStatus: TaskStatusType,
}

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px 0 20px;
`;

const IconWrapper = styled.div`
  width: max-content;
  cursor: pointer;
`;

const EditDelete = styled.div`
  display: flex;
  gap: 10px;
`;

const TaskColumnPreviewComponent = ({
  taskPreview, taskStatus,
}: Props) => {
  const [previewTask, setPreviewTask] = useState<PreviewTask>(PREVIEW_TASK_INITIAL_VALUES);
  const navigate = useNavigate();
  const users = useAppSelector(getAllUsers);
  const dispatch = useAppDispatch();
  const loggedUser = useAppSelector(getUserDetails);
  const toast = useToast();
  console.log('PREVIEW', taskPreview);

  const workerUsers = users.filter((user) => user.userRole === RoleType.WORKER);

  const options = {
    assigneeOptions: workerUsers.map((user): SelectValue => ({
      value: user.username,
      text: user.username,
    })),
    priorityOptions: TASK_PRIORITY_OPTIONS,
    statusOptions: TASK_STATUS_OPTIONS,
  };

  const setPreview = (key: string, value: string) => {
    setPreviewTask((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const deleteTask = async () => {
    try {
      await dispatch(deleteTaskThunk(taskPreview.id));
      toast({
        title: 'Task deleted!',
        description: 'You have successfully deleted task!',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (e) {
      toast({
        title: 'Something went wrong',
        description: 'Contact with your admin',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const editPreview = () => {
    console.log('PREVIEW TASK', previewTask);
    let assignee: User | undefined;
    if (workerUsers.length === 1) {
      assignee = workerUsers[0];
    } else {
      assignee = workerUsers.find((worker) => worker.username === previewTask.assigneeUsername);
    }
    const obj: EditTaskPreview = {
      id: taskPreview.id,
      taskPriority: previewTask.taskPriority,
      actualCost: previewTask.actualCost,
      taskStatus: previewTask.taskStatus,
      hoursSpent: previewTask.totalHoursSpent,
      assigneeId: assignee?.id ?? 0,
    };
    const historyObj: AddHistory = {
      performerId: loggedUser.id,
      historyActionType: ActionType.TASK,
      description: `Worker ${loggedUser.username} - ${loggedUser.name} ${loggedUser.surname} edited task with id: ${taskPreview.id}`,
    };
    try {
      dispatch(editTaskPreviewThunk(obj));
      dispatch(addHistoryThunk(historyObj));
      toast({
        title: 'Task preview edited!',
        description: 'You have successfully edited this task preview',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'bottom-right',
      });
    } catch (e) {
      toast({
        title: 'Something went wrong',
        description: 'Contact with your admin',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const editTaskPreview: ModalProps = {
    modalIcon: <EditIcon />,
    buttonText: '',
    mainButtonAction: editPreview,
    buttonSize: 'md',
    modalActionButtonText: 'Edit',
    modalHeader: 'Edit task basic info',
    modalBody: <EditTaskPreviewComponent options={options} setPreview={setPreview} previewTask={previewTask} />,
  };

  const deletingTaskModalProps: ModalProps = {
    modalIcon: <DeleteIcon color="red.500" boxSize={5} />,
    buttonText: '',
    mainButtonAction: deleteTask,
    buttonSize: 'md',
    modalActionButtonText: 'Delete',
    modalHeader: 'Delete task',
    modalBody: <h1>Are you sure you want to delete this task?</h1>,
  };

  return (
    <TaskColumnPreviewWrapperComponent taskStatus={taskStatus}>
      <IconsWrapper>
        <div>
          <IconWrapper>
            <Tooltip label="Navigate to task details page">
              <OpenInNewIcon onClick={() => navigate(`/tasks/${taskPreview.id}`)} />
            </Tooltip>
          </IconWrapper>
        </div>
        <EditDelete>
          {loggedUser.userRole !== RoleType.CLIENT && (
          <IconWrapper>
            <ModalComponent modalProps={editTaskPreview} />
          </IconWrapper>
          )}
          {loggedUser.userRole === RoleType.ADMIN && (
          <IconWrapper>
            <ModalComponent modalProps={deletingTaskModalProps} />
          </IconWrapper>
          )}
        </EditDelete>

      </IconsWrapper>

      <TaskTypeBadge taskType={taskPreview.taskType} />
      <RowInfoWrapperComponent>
        <AssigneField assignee={taskPreview.userDTOTaskDetailsAssignee.assigneeUsername} />
        <CreatedByComponent creator={taskPreview.userDTOTaskDetailsCreator.creatorUsername} />
      </RowInfoWrapperComponent>
      <RowInfoWrapperComponent>
        <TaskPriorityComponent taskPriority={taskPreview.taskPriority} />
        <TotalHoursSpentComponent totalHoursSpent={taskPreview.hoursSpent} />
      </RowInfoWrapperComponent>
      <RowInfoWrapperComponent>
        <EstimatedCostComponent estimatedCost={taskPreview.estimateCost} />
        <ActualCostComponent actualCost={taskPreview.actualCost} />
      </RowInfoWrapperComponent>
      <EstimateFinishTimeComponent estimateFinishTime={taskPreview.estimateFinishTime} />
    </TaskColumnPreviewWrapperComponent>
  );
};

export default TaskColumnPreviewComponent;
