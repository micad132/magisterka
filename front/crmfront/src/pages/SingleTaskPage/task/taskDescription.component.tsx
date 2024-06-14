import styled from 'styled-components';

const TaskDescription = styled.div`
  span{
    font-weight: bold;
  }
`;

interface Props {
  description: string,
}

const TaskDescriptionComponent = ({ description }: Props) => (
  <TaskDescription>
    <span>Opis:</span>
    <p>{description}</p>
  </TaskDescription>
);

export default TaskDescriptionComponent;
