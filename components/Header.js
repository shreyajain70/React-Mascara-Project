import { Link } from "react-router"
export const Header = () => {
    return (
        <>
            <nav className="main-container">
                <div className="logo-container">
                    <img className="logo" src="https://i.pinimg.com/736x/20/69/61/2069611af4aab0e9c605ae130bebd5c1.jpg"></img>
                </div>
                <div className="items">
                    <ul className="nav-ul">
                        <Link to={'/'}> <li className="nav-li">Home</li></Link>
                        <Link to={'/AboutUs'}><li className="nav-li">About Us</li></Link>
                        <Link to={'/Contact'}> <li className="nav-li">Contact</li></Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}