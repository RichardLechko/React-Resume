// src/components/Publications.js

const publicationsData = [
  {
    title: "Fractional Reserve Banking and Its Evil Actions",
    authors: "Lechko, Richard, Block, Walter",
    isbn: "9798327075924",
  },
  // Add more publications here as needed
];

const Publications = () => {
  return (
    <section
      className="flex flex-col overflow-x-hidden px-4 md:px-8 lg:px-16"
      id="publications"
    >
      <div className="mx-auto flex flex-col gap-6 text-center">
        <h1 className="text-4xl mb-4 font-bold max-[640px]:text-3xl max-[425px]:text-2xl">
          Publications:
        </h1>

        {publicationsData.map((publication, index) => (
          <div
            key={index}
            className="text-xl mb-24 font-semibold max-[425px]:text-base"
          >
            <p className="text-center text-xl">
              {publication.title}: {publication.authors} - ISBN:{" "}
              {publication.isbn}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
