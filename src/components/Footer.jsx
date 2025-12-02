import './Footer.css'

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-content">
                <h2>Let's build something great.</h2>
                <p>Open for new opportunities.</p>
                <a href="mailto:alex@lumina.so" className="email-link">
                    alex@lumina.so
                </a>
                <div className="footer-copyright">
                    © {new Date().getFullYear()} Lumina. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer