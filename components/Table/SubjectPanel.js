import styles from './SubjectPanel.module.css'

export default function SubjectPanel({ title, subtitle, info, isActive }) {

    const containerStyle = isActive ? styles.container + ' ' + styles.containerActive : styles.container
    const circleStyle = isActive ? styles.circle : styles.circle
    const lineStyle = isActive ? styles.line : styles.line

    return <>
        <div className={styles.timelineContainer}>
            <div className={circleStyle}></div>
            <div className={lineStyle}></div>
        </div>
        <div className={styles.wrapper}>
            <section className={containerStyle}>
                <h4>{title}</h4>
                <p>{subtitle}</p>
                <div>{info}</div>
            </section>
        </div>
    </>
}
