import InputComponent from '../../../../components/form/input.component.tsx';
import { AddSurveyState, SurveyErrors } from '../../../../types/SurveyType.ts';
import NumberInputComponent from '../../../../components/form/numberInput.component.tsx';

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
      <NumberInputComponent
        defaultValue={0.1}
        minValue={0.1}
        maxValue={5.0}
        value={surveyValues.taskRate}
        onChange={(e) => setValues('taskRate', e)}
        step={0.1}
        label="How do you rate task experience?"
      />
      <NumberInputComponent
        defaultValue={0.1}
        minValue={0.1}
        maxValue={5.0}
        value={surveyValues.messageRate}
        onChange={(e) => setValues('messageRate', e)}
        step={0.1}
        label="How do you rate message experience?"
      />
      <NumberInputComponent
        defaultValue={0.1}
        minValue={0.1}
        maxValue={5.0}
        value={surveyValues.supportRate}
        onChange={(e) => setValues('supportRate', e)}
        step={0.1}
        label="How do you rate support request experience?"
      />
    </div>
  );
};

export default AddingSurveyContentComponent;
