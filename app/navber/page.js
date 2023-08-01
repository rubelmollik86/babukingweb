// components/Navbar.js
import styles from '../../styles/navbar.module.css';

const Navbar = () => {
    return (
        <nav className={`${styles.navbar} flex items-center justify-around`}>
            {/* First Column - Logo */}
            <div className={`${styles.logo} flex justify-center items-center `}>
                Logo
            </div>

            {/* Second Column - Search Bar */}
            <div className={`${styles.search} flex justify-center items-center`}>
                <form className="relative">
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search..."
                    />
                    <button
                        type="submit"
                        className="absolute top-0 right-0 mt-2 mr-3"
                    >
                        <svg className="w-6 h-6 text-gray-400 hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M21.707 20.293l-3.899-3.898C18.118 15.661 19 13.926 19 12c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8c1.926 0 3.661-.882 4.895-2.292l3.898 3.899a1 1 0 001.414-1.414zM4 12c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6z" />
                        </svg>
                    </button>
                </form>
            </div>

            {/* Third Column - Sign In / Sign Up Buttons */}
            <div className={`${styles.auth} flex justify-center items-center space-x-4`}>
                <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded">Sign In</button>
                <button className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded">Sign Up</button>
            </div>
        </nav>
    );
};

export default Navbar;
