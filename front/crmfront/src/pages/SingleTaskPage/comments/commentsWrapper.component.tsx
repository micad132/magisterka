import styled from 'styled-components';
import { useState } from 'react';
import SingleCommentComponent from './singleComment.component.tsx';
import ModalComponent from '../../../components/modals/modal.component.tsx';
import { ModalProps } from '../../../types/UtilTypes.ts';
import TextareaComponent from '../../../components/form/textarea.component.tsx';
import AddingCommentContent from './addingCommentContent.tsx';

const Wrapper = styled.div`
`;

const CommentsWrapperComponent = () => {
  const [comment, setComment] = useState<string>('');

  const onAddComment = () => {
    console.log('djd');
  };

  const modalProps: ModalProps = {
    mainButtonAction: onAddComment,
    modalHeader: 'Add comment',
    modalActionButtonText: 'Add',
    buttonText: 'Add comment',
    modalBody: <AddingCommentContent value={comment} setValue={setComment} />,
  };

  return (
    <Wrapper>
      <ModalComponent
        modalProps={modalProps}
      />
      <p>Comments count: 3</p>
      <SingleCommentComponent
        authorName="mikad132"
        date="24.03.2024 17:32"
        description="LOREM IPSUM COSIK"
      />
      <SingleCommentComponent
        authorName="mikad132"
        date="24.03.2024 17:32"
        description="LOREM IPSUM COSIK"
      />
      <SingleCommentComponent
        authorName="mikad132"
        date="24.03.2024 17:32"
        description="LOREM IPSUM COSIKLOREM IPSUM COSIKLOREM IPSUM COSIKLOREM IPSUM COSIKLOREM IPSUM COSIKLOREM IPSUM COSIKLOREM IPSUM COSIKLOREM IPSUM COSIKLOREM IPSUM COSIKLOREM IPSUM COSIKLOREM IPSUM COSIKLOREM IPSUM COSIKLOREM IPSUM COSIK"
      />
    </Wrapper>
  );
};

export default CommentsWrapperComponent;
