import { ReactNode } from 'react';
import styled from 'styled-components';

const TaskChartWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 40px;
`;

interface Props {
  children: ReactNode,
}

const TaskChartWrapperComponent = ({ children }: Props) => (
  <TaskChartWrapper>{children}</TaskChartWrapper>
);

export default TaskChartWrapperComponent;
