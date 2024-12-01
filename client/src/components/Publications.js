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
    <section id="publications">
      <h1 className="text-4xl mb-4 font-bold text-center max-[640px]:text-3xl max-[425px]:text-2xl backdrop-blur-sm">
        Publications:
      </h1>

      <div className="flex flex-col items-center gap-6 rounded-xl">
        {publicationsData.map((publication, index) => (
          <div
            key={index}
            className="bg-[#f2f1ef] dark:bg-gray-700 flex flex-col gap-4 rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105 w-full max-w-md text-center"
          >
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors duration-300"
            >
              {publication.title}
            </a>
            <p className="text-lg">{publication.authors}</p>
            <p className="text-sm">ISBN: {publication.isbn}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
