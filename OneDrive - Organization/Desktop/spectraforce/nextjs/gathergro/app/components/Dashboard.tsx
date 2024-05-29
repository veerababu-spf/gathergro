'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const [username, setUsername] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
            console.log("storedUsername",storedUsername)
        } else {
            router.push('/log-in');
        }
    }, [router]);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
            {username ? (
                <div>
                    <p>Welcome, {username}!</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Dashboard;
