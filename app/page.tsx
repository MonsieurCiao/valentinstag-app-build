import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainButtonContainer}>
        <Link className={styles.displayButton} href={"/display"}>
          Display
        </Link>
        <Link className={styles.eingabeButton} href={"/eingabe"}>
          Eingabe
        </Link>
      </div>
    </div>
  );
}
