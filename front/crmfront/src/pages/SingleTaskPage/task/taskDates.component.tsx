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
    <p>Utworzona: {createdTime}</p>
    <p>Przewidywany czas zakończenia: {estimatedFinishTime}</p>
  </TaskDatesWrapper>
);

export default TaskDatesComponent;
