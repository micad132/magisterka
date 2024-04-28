import styled from 'styled-components';
import TaskTypeBadge from '../../../../components/taskTypeBadge.component.tsx';
import { Task } from '../../../../types/TaskType.ts';
import AssigneField from './assigneField.component.tsx';
import TaskStatusComponent from './taskStatus.component.tsx';
import TaskPriorityComponent from './taskPriority.component.tsx';
import EstimateFinishTimeComponent from './estimateFinishTime.component.tsx';
import CostHoursWrapperComponent from './costHoursWrapper.component.tsx';

const SingleTaskWrapper = styled.div`
  width: 500px;
  height: 500px;
  -webkit-box-shadow: 0px 0px 28px -12px var(--background-color);
  -moz-box-shadow: 0px 0px 28px -6px var(--background-color);
  box-shadow: 0px 0px 28px -7px var(--background-color);
  color: #000;
  border-radius: 5px;
`;

const CreatedDateWrapper = styled.div`
  margin: 10px 10px 0 auto;
  width: min-content;
`;

const StatusesWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0;
`;

const TaskDescription = styled.span`
  font-weight: bold;
`;

interface Props {
  task: Task,
}

const SingleTask = ({ task }: Props) => {
  console.log('DJ');
  return (
    <SingleTaskWrapper>
      <TaskTypeBadge taskType={task.taskType} />
      <CreatedDateWrapper>
        Created: {task.creationDate}
      </CreatedDateWrapper>
      <StatusesWrapper>
        <AssigneField assignee={task.assignee} />
        <TaskStatusComponent taskStatus={task.taskStatus} />
        <TaskPriorityComponent taskPriority={task.taskPriority} />
      </StatusesWrapper>
      <TaskDescription>{task.description}</TaskDescription>
      <CostHoursWrapperComponent />
      <EstimateFinishTimeComponent />
    </SingleTaskWrapper>
  );
};

export default SingleTask;
