import { Link } from "react-router-dom";
import { ROUTE_ABOUT, ROUTE_HOME } from "../pages/routes";

export default function Navigation() {
    return (
        <ul>
            <li><Link to={ROUTE_HOME}>Home</Link></li>
            <li><Link to={ROUTE_ABOUT}>About</Link></li>
        </ul>
    )
}