import './Education.css'

const Education = () => {
    const educationData = [
        {
            school: "Tel Aviv University",
            degree: "B.Sc. Computer Science",
            year: "2021 - 2025",
            courses: ["Data Structures", "Algorithms", "Operating Systems", "Database Systems", "Big Data Systems", "Intro to Machine Learning", "NLP", "Workshop in ML", "Software project", "Advanced topics in programming"]
        }
    ];

    return (
        <section id="education" className="education-section">
            <h2 className="section-title">Education</h2>

            <div className="education-grid">
                {educationData.map((edu, index) => (
                    <div key={index} className="education-card">
                        <div className="edu-header">
                            <h3 className="school-name">{edu.school}</h3>
                            <span className="edu-year">{edu.year}</span>
                        </div>
                        <p className="degree-name">{edu.degree}</p>

                        <div className="course-list">
                            <span className="course-label">Key Coursework:</span>
                            {edu.courses.map((course, i) => (
                                <span key={i} className="course-tag">{course}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education