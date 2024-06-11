import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import PageHeaderComponent from '../../components/pageHeader.component.tsx';
import CommentsWrapperComponent from './components/commentsWrapper.component.tsx';
import SingleCommentComponent from './components/singleComment.component.tsx';
import { useAppSelector } from '../../utils/hooks.ts';
import { getAllComments } from '../../store/commentsSlice.tsx';
import { getUserDetails } from '../../store/userSlice.tsx';
import { RoleType } from '../../types/UserType.ts';
import { mapDateToString } from '../../utils/mappers/mapDateToString.ts';
import MessageComponent from '../../components/message.component.tsx';
import CountHeaderComponent from '../HomePage/components/adminHomePage/systemInfo/count/countHeader.component.tsx';
import ClientItemsCountComponent from '../../components/clientItemsCount.component.tsx';
import PageItemsCountComponent from '../../components/pageItemsCount.component.tsx';

const CommentPageContainer = () => {
  const comments = useAppSelector(getAllComments);
  const loggedUser = useAppSelector(getUserDetails);
  console.log('co,ments', comments);

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
      isAdmin
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
        <PageHeaderComponent text="Comments" />
        <MessageComponent message="There are no comments in the system" />
      </PageWrapperComponent>
    );
  }

  if (loggedUser.userRole === RoleType.CLIENT) {
    return (
      <PageWrapperComponent>
        <PageHeaderComponent text="Comments" />
        <ClientItemsCountComponent count={clientComments.length} itemName="support requests" />
        <CommentsWrapperComponent>
          {clientComponents}
        </CommentsWrapperComponent>
      </PageWrapperComponent>
    );
  }

  if (loggedUser.userRole === RoleType.ADMIN) {
    return (
      <PageWrapperComponent>
        <PageHeaderComponent text="Comments" />
        <PageItemsCountComponent count={comments.length} text="comments" />
        <CommentsWrapperComponent>
          {adminComponents}
        </CommentsWrapperComponent>
      </PageWrapperComponent>
    );
  }

  if (loggedUser.userRole === RoleType.WORKER) {
    return (
      <PageWrapperComponent>
        <PageHeaderComponent text="Comments" />
        <PageItemsCountComponent count={comments.length} text="comments" />
        <CommentsWrapperComponent>
          {workerComponents}
        </CommentsWrapperComponent>
      </PageWrapperComponent>
    );
  }
};

export default CommentPageContainer;
