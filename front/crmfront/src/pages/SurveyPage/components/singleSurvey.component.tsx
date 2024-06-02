import styled from 'styled-components';
import { DeleteIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react';
import SurveyAuthorComponent from './surveyAuthor.component.tsx';
import CreatedAtComponent from './createdAt.component.tsx';
import SingleRateComponent from './singleRate.component.tsx';
import { ModalProps } from '../../../types/UtilTypes.ts';
import ModalComponent from '../../../components/modals/modal.component.tsx';
import { Survey } from '../../../types/SurveyType.ts';
import { mapDateToString } from '../../../utils/mappers/mapDateToString.ts';
import { useAppDispatch } from '../../../utils/hooks.ts';
import { deleteSurveyThunk } from '../../../store/surveySlice.tsx';

const SingleSurveyWrapper = styled.div`
  border-radius: 10px;
  max-width: 500px;
  padding: 15px 0;
  min-width: 400px;
  border: 2px solid teal;
  border-left: 20px solid teal;
  
  @media(max-width: 1400px) {
    margin: 10px auto 0 auto;
  }
`;

const RateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
`;

const ModalWrapper = styled.div`
  margin: 0px 20px 0 auto;
  width: max-content;
`;

interface Props {
  survey: Survey,
}

const SingleSurveyComponent = ({ survey }: Props) => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const deleteSurveyHandler = () => {
    try {
      dispatch(deleteSurveyThunk(survey.id));
      toast({
        title: 'Survey deleted!',
        description: 'You have successfully deleted a survey',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (e) {
      toast({
        title: 'Survey deletion failed!',
        description: 'Something went wrong, contact with your admin!',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const modalProps: ModalProps = {
    modalIcon: <DeleteIcon color="red.500" boxSize={6} />,
    modalHeader: 'Deleting survey',
    mainButtonAction: deleteSurveyHandler,
    modalActionButtonText: 'Delete',
    modalBody: <p>Are you sure you want to delete this survey?</p>,
    buttonText: '',

  };
  return (
    <SingleSurveyWrapper>
      <ModalWrapper>
        <ModalComponent modalProps={modalProps} />
      </ModalWrapper>

      <SurveyAuthorComponent authorUsername={survey.authorUsername} />
      <CreatedAtComponent createdDate={mapDateToString(survey.createdTime)} />

      <RateWrapper>
        <SingleRateComponent count={survey.taskRate} text="Task rate" />
        <SingleRateComponent count={survey.messageRate} text="Message rate" />
        <SingleRateComponent count={survey.supportRate} text="Support rate" />
      </RateWrapper>

    </SingleSurveyWrapper>
  );
};

export default SingleSurveyComponent;
