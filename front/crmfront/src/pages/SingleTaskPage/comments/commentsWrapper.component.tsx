import styled from 'styled-components';
import SingleCommentComponent from './singleComment.component.tsx';

const Wrapper = styled.div`
`;

const CommentsWrapperComponent = () => (
  <Wrapper>
    Comments count: 3
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

export default CommentsWrapperComponent;
