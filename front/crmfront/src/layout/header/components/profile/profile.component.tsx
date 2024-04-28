import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Icon } from '@chakra-ui/react';

interface Props {
  onClick: () => void,
}

const ProfileComponent = ({ onClick }: Props) => {
  console.log(173);
  return (
    <div onClick={onClick}>
      <Icon as={AccountCircleIcon} boxSize="100%" />
    </div>
  );
};

export default ProfileComponent;
