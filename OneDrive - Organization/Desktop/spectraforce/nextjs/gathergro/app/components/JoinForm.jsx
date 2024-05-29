'use client'

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const JoinForm = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        emailId: '',
        password: '',
        userName: '',
        contactNo: '',
        firstName: '',
        lastName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/CareerBoost/register', formData);
            console.log('User registered successfully:', response.data);
            // Redirect to Login page
            router.push('/log-in')
            // setFormData({}) // after submit the form should flush fields
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Join Form</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="emailId" className="block mb-1">Email</label>
                    <input
                        type="email"
                        id="emailId"
                        name="emailId"
                        value={formData.emailId}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-1">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="userName" className="block mb-1">Username</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contactNo" className="block mb-1">Contact Number</label>
                    <input
                        type="tel"
                        id="contactNo"
                        name="contactNo"
                        value={formData.contactNo}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="firstName" className="block mb-1">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block mb-1">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Join</button>
            </form>
        </div>
    );
};

export default JoinForm;
