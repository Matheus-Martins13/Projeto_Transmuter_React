import styles from './Header.module.css';

function Header() {
  return (
    <header id={styles.header}>
      <h1>
        <a
          className={styles.title}
          href="http://localhost:3000">
          TRANSMUTER
        </a>
      </h1>
    </header>
  );
}

export default Header;
