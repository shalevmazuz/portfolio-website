import './Footer.css'

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-content">
                <h2>Let's build something great.</h2>
                <p>Open for new opportunities.</p>
                <a href="mailto:shalevmazuz@gmail.com" className="email-link">
                    shalevmazuz@gmail.com
                </a>
                <div className="footer-copyright">
                    © {new Date().getFullYear()} Shalev Mazuz. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer