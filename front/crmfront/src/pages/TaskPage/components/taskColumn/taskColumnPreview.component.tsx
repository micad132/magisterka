import TaskTypeBadge from '../../../../components/taskTypeBadge.component.tsx';
import {
  TaskPreview, TaskStatusType,
} from '../../../../types/TaskType.ts';
import AssigneField from '../task/assigneField.component.tsx';
import TaskPriorityComponent from '../task/taskPriority.component.tsx';
import EstimateFinishTimeComponent from '../task/estimateFinishTime.component.tsx';
import TaskColumnPreviewWrapperComponent from './taskColumnPreviewWrapper.component.tsx';

interface Props {
  taskPreview: TaskPreview,
  taskStatus: TaskStatusType,
}

const TaskColumnPreviewComponent = ({
  taskPreview, taskStatus,
}: Props) => (
  <TaskColumnPreviewWrapperComponent taskStatus={taskStatus}>
    <TaskTypeBadge taskType={taskPreview.taskType} />
    <AssigneField assignee={taskPreview.assignee} />
    <TaskPriorityComponent taskPriority={taskPreview.taskPriority} />
    <EstimateFinishTimeComponent estimateFinishTime={taskPreview.estimateFinishTime} />
  </TaskColumnPreviewWrapperComponent>
);

export default TaskColumnPreviewComponent;
