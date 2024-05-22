import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserProfile = () => {
  const { publicKey } = useParams(); // Extract public key from URL params
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/users/${publicKey}`
        );
        setUser(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, [publicKey]);

  if (!user) {
    return <div>Loading user profile...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="flex items-center mb-6">
        <img
          src={user.profilePicture}
          alt={`${user.name}'s profile picture`}
          className="rounded-full w-20 h-20 border border-gray-200 shadow-md object-cover transition duration-300 hover:scale-105"
        />
        <h1 className="text-3xl ml-4">{user.name}</h1>
      </div>
      <p className="text-gray-500">{user.bio}</p>
    </div>
  );
};

export default UserProfile;
