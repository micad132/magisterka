interface Props {
  count: number,
  text: string,
}

const PageItemsCountComponent = ({ count, text }: Props) => (
  <p>
    W systemie znajduje się {count} {text}
  </p>
);

export default PageItemsCountComponent;
