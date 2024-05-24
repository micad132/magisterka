import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

const MyComponent = () => {
  const [startDate, setStartDate] = useState(new Date());

  console.log('START DATE', startDate);

  return (
    <div style={{ color: '#000' }}>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date!)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </div>
  );
};

export default MyComponent;
