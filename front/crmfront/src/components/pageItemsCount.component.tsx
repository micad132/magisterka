interface Props {
  count: number,
  text: string,
}

const PageItemsCountComponent = ({ count, text }: Props) => (
  <p>
    There are {count} {text} in system
  </p>
);

export default PageItemsCountComponent;
