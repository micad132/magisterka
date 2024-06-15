import styled from 'styled-components';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import SingleCommentComponent from './singleComment.component.tsx';
import ModalComponent from '../../../components/modals/modal.component.tsx';
import { ModalProps } from '../../../types/UtilTypes.ts';
import AddingCommentContent from './addingCommentContent.tsx';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks.ts';
import { addCommentThunk, getAllComments } from '../../../store/commentsSlice.tsx';
import { AddingComment } from '../../../types/CommentType.ts';
import { getUserDetails } from '../../../store/userSlice.tsx';
import { mapDateToString } from '../../../utils/mappers/mapDateToString.ts';
import { ActionType, AddHistory } from '../../../types/HistoryType.ts';
import { addHistoryThunk } from '../../../store/historySlice.tsx';
import { sanitizeInput } from '../../../utils/utilFunctions.ts';

const Wrapper = styled.div`
`;

const CommentsWrapper = styled.div`
  //background-color: darkcyan;
`;

interface Props {
  taskId: number,
}

const CommentsWrapperComponent = ({ taskId }: Props) => {
  const [comment, setComment] = useState<string>('');
  const dispatch = useAppDispatch();
  const loggedUser = useAppSelector(getUserDetails);
  const comments = useAppSelector(getAllComments);
  const taskComments = comments.filter((com) => com.taskId === taskId);
  const toast = useToast();

  const setCommentValue = (value: string) => {
    setComment(sanitizeInput(value));
  };

  const onAddComment = () => {
    console.log('djd');
    try {
      const addingCommentObj: AddingComment = {
        authorId: loggedUser.id,
        description: comment,
        taskId,
      };
      const historyObj: AddHistory = {
        performerId: loggedUser.id,
        historyActionType: ActionType.COMMENT,
        description: `Użytkownik ${loggedUser.username} - ${loggedUser.name} ${loggedUser.surname} stworzył komentarz pod usługą z id: ${taskId}`,
      };
      dispatch(addCommentThunk(addingCommentObj));
      dispatch(addHistoryThunk(historyObj));
      toast({
        title: 'Komentarz dodany!',
        description: 'Pomyślnie dodałeś komentarz',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (e) {
      toast({
        title: 'Something went wrong',
        description: 'Contact your admin!',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const modalProps: ModalProps = {
    mainButtonAction: onAddComment,
    modalHeader: 'Dodaj komentarz',
    modalActionButtonText: 'Dodaj',
    buttonText: 'Dodaj komentarz',
    modalBody: <AddingCommentContent value={comment} setValue={setCommentValue} />,
  };

  const commentsComps = taskComments.map((com) => <SingleCommentComponent key={com.id} authorUsername={com.authorUsername} authorSurname={com.authorSurname} authorName={com.authorName} date={mapDateToString(com.createdTime)} description={com.description} />);

  return (
    <Wrapper>
      <ModalComponent
        modalProps={modalProps}
      />
      <p>Ilość komentarzy: {taskComments.length}</p>
      <CommentsWrapper>
        {commentsComps}
      </CommentsWrapper>

    </Wrapper>
  );
};

export default CommentsWrapperComponent;
