'use client'

import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('http://localhost:8080/CareerBoost/login', {
                emailId: email,
                password
            });
            setSuccess('Login successful');
            console.log('Login successful:', response.data);
            //  login successful  (e.g., redirect to particular dashboard page)
        } catch (err) {
            setError('Login failed');
            console.error('Login error:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-6 p-4 border rounded shadow-lg">
            <h2 className="text-2xl mb-6 text-center font-bold">Login</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block mb-2">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Login
            </button>
        </form>
    );
};

export default LoginForm;
