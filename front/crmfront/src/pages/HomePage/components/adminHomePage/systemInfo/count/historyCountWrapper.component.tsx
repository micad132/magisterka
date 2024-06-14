import styled from 'styled-components';
import { useAppSelector } from '../../../../../../utils/hooks.ts';
import { getAllHistories } from '../../../../../../store/historySlice.tsx';
import { ActionType } from '../../../../../../types/HistoryType.ts';
import CountDivComponent from './countDiv.component.tsx';
import CountDivContentComponent from './countDivContent.component.tsx';
import ActionTypeTagComponent from '../../../../../../components/actionTypeTag.component.tsx';

const Wrapper = styled.div`
  font-size: 1.3rem;
`;

const Count = styled.span`
  font-weight: bold;
`;

const HistoryCountWrapperComponent = () => {
  const histories = useAppSelector(getAllHistories);
  const taskHistories = histories.filter((history) => history.historyActionType === ActionType.TASK);
  const commentHistories = histories.filter((history) => history.historyActionType === ActionType.COMMENT);
  const supportHistories = histories.filter((history) => history.historyActionType === ActionType.SUPPORT);
  const profileHistories = histories.filter((history) => history.historyActionType === ActionType.PROFILE);
  const surveyHistories = histories.filter((history) => history.historyActionType === ActionType.SURVEY);
  const messageHistories = histories.filter((history) => history.historyActionType === ActionType.MESSAGE);
  return (
    <Wrapper>
      <p>Historia akcji według typu</p>
      <CountDivComponent>
        <CountDivContentComponent>
          <ActionTypeTagComponent actionType={ActionType.TASK} />
          <Count>{taskHistories.length}</Count>
        </CountDivContentComponent>
        <CountDivContentComponent>
          <ActionTypeTagComponent actionType={ActionType.COMMENT} />
          <Count>{commentHistories.length}</Count>
        </CountDivContentComponent>
        <CountDivContentComponent>
          <ActionTypeTagComponent actionType={ActionType.SUPPORT} />
          <Count>{supportHistories.length}</Count>
        </CountDivContentComponent>
        <CountDivContentComponent>
          <ActionTypeTagComponent actionType={ActionType.PROFILE} />
          <Count>{profileHistories.length}</Count>
        </CountDivContentComponent>
        <CountDivContentComponent>
          <ActionTypeTagComponent actionType={ActionType.SURVEY} />
          <Count>{surveyHistories.length}</Count>
        </CountDivContentComponent>
        <CountDivContentComponent>
          <ActionTypeTagComponent actionType={ActionType.MESSAGE} />
          <Count>{messageHistories.length}</Count>
        </CountDivContentComponent>
      </CountDivComponent>
    </Wrapper>
  );
};

export default HistoryCountWrapperComponent;
