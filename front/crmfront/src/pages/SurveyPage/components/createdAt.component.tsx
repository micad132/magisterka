interface Props {
  createdDate: string,
}

const CreatedAtComponent = ({ createdDate }: Props) => (
  <p>Created: {createdDate}</p>
);

export default CreatedAtComponent;
