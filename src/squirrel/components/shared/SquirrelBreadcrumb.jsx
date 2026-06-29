import "./SquirrelBreadcrumb.css";
import {NavLink} from "react-router-dom";

export default function SquirrelBreadcrumb({breadcrumb = []}) {
    return (
        <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
                {breadcrumb.map((crumb) => {
                    return (
                        <li key={crumb.label}>
                            {crumb.path
                                ? <NavLink to={crumb.path}>{crumb.label}</NavLink>
                                : crumb.label}
                        </li>
                    )})}
            </ol>
        </nav>
    )
}