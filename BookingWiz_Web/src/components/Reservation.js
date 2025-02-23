import React, { useState, useEffect } from 'react';
import './Reservation.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const URL = `${BASE_URL}/reservation/list`;

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [URL]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading users: {error.message}</div>;
    }

    return (
        <div className="reservation-container">
            <h1>reservation</h1>
            <div className="reservation-grid">
                {users.length === 0 ? (
                    <p>No reservation available</p>
                ) : (
                    users.map((user) => (
                        <div key={user.id} className="reservation-card">
                            <div className="reservation-info">
                                <h2>{user.name}</h2>
                                <p>{user.address}</p>
                                <p>{user.location}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Users;
