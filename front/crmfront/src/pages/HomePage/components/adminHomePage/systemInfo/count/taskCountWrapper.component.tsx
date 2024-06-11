import styled from 'styled-components';
import { useAppSelector } from '../../../../../../utils/hooks.ts';
import { getAllTasks } from '../../../../../../store/taskSlice.tsx';
import { TaskPriority, TaskStatus, TaskType } from '../../../../../../types/TaskType.ts';
import TaskStatusBadgeComponent from '../../../../../../components/taskStatusBadge.component.tsx';
import TaskPriorityBadgeComponent from '../../../../../../components/taskPriorityBadge.component.tsx';
import TaskTypeBadgeComponent from '../../../../../../components/taskTypeBadge.component.tsx';
import CountDivContentComponent from './countDivContent.component.tsx';
import CountDivComponent from './countDiv.component.tsx';

const Wrapper = styled.div`
  font-size: 1.3rem;
  max-width: 1200px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  margin: 20px auto;
`;

const Count = styled.p`
  font-weight: bold;
`;

const TaskCountWrapperComponent = () => {
  const c = 3;
  const tasks = useAppSelector(getAllTasks);

  // by status
  const inProgressTasks = tasks.filter((task) => task.taskStatus === TaskStatus.IN_PROGRESS);
  const doneTasks = tasks.filter((task) => task.taskStatus === TaskStatus.DONE);
  const pendingTasks = tasks.filter((task) => task.taskStatus === TaskStatus.PENDING);
  const canceledTasks = tasks.filter((task) => task.taskStatus === TaskStatus.CANCELED);

  // by priority
  const minorTasks = tasks.filter((task) => task.taskPriority === TaskPriority.MINOR);
  const majorTasks = tasks.filter((task) => task.taskPriority === TaskPriority.MAJOR);
  const criticalTasks = tasks.filter((task) => task.taskPriority === TaskPriority.CRITICAL);

  // by type
  const logisticTasks = tasks.filter((task) => task.taskType === TaskType.LOGISTIC);
  const purchaseTasks = tasks.filter((task) => task.taskType === TaskType.PURCHASE);
  const informaticTasks = tasks.filter((task) => task.taskType === TaskType.INFORMATIC);

  return (
    <Wrapper>
      <div>
        <p>Tasks by status</p>
        <CountDivComponent>
          <CountDivContentComponent>
            <TaskStatusBadgeComponent taskStatus={TaskStatus.PENDING} />
            <Count>{pendingTasks.length}</Count>
          </CountDivContentComponent>
          <CountDivContentComponent>
            <TaskStatusBadgeComponent taskStatus={TaskStatus.IN_PROGRESS} />
            <Count>{inProgressTasks.length}</Count>
          </CountDivContentComponent>
          <CountDivContentComponent>
            <TaskStatusBadgeComponent taskStatus={TaskStatus.DONE} />
            <Count>{doneTasks.length}</Count>
          </CountDivContentComponent>
          <CountDivContentComponent>
            <TaskStatusBadgeComponent taskStatus={TaskStatus.CANCELED} />
            <Count>{canceledTasks.length}</Count>
          </CountDivContentComponent>

        </CountDivComponent>

      </div>
      <div>
        <p>Tasks by priority</p>
        <CountDivComponent>
          <CountDivContentComponent>
            <TaskPriorityBadgeComponent taskPriority={TaskPriority.MINOR} />
            <Count>{minorTasks.length}</Count>
          </CountDivContentComponent>
          <CountDivContentComponent>
            <TaskPriorityBadgeComponent taskPriority={TaskPriority.MAJOR} />
            <Count>{majorTasks.length}</Count>
          </CountDivContentComponent>
          <CountDivContentComponent>
            <TaskPriorityBadgeComponent taskPriority={TaskPriority.CRITICAL} />
            <Count>{criticalTasks.length}</Count>
          </CountDivContentComponent>
        </CountDivComponent>
      </div>
      <div>
        <p>Tasks by category</p>
        <CountDivComponent>
          <CountDivContentComponent>
            <TaskTypeBadgeComponent taskType={TaskType.LOGISTIC} />
            <Count>{logisticTasks.length}</Count>
          </CountDivContentComponent>
          <CountDivContentComponent>
            <TaskTypeBadgeComponent taskType={TaskType.PURCHASE} />
            <Count>{purchaseTasks.length}</Count>
          </CountDivContentComponent>
          <CountDivContentComponent>
            <TaskTypeBadgeComponent taskType={TaskType.INFORMATIC} />
            <Count>{informaticTasks.length}</Count>
          </CountDivContentComponent>
        </CountDivComponent>
      </div>

    </Wrapper>
  );
};

export default TaskCountWrapperComponent;
