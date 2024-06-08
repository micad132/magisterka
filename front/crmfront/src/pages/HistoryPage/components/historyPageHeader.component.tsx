interface Props {
  text: string,
}

const HistoryPageHeaderComponent = ({ text }: Props) => (
  <div>
    <h2>{text}</h2>
  </div>
);

export default HistoryPageHeaderComponent;
