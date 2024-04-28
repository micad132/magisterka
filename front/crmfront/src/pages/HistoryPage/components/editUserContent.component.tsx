import {
  Button, FormLabel, Input, Select,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { UserWithoutID, INITIAL_EDIT_USER_VALUES } from '../../../types/UserType.ts';
import PhoneInput from '../../../components/form/phoneInput.component.tsx';

const EditUserContentComponent = () => {
  console.log('JJF');
  return (
    <div>
      <Formik
        initialValues={INITIAL_EDIT_USER_VALUES}
        onSubmit={(values: UserWithoutID, actions) => {
          console.log(values); // Możesz zastosować własną logikę obsługi formularza tutaj
          actions.setFieldError('email', 'jd');
          actions.setSubmitting(false);
        }}
      >
        {({
          values,
          handleChange,
          /* and other goodies */
        }) => (
          <Form>
            <div>
              <FormLabel>Select role</FormLabel>
              <Select placeholder="User Role">
                <option value="client">Client</option>
                <option value="worker">Worker</option>
              </Select>
              <FormLabel>Email address</FormLabel>
              <Input name="email" placeholder="Email" value={values.email} onChange={handleChange} />
              <FormLabel>Password</FormLabel>
              <Input name="password" type="password" placeholder="Password" value={values.password} onChange={handleChange} />
              <FormLabel>Confirm Password</FormLabel>
              <Input name="confirmpassword" type="password" placeholder="Confirm Password" value={values.confirmPassword} onChange={handleChange} />
              <FormLabel>Phone number</FormLabel>
              <PhoneInput />
              <Button type="submit" variant="solid" colorScheme="twitter">Submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditUserContentComponent;
