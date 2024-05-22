import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ publicKey }) => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (publicKey) {
            axios.get(`http://localhost:3000/api/users/${publicKey}`)
                .then(response => setProfile(response.data))
                .catch(err => console.error(err));
        }
    }, [publicKey]);

    if (!profile) return <div>Loading...</div>;

    return (
        <div>
            <h1>{profile.name}</h1>
            <p>{profile.bio}</p>
            <img src={profile.profilePicture} alt="Profile" />
        </div>
    );
};

export default Profile;
