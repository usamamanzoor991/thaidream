const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/10 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Thai Dream Agents. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
