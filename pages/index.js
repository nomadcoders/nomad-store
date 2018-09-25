import Head from "next/head";
import Link from "next/link";

export default () => (
  <div>
    <Head>
      <title>Home | Nomad Store</title>
    </Head>
    <h1>Hello from the index</h1>{" "}
    <Link href={"/about"}>
      <a>About page</a>
    </Link>
  </div>
);
