interface Props {
  count: number,
  itemName: string,
  name: string,
  surname: string,
}

const ClientItemsCountComponent = ({
  count, itemName, name, surname,
}: Props) => (
  <p>
    Jako {name} {surname} posiadasz {count} {itemName}
  </p>
);

export default ClientItemsCountComponent;
