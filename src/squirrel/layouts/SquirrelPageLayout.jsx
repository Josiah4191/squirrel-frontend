import './SquirrelPageLayout.css'
import SquirrelBreadcrumb from "../components/shared/SquirrelBreadcrumb.jsx";

export default function SquirrelPageLayout({title, subtitle, description, children, breadcrumb}) {
    return (
        <section className="section">
            <div className="grid page-margin">
                <SquirrelBreadcrumb breadcrumb={breadcrumb}/>
                <header className="squirrel-page-header">
                    <h1 className="squirrel-page-title">{title}</h1>
                    <p className="squirrel-page-description">{description}</p>
                </header>
                <h2 className="squirrel-page-subtitle">{subtitle}</h2>
                {children}
            </div>
        </section>
    )
}