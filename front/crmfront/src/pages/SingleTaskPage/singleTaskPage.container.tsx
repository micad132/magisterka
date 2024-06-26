import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import CommentsWrapperComponent from './comments/commentsWrapper.component.tsx';
import PageHeaderComponent from '../../components/pageHeader.component.tsx';
import SingleTaskStasusesComponent from './task/singleTaskStasuses.component.tsx';
import TaskDatesComponent from './task/taskDates.component.tsx';
import TaskDescriptionComponent from './task/taskDescription.component.tsx';
import CreatorDetailsComponent from './task/creatorDetails.component.tsx';
import AssigneeDetailsComponent from './task/assigneeDetails.component.tsx';
import TaskDetailInfoComponent from './task/taskDetailInfo.component.tsx';
import { useAppSelector } from '../../utils/hooks.ts';
import { getAllTasks } from '../../store/taskSlice.tsx';
import { mapDateToString } from '../../utils/mappers/mapDateToString.ts';
import MessageComponent from '../../components/message.component.tsx';

const UserDetailsWrapper = styled.div`
  display: flex;
  margin: 20px auto;
  width: max-content;
  gap: 10px;
`;

const TaskDetailInfoWrapper = styled.div`
  display: flex;
  width: max-content;
  margin: 20px auto;
  gap: 30px;
`;

const SingleTaskPageContainer = () => {
  const { id } = useParams();
  const tasks = useAppSelector(getAllTasks);
  const singleTask = tasks.find((task) => task.id === Number(id));
  console.log('TYESY', singleTask);

  if (singleTask === undefined) {
    return (
      <PageWrapperComponent>
        <MessageComponent message="There is no task with this id" />
      </PageWrapperComponent>
    );
  }

  return (
    <PageWrapperComponent>
      <PageHeaderComponent text="Szczegóły usługi" />
      <h1>ID Usługi: {id}</h1>
      <SingleTaskStasusesComponent taskPriority={singleTask?.taskPriority!} taskType={singleTask?.taskType!} taskStatus={singleTask?.taskStatus!} taskOrigin={singleTask.taskOrigin} />
      <TaskDatesComponent createdTime={mapDateToString(singleTask?.creationDate!)} estimatedFinishTime={mapDateToString(singleTask?.estimationFinishTime!)} />
      <UserDetailsWrapper>
        <CreatorDetailsComponent
          creatorPreview={singleTask?.userDTOTaskDetailsCreator!}
        />
        <AssigneeDetailsComponent
          assigneePreview={singleTask?.userDTOTaskDetailsAssignee!}
        />
      </UserDetailsWrapper>

      <TaskDetailInfoWrapper>
        <TaskDetailInfoComponent spanText="Przewidywany koszt(zł)" value={singleTask?.estimatedCost!} />
        <TaskDetailInfoComponent spanText="Aktualny koszt(zł):" value={singleTask?.cost!} />
        <TaskDetailInfoComponent spanText="Aktualna ilość godzin(h)" value={singleTask?.hoursSpent!} />
      </TaskDetailInfoWrapper>

      <TaskDescriptionComponent description={singleTask?.description!} />
      <CommentsWrapperComponent taskId={Number(id)} />
    </PageWrapperComponent>
  );
};

export default SingleTaskPageContainer;
