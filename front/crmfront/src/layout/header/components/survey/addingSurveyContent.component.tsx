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
      <p>Oceny od 0.1 do 5.0</p>
      <NumberInputComponent
        defaultValue={0.1}
        minValue={0.1}
        maxValue={5.0}
        value={surveyValues.taskRate}
        onChange={(e) => setValues('taskRate', e)}
        step={0.1}
        label="Jak oceniasz oferowane przez firmę usługi i ich realizację?"
      />
      <NumberInputComponent
        defaultValue={0.1}
        minValue={0.1}
        maxValue={5.0}
        value={surveyValues.messageRate}
        onChange={(e) => setValues('messageRate', e)}
        step={0.1}
        label="Jak oceniasz wiadomości z firmą?"
      />
      <NumberInputComponent
        defaultValue={0.1}
        minValue={0.1}
        maxValue={5.0}
        value={surveyValues.supportRate}
        onChange={(e) => setValues('supportRate', e)}
        step={0.1}
        label="Jak oceniasz uzyskiwane wsparcie od firmy?"
      />
    </div>
  );
};

export default AddingSurveyContentComponent;
