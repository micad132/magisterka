import TextareaComponent from '../../../components/form/textarea.component.tsx';

interface Props {
  value: string,
  setValue: (val: string) => void,
}

const AddingCommentContent = ({ value, setValue }: Props) => (
  <div>
    <TextareaComponent
      placeholder="Comment text"
      value={value}
      onChange={setValue}
      label="Provide comment here"
    />
  </div>
);

export default AddingCommentContent;
