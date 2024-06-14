// @ts-nocheck
import {
  Table, TableContainer, Tbody, Td, Tfoot, Thead, Tr, useToast,
} from '@chakra-ui/react';
import styled from 'styled-components';
import ModalComponent from '../../../components/modals/modal.component.tsx';
import { ModalProps } from '../../../types/UtilTypes.ts';
import ActionTypeTagComponent from '../../../components/actionTypeTag.component.tsx';
import { HistoryType } from '../../../types/HistoryType.ts';
import HistoryDetailsModalComponent from './historyDetailsModal.component.tsx';
import HistoryTableRows from './historyTableRows.tsx';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks.ts';
import { getUserDetails } from '../../../store/userSlice.tsx';
import { RoleType } from '../../../types/UserType.ts';
import { mapDateToString } from '../../../utils/mappers/mapDateToString.ts';
import { deleteHistoryThunk } from '../../../store/historySlice.tsx';

const TableWrapper = styled.div`
    max-width: 1200px;
    margin: 20px auto 0 auto;
  height: 1000px;
  overflow-y: auto;
`;

interface Props {
  histories: HistoryType[],
}

const HistoryTable = ({ histories }: Props) => {
  const loggedUser = useAppSelector(getUserDetails);
  const dispatch = useAppDispatch();
  const toast = useToast();

  const deleteModalContent = (
    <div>
      <h1>Are you sure you want to delete this history?</h1>
    </div>
  );

  const deleteHistory = async (historyId: number) => {
    try {
      await dispatch(deleteHistoryThunk(historyId));
      toast({
        title: 'History deleted',
        description: 'You have successfully deleted history',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (e) {
      toast({
        title: 'Something went wrong',
        description: 'Contact with your admin',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const userDeleteModalProps = (historyId: number): ModalProps => ({
    modalHeader: 'Delete history',
    buttonText: 'Delete',
    modalActionButtonText: 'Delete',
    modalBody: deleteModalContent, // Upewnij się, że deleteModalContent jest typu string lub zmień typ na odpowiedni
    buttonColor: 'red',
    mainButtonAction: () => deleteHistory(historyId), // Zakładając, że deleteHistory zwraca funkcję
  });

  return (
    <TableWrapper>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <HistoryTableRows isAdmin={loggedUser.userRole === RoleType.ADMIN} />
          </Thead>
          <Tbody>
            {histories.map((history) => (
              <Tr key={history.id}>
                <Td>{history.id}</Td>
                <Td><ActionTypeTagComponent actionType={history.historyActionType} /></Td>
                <Td>{history.performerUsername}</Td>
                <Td>{mapDateToString(history.createdTime)}</Td>
                {/* <Td><ModalComponent modalProps={userDetailsModalProps(history.id)} /></Td> */}
                <Td>
                  <HistoryDetailsModalComponent buttonText="Szczegóły" modalTitle="Szczegóły akcji" description={history.description} />
                </Td>
                {loggedUser.userRole === RoleType.ADMIN && <Td><ModalComponent modalProps={userDeleteModalProps(history.id)} /></Td>}
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
