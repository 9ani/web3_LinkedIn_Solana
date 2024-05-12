import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const ConnectWalletPage = () => {
  const { wallet } = useWallet();

  return (
    <div className="AppHeader bg-light d-flex align-items-center justify-content-between p-3">
      <h1 className="text-dark m-0">Connect Wallet</h1>
      <div>
        <WalletModalProvider>
          <WalletMultiButton className="btn btn-light" />
        </WalletModalProvider>
      </div>
      {wallet && (
        <div className="alert alert-success m-0" role="alert">
          Connected to wallet {wallet.publicKey?.toBase58()}
        </div>
      )}
    </div>
  );
};

export default ConnectWalletPage;
