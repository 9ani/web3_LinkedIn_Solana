import { useState, useEffect } from 'react';
import axios from 'axios';
import { useWallet } from '@solana/wallet-adapter-react';

const FriendRequests = () => {
  const { publicKey } = useWallet();
  const [friendPublicKey, setFriendPublicKey] = useState('');
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    if (publicKey) {
      axios.get(`http://localhost:3000/api/users/${publicKey.toString()}`)
        .then(response => setFriends(response.data.friends))
        .catch(err => console.error(err));
    }
  }, [publicKey]);

  const handleSendRequest = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/friends/request', {
        fromPublicKey: publicKey.toString(),
        toPublicKey: friendPublicKey,
      });
      setFriendPublicKey('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl mb-6">Friend Requests</h1>
      <form onSubmit={handleSendRequest} className="space-y-4">
        <input
          type="text"
          value={friendPublicKey}
          onChange={(e) => setFriendPublicKey(e.target.value)}
          placeholder="Friend's Public Key"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Send Friend Request</button>
      </form>
      <h2 className="text-2xl mt-6">Your Friends</h2>
      <ul>
        {friends.map(friend => (
          <li key={friend.publicKey} className="p-2 border-b border-gray-300">
            {friend.name} ({friend.publicKey})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendRequests;
