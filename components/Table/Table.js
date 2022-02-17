import SubjectPanel from "./SubjectPanel";
import styles from './Table.module.css'

export default function Table() {
    return <div className={styles.container}>
        <SubjectPanel title={'P.E.'} subtitle={'Gym'} info={'10:20'} isActive={false} />
        <SubjectPanel title={'Ukrainian literature'} subtitle={'121'} info={'11:15'} isActive={false} />
        <SubjectPanel title={'Geometry'} subtitle={'121'} info={'05:32'} isActive={true} />
        <SubjectPanel title={'Ukrainian literature'} subtitle={'121'} info={'11:15'} isActive={false} />
        <SubjectPanel title={'Algebra '} subtitle={'121'} info={'11:15'} isActive={false} />
        <SubjectPanel title={'Geometry'} subtitle={'121'} info={'11:15'} isActive={false} />
    </div>
}