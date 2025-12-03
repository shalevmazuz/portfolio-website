import './Footer.css'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-content">
                <h2>Let's build something great.</h2>
                <p>Open for new opportunities.</p>
                <a href="mailto:shalevmazuz@gmail.com" className="email-link">
                    <EmailIcon fontSize='small' />
                    shalevmazuz@gmail.com
                </a>
                <div className="phone-number">
                    <PhoneIcon fontSize='small' />
                    +972 50-951-8297
                </div>
                <div className="footer-copyright">
                    © {new Date().getFullYear()} Shalev Mazuz. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer