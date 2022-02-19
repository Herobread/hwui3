import styles from './Datapanel.module.css'
import Calendar from './../../public/icons/calendar.svg'

export default function Datapanel({ title, description, date }) {
    return <section className={styles.container}>
        <h4 className={styles.header}>{title}</h4>
        <p className={styles.description}>{description}</p>
        <Calendar />
        <date className={styles.date}>{date}</date>
    </section>
}
