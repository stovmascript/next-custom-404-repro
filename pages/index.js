import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ul>
          <li>
            <Link href="/foo">
              <a>/foo</a>
            </Link>
          </li>
          <li>
            <Link href="/404">
              <a>/404</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
