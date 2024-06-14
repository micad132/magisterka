import TextareaComponent from '../../../components/form/textarea.component.tsx';

interface Props {
  value: string,
  setValue: (val: string) => void,
}

const AddingCommentContent = ({ value, setValue }: Props) => (
  <div>
    <TextareaComponent
      placeholder="Treść komentarza"
      value={value}
      onChange={setValue}
      label="Dodaj treść komentarza"
    />
  </div>
);

export default AddingCommentContent;
