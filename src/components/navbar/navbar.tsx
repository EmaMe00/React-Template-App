import { Link } from 'react-router-dom';
const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* La libreria Routes necessita del componente react Link per cambiare pagina e non di href */}
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/page" className="nav-link">Page1</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;