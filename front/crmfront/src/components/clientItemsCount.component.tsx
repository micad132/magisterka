interface Props {
  count: number,
  itemName: string,
}

const ClientItemsCountComponent = ({ count, itemName }: Props) => (
  <p>
    You have {count} {itemName} in system
  </p>
);

export default ClientItemsCountComponent;
