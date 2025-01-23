// // src/components/Navbar.js
// import React, { useState } from 'react';
// import './navbar.css'; // Import the CSS for styling

// const Navbar = () => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">Yoga Retreat</div>
//       <ul className="navbar-menu">
//         <li className="navbar-item">
//           <a href="/home">Home</a>
//         </li>
//         <li className="navbar-item">
//           <a href="/about">About Us</a>
//         </li>
//         <li className="navbar-item dropdown">
//           <a href="/retreats" onClick={toggleDropdown}>
//             Retreats
//             <span className="dropdown-arrow">▼</span>
//           </a>
//           {isDropdownOpen && (
//             <ul className="dropdown-menu">
//               <li><a href="/retreats/yoga">Yoga Retreats</a></li>
//               <li><a href="/retreats/meditation">Meditation Retreats</a></li>
//               <li><a href="/retreats/fitness">Fitness Retreats</a></li>
//             </ul>
//           )}
//         </li>
//         <li className="navbar-item">
//           <a href="/blog">Blog</a>
//         </li>
//         <li className="navbar-item">
//           <a href="/contact">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import './navbar.css'; // Import the CSS for styling

// const Navbar = () => {
//   const [isRetreatsDropdownOpen, setRetreatsDropdownOpen] = useState(false);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleRetreatsDropdown = (event) => {
//     event.preventDefault(); // Prevent default link behavior
//     setRetreatsDropdownOpen(!isRetreatsDropdownOpen);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <div className="navbar-logo">Yoga Retreat</div>
//         <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
//           <li className="navbar-item dropdown">
//             <a 
//               href="/retreats" 
//               onClick={toggleRetreatsDropdown}
//               aria-expanded={isRetreatsDropdownOpen} 
//               aria-controls="retreats-dropdown-menu"
//             >
//               Retreats
//               <span className="dropdown-arrow">▼</span>
//             </a>
//             {isRetreatsDropdownOpen && (
//               <ul id="retreats-dropdown-menu" className="dropdown-menu">
//                 <li><a href="/retreats/yoga">Yoga Retreats</a></li>
//                 <li><a href="/retreats/meditation">Meditation Retreats</a></li>
//                 <li><a href="/retreats/fitness">Fitness Retreats</a></li>
//               </ul>
//             )}
//           </li>
//         </ul>
//       </div>
//       <div className="navbar-right">
//         <button className="navbar-button">Sign In</button>
//         <button className="navbar-button">Sign Up</button>
//       </div>
//       <button className="navbar-hamburger" onClick={toggleMobileMenu}>
//         ☰
//       </button>
//     </nav>
//   );
// };

// export default Navbar;









import React, { useState } from 'react';
import './navbar.css';
import { Button } from '@chakra-ui/react';
import { SignIn } from '../signin/signin';
import { SignUp } from '../signup/signup';

const Navbar = () => {
  const [isRetreatsDropdownOpen, setRetreatsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleRetreatsDropdown = (event) => {
    event.preventDefault(); // Prevent default link behavior
    setRetreatsDropdownOpen(!isRetreatsDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>

 <Button className="navbar-button1" variant="solid" colorScheme="teal">
 <a href="/signin" className="navbar-button-link">Sign In</a>
</Button>
<Button className="navbar-button2" variant="solid" colorScheme="teal">
 <a href="/signup" className="navbar-button-link">Sign Up</a>
</Button>
</>

  );
};

export default Navbar;
