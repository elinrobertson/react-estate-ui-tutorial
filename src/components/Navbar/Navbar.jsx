import { useState } from "react";
import "./Navbar.scss";
import { IoMenu, IoClose } from "react-icons/io5";




function Navbar() {

    const [open, setOpen ] = useState(false);

    return(
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="logo" />
                    <span>RealEstate</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
            <a href="/">Sign in</a>
            <a href="/" className="register">Sign up</a>
            <div className="menuIcon" onClick={() =>    setOpen((prev) => !prev)}>
                    {open ? <IoClose  color="#f2f2f2" /> : <IoMenu />}
                </div>
            <div className={open ? "menu active" : "menu"}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
                <a href="/">Sign in</a>
                <a href="/">Sign up</a>
            </div>
            </div>
        </nav>
    )
}

export default Navbar