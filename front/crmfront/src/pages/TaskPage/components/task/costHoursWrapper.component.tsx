import styled from 'styled-components';
import TaskInfoComponent from './taskInfo.component.tsx';

const EstimatedCostWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0;
`;

const CostHoursWrapperComponent = () => {
  console.log('DJJD');
  return (
    <EstimatedCostWrapper>
      <TaskInfoComponent text="12500zl" title="Estimated Cost:" />
      <TaskInfoComponent text="8h" title="Spent Hours:" />
      <TaskInfoComponent text="20000zl" title="Actual Cost:" />
    </EstimatedCostWrapper>
  );
};

export default CostHoursWrapperComponent;
