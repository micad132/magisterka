import styled from 'styled-components';
import CustomLabel from './customLabel.component.tsx';

interface Props {
  title: string,
  text: string,
}

const TaskInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskInfoComponent = ({ title, text }: Props) => {
  const g = 4;
  return (
    <TaskInfoWrapper>
      <span>{title}</span>
      <CustomLabel text={text} />
    </TaskInfoWrapper>
  );
};

export default TaskInfoComponent;
