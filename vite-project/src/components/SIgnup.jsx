import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '@solana/wallet-adapter-react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const navigate = useNavigate();
  const { publicKey } = useWallet();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/users/signup', {
        publicKey: publicKey.toString(),
        name,
        bio,
        profilePicture,
      });
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl mb-6">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
          placeholder="Profile Picture URL"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
