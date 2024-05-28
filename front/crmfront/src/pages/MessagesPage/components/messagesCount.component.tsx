interface Props {
  count: number,
  isAdmin: boolean,
}

const MessagesCountComponent = ({ count, isAdmin }: Props) => {
  const properMessage = isAdmin
    ? <p>There are total of {count} messages in system!</p>
    : <p>You have {count} messages</p>;
  return (
    <div>
      {properMessage}
    </div>
  );
};

export default MessagesCountComponent;
