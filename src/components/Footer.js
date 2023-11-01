const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex-shrink-0 "> {/* Apply flex-shrink-0 class */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        Created with ❤️
        <i className="fas fa-heart text-red-500"></i> by{" "}
        <a
          href="https://www.linkedin.com/in/mayur-patel-b8b0bb23a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Mayur Patel
        </a>{" "}
        &copy; {year} <strong>Foodie</strong>
      </footer>
    </div>
  );
};

export default Footer;
