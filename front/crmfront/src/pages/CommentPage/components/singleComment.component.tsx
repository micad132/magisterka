import styled from 'styled-components';
import { DeleteIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useNavigate } from 'react-router-dom';
import { RoleTypeType } from '../../../types/UserType.ts';
import RoleTagComponent from '../../../components/roleTag.component.tsx';
import { ModalProps } from '../../../types/UtilTypes.ts';
import { useAppDispatch } from '../../../utils/hooks.ts';
import { deleteCommentThunk } from '../../../store/commentsSlice.tsx';
import ModalComponent from '../../../components/modals/modal.component.tsx';

const Wrapper = styled.div`
  border: 2px solid teal;
  padding: 30px;
  border-radius: 5px;
  font-size: 1.2rem;
`;

const TaskCreatedWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
`;

const TaskCreatedInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorDetails = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const FontBold = styled.span`
  font-weight: bold;
`;

const Description = styled.div`
  margin: 10px 0;
`;

const ModalWrapper = styled.div`
  margin-left: auto;
  width: min-content;
`;

const TaskId = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Icon = styled(OpenInNewIcon)`
  cursor: pointer;
`;

interface Props {
  taskId: number,
  createdAt: string,
  authorName: string,
  authorSurname: string,
  authorRole: RoleTypeType,
  description: string,
  isAdmin: boolean,
  commentId: number,

}

const SingleCommentComponent = ({
  taskId, authorName, authorSurname, authorRole, createdAt, description, isAdmin, commentId,
}: Props) => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const onDeleteHandler = () => {
    try {
      dispatch(deleteCommentThunk(commentId));
      toast({
        title: 'Komentarz usuniety!',
        description: 'Pomyslnie usunales komentarz!!',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (e) {
      toast({
        title: 'Cos poszlo nie tak!',
        description: 'Skontaktuj sie z adminem!',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const modalProps: ModalProps = {
    mainButtonAction: onDeleteHandler,
    modalHeader: 'Usuń komentarz',
    modalBody: <h1>Czy na pewno chcesz usunac ten komentarz?</h1>,
    buttonText: 'Usuń',
    modalIcon: <DeleteIcon color="red.500" boxSize={6} />,
    modalActionButtonText: 'Usuń',

  };

  return (
    <Wrapper>
      {isAdmin && (
      <ModalWrapper>
        <ModalComponent modalProps={modalProps} />
      </ModalWrapper>
      )}
      <TaskCreatedWrapper>

        <TaskCreatedInfo>
          <FontBold>ID Usługi:</FontBold>
          <TaskId>
            <p>{taskId}</p>
            <Icon onClick={() => navigate(`/tasks/${taskId}`, { replace: true })} />
          </TaskId>

        </TaskCreatedInfo>
        <TaskCreatedInfo>
          <FontBold>Utworzony:</FontBold>
          <p> {createdAt}</p>

        </TaskCreatedInfo>

      </TaskCreatedWrapper>
      <FontBold>Autor:</FontBold>
      <AuthorDetails>
        <p>{authorName} {authorSurname}</p>
        <RoleTagComponent role={authorRole} />
      </AuthorDetails>
      <Description>
        <FontBold>Opis:</FontBold>
        <p>{description}</p>
      </Description>

    </Wrapper>
  );
};

export default SingleCommentComponent;
