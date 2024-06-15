import { useState } from 'react';
import styled from 'styled-components';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import PageHeaderComponent from '../../components/pageHeader.component.tsx';
import CommentsWrapperComponent from './components/commentsWrapper.component.tsx';
import SingleCommentComponent from './components/singleComment.component.tsx';
import { useAppSelector } from '../../utils/hooks.ts';
import { getAllComments } from '../../store/commentsSlice.tsx';
import { getAllUsers, getUserDetails } from '../../store/userSlice.tsx';
import { RoleType } from '../../types/UserType.ts';
import { mapDateToString } from '../../utils/mappers/mapDateToString.ts';
import MessageComponent from '../../components/message.component.tsx';
import ClientItemsCountComponent from '../../components/clientItemsCount.component.tsx';
import PageItemsCountComponent from '../../components/pageItemsCount.component.tsx';
import { SelectValue } from '../../types/UtilTypes.ts';
import SelectComponent from '../../components/form/select.component.tsx';

const SelectWrapper = styled.div`
  max-width: 400px;
  margin: 20px auto;
`;

const CommentPageContainer = () => {
  const comments = useAppSelector(getAllComments);
  const loggedUser = useAppSelector(getUserDetails);
  const users = useAppSelector(getAllUsers);
  console.log('co,ments', comments);
  const [filterComments, setFilterComments] = useState<string>('');

  const mappedSelectValues: SelectValue[] = users.map((user) => ({
    text: `${user.username} - ${user.name} ${user.surname}`,
    value: user.username,
  }));

  mappedSelectValues.push({
    text: 'Wszyscy',
    value: 'all',
  });

  const clientComments = comments?.filter((comment) => comment.authorUsername === loggedUser.username);
  const clientComponents = clientComments?.map((comment) => (
    <SingleCommentComponent
      key={comment.id}
      taskId={comment.taskId}
      createdAt={mapDateToString(comment.createdTime)}
      authorName={comment.authorName}
      authorSurname={comment.authorSurname}
      authorRole={comment.authorRole}
      description={comment.description}
      isAdmin={false}
      commentId={comment.id}
    />
  ));

  const workerComponents = comments?.map((comment) => (
    <SingleCommentComponent
      key={comment.id}
      taskId={comment.taskId}
      createdAt={mapDateToString(comment.createdTime)}
      authorName={comment.authorName}
      authorSurname={comment.authorSurname}
      authorRole={comment.authorRole}
      description={comment.description}
      isAdmin={false}
      commentId={comment.id}
    />
  ));

  const filteredWorkerComponents = comments?.filter((comm) => comm.authorUsername === filterComments).map((comment) => (
    <SingleCommentComponent
      key={comment.id}
      taskId={comment.taskId}
      createdAt={mapDateToString(comment.createdTime)}
      authorName={comment.authorName}
      authorSurname={comment.authorSurname}
      authorRole={comment.authorRole}
      description={comment.description}
      isAdmin={false}
      commentId={comment.id}
    />
  ));

  const filteredAdminComponents = comments?.filter((comm) => comm.authorUsername === filterComments).map((comment) => (
    <SingleCommentComponent
      key={comment.id}
      taskId={comment.taskId}
      createdAt={mapDateToString(comment.createdTime)}
      authorName={comment.authorName}
      authorSurname={comment.authorSurname}
      authorRole={comment.authorRole}
      description={comment.description}
      isAdmin
      commentId={comment.id}
    />
  ));

  const adminComponents = comments?.map((comment) => (
    <SingleCommentComponent
      key={comment.id}
      taskId={comment.taskId}
      createdAt={mapDateToString(comment.createdTime)}
      authorName={comment.authorName}
      authorSurname={comment.authorSurname}
      authorRole={comment.authorRole}
      description={comment.description}
      isAdmin
      commentId={comment.id}
    />
  ));

  if (comments.length === 0) {
    return (
      <PageWrapperComponent>
        <PageHeaderComponent text="Komentarze" />
        <MessageComponent message="W systemie nie ma komentarzy" />
      </PageWrapperComponent>
    );
  }

  if (loggedUser.userRole === RoleType.CLIENT) {
    return (
      <PageWrapperComponent>
        <PageHeaderComponent text="Komentarze" />
        <ClientItemsCountComponent count={clientComments.length} itemName="komentarzy" name={loggedUser.name} surname={loggedUser.surname} />
        <CommentsWrapperComponent>
          {clientComponents}
        </CommentsWrapperComponent>
      </PageWrapperComponent>
    );
  }

  const properAdminComments = filterComments === 'all'
    ? adminComponents
    : filteredAdminComponents;

  if (loggedUser.userRole === RoleType.ADMIN) {
    return (
      <PageWrapperComponent>
        <PageHeaderComponent text="Komentarze" />
        <PageItemsCountComponent count={comments.length} text="komentarzy" />
        <SelectWrapper>
          <SelectComponent
            options={mappedSelectValues}
            onChange={setFilterComments}
            label="Wybierz tylko komentarze od użytkownika:"
          />
        </SelectWrapper>

        <CommentsWrapperComponent>
          {properAdminComments}
        </CommentsWrapperComponent>
      </PageWrapperComponent>
    );
  }

  const properWorkerComments = filterComments === 'all'
    ? workerComponents
    : filteredWorkerComponents;

  if (loggedUser.userRole === RoleType.WORKER) {
    return (
      <PageWrapperComponent>
        <PageHeaderComponent text="Komentarze" />
        <PageItemsCountComponent count={comments.length} text="komentarzy" />
        <SelectWrapper>
          <SelectComponent
            options={mappedSelectValues}
            onChange={setFilterComments}
            label="Wybierz tylko komentarze od użytkownika:"
          />
        </SelectWrapper>
        <CommentsWrapperComponent>
          {properWorkerComments}
        </CommentsWrapperComponent>
      </PageWrapperComponent>
    );
  }
};

export default CommentPageContainer;
