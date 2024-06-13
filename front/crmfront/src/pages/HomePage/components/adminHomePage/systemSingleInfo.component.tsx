import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  text: string,
  count: number,
}

const SystemSingleInfoWrapper = styled.div`
  background: darkcyan;
  color: #fff;
  width: min-content;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.2rem;
  min-width: 100px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Text = styled.p`
  font-weight: bold;
`;

const Count = styled.p`
  font-weight: bold;
`;

const SystemSingleInfoComponent = ({ text, count }: Props) => (
  <SystemSingleInfoWrapper>
    <Text>{text}</Text>
    <Count>{count}</Count>
  </SystemSingleInfoWrapper>
);

export default SystemSingleInfoComponent;
