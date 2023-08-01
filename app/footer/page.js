// components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* First Column */}
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-xl font-semibold mb-4">Column 1</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-green-500">Link 1</li>
                        <li className="hover:text-green-500">Link 2</li>
                        <li className="hover:text-green-500">Link 3</li>
                        {/* Add more links as needed */}
                    </ul>
                </div>

                {/* Second Column */}
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-xl font-semibold mb-4">Column 2</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-green-500">Link 4</li>
                        <li className="hover:text-green-500">Link 5</li>
                        <li className="hover:text-green-500">Link 6</li>
                        {/* Add more links as needed */}
                    </ul>
                </div>

                {/* Third Column */}
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-xl font-semibold mb-4">Column 3</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-green-500">Link 7</li>
                        <li className="hover:text-green-500">Link 8</li>
                        <li className="hover:text-green-500">Link 9</li>
                        {/* Add more links as needed */}
                    </ul>
                </div>

                {/* Fourth Column */}
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-xl font-semibold mb-4">Column 4</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-green-500">Link 10</li>
                        <li className="hover:text-green-500">Link 11</li>
                        <li className="hover:text-green-500">Link 12</li>
                        {/* Add more links as needed */}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
