import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  text: string,
  count: number,
  linkUrl: string,
}

const SystemSingleInfoWrapper = styled.div`
  background: darkcyan;
  color: #fff;
  width: min-content;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.2rem;
  min-width: 100px;
`;

const Text = styled.p`
  font-weight: bold;
`;

const Count = styled.p`
  font-weight: bold;
`;

const CustomIcon = styled(OpenInNewIcon)`
  cursor: pointer;
`;

const SystemSingleInfoComponent = ({ text, count, linkUrl }: Props) => {
  const g = 4;
  const navigate = useNavigate();
  return (
    <SystemSingleInfoWrapper>
      <CustomIcon onClick={() => navigate(linkUrl)} />
      <Text>{text}</Text>
      <Count>{count}</Count>
    </SystemSingleInfoWrapper>
  );
};

export default SystemSingleInfoComponent;
