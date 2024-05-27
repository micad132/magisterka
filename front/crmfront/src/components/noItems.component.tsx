import styled from 'styled-components';

interface Props {
  itemName: string,
}

const NoItemsWrapper = styled.div`
  background-color: teal;
  padding: 20px;
  max-width: 300px;
  margin: 0 auto;
  p {
    font-weight: bold;
    color: #fff;
  }
`;

const NoItemsComponent = ({ itemName }: Props) => (
  <NoItemsWrapper>
    <p>There are no {itemName} in system</p>
  </NoItemsWrapper>
);

export default NoItemsComponent;
