import { useEffect, useState } from 'react';
import axios from 'axios';
import { useWallet } from '@solana/wallet-adapter-react';

const Home = () => {
  const { publicKey } = useWallet();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (publicKey) {
      axios.get(`http://localhost:3000/api/users/${publicKey.toString()}`)
        .then(response => setProfile(response.data))
        .catch(err => console.error(err));
    }
  }, [publicKey]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl mb-6">Welcome, {profile.name}</h1>
      <p>{profile.bio}</p>
      <img src={profile.profilePicture} alt="Profile" className="w-32 h-32 rounded-full mt-4" />
    </div>
  );
};

export default Home;
