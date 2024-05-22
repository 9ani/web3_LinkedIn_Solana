import { useState, useEffect } from "react";
import axios from "axios";
import { useWallet } from "@solana/wallet-adapter-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const FriendRequests = () => {
  const { publicKey } = useWallet();
  const [users, setUsers] = useState([]); // State to store all users
  const navigate = useNavigate(); // Use useNavigate hook

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users");
        setUsers(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  const handleUserClick = (userPublicKey) => {
    navigate(`/user/${userPublicKey}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl mb-6">All Users</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <li
            key={user.publicKey}
            className="user-card cursor-pointer bg-white shadow-md rounded overflow-hidden transition duration-300 hover:shadow-lg"
            onClick={() => handleUserClick(user.publicKey)}>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{user.name}</h3>
              <p className="text-gray-500 truncate overflow-ellipsis overflow-hidden">
                {user.publicKey.slice(0, 4)}...{user.publicKey.slice(-4)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendRequests;
