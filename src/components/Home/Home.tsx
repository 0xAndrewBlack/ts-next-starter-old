import styles from "./Home.module.css";

import Links from "../Links/Links";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app-with-0xAndrewBlack"
              target="_blank"
              rel="noopener noreferrer">
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
          </div>
        </div>

        <Links />
      </main>
    </>
  );
}
