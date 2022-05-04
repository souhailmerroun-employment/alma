import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { API_GET_PAYMENT, SinglePayment } from "../api/payment";
import PaymentTable from "../components/Payment";
import { ROUTE_PAYMENTS } from "./routes";

type PaymentTableRenderProps = {
    isLoading: boolean;
    data: SinglePayment | undefined;
}

const PaymentTableRender = ({ isLoading, data }: PaymentTableRenderProps) => {
    if (isLoading) {
        return <p>Loading...</p>
    }

    if (data) {
        return <PaymentTable data={data} />
    }

    return null;
}

export default function Payment() {
    const { id } = useParams();

    // @ts-ignore
    const { isLoading, data } = useQuery<SinglePayment>("payment", () => API_GET_PAYMENT(id))

    return (
        <>
            <>
                <div className="container mx-auto">
                    <h1 className="text-5xl font-bold mt-0 mb-6">Payment details</h1>
                    <Link to={ROUTE_PAYMENTS}>Back</Link>
                    <PaymentTableRender isLoading={isLoading} data={data} />
                </div>
            </>
        </>
    )
}