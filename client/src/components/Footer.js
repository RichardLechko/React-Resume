const Footer = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="mt-8 py-8 px-4 text-center bg-[#f5f3f5] dark:bg-[#2c2c2c] border-t border-[#bcbcbc] dark:border-[#6b4f4f]">
      <div className="max-w-screen-xl mx-auto relative z-10">
        <h1 className="text-4xl max-[640px]:text-3xl font-bold mb-4 text-[#333333] dark:text-[#ffffff]">
          Richard Lechko
        </h1>
        <p className="pb-4 text-lg max-[640px]:text-base max-[425px]:text-sm text-[#333333] dark:text-[#ffffff]">
          &copy; {new Date().getFullYear()} Richard Lechko | All Rights Reserved
        </p>
        <p className="text-sm text-[#333333] dark:text-[#ffffff]">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
