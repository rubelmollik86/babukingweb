

// components/FormSection.js
const FormSection = () => {
    return (

        <div>
            <h1 className="text-center mt-8 mb-8 text-2xl font-semibold">Register Babu</h1>
            <div>
                <div className="grid grid-cols-8 gap-6 ps-14 pr-14">

                    {/* First Column */}
                    <div className="col-span-8 md:col-span-4 p-5 shadow-xl rounded-md" >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="">
                                <label className="block font-semibold">Babu Name:</label>
                                <input type="text" className="w-full px-4 py-1 border rounded" />
                            </div>

                            <div className="">
                                <label className="block font-semibold">Date Of Birth:</label>
                                <input type="date" className="w-full px-4 py-1 border rounded" />
                            </div>

                            <div className="">
                                <label className="block font-semibold">Gender:</label>
                                <select className="w-full px-4 py-1 border rounded">
                                    {/* Add options for divisions */}
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>

                            <div className="">
                                <label className="block font-semibold">Fathers Name:</label>
                                <input type="text" className="w-full px-4 py-1 border rounded" />
                            </div>

                            <div className="">
                                <label className="block font-semibold">Mothers Name:</label>
                                <input type="text" className="w-full px-4 py-1 border rounded" />
                            </div>

                            <div className="">
                                <label className="block font-semibold">Place Of Birth:</label>
                                <input type="text" className="w-full px-4 py-1 border rounded" />
                            </div>

                            <div className="">
                                <label className="block font-semibold">Birth Reg Number:</label>
                                <input type="number" className="w-full px-4 py-1 border rounded" />
                            </div>

                            <div className="">
                                <label className="block font-semibold">Division:</label>
                                <select className="w-full px-4 py-1 border rounded">
                                    {/* Add options for divisions */}
                                    <option value="division1">Division 1</option>
                                    <option value="division2">Division 2</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>

                            <div className="">
                                <label className="block font-semibold">District:</label>
                                <select className="w-full px-4 py-1 border rounded">
                                    {/* Add options for divisions */}
                                    <option value="division1">District 1</option>
                                    <option value="division2">District 2</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>

                            <div className="">
                                <label className="block font-semibold">Thana:</label>
                                <select className="w-full px-4 py-1 border rounded">
                                    {/* Add options for divisions */}
                                    <option value="division1">Thana 1</option>
                                    <option value="division2">Thana 2</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>

                            <div className="">
                                <label className="block font-semibold">Upload Image:</label>
                                <input type="file" className="w-full px-4 py-1 border rounded" />
                            </div>
                        </div>
                        {/* Add more input fields and dropdowns as needed */}

                        <div className="flex  mt-4">
                            <button className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600">CLEAR</button>
                            <button className="px-4 py-1 ms-3 bg-green-500 text-white rounded hover:bg-green-600">SUBMIT</button>
                        </div>

                    </div>

                    {/* Second Column */}
                    <div className="col-span-8 md:col-span-4 mt-12 ">
                        <div className="flex justify-center items-center  mb-4 shadow-xl rounded-lg">
                            <img
                                src="/sliider-img/slide-2.jpg"
                                alt="Uploaded Image"
                                className="object-cover rounded transform transition-transform hover:scale-110 shadow-md ease-in"
                            />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormSection;
