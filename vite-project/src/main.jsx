import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import App from './App';
import './index.css'; // Tailwind CSS
import '@solana/wallet-adapter-react-ui/styles.css';

const network = "https://api.mainnet-beta.solana.com"; // or any other Solana network you want to connect to

const wallets = [
  new PhantomWalletAdapter(),
];


ReactDOM.createRoot(document.getElementById('root')).render(
 <ConnectionProvider endpoint={network}>
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <Router>
          <App />
        </Router>
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>,
)
