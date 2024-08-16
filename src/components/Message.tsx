import styles from "./Message.module.css";

export function Message({ message }: any) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}
