interface Props {
  header: string,
}

const CountHeaderComponent = ({ header }: Props) => (
  <span>{header}</span>
);

export default CountHeaderComponent;
