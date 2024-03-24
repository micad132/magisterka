import { Link } from 'react-router-dom';

interface Props {
  path: string,
  text: string,
}

const SingleLink = ({ path, text }: Props) => (
  <Link to={path}>{text}</Link>
);

export default SingleLink;
