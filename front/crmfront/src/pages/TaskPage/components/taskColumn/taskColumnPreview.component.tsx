import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EditIcon from '@mui/icons-material/Edit';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@chakra-ui/react';
import { useState } from 'react';
import TaskTypeBadge from '../../../../components/taskTypeBadge.component.tsx';
import {
  PREVIEW_TASK_INITIAL_VALUES,
  PreviewTask,
  TaskPreview, TaskStatusType,
} from '../../../../types/TaskType.ts';
import AssigneField from '../task/assigneField.component.tsx';
import TaskPriorityComponent from '../task/taskPriority.component.tsx';
import EstimateFinishTimeComponent from '../task/estimateFinishTime.component.tsx';
import TaskColumnPreviewWrapperComponent from './taskColumnPreviewWrapper.component.tsx';
import { ModalProps, SelectValue } from '../../../../types/UtilTypes.ts';
import ModalComponent from '../../../../components/modal.component.tsx';
import EditTaskPreviewComponent from './editTaskPreview.component.tsx';
import { useAppSelector } from '../../../../utils/hooks.ts';
import { getAllUsers } from '../../../../store/userSlice.tsx';
import { TASK_PRIORITY_OPTIONS } from '../../../../utils/consts.ts';
import { RoleType } from '../../../../types/UserType.ts';

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

const TaskColumnPreviewComponent = ({
  taskPreview, taskStatus,
}: Props) => {
  const [previewTask, setPreviewTask] = useState<PreviewTask>(PREVIEW_TASK_INITIAL_VALUES);
  const navigate = useNavigate();
  const users = useAppSelector(getAllUsers);
  console.log('PREVIEW', taskPreview);

  const workerUsers = users.filter((user) => user.userRole === RoleType.WORKER);

  const options = {
    assigneeOptions: workerUsers.map((user): SelectValue => ({
      value: String(user.id),
      text: user.username,
    })),
    priorityOptions: TASK_PRIORITY_OPTIONS,
  };

  const editPreview = () => {
    console.log('PREVIEW TASK', previewTask);
  };

  const editTaskPreview: ModalProps = {
    modalIcon: <EditIcon />,
    buttonText: '',
    mainButtonAction: editPreview,
    buttonSize: 'md',
    modalActionButtonText: 'Edit',
    modalHeader: 'Edit task basic info',
    modalBody: <EditTaskPreviewComponent options={options} />,
  };

  return (
    <TaskColumnPreviewWrapperComponent taskStatus={taskStatus}>
      <IconsWrapper>
        <IconWrapper>
          <Tooltip label="Navigate to task details page">
            <OpenInNewIcon onClick={() => navigate(`/tasks/${2}`)} />
          </Tooltip>
        </IconWrapper>
        <IconWrapper>
          <ModalComponent modalProps={editTaskPreview} />
        </IconWrapper>
      </IconsWrapper>

      <TaskTypeBadge taskType={taskPreview.taskType} />
      <AssigneField assignee={taskPreview.assigneeUsername} />
      <TaskPriorityComponent taskPriority={taskPreview.taskPriority} />
      <EstimateFinishTimeComponent estimateFinishTime={taskPreview.estimateFinishTime} />
    </TaskColumnPreviewWrapperComponent>
  );
};

export default TaskColumnPreviewComponent;
