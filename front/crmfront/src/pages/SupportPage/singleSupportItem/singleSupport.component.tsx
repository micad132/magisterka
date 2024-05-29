import styled from 'styled-components';
import { useState } from 'react';
import ModalComponent from '../../../components/modals/modal.component.tsx';
import { ModalProps, SelectValue } from '../../../types/UtilTypes.ts';
import AuthorOfRequestComponent from './authorOfRequest.component.tsx';
import CreatedDateComponent from './createdDate.component.tsx';
import ConvertingToTaskContentComponent from './convertingToTaskContent.component.tsx';
import { ADDING_TASK_INITIAL_VALUE, AddingTask } from '../../../types/TaskType.ts';
import { MockedUsers } from '../../../mock/mockUsers.tsx';
import SupportDescriptionComponent from './supportDescription.component.tsx';
import SupportCategoryBadgeComponent from '../../../components/supportCategoryBadge.component.tsx';
import { Support } from '../../../types/SupportRequest.ts';
import MenuComponent from '../../../components/menu.component.tsx';

const SingleSupportWrapper = styled.div`
  -webkit-box-shadow: 9px 3px 12px 3px teal;
  -moz-box-shadow: 9px 3px 12px 3px teal;
  box-shadow: 9px 3px 12px 3px teal;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ModalWrapper = styled.div`
  flex-grow: 0;
  margin-top: auto;
  margin-bottom: 10px;
  gap: 0px;
  justify-self: flex-end; /* Wyjustuj element do dolnego brzegu */
`;

interface Props {
  support: Support,
}

const SingleSupportComponent = ({ support }: Props) => {
  const [convertingToTask, setConvertingToTask] = useState<AddingTask>(ADDING_TASK_INITIAL_VALUE);

  const setState = (key: string, value: string | number) => {
    setConvertingToTask((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const convertToTask = () => {
    console.log('STEJT', convertingToTask);
  };

  const SELECT_USERS: SelectValue[] = MockedUsers.map((user) => ({
    text: user.username,
    value: user.name,
  }));

  console.log('SELECT USERS', support);

  const convertToTaskModalProps: ModalProps = {
    modalHeader: 'Convert to task',
    buttonText: 'Convert to task',
    modalActionButtonText: 'Convert',
    buttonSize: 'md',
    mainButtonAction: convertToTask,
    modalBody: <ConvertingToTaskContentComponent values={convertingToTask} setState={setState} selectUsers={SELECT_USERS} />,
  };

  const menuItems: ModalProps[] = [
    {
      modalHeader: 'Edit support request',
      modalBody: <h1>TEST</h1>,
      buttonSize: 'sm',
      mainButtonAction: () => console.log('SIEMA'),
      buttonText: 'Edit',
      modalActionButtonText: 'Edit',
      buttonColor: 'teal',
    },
    {
      modalHeader: 'Delete support request',
      modalBody: <h1>DELETE</h1>,
      buttonSize: 'sm',
      mainButtonAction: () => console.log('SIEMA'),
      buttonText: 'Delete',
      modalActionButtonText: 'Delete',
      buttonColor: 'red',
    },
  ];

  return (
    <SingleSupportWrapper>
      <MenuComponent menuItems={menuItems} />
      <CreatedDateComponent date={support.date} />
      <AuthorOfRequestComponent author={support.username} />
      <SupportCategoryBadgeComponent supportType={support.supportCategory} />
      <SupportDescriptionComponent text={support.description} />

      <ModalWrapper>
        <ModalComponent
          modalProps={convertToTaskModalProps}
        />
      </ModalWrapper>

    </SingleSupportWrapper>
  );
};

export default SingleSupportComponent;
