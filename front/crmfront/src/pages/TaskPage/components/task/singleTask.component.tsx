import styled from 'styled-components';
import TaskTypeBadge from '../../../../components/taskTypeBadge.component.tsx';
import { Task } from '../../../../types/TaskType.ts';
import EstimateFinishTimeComponent from './estimateFinishTime.component.tsx';

const SingleTaskWrapper = styled.div`
  width: 500px;
  height: 500px;
  -webkit-box-shadow: 0px 0px 28px -12px var(--background-color);
  -moz-box-shadow: 0px 0px 28px -6px var(--background-color);
  box-shadow: 0px 0px 28px -7px var(--background-color);
  color: #000;
  border-radius: 5px;
  background-color: red;
`;

interface Props {
  task: Task,
}

const SingleTask = ({ task }: Props) => {
  const g = 4;
  return (
    <SingleTaskWrapper>
      <h1>SIEMA</h1>
      <TaskTypeBadge taskType={task.taskType} />
      {/* <OpenInNewIconWrapper> */}
      {/*  <OpenInNewIcon /> */}
      {/* </OpenInNewIconWrapper> */}
      {/* <CreatedDateWrapper> */}
      {/*  Created: {task.creationDate} */}
      {/* </CreatedDateWrapper> */}
      {/* <StatusesWrapper> */}
      {/*  <AssigneField assignee={task.assignee} /> */}
      {/*  <TaskStatusComponent taskStatus={task.taskStatus} /> */}
      {/*  <TaskPriorityComponent taskPriority={task.taskPriority} /> */}
      {/* </StatusesWrapper> */}
      {/* <TaskDescription>{task.description}</TaskDescription> */}
      {/* <CostHoursWrapperComponent /> */}
      <EstimateFinishTimeComponent estimateFinishTime={task.estimationFinishTime} />
    </SingleTaskWrapper>
  );
};

export default SingleTask;
