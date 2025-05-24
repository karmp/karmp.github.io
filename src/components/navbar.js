import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Main navigation bar wrapper - sticky at the top
    <nav className="sticky top-0 z-50 bg-transparent">
      <div className="container mx-auto mr-15 h-20 flex items-center justify-end"> 
        <button
          onClick={toggleMenu}
          className="text-black z-50"
          aria-expanded={isOpen} // Accessibility attribute
          aria-controls="mobile-menu" // Accessibility attribute
        >
          {/* Animated Hamburger/Close Icon (using a simpler SVG for clarity) */}
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Off-Canvas Menu - Slides in from the left */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full bg-white text-black w-64 p-8 pt-20
                     transform transition-transform duration-300 ease-in-out z-40
                     ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <ul className="flex flex-col space-y-6">
          <li>
            <Link href="#about" onClick={toggleMenu} className="text-xl hover:text-slate-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#experience" onClick={toggleMenu} className="text-xl hover:text-slate-400 transition-colors">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#projects" onClick={toggleMenu} className="text-xl hover:text-slate-400 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={toggleMenu} className="text-xl hover:text-slate-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay to close menu when clicking outside*/}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
          aria-hidden="true" // Hide from screen readers
        ></div>
      )}
    </nav>
  );
}