// components/DoctorSection.js
import React from 'react';

const DoctorSection = () => {
    const doctors = [
        {
            name: 'Dr. John Doe',
            specialization: 'Cardiologist',
            contact: '+1 123 456 7890',
            email: 'john.doe@example.com',
            visitingDay: 'Monday',
            visitingHour: '9:00 AM - 5:00 PM',
            imageSrc: '/doctor1.jpg',
        },
        // Add more doctors as needed
    ];

    return (
        <div className='p-14'>
            <h1 className="text-center mb-5 text-2xl underline">Doctor Information</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                {doctors.map((doctor, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:scale-105">
                        <img src="/sliider-img/slide-2.jpg" alt={doctor.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                            <p className="mb-2">Specialization: {doctor.specialization}</p>
                            <p className="mb-2">Contact No: {doctor.contact}</p>
                            <p className="mb-2">Email: {doctor.email}</p>
                            <p className="mb-2">Visiting Day: {doctor.visitingDay}</p>
                            <p className="mb-2">Visiting Hour: {doctor.visitingHour}</p>
                        </div>
                    </div>
                ))}
                {doctors.map((doctor, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:scale-105">
                        <img src="/sliider-img/slide-2.jpg" alt={doctor.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                            <p className="mb-2">Specialization: {doctor.specialization}</p>
                            <p className="mb-2">Contact No: {doctor.contact}</p>
                            <p className="mb-2">Email: {doctor.email}</p>
                            <p className="mb-2">Visiting Day: {doctor.visitingDay}</p>
                            <p className="mb-2">Visiting Hour: {doctor.visitingHour}</p>
                        </div>
                    </div>
                ))}
                {doctors.map((doctor, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:scale-105">
                        <img src="/sliider-img/slide-2.jpg" alt={doctor.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                            <p className="mb-2">Specialization: {doctor.specialization}</p>
                            <p className="mb-2">Contact No: {doctor.contact}</p>
                            <p className="mb-2">Email: {doctor.email}</p>
                            <p className="mb-2">Visiting Day: {doctor.visitingDay}</p>
                            <p className="mb-2">Visiting Hour: {doctor.visitingHour}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorSection;
