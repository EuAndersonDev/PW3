import styles from "./style.module.css";

export function Header() {
    return (
      <header className={styles.header}>
        <h1>Tabelas do Paulistão</h1>
        <nav>
          <ul>
            <li>
              <a href="#fase-de-grupos">Fase de grupos</a>
              <a href="#quartas">Quartas de Final</a>
              <a href="#semifinal">Semifinal</a>
              <a href="#final">Final</a>
            </li>
          </ul>
        </nav>
      </header>
    );
}