import styled from 'styled-components';
import { Tag } from '@chakra-ui/react';
import { TaskType } from '../types/TaskType.ts';
import { SurveyRating, SurveyRatingType } from '../types/SurveyType.ts';

const StyledTag = styled(Tag)`
  padding: 5px 10px !important;
  width: max-content;
`;

interface Props {
  rate: SurveyRatingType,
}

const RateTagComponent = ({ rate }: Props) => {
  const properTaskType = () => {
    switch (rate) {
      case SurveyRating.LOW:
        return <StyledTag size="large" colorScheme="red" variant="solid">{SurveyRating.LOW}</StyledTag>;
      case SurveyRating.MEDIUM:
        return <StyledTag size="large" colorScheme="orange" variant="solid">{SurveyRating.MEDIUM}</StyledTag>;
      case SurveyRating.HIGH:
        return <StyledTag size="large" colorScheme="green" variant="solid">{SurveyRating.HIGH}</StyledTag>;
      default:
        return <StyledTag size="large" colorScheme="teal" variant="solid">Success</StyledTag>;
    }
  };

  return (
    <div style={{ fontSize: '1rem' }}>{properTaskType()}</div>
  );
};

export default RateTagComponent;
