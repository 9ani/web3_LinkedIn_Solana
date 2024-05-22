import { useNavigate } from 'react-router-dom';
import { useWallet } from '@solana/wallet-adapter-react';

const Login = () => {
  const navigate = useNavigate();
  const { publicKey } = useWallet();

  const handleLogin = () => {
    if (publicKey) {
      navigate('/');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl mb-6">Login</h1>
      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Login with Wallet
      </button>
    </div>
  );
};

export default Login;
