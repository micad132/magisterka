import { Th, Tr } from '@chakra-ui/react';

interface Props {
  isAdmin: boolean,
}

const HistoryTableRows = ({ isAdmin }: Props) => (
  <Tr>
    <Th>ID</Th>
    <Th>Action type:</Th>
    <Th>Performer</Th>
    <Th>Date:</Th>
    <Th>Description:</Th>
    {isAdmin && <Th>Delete</Th>}
  </Tr>
);

export default HistoryTableRows;
