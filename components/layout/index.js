import Link from "next/link";
import Head from "next/head";
import AppBar from "../app-bar";
import styles from "../../styles/Home.module.css";

export default function Layout({
  children,
  title = "This is the default title",
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppBar />
      <div className={styles.container}>{children}</div>
      <footer>{"I`m here to stay"}</footer>
    </div>
  );
}
