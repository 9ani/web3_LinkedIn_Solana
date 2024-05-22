import { useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const WalletConnect = () => {
  const { publicKey } = useWallet();

  useEffect(() => {
    if (publicKey) {
      alert(`Wallet connected: ${publicKey.toString()}`);
    }
  }, [publicKey]);

  return (
    <div className="flex justify-end p-4">
      <WalletMultiButton />
    </div>
  );
};

export default WalletConnect;
