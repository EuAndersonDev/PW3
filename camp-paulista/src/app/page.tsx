import faseDeGrupos from '../../public/data/faseDeGrupos.json';
import { Table } from '../components/TablePrimeira';
import styles from './page.module.css';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className={styles.titulo}>Grupo A</h1>
      <Table grupo={faseDeGrupos.grupoA} />
      <h1 className={styles.titulo}>Grupo B</h1>
      <Table grupo={faseDeGrupos.grupoB} />
      <h1 className={styles.titulo}>Grupo C</h1>
      <Table grupo={faseDeGrupos.grupoC} />
      <h1 className={styles.titulo}>Grupo D</h1>
      <Table grupo={faseDeGrupos.grupoD} />
      <Footer />
    </div>
  );

}