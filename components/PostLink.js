import Link from "next/link";

export default props => (
  <Link href={`/post?title=${props.title}`} as={`/post/${props.title}`}>
    <a>{props.title}</a>
  </Link>
);
