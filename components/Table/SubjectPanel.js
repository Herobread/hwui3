import styles from './SubjectPanel.module.css'

export default function SubjectPanel({ title, subtitle, info, isActive }) {
    const containerStyle = isActive ? styles.container + ' ' + styles.containerActive : styles.container
    const circleStyle = isActive ? styles.circle : styles.circle
    const lineStyle = isActive ? styles.line : styles.line

    const headerStyle = isActive ? styles.header + ' ' + styles.headerActive : styles.header
    const subHeaderStyle = isActive ? styles.subHeader + ' ' + styles.subHeaderActive : styles.subHeader
    const infoStyle = isActive ? styles.info + ' ' + styles.infoActive : styles.info

    return <>
        <div className={styles.timelineContainer}>
            <div className={circleStyle}></div>
            <div className={lineStyle}></div>
        </div>
        <div className={styles.wrapper}>
            <section className={containerStyle}>
                <h4 className={headerStyle}>{title}</h4>
                <p className={subHeaderStyle}>{subtitle}</p>
                <div className={infoStyle}>{info}</div>
            </section>
        </div>
    </>
}
