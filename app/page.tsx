import Image from "next/image";
import styles from "./page.module.css";
import { Email } from "./components/Email";

export default function Home() {
  return (
    <main>
      <Email />
    </main>
  );
}
