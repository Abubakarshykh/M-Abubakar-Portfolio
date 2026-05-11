import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend & AI Intern</h4>
                <h5>Eveness</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Designed and optimized FastAPI CRUD endpoints, improving backend data processing efficiency. Implemented secure JWT-based authentication and developed AI-driven prototype tools using Python and LLM integrations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Byte Vision Tech</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built reusable React and Next.js UI components and integrated REST APIs with robust error handling. Implemented performance optimization techniques including lazy loading and code splitting.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Frontend Developer</h4>
                <h5>WeTeck</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Converted Figma design systems into responsive web pages using Tailwind CSS and modern frontend practices. Collaborated with teams using Git and GitHub workflows to streamline code reviews.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>OOPTech</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed responsive UI interfaces for eCommerce platforms and internal portal systems. Optimized frontend performance by reducing unnecessary DOM updates and improving asset loading strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
