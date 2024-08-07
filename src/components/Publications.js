const Publications = () => {
  return (
    <section
      className="container flex flex-col m-auto main-content"
      id="publications"
    >
      <div className="mt-16 mx-auto justify-around px-16 py-0 flex flex-wrap gap-6 ">
        <h1 className="text-4xl mb-8 font-bold text-center">Publications:</h1>

        <div className="text-black mb-24 text-xl leading-10 font-semibold">
          <p className="text-center">
            Fractional Reserve Banking and Its Evil Actions: Lechko, Richard,
            Block, Walter: 9798327075924: Amazon.com: Books.
            <a
              className="text-blue-700"
              href="https://a.co/d/0f0FvAGN"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              a.co/d/0f0FvAGN
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Publications;
