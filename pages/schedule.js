import Datepicker from "../components/Datepicker/Datepicker";
import Header from "../components/Header/Header";
import Table from "../components/Table/Table";

export default function Schedule() {
    return <div>
        <Header title={'Today'} subtitle={'8 January, 2022'} />

        <Datepicker />

        <Table />
    </div>
}
