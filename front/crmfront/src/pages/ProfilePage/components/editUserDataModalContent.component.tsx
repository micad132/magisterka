import InputComponent from '../../../components/form/input.component.tsx';
import { SelfEditUser } from '../../../types/UserType.ts';

interface Props {
  values: SelfEditUser,
  setPersonalInfo: (value: string | number, key: string) => void,
}

const EditUserDataModalContentComponent = ({ values, setPersonalInfo }: Props) => (
  <div>
    <InputComponent
      name="editPersonalInfoUsername"
      value={values.username}
      onChange={(value) => setPersonalInfo(value.target.value, 'username')}
      placeholder="Nowa nazwa"
      label="Edytuj nazwe użytkownika"
      type="text"
      isInvalid={false}
    />
    <InputComponent
      name="editPersonalInfoName"
      value={values.name}
      onChange={(value) => setPersonalInfo(value.target.value, 'name')}
      placeholder="Imię"
      label="Edytuj imię"
      type="text"
      isInvalid={false}
    />
    <InputComponent
      name="editPersonalInfoSurname"
      value={values.surname}
      onChange={(value) => setPersonalInfo(value.target.value, 'surname')}
      placeholder="Nazwisko"
      label="Edytuj nazwisko"
      type="text"
      isInvalid={false}
    />
    <InputComponent
      name="editPersonalInfoEmail"
      value={values.email}
      onChange={(value) => setPersonalInfo(value.target.value, 'email')}
      placeholder="Email"
      label="Edytuj email"
      type="email"
      isInvalid={false}
    />
    <InputComponent
      name="editPersonalInfoAge"
      value={values.age}
      onChange={(value) => setPersonalInfo(value.target.value, 'age')}
      placeholder="Wiek"
      label="Edytuj wiek"
      type="number"
      isInvalid={false}
    />
    <InputComponent
      name="editPersonalInfoCountryName"
      value={values.provinceName}
      onChange={(value) => setPersonalInfo(value.target.value, 'provinceName')}
      placeholder="Województwo"
      label="Edytuj województwo"
      type="text"
      isInvalid={false}
    />
    <InputComponent
      name="editPersonalInfoCityName"
      value={values.cityName}
      onChange={(value) => setPersonalInfo(value.target.value, 'cityName')}
      placeholder="Nazwa miasta"
      label="Edytuj nazwę miasta"
      type="text"
      isInvalid={false}
    />
    <InputComponent
      name="editPersonalInfoStreetName"
      value={values.streetName}
      onChange={(value) => setPersonalInfo(value.target.value, 'streetName')}
      placeholder="Ulica"
      label="Edytuj ulicę"
      type="text"
      isInvalid={false}
    />
    <InputComponent
      name="editPersonalInfoPostalCode"
      value={values.postalCode}
      onChange={(value) => setPersonalInfo(value.target.value, 'postalCode')}
      placeholder="Kod pocztowy"
      label="Edytuj kod pocztowy"
      type="text"
      isInvalid={false}
    />
    <InputComponent
      name="editPersonalInfoPhoneNumber"
      value={values.phoneNumber}
      onChange={(value) => setPersonalInfo(value.target.value, 'phoneNumber')}
      placeholder="Kod pocztowy"
      label="Edytuj kod pocztowy"
      type="text"
      isInvalid={false}
    />
  </div>
);

export default EditUserDataModalContentComponent;
