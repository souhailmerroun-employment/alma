import { useQuery } from "react-query";
import { API_GET_PAYMENTS } from "../api/payments";
import PaymentsTable from "../components/PaymentsTable";

export default function About() {

    const { isLoading, data } = useQuery("payments", API_GET_PAYMENTS);

    console.log({ isLoading });
    console.log({ data });

    return (
        <>
            <h1>Payments</h1>
            {isLoading ? <p>Loading...</p> : <PaymentsTable data={data || []} />}
        </>
    )
}