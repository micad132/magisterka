import { Icon } from '@chakra-ui/react';
import HelpIcon from '@mui/icons-material/Help';

interface Props {
  onClick: () => void,
}

const SupportIcon = ({ onClick }: Props) => (
  <div onClick={onClick}>
    <Icon as={HelpIcon} boxSize="100%" />
  </div>
);

export default SupportIcon;
