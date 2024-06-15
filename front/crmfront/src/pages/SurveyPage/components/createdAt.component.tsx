interface Props {
  createdDate: string,
}

const CreatedAtComponent = ({ createdDate }: Props) => (
  <p>Utworzona: {createdDate}</p>
);

export default CreatedAtComponent;
