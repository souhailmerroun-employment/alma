import { useQuery } from "react-query";

type Merchant = {
    name: string;
}

type Payment = {
    status: string,
    id: string,
    created: Date,
    customer_name: string,
    merchant: Merchant
    amount: number
    installmentsCount: number
}

const GET_PAYMENTS = async (): Promise<Payment[]> => {
    const res = await fetch('https://cloudrun-frontend-recruitment-test-5hhyjiivra-ew.a.run.app/payments')
    return res.json();
}

export default function About() {

    const { isLoading, data } = useQuery("payments", GET_PAYMENTS);

    console.log({ isLoading });
    console.log({ data });

    return (
        <>
            <h1>Payments</h1>
        </>
    )
}