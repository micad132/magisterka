interface Props {
  count: number,
  isAdmin: boolean,
}

const MessagesCountComponent = ({ count, isAdmin }: Props) => {
  const properMessage = isAdmin
    ? <p>W systemie jest {count} wiadomości</p>
    : <p>Masz {count} wiadomości</p>;
  return (
    <div>
      {properMessage}
    </div>
  );
};

export default MessagesCountComponent;
