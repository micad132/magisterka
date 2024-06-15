import {
  useToast,
} from '@chakra-ui/react';

import { UserWithoutID } from '../../../../types/UserType.ts';
import { useAppDispatch } from '../../../../utils/hooks.ts';
import SelectComponent from '../../../../components/form/select.component.tsx';
import { SelectValue } from '../../../../types/UtilTypes.ts';

interface Props {
  userRoles: SelectValue[],
  changeRole: (value: string) => void,
}

const EditUserContentComponent = ({ userRoles, changeRole }: Props) => {
  const g = 3;
  const dispatch = useAppDispatch();
  const toast = useToast();
  return (
    <div>
      <SelectComponent
        options={userRoles}
        onChange={changeRole}
        label="Wybierz rolę użytkownika"
      />
    </div>
  );
};

export default EditUserContentComponent;
