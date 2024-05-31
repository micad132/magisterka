import QuizIcon from '@mui/icons-material/Quiz';
import styled from 'styled-components';
import { Icon } from '@chakra-ui/react';
import { useState } from 'react';
import ModalComponent from '../../../../components/modals/modal.component.tsx';
import { ModalProps } from '../../../../types/UtilTypes.ts';
import AddingSurveyContentComponent from './addingSurveyContent.component.tsx';
import {
  ADD_SURVEY_STATE_INITIAL_VALUES,
  AddSurvey,
  AddSurveyState,
  SURVEY_ERRORS_INITIAL_VALUES, SurveyErrors,
} from '../../../../types/SurveyType.ts';
import { useAppSelector } from '../../../../utils/hooks.ts';
import { getUserDetails } from '../../../../store/userSlice.tsx';
import { surveyScheme, SurveyValidatorErrors } from '../../../../services/validators/SurveyValidator.ts';

const Wrapper = styled.div`
`;

const SurveyModalComponent = () => {
  const [surveyValues, setSurveyValues] = useState<AddSurveyState>(ADD_SURVEY_STATE_INITIAL_VALUES);
  const [surveyErrors, setSurveyErrors] = useState<SurveyErrors>(SURVEY_ERRORS_INITIAL_VALUES);
  const loggedUser = useAppSelector(getUserDetails);

  const setValues = (key: string, value: string) => {
    setSurveyValues((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const onAddSurvey = () => {
    setSurveyErrors(SURVEY_ERRORS_INITIAL_VALUES);
    const beforeValidation = {
      supportRate: Number(surveyValues.supportRate),
      messageRate: Number(surveyValues.messageRate),
      taskRate: Number(surveyValues.taskRate),
    };

    surveyScheme.validate(beforeValidation, { abortEarly: false })
      .then((validated) => {
        console.log('validated', validated);
      }).catch((err) => {
        const initialErrors: SurveyErrors = {
          taskRate: '',
          messageRate: '',
          supportRate: '',
        };
        const errorMessages = err.errors.reduce((acc: SurveyValidatorErrors, message: string, index: number) => {
          const { path } = err.inner[index];
          acc[path as keyof SurveyErrors] = message;
          return acc;
        }, initialErrors);
        setSurveyErrors(errorMessages);
      });

    const obj: AddSurvey = {
      supportRate: Number(surveyValues.supportRate),
      messageRate: Number(surveyValues.messageRate),
      taskRate: Number(surveyValues.taskRate),
      creatorId: loggedUser.id,
    };
  };

  const modalProps: ModalProps = {
    modalBody: <AddingSurveyContentComponent surveyValues={surveyValues} setValues={setValues} errors={surveyErrors} />,
    modalHeader: 'Add survey',
    modalIcon: <Icon as={QuizIcon} boxSize="100%" />,
    modalActionButtonText: 'Add',
    mainButtonAction: onAddSurvey,
    buttonText: '',
  };

  return (
    <Wrapper>
      <ModalComponent
        modalProps={modalProps}
      />
    </Wrapper>
  );
};

export default SurveyModalComponent;
