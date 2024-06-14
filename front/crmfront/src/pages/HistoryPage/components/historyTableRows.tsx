import { Th, Tr } from '@chakra-ui/react';

interface Props {
  isAdmin: boolean,
}

const HistoryTableRows = ({ isAdmin }: Props) => (
  <Tr>
    <Th>ID</Th>
    <Th>Typ akcji:</Th>
    <Th>Wykonawca</Th>
    <Th>Data:</Th>
    <Th>Szczegóły:</Th>
    {isAdmin && <Th>Usuń</Th>}
  </Tr>
);

export default HistoryTableRows;
