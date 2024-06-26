import styled from 'styled-components';
import { Tag } from '@chakra-ui/react';
import BugReportIcon from '@mui/icons-material/BugReport';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PendingIcon from '@mui/icons-material/Pending';
import { SupportRequest, SupportRequestType } from '../types/SupportRequest.ts';

const TagWrapper = styled(Tag)`
  padding: 10px 15px !important;
  width: max-content;
  text-transform: uppercase;
  font-size: 1rem;
`;

const TagInside = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;
`;

interface Props {
  supportType: SupportRequestType,
}

const SupportCategoryBadgeComponent = ({ supportType }: Props) => {
  console.log('fjdj', supportType);

  const getProperTag = () => {
    switch (supportType) {
      case SupportRequest.IMPROVEMENT:
        return <TagWrapper size="large" variant="solid" colorScheme="yellow"><TagInside><LightbulbIcon />POMYSŁ</TagInside></TagWrapper>;
      case SupportRequest.SUPPORT:
        return <TagWrapper size="large" variant="solid" colorScheme="teal"><TagInside><ContactSupportIcon />WSPARCIE</TagInside></TagWrapper>;
      case SupportRequest.BUG:
        return <TagWrapper size="large" variant="solid" colorScheme="red"><TagInside><BugReportIcon />PROBLEM</TagInside></TagWrapper>;
      case SupportRequest.OTHER:
        return <TagWrapper size="large" variant="solid" colorScheme="red"><TagInside><PendingIcon />INNA</TagInside></TagWrapper>;
      default:
        return <TagWrapper size="large" variant="solid" colorScheme="blue">ADMIN</TagWrapper>;
    }
  };

  return (
    <div>{getProperTag()}</div>
  );
};

export default SupportCategoryBadgeComponent;
