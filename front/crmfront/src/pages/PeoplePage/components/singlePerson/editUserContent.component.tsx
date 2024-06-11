import {
  Button, FormLabel, Input, Select,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { UserWithoutID, INITIAL_EDIT_USER_VALUES } from '../../../../types/UserType.ts';
import PhoneInput from '../../../../components/form/phoneInput.component.tsx';
import InputComponent from '../../../../components/form/input.component.tsx';
import SelectComponent from '../../../../components/form/select.component.tsx';
import { GENDER_SELECT_OPTIONS } from '../../../../utils/consts.ts';

interface Props {
  user: UserWithoutID,
}

const EditUserContentComponent = ({ user }: Props) => {
  const g = 3;
  return (
    <div>
      <Formik
        initialValues={user}
        onSubmit={(values: UserWithoutID, actions) => {
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
              <SelectComponent
                options={GENDER_SELECT_OPTIONS}
                onChange={handleChange}
                label="Gender"
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
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditUserContentComponent;
