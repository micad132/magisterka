import { Form, Formik } from 'formik';
import { Button } from '@chakra-ui/react';
import {
  INITIAL_SELF_EDIT_USER_VALUES,
  SelfEditUser,
} from '../../../types/UserType.ts';
import InputComponent from '../../../components/form/input.component.tsx';

const EditUserDataModalContentComponent = () => {
  const d = 4;
  return (
    <div>
      <Formik
        initialValues={INITIAL_SELF_EDIT_USER_VALUES}
        onSubmit={(values: SelfEditUser, actions) => {
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
              <InputComponent
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                label="Name"
                type="text"
                isInvalid={false}
              />
              <InputComponent
                name="surname"
                placeholder="Surname"
                value={values.surname}
                onChange={handleChange}
                label="Surname"
                type="text"
                isInvalid={false}
              />
              <InputComponent
                name="username"
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
                label="Username"
                type="text"
                isInvalid={false}
              />
              <InputComponent
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                label="Email"
                type="text"
                isInvalid={false}
              />
              <InputComponent
                name="age"
                placeholder="Age"
                value={values.age}
                onChange={handleChange}
                label="Age"
                type="number"
                isInvalid={false}
              />
              <InputComponent
                name="countryName"
                placeholder="Country name"
                value={values.countryName}
                onChange={handleChange}
                label="Country name"
                type="text"
                isInvalid={false}
              />
              <InputComponent
                name="cityName"
                placeholder="City name"
                value={values.cityName}
                onChange={handleChange}
                label="City name"
                type="text"
                isInvalid={false}
              />
              <InputComponent
                name="streetName"
                placeholder="Street name"
                value={values.streetName}
                onChange={handleChange}
                label="Street name"
                type="text"
                isInvalid={false}
              />
              <InputComponent
                name="postalCode"
                placeholder="Postal code"
                value={values.postalCode}
                onChange={handleChange}
                label="Postal code"
                type="text"
                isInvalid={false}
              />
              <InputComponent
                name="phoneNumber"
                placeholder="Phone number"
                value={values.phoneNumber}
                onChange={handleChange}
                label="Phone number"
                type="text"
                isInvalid={false}
              />
              <Button type="submit" variant="solid" colorScheme="twitter">Submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditUserDataModalContentComponent;
