import styled from 'styled-components';
import FontBoldSpanComponent from '../../../components/fontBoldSpan.component.tsx';

interface Props {
  spanText: string,
  value: number,
}

const TaskDetailInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskDetailInfoComponent = ({ spanText, value }: Props) => (
  <TaskDetailInfoWrapper>
    <FontBoldSpanComponent text={spanText} />
    <p> {value}</p>
  </TaskDetailInfoWrapper>

);

export default TaskDetailInfoComponent;
