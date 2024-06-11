import QuizIcon from '@mui/icons-material/Quiz';
import styled from 'styled-components';
import { Icon, useToast } from '@chakra-ui/react';
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
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks.ts';
import { getUserDetails } from '../../../../store/userSlice.tsx';
import { surveyScheme, SurveyValidatorErrors } from '../../../../services/validators/SurveyValidator.ts';
import { addingSurveyThunk } from '../../../../store/surveySlice.tsx';
import { ActionType, AddHistory } from '../../../../types/HistoryType.ts';
import { addHistoryThunk } from '../../../../store/historySlice.tsx';

const Wrapper = styled.div`
`;

const SurveyModalComponent = () => {
  const [surveyValues, setSurveyValues] = useState<AddSurveyState>(ADD_SURVEY_STATE_INITIAL_VALUES);
  const [surveyErrors, setSurveyErrors] = useState<SurveyErrors>(SURVEY_ERRORS_INITIAL_VALUES);
  const loggedUser = useAppSelector(getUserDetails);
  const dispatch = useAppDispatch();
  const toast = useToast();

  const setValues = (key: string, value: string) => {
    console.log('KEY', key);
    console.log('VALUE', typeof value);
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
      authorId: loggedUser.id,
    };
    const historyObj: AddHistory = {
      performerId: loggedUser.id,
      historyActionType: ActionType.SURVEY,
      description: `User ${loggedUser.username} - ${loggedUser.name} ${loggedUser.surname} created a survey`,
    };
    try {
      dispatch(addingSurveyThunk(obj));
      dispatch(addHistoryThunk(historyObj));
      toast({
        title: 'Survey made!',
        description: 'You have successfully made a survey',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
      setSurveyErrors(SURVEY_ERRORS_INITIAL_VALUES);
      setSurveyValues(ADD_SURVEY_STATE_INITIAL_VALUES);
    } catch (e) {
      toast({
        title: 'Survey not made',
        description: 'Something went wrong, contact with your admin!',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    }
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
