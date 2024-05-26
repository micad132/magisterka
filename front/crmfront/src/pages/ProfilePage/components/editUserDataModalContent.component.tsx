import InputComponent from '../../../components/form/input.component.tsx';
import { SelfEditUser } from '../../../types/UserType.ts';

interface Props {
  values: SelfEditUser,
  setPersonalInfo: (value: string | number, key: string) => void,
}

const EditUserDataModalContentComponent = ({ values, setPersonalInfo }: Props) => {
  const d = 4;
  return (
    <div>
      <InputComponent
        name="editPersonalInfoUsername"
        value={values.username}
        onChange={(value) => setPersonalInfo(value.target.value, 'username')}
        placeholder="New username"
        label="Edit your username"
        type="text"
        isInvalid={false}
      />
      <InputComponent
        name="editPersonalInfoName"
        value={values.name}
        onChange={(value) => setPersonalInfo(value.target.value, 'name')}
        placeholder="New name"
        label="Edit your name"
        type="text"
        isInvalid={false}
      />
      <InputComponent
        name="editPersonalInfoSurname"
        value={values.surname}
        onChange={(value) => setPersonalInfo(value.target.value, 'surname')}
        placeholder="New surname"
        label="Edit your surname"
        type="text"
        isInvalid={false}
      />
      <InputComponent
        name="editPersonalInfoEmail"
        value={values.email}
        onChange={(value) => setPersonalInfo(value.target.value, 'email')}
        placeholder="New email"
        label="Edit your email"
        type="email"
        isInvalid={false}
      />
      <InputComponent
        name="editPersonalInfoAge"
        value={values.age}
        onChange={(value) => setPersonalInfo(value.target.value, 'age')}
        placeholder="New age"
        label="Edit your age"
        type="number"
        isInvalid={false}
      />
      <InputComponent
        name="editPersonalInfoCountryName"
        value={values.countryName}
        onChange={(value) => setPersonalInfo(value.target.value, 'countryName')}
        placeholder="New country name"
        label="Edit your country name"
        type="text"
        isInvalid={false}
      />
      <InputComponent
        name="editPersonalInfoCityName"
        value={values.cityName}
        onChange={(value) => setPersonalInfo(value.target.value, 'cityName')}
        placeholder="New city name"
        label="Edit your city name"
        type="text"
        isInvalid={false}
      />
      <InputComponent
        name="editPersonalInfoStreetName"
        value={values.streetName}
        onChange={(value) => setPersonalInfo(value.target.value, 'streetName')}
        placeholder="New street name"
        label="Edit your street name"
        type="text"
        isInvalid={false}
      />
      <InputComponent
        name="editPersonalInfoPostalCode"
        value={values.postalCode}
        onChange={(value) => setPersonalInfo(value.target.value, 'postalCode')}
        placeholder="New postal code"
        label="Edit your postal code"
        type="text"
        isInvalid={false}
      />
      <InputComponent
        name="editPersonalInfoPhoneNumber"
        value={values.phoneNumber}
        onChange={(value) => setPersonalInfo(value.target.value, 'phoneNumber')}
        placeholder="New postal code"
        label="Edit your postal code"
        type="text"
        isInvalid={false}
      />
    </div>
  );
};

export default EditUserDataModalContentComponent;
