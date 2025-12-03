import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">SHALEV MAZUZ</div>
            <div className="nav-links">
                <a href="#projects" className="nav-link">Work</a>
                <a href="#contact" className="nav-link">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar