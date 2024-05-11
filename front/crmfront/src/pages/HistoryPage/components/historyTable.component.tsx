import {
  Table, TableContainer, Tbody, Td, Tfoot, Thead, Tr,
} from '@chakra-ui/react';
import styled from 'styled-components';
import ModalComponent from '../../../components/modal.component.tsx';
import { ModalProps } from '../../../types/UtilTypes.ts';
import HISTORY_TABLE_ROWS from './historyTableRows.tsx';
import ActionTypeTagComponent from '../../../components/actionTypeTag.component.tsx';
import { HistoryType } from '../../../types/HistoryType.ts';
import DetailsOfHistoryComponent from './detailsOfHistory.component.tsx';

const TableWrapper = styled.div`
    max-width: 1200px;
    margin: 20px auto 0 auto;
`;

interface Props {
  histories: HistoryType[],
}

const HistoryTable = ({ histories }: Props) => {
  const deleteModalContent = (
    <div>
      <h2>Are you sure you want to delete this history?</h2>
    </div>
  );

  const userDetailsModalProps = (id: string): ModalProps => ({
    modalHeader: 'Details',
    modalActionButtonText: 'Clone',
    modalBody: <DetailsOfHistoryComponent id={id} />,
    buttonText: 'Details',
    mainButtonAction: () => {},
  });

  const userEditModalprops: ModalProps = {
    modalHeader: 'Edit Client',
    modalBody: <h1>COSIK</h1>,
    modalActionButtonText: 'Edit',
    buttonText: 'Edit',
    mainButtonAction: () => {},
  };

  const userDeleteModalProps: ModalProps = {
    modalHeader: 'Delete Client',
    buttonText: 'Delete',
    modalActionButtonText: 'Delete',
    modalBody: deleteModalContent,
    buttonColor: 'red',
    mainButtonAction: () => {},
  };

  return (
    <TableWrapper>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            {HISTORY_TABLE_ROWS}
          </Thead>
          <Tbody>
            {histories.map((history) => (
              <Tr key={history.id}>
                <Td>{history.id}</Td>
                <Td><ActionTypeTagComponent actionType={history.actionType} /></Td>
                <Td>{history.performer}</Td>
                <Td>{history.date}</Td>
                <Td><ModalComponent modalProps={userDetailsModalProps(history.id)} /></Td>
                <Td><ModalComponent modalProps={userEditModalprops} /></Td>
                <Td><ModalComponent modalProps={userDeleteModalProps} /></Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot />
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};

export default HistoryTable;
