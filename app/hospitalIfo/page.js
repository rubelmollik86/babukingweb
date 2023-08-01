// components/HospitalSection.js
import React from 'react';

const HospitalSection = () => {
    const hospitals = [
        {
            name: 'City General Hospital',
            address: '123, Main Street, City',
            contact: '+1 234 567 8901',
            email: 'info@cityhospital.com',
            website: 'www.cityhospital.com',
            imageSrc: '/hospital1.jpg',
        },
        {
            name: 'Dhaka General Hospital',
            address: '123, Main Street, City',
            contact: '+1 234 567 8901',
            email: 'info@cityhospital.com',
            website: 'www.cityhospital.com',
            imageSrc: '/hospital1.jpg',
        },
        {
            name: 'Bangladesh General Hospital',
            address: '123, Main Street, City',
            contact: '+1 234 567 8901',
            email: 'info@cityhospital.com',
            website: 'www.cityhospital.com',
            imageSrc: '/hospital1.jpg',
        },

        // Add more hospitals as needed
    ];

    return (
        <div>
            <h1 className="text-center mb-5 text-2xl underline">Hospital Information</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                {hospitals.map((hospital, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:scale-105">
                        <img src="/sliider-img/slide-3.jpg" alt={hospital.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{hospital.name}</h3>
                            <p className="mb-2">Address: {hospital.address}</p>
                            <p className="mb-2">Contact No: {hospital.contact}</p>
                            <p className="mb-2">Email: {hospital.email}</p>
                            <p className="mb-2">Website: {hospital.website}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HospitalSection;
