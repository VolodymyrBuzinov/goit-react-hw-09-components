import styles from './startPage.module.css';

export default function StartPage() {
  return (
    <>
      <div className={styles.start}>
        <h1>Welcome to my Phonebook App!</h1>
        <div className={styles.loader}>Loading...</div>
      </div>
    </>
  );
}
