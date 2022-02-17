import styles from './header.module.css'

export default function Datapanel({ title, description, date }) {
    return <section className={styles.container}>
        <h4 className={styles.header}>{title}</h4>
        <p>{description}</p>
        <date>{date}</date>
    </section>
}
