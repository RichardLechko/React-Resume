import React from "react";

const Education = () => {
  const organizations = [
    {
      name: "DePaul Computer Science Society",
      startDate: "09/2022",
      endDate: "Present",
      description: "Engaged in various tech projects and networking events.",
    },
    {
      name: "DePaul UI/UX Association",
      startDate: "01/2024",
      endDate: "Present",
      description: "Worked on design sprints and user research initiatives.",
    },
    {
      name: "DePaul Cloud Club",
      startDate: "10/2024",
      endDate: "Present",
      description:
        "Explored cloud computing technologies and hosted workshops.",
    },
  ];

  return (
    <div>
      <section className="education">
        <h1 className="education-heading">
          <span className="content-backdrop">Education</span>
        </h1>
        <div className="education-grid">
          <div className="education-card">
            <header className="education-header">
              <h2 className="education-subheading">Current Program</h2>
            </header>
            <div className="education-details">
              <p className="education-text">
                Full-time student at{" "}
                <a
                  className="education-link"
                  href="https://www.depaul.edu/Pages/default.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DePaul University website"
                >
                  DePaul University
                </a>
              </p>
              <p className="education-text">
                Bachelor of Science in Information Technology
              </p>
              <p>
                Expected Graduation:{" "}
                <span className="education-highlight">06/2026</span>
              </p>
            </div>
          </div>

          <div className="education-card">
            <h2 className="education-subheading">GPA & Achievements</h2>
            <div className="gpa-achievements">
              <div>
                <h3 className="achievement-heading">
                  Major GPA:{" "}
                  <span className="achievement-highlight">
                    <span className="achievement-gpa">3.65</span> / 4.0
                  </span>
                </h3>
                <p className="achievement-text">3-time Dean's List Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="organizations">
        <h2 className="organizations-heading">Organizations & Activities</h2>
        <div className="organizations-grid">
          {organizations
            .sort((a, b) => {
              const dateA = new Date(a.startDate);
              const dateB = new Date(b.startDate);
              return dateB - dateA;
            })
            .map((org, index) => (
              <div key={index} className="organization-item">
                <div className="organization-details">
                  <span className="organization-name">{org.name}</span>
                  <span className="organization-dates">
                    {org.startDate} - {org.endDate}
                  </span>
                  <p className="organization-description">{org.description}</p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
