'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';

const JoinForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            console.log('Stored user data:', JSON.parse(storedUser));
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('localhost:8080/CareerBoost/register', {
                emailId: email,
                password,
                userName,
                contactNo,
                firstName,
                lastName
            });
            localStorage.setItem('user', JSON.stringify(response.data));
            setSuccess('Registration successful');
            console.log('User data saved to localStorage:', response.data);
        } catch (err) {
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
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div className="mb-2">
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div className="mb-2">
                    <label className="block mb-2">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div className="mb-2">
                    <label className="block mb-2">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div className="mb-2">
                    <label className="block mb-2">Contact Number</label>
                    <input
                        type="number"
                        placeholder="Contact Number"
                        value={contactNo}
                        onChange={(e) => setContactNo(e.target.value)}
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
