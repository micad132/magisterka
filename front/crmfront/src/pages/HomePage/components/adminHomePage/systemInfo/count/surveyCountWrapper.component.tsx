import styled from 'styled-components';
import { useAppSelector } from '../../../../../../utils/hooks.ts';
import { getAllSurveys } from '../../../../../../store/surveySlice.tsx';
import CountDivComponent from './countDiv.component.tsx';
import CountDivContentComponent from './countDivContent.component.tsx';
import RateTagComponent from '../../../../../../components/rateTag.component.tsx';
import { SurveyRating } from '../../../../../../types/SurveyType.ts';

const Wrapper = styled.div`
  font-size: 1.3rem;
`;

const Count = styled.span`
  font-weight: bold;
`;

const LowRating = styled.p`
  color: red;
  font-weight: bold;
`;

const MediumRating = styled.p`
  color: orange;
`;

const HighRating = styled.p`
  color: green;
`;

const SurveyCountWrapperComponent = () => {
  const surveys = useAppSelector(getAllSurveys);
  return (
    <Wrapper>
      <p>Surveys by ratings</p>
      <CountDivComponent>
        <CountDivContentComponent>
          <RateTagComponent rate={SurveyRating.LOW} />
          <Count>3</Count>
        </CountDivContentComponent>
        <CountDivContentComponent>
          <RateTagComponent rate={SurveyRating.MEDIUM} />
          <Count>3</Count>
        </CountDivContentComponent>
        <CountDivContentComponent>
          <RateTagComponent rate={SurveyRating.HIGH} />
          <Count>3</Count>
        </CountDivContentComponent>
      </CountDivComponent>
    </Wrapper>
  );
};

export default SurveyCountWrapperComponent;
