import React from "react";
import styles from "./styles.module.css"

const Destaques = () => {
    return (
        <section className={styles.destaques}>
            <div className={`${styles.destaques__principal} ${styles.caixa}`}>
                <h3 className={styles.destaques__titulo}>Fornite</h3>
            </div>
            <div className={`${styles.destaques__secundario} ${styles.caixa}`}>
                <h3 className={styles.destaques__titulo}>PUBG</h3>
            </div>
            <div className={`${styles.destaques__secundario} ${styles.caixa}`}>
                <h3 className={styles.destaques__titulo}>Slack</h3>
            </div>
            <div className={`${styles.destaques__secundario} ${styles.caixa}`}>
                <h3 className={styles.destaques__titulo}>Whatsapp</h3>
            </div>
            <div className={`${styles.destaques__secundario} ${styles.caixa}`}>
                <h3 className={styles.destaques__titulo}>CS: GO</h3>
            </div>
            <div className={styles.destaques__categorias}>
                <ul className={styles.destaques__categorias___lista}>
                    <li className={styles.destaques__categorias___item}>
                        <a className={styles.destaques__categorias___link} href="#">
                            <i className={`${styles.destaques__categorias___icone} ${styles.fab} ${styles.faburomobelexperte}`}></i>
                            Aplicativos populares
                        </a>
                    </li>
                    <li className={styles.destaques__categorias___item}>
                        <a className={styles.destaques__categorias___link} href="#">
                            Jogos populares
                        </a>
                    </li>
                    <li className={styles.destaques__categorias___item}>
                        <a className={styles.destaques__categorias___link} href="#">
                            Em Destaque
                        </a>
                    </li>
                    <li className={styles.destaques__categorias___item}>
                        <a className={styles.destaques__categorias___link} href="#">
                            Lançamentos
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Destaques;