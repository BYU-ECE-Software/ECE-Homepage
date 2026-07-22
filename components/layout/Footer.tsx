import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

// Footer bar to be used on every page
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#002E5D] px-6 py-8 text-white">
      <div className="grid grid-cols-1 items-start gap-4 px-4 md:grid-cols-3 md:px-32">
        {/* Left Section: Helpful Links */}
        <div className="text-center">
          <h2 className="text-xl font-bold">Helpful Links</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a
                href="https://www.byu.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                BYU Homepage
              </a>
            </li>
            <li>
              <a
                href="https://www.byu.edu/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.byu.edu/accessibility"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Accessibility
              </a>
            </li>
            <li>
              <a
                href="https://www.ece.byu.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                ECE Department
              </a>
            </li>
          </ul>
        </div>

        {/* Middle Section: University Info */}
        <div className="text-center">
          <h1 className="text-xl font-bold">Brigham Young University</h1>
          <p className="mt-2 text-sm text-white">
            450 Engineering Building
            <br />
            Provo, UT 84602
            <br />
            (801) 422-4012
          </p>
        </div>

        {/* Right Section: Social Media */}
        <div className="text-center">
          <h2 className="text-xl font-bold">Connect With Us</h2>
          <div className="mt-2 flex justify-center space-x-4">
            <a
              href="https://www.facebook.com/BYUECEn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/byu_ecen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UCj2sMA0jEfi8oYhgX6h5g5A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/groups/1826750/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.linkedin.com/groups/150520/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Disclaimer */}
      <div className="mt-8 text-center text-xs text-gray-400">
        © {currentYear} Brigham Young University. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
