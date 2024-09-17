// Footer.js

const Footer = ({ refs }) => {
  return (
    <footer className="bg-[#002240] text-[#fff] p-8 text-center pl-20 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="font-mono text-3xl font-bold mb-4 max-[640px]:text-2xl max-[425px]:text-xl">
          Richard Lechko
        </h1>
        <p className="pb-4 text-gray-400 text-lg max-[640px]:text-base max-[425px]:text-sm">
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
