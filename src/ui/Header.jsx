import { Link } from "react-router-dom";
function Header() {
    return (
        <header>
            <Link to='/'>
                Fast Pizza Co.
            </Link>
            <p>JC</p>
        </header>
    );
}

export default Header;