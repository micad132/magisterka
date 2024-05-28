import styled from 'styled-components';

const Wrapper = styled.div`
  width: 400px;
  border: 2px solid teal;
  border-left: 20px solid teal;
  padding: 5px 0;

  h2{
    font-weight: bold;
    padding-bottom: 10px;
    font-size: 1.1rem;
  }
  
  span{
    font-weight: bold;
  }
  
`;

const AssigneeDetailsComponent = () => (
  <Wrapper>
    <h2>Assignee:</h2>
    <p><span>Assignee</span> mikad132</p>
    <p><span>Username:</span> mikad132</p>
    <p><span>Age:</span> 27</p>
    <p><span>From:</span> Germany</p>
  </Wrapper>
);

export default AssigneeDetailsComponent;
