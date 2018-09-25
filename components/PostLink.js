import Link from "next/link";

export default props => (
  <Link href={`/movie?id=${props.id}`} as={`/movie/${props.id}`}>
    <a>{props.title}</a>
  </Link>
);
