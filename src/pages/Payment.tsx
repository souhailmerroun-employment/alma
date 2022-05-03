import { Link, useParams } from "react-router-dom";
import { ROUTE_HOME, ROUTE_PAYMENTS } from "./routes";

export default function Payment() {
    const { id } = useParams();

    console.log({ id })

    return (
        <>
            <h1>Payment</h1>
            <Link to={ROUTE_PAYMENTS}>Back</Link>
        </>
    )
}