'use client'

import { useState } from 'react';
import axios from 'axios';

const JoinForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        contactNo: '',
        userName: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const { firstName, lastName, email, password, confirmPassword, contactNo, userName } = formData;

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const registerResponse = await axios.post('http://localhost:8080/CareerBoost/register', {
                emailId: email,
                password,
                userName,
                contactNo,
                firstName,
                lastName
            });

            if (registerResponse.data) {
                setSuccess('Registration successful. Logging in...');

                try {
                    const loginResponse = await axios.post('http://localhost:8080/CareerBoost/login', {
                        emailId: email,
                        password
                    });

                    if (loginResponse.data) {
                        setSuccess('Registration and login successful');
                        console.log('User logged in:', loginResponse.data);
                    } else {
                        setError('Login failed after registration');
                    }
                } catch (loginError) {
                    setError('Login failed after registration');
                }
            } else {
                setError('Registration failed');
            }
        } catch (registerError) {
            setError('Registration failed');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-6 p-4 border rounded shadow-lg">
                <h2 className="text-2xl mb-2 text-center font-bold">Register</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {success && <p className="text-green-500 mb-4">{success}</p>}

                <div className="mb-2">
                    <label className="block mb-2">Username</label>
                    <input
                        type="text"
                        name="userName"
                        placeholder="Username"
                        value={formData.userName}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div className="mb-2">
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div className="mb-2">
                    <label className="block mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div className="mb-2">
                    <label className="block mb-2">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div className="mb-2">
                    <label className="block mb-2">Contact Number</label>
                    <input
                        type="number"
                        name="contactNo"
                        placeholder="Contact Number"
                        value={formData.contactNo}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div className="mb-2">
                    <label className="block mb-2">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div className="mb-2">
                    <label className="block mb-2">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Join
                </button>
            </form>
        </>
    );
};

export default JoinForm;
