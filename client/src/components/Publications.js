const publicationsData = [
  {
    title: "Fractional Reserve Banking and Its Evil Actions",
    authors: "Lechko, Richard, Block, Walter",
    isbn: "9798327075924",
    link: "https://a.co/d/64La0PL",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="publications-section">
      <h1 className="publications-title">
        <span className="content-backdrop">Publications</span>
      </h1>
      <div className="publications-list">
        {publicationsData.map((publication, index) => (
          <div key={index} className="publication-item">
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="publication-link"
            >
              {publication.title}
            </a>
            <p className="publication-authors">{publication.authors}</p>
            <p className="publication-isbn">ISBN: {publication.isbn}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
