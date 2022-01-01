import { Link } from "react-router-dom";

const NavBar = () =>{
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="/home"> <a className="nav-link active" aria-current="page" to=""> Home</a></Link>
                </li>
                <li className="nav-item">
                    <Link to="/listCustomer"> <a className="nav-link" href="#">Inforamtion</a></Link>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Customer
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li  className="dropdown-item"><Link to="/createCustomer">Create Customer</Link></li>
                    <li className="dropdown-item"><Link to="/list">List Customers</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link to="/"><a className="dropdown-item" href="#">Update Customer</a></Link></li>
                    <Link to="/"><li><a className="dropdown-item" href="#">Delete Customer</a></li></Link>
                </ul>
                </li>
                
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
        );
}
export default NavBar;