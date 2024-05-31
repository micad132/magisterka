import InputComponent from '../../../../components/form/input.component.tsx';
import { AddSurveyState, SurveyErrors } from '../../../../types/SurveyType.ts';

interface Props {
  surveyValues: AddSurveyState,
  setValues: (key: string, value: string) => void,
  errors: SurveyErrors,
}

const AddingSurveyContentComponent = ({ surveyValues, setValues, errors }: Props) => {
  console.log('ERRORS', errors);
  return (
    <div>
      <p>Rates from 0 to 5</p>
      <InputComponent
        name="taskRate"
        value={surveyValues.taskRate}
        onChange={(e) => setValues('taskRate', e.target.value)}
        placeholder="From 0 to 5"
        label="How do you rate task experience?"
        type="number"
        isInvalid={errors.taskRate !== ''}
        error={errors.taskRate}
      />
      <InputComponent
        name="messageRate"
        value={surveyValues.messageRate}
        onChange={(e) => setValues('messageRate', e.target.value)}
        placeholder="From 0 to 5"
        label="How do you rate message experience?"
        type="number"
        isInvalid={errors.messageRate !== ''}
        error={errors.messageRate}
      />
      <InputComponent
        name="supportRate"
        value={surveyValues.supportRate}
        onChange={(e) => setValues('supportRate', e.target.value)}
        placeholder="From 0 to 5"
        label="How do you rate support experience?"
        type="number"
        isInvalid={errors.supportRate !== ''}
        error={errors.supportRate}
      />
    </div>
  );
};

export default AddingSurveyContentComponent;
