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
    <section
      className="flex flex-col items-center overflow-hidden px-4 md:px-8 lg:px-16 mb-20 pb-8"
      id="publications"
    >
      <h1 className="text-4xl mb-4 font-bold text-center max-[640px]:text-3xl max-[425px]:text-2xl">
        Publications:
      </h1>

      <div className="flex flex-col items-center gap-6">
        {publicationsData.map((publication, index) => (
          <div
            key={index}
            className="bg-gray-700 flex flex-col gap-4 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 w-full max-w-md text-center hover:rounded-xl"
          >
            <a
              href={publication.link}
              target="_blank"
              className="text-xl font-semibold text-[#e2e8f0] hover:text-blue-400 hover:underline transition-colors duration-300"
            >
              {publication.title}
            </a>
            <p className="text-lg text-gray-300">{publication.authors}</p>{" "}
            {/* Changed to gray-300 */}
            <p className="text-sm text-gray-400">
              ISBN: {publication.isbn}
            </p>{" "}
            {/* Changed to gray-400 */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
