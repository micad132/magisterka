import {
  Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { RoleType, User } from '../../../types/UserType.ts';
import ModalComponent from '../../../components/modal.component.tsx';
import { ModalProps } from '../../../types/UtilTypes.ts';
import RoleTag from '../../../components/roleTag.component.tsx';
import EditUserContentComponent from './editUserContent.component.tsx';

const TableWrapper = styled.div`
    max-width: 1200px;
    margin: 20px auto 0 auto;
`;

interface Props {
  users: User[],
}

const HistoryTable = ({ users }: Props) => {
  console.log('fdfd');

  const deleteModalContent = (
    <div>
      <h2>Are you sure you want to delete mikad132?</h2>
    </div>
  );

  const userDetailsModalProps: ModalProps = {
    modalHeader: 'Details',
    modalActionButtonText: 'Clone',
    modalBody: <h1>COSIK</h1>,
    buttonText: 'Details',
  };

  const userEditModalprops: ModalProps = {
    modalHeader: 'Edit Client',
    modalBody: <EditUserContentComponent />,
    modalActionButtonText: 'Edit',
    buttonText: 'Edit',
  };

  const userDeleteModalProps: ModalProps = {
    modalHeader: 'Delete Client',
    buttonText: 'Delete',
    modalActionButtonText: 'Delete',
    modalBody: deleteModalContent,
    buttonColor: 'red',
  };

  return (
    <TableWrapper>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Role:</Th>
              <Th>Username</Th>
              <Th>Street:</Th>
              <Th>Postal Code:</Th>
              <Th>Phone Number:</Th>
              <Th>Email:</Th>
              <Th>Details:</Th>
              <Th>Edit:</Th>
              <Th>Delete:</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.id}</Td>
                <Td><RoleTag role={user.role} /></Td>
                <Td>{user.username}</Td>
                <Td>{user.streetName}</Td>
                <Td>{user.postalCode}</Td>
                <Td>{user.phoneNumber}</Td>
                <Td>{user.email}</Td>
                <Td><ModalComponent modalProps={userDetailsModalProps} /></Td>
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
