import DatePicker from 'react-datepicker';

interface Props {
  value: Date,
  setTime: (value: Date, key?: string) => void,
}

const DatePickerComponent = ({ value, setTime }: Props) => (
  <div>
    <DatePicker
      selected={value}
      onChange={() => {}}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  </div>
);

export default DatePickerComponent;
