import { useQuery } from "react-query";
import { API_GET_PAYMENTS } from "../api/payments";
import PaymentsTable from "../components/PaymentsTable";

export default function Payments() {

    const { isLoading, data } = useQuery("payments", API_GET_PAYMENTS);

    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-5xl font-bold mt-0 mb-6">Payments</h1>
                {isLoading ? <p>Loading...</p> : <PaymentsTable data={data || []} />}
            </div>
        </>
    )
}