import { useParams } from 'react-router-dom';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import CommentsWrapperComponent from './comments/commentsWrapper.component.tsx';
import PageHeaderComponent from '../../components/pageHeader.component.tsx';

const SingleTaskPageContainer = () => {
  const { id } = useParams();
  return (
    <PageWrapperComponent>
      <PageHeaderComponent text="Task details" />
      <h1>ID TASKA {id}</h1>
      <CommentsWrapperComponent />
    </PageWrapperComponent>
  );
};

export default SingleTaskPageContainer;
