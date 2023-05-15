import { Link } from "react-router-dom";

function Header () {
    return(
        <div>
            <Link to="/">Lenta</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}
export default Header;