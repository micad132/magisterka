import styled from 'styled-components';

const TaskDatesWrapper = styled.div`
    display: flex;
  flex-direction: column;
`;

interface Props {
  createdTime: string,
  estimatedFinishTime: string,
}

const TaskDatesComponent = ({ createdTime, estimatedFinishTime }: Props) => (
  <TaskDatesWrapper>
    <p>Created: {createdTime}</p>
    <p>Estimated finish time: {estimatedFinishTime}</p>
  </TaskDatesWrapper>
);

export default TaskDatesComponent;
