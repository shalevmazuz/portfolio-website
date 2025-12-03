import './Hero.css'

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <h1>
                    Shalev Mazuz
                </h1>
                <p className="hero-subtitle">
                    I am a Computer Science graduate from Tel Aviv University seeking entry-level opportunities in software
                    development. I bring a strong foundation in programming and a desire to apply my skills to real-world challenges while
                    contributing to innovative projects.
                </p>
                <a href="public\Resume-Shalev Mazuz.pdf" className="cta-button" download="Resume-Shalev Mazuz.pdf">Download Resume</a>
            </div>
        </section>
    )
}

export default Hero