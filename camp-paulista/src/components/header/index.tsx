import styles from "./style.module.css";

export function Header() {
    return (
      <header className={styles.header}>
        <h1>Tabelas do Paulistão</h1>
        <nav>
          <ul>
            <li>
              <a href="">Primeira fase</a>
              <a href="">Segunda fase</a>
              <a href="">Terceira fase</a>
              <a href="">Quarta fase</a>
              <a href="">Quinta fase</a>
            </li>
          </ul>
        </nav>
      </header>
    );
}