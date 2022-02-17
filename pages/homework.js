import Datapanel from "../components/Datapanel/Datapanel";
import Header from "../components/Header/Header";
import Subheader from "../components/Subheader/Subheader";


export default function Homework() {
    return <div>
        <Header title={'Homework'} subtitle={'8 January, 2022'} />

        <Subheader text={'Tomorrow'} />
        <Datapanel title={'Geometry'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'} date={'12 January 2022'} />

        <Subheader text={'9 January, 2022'} />

        <Datapanel title={'Algebra'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'} date={'12 January 2022'} />
        <Datapanel title={'Geometry'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'} date={'12 January 2022'} />

        <Subheader text={'9 January, 2022'} />

        <Datapanel title={'Algebra'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'} date={'12 January 2022'} />
        <Datapanel title={'Geometry'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'} date={'12 January 2022'} />
    </div>
}
