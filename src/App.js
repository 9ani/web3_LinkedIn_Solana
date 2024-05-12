import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import RegistrationPage from './components/RegistrationPage';
import ConnectWalletPage from './components/ConnectWalletPage';


const App = () => {
  const network = WalletAdapterNetwork.Devnet;

  return (
    <div className="App">
      <ConnectionProvider endpoint="https://api.devnet.solana.com">
        <WalletProvider wallets={[]} autoConnect>
          <ConnectWalletPage /> 
          <RegistrationPage />
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
};

export default App;
