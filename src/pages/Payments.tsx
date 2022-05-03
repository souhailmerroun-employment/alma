import { useQuery } from "react-query";
import { API_GET_PAYMENTS } from "../api/payments";

export default function About() {

    const { isLoading, data } = useQuery("payments", API_GET_PAYMENTS);

    console.log({ isLoading });
    console.log({ data });

    return (
        <>
            <h1>Payments</h1>
        </>
    )
}