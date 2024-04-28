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
  console.log('fdjjfd');
  return (
    <TaskInfoWrapper>
      <span>{title}</span>
      <CustomLabel text={text} />
    </TaskInfoWrapper>
  );
};

export default TaskInfoComponent;
