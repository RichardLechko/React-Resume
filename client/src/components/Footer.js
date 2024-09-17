// Footer.js

const Footer = ({ refs }) => {
  return (
    <footer className="bg-[#002240] text-[#fff] py-8 px-4 text-center overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-mono text-3xl font-bold mb-4 sm:text-2xl xs:text-xl">
          Richard Lechko
        </h1>
        <p className="pb-4 text-gray-400 text-lg sm:text-base xs:text-sm">
          &copy; {new Date().getFullYear()} Richard Lechko | All Rights Reserved
        </p>
        <LastModified />
      </div>
    </footer>
  );
};

const LastModified = () => {
  const lastModified = new Date(document.lastModified);
  const formattedDate = `${
    lastModified.getMonth() + 1
  }/${lastModified.getDate()}/${lastModified.getFullYear()}`;
  return (
    <div className="text-gray-400">
      <p>Last Modified: {formattedDate}</p>
    </div>
  );
};

export default Footer;
