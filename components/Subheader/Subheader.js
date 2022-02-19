import styles from './Subheader.module.css'

export default function Subheader({ text }) {
    return <>
        <h3 className={styles.header}>{text}</h3>
    </>
}
