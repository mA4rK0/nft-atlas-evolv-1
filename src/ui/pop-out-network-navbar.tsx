const PopOutNetworkNavbar: React.FC = () => {
  return (
    <nav className="fixed top-0 right-0">
      <ul className="flex space-x-6">
        <li>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PopOutNetworkNavbar;
